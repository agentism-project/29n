"""Verifica el comparador contra los PDF oficiales.

Uso:  py -3 -E scripts/verificar.py            (desde la carpeta del proyecto)

Comprueba, para cada partido con programa publicado:
  1. que fuentes/<id>.pdf existe y su SHA-256 coincide con el de datos/partidos.json;
  2. que cada cita de datos/fichas.json aparece literalmente en la página indicada
     (normalizando espacios, guiones de fin de línea, comillas y ligaduras);
  3. que cada ficha "sin_propuesta" lista los términos buscados y cuántas veces
     aparecen en el programa entero, para revisarlas a mano;
  4. que hay exactamente una ficha por partido y tema, y los límites de longitud.

Las fichas están en datos/fichas/<id>.json (una lista por partido).
Con --partido <id> se comprueba solo ese partido.

Sale con código 1 si algo falla. El veredicto es la última línea:
  Resultado: N fichas, M citas, F fallos, R avisos
"""

import hashlib
import json
import re
import sys
import unicodedata
from pathlib import Path

from pypdf import PdfReader

RAIZ = Path(__file__).resolve().parent.parent
DATOS = RAIZ / "datos"
FUENTES = RAIZ / "fuentes"
TEXTO = FUENTES / "texto"

# El titular es lo que se ve en la vista Tema: con 12+ partidos en una pantalla
# de móvil solo caben ~32 caracteres por renglón (propuestas de diseño, 15-11).
MAX_TITULAR_CARACTERES = 32
MAX_RESUMEN = 30
ESTADOS = {"propuesta", "sin_propuesta", "pendiente"}
COMILLAS = {"“": '"', "”": '"', "«": '"', "»": '"',
            "‘": "'", "’": "'", "–": "-", "—": "-"}


def normalizar(texto: str) -> str:
    t = unicodedata.normalize("NFKC", texto).replace("­", "")
    t = re.sub(r"(\w)-\s*\n\s*(\w)", r"\1\2", t)
    for a, b in COMILLAS.items():
        t = t.replace(a, b)
    return re.sub(r"\s+", " ", t).strip().casefold()


def sha256(ruta: Path) -> str:
    h = hashlib.sha256()
    with ruta.open("rb") as f:
        for bloque in iter(lambda: f.read(1 << 20), b""):
            h.update(bloque)
    return h.hexdigest()


def paginas(id_partido: str, pdf: Path) -> list[str]:
    cache = TEXTO / f"{id_partido}.json"
    huella = sha256(pdf)
    if cache.exists():
        datos = json.loads(cache.read_text(encoding="utf-8"))
        if datos.get("sha256") == huella:
            return datos["paginas"]
    texto = [p.extract_text() or "" for p in PdfReader(str(pdf)).pages]
    TEXTO.mkdir(parents=True, exist_ok=True)
    cache.write_text(json.dumps({"sha256": huella, "paginas": texto}, ensure_ascii=False),
                     encoding="utf-8")
    return texto


def palabras(texto: str) -> int:
    return len(texto.split())


def main() -> int:
    solo = None
    if "--partido" in sys.argv:
        solo = sys.argv[sys.argv.index("--partido") + 1]
    partidos = json.loads((DATOS / "partidos.json").read_text(encoding="utf-8"))
    temas = json.loads((DATOS / "temas.json").read_text(encoding="utf-8"))
    fichas = []
    for archivo in sorted((DATOS / "fichas").glob("*.json")):
        if solo and archivo.stem != solo:
            continue
        fichas.extend(json.loads(archivo.read_text(encoding="utf-8")))

    fallos, avisos = [], []
    texto_por_partido: dict[str, list[str]] = {}

    for p in partidos:
        prog = p.get("programa") or {}
        if prog.get("estado") != "publicado" or (solo and p["id"] != solo):
            continue
        pdf = FUENTES / f"{p['id']}.pdf"
        if not pdf.exists():
            fallos.append(f"{p['id']}: falta {pdf.name}")
            continue
        huella = sha256(pdf)
        if huella != prog.get("sha256"):
            fallos.append(f"{p['id']}: SHA-256 {huella[:12]} no coincide con {str(prog.get('sha256'))[:12]}")
        texto_por_partido[p["id"]] = paginas(p["id"], pdf)

    ids_partido = {p["id"] for p in partidos}
    ids_tema = {t["id"] for t in temas}
    vistos: dict[tuple[str, str], int] = {}
    n_citas = 0

    for i, f in enumerate(fichas):
        clave = (f.get("partido"), f.get("tema"))
        etiqueta = f"{clave[0]}/{clave[1]}"
        vistos[clave] = vistos.get(clave, 0) + 1
        if clave[0] not in ids_partido or clave[1] not in ids_tema:
            fallos.append(f"ficha {i}: partido o tema desconocido ({etiqueta})")
            continue
        estado = f.get("estado")
        if estado not in ESTADOS:
            fallos.append(f"{etiqueta}: estado '{estado}' no válido")
            continue
        if estado == "pendiente":
            continue
        paginas_txt = texto_por_partido.get(clave[0])
        if paginas_txt is None:
            fallos.append(f"{etiqueta}: ficha con contenido pero el programa no está publicado o falta el PDF")
            continue

        if estado == "propuesta":
            titular = f.get("titular", "")
            if not titular or len(titular) > MAX_TITULAR_CARACTERES:
                fallos.append(f"{etiqueta}: titular de {len(titular)} caracteres (1 a {MAX_TITULAR_CARACTERES})")
            if palabras(f.get("resumen", "")) > MAX_RESUMEN:
                fallos.append(f"{etiqueta}: resumen de {palabras(f['resumen'])} palabras (máx. {MAX_RESUMEN})")
            citas = f.get("citas") or []
            if not citas:
                fallos.append(f"{etiqueta}: propuesta sin cita")
            for c in citas:
                n_citas += 1
                ini = c.get("pagina_pdf")
                fin = c.get("pagina_pdf_fin", ini)
                if not isinstance(ini, int) or not 1 <= ini <= fin <= len(paginas_txt):
                    fallos.append(f"{etiqueta}: página {ini}-{fin} fuera del PDF ({len(paginas_txt)} págs.)")
                    continue
                pagina = normalizar(" ".join(paginas_txt[ini - 1:fin]))
                pos = 0
                for trozo in re.split(r"\s*[\[(]…[\])]\s*|\s*[\[(]\.\.\.[\])]\s*", c.get("texto", "")):
                    trozo_n = normalizar(trozo)
                    if not trozo_n:
                        continue
                    hallado = pagina.find(trozo_n, pos)
                    if hallado < 0:
                        fallos.append(f"{etiqueta}: cita no encontrada en pág. PDF {ini}: «{trozo[:70]}…»")
                        break
                    pos = hallado + len(trozo_n)

        if estado == "sin_propuesta":
            terminos = f.get("terminos_buscados") or []
            if not terminos:
                fallos.append(f"{etiqueta}: 'sin_propuesta' sin términos buscados")
            completo = normalizar(" ".join(paginas_txt))
            apariciones = {t: completo.count(normalizar(t)) for t in terminos}
            if any(apariciones.values()) and not f.get("apariciones_revisadas"):
                avisos.append(f"{etiqueta}: términos presentes sin revisar {apariciones}")

    # Completitud: cada programa publicado debe tener exactamente una ficha por tema.
    for p in texto_por_partido:
        for t in ids_tema:
            n = vistos.get((p, t), 0)
            if n != 1:
                fallos.append(f"{p}/{t}: {n} fichas (debe haber 1)")

    # Equilibrio: longitud media del resumen por partido, para detectar asimetrías.
    medias = {}
    for p in sorted(ids_partido):
        rs = [palabras(f.get("resumen", "")) for f in fichas
              if f.get("partido") == p and f.get("estado") == "propuesta"]
        if rs:
            medias[p] = round(sum(rs) / len(rs), 1)
    if medias:
        print("Media de palabras por resumen:", medias)

    for linea in fallos:
        print("FALLO:", linea)
    for linea in avisos:
        print("AVISO:", linea)
    print(f"Resultado: {len(fichas)} fichas, {n_citas} citas, {len(fallos)} fallos, {len(avisos)} avisos")
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
