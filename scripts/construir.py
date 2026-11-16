"""Construye web/datos.js a partir de los datos del comparador.

Uso (desde la carpeta del proyecto):
    py -3 scripts/construir.py                     fecha de actualización = hoy
    py -3 scripts/construir.py --fecha 2026-11-19  fecha de actualización fijada
    py -3 scripts/construir.py --estricto          falla si falta alguna ficha

Lee datos/partidos.json, datos/temas.json, datos/criterios.json y todos los
datos/fichas/*.json que existan en ese momento, y escribe web/datos.js
(window.DATOS = {...}), para que la web funcione sin servidor.

- Para cada candidatura sin programa (programa.estado == "pendiente") genera sus
  fichas (una por tema) en estado "pendiente".
- Para cada candidatura cuyo programa ya está publicado pero aún no tiene fichas
  revisadas (programa.estado == "en_preparacion") copia los datos del programa y
  genera sus fichas (una por tema) en estado "en_preparacion", aunque haya fichas en archivo.
- No inventa nada: solo copia a datos.js los campos que la web muestra, y si una
  ficha falta, la web no la muestra (el script lo avisa; con --estricto, falla).
- Las citas se copian del texto del PDF y pueden traer saltos de línea y guiones
  de fin de renglón. Solo para mostrarlas: si tras el guion sigue una minúscula, la
  palabra se une («na-\\ncional», «na -\\ncional» -> «nacional»); si no, el guion se
  conserva («Vitoria-\\nGasteiz» -> «Vitoria-Gasteiz»). Luego se juntan los espacios.
  datos/fichas no se toca.

Sale con código 1, sin escribir nada, si encuentra un error.
"""

import argparse
import datetime
import json
import re
import sys
from pathlib import Path

# Dirección pública del sitio: una sola constante.
BASE_URL = "https://agentism-project.github.io/29n/"
# Dónde se piden las correcciones (las «issues» del repositorio).
URL_CORRECCIONES = "https://github.com/agentism-project/29n/issues"

GRIS_NEUTRO = "#8a8a8a"
MAX_TITULAR = 32
MAX_CITAS = 3

RAIZ = Path(__file__).resolve().parent.parent
DATOS = RAIZ / "datos"
SALIDA = RAIZ / "web" / "datos.js"

ESTADOS_PROGRAMA_SIN_TEXTO = {"pendiente"}
# Programa publicado y fijado por su huella, con las fichas aún en preparación.
ESTADOS_PROGRAMA_SIN_FICHAS = {"pendiente", "en_preparacion"}
ESTADOS_FICHA = {"propuesta", "sin_propuesta"}
RE_COLOR = re.compile(r"^#[0-9a-fA-F]{6}$")
RE_FECHA = re.compile(r"^\d{4}-\d{2}-\d{2}$")
RE_GUION_FIN_RENGLON = re.compile(r"(\w)( ?)-\s*\n\s*(\w)")
RE_ESPACIOS = re.compile(r"\s+")


def leer_json(ruta):
    with open(ruta, encoding="utf-8") as f:
        return json.load(f)


def _unir_guion(m):
    antes, espacio, despues = m.group(1), m.group(2), m.group(3)
    if despues.islower():
        return antes + despues  # palabra partida: «na -\ncional» -> «nacional»
    if not espacio:
        return antes + "-" + despues  # guion de verdad: «Vitoria-\nGasteiz» -> «Vitoria-Gasteiz»
    return m.group(0)  # « -\n» y mayúscula: guion de separación; se deja (luego se juntan los espacios)


def texto_para_mostrar(texto):
    """Une las palabras partidas a final de renglón y junta los espacios."""
    unido = RE_GUION_FIN_RENGLON.sub(_unir_guion, texto)
    return RE_ESPACIOS.sub(" ", unido).strip()


def es_url(valor):
    return isinstance(valor, str) and valor.startswith(("https://", "http://"))


def es_texto(valor):
    return isinstance(valor, str) and valor.strip() != ""


def fecha_valida(valor):
    if not isinstance(valor, str) or not RE_FECHA.match(valor):
        return False
    try:
        datetime.date.fromisoformat(valor)
    except ValueError:
        return False
    return True


def direccion_de(base_url):
    return re.sub(r"^https?://", "", base_url).rstrip("/")


def construir_partido(p, errores, avisos):
    pid = p.get("id")
    salida = {"id": pid, "nombre": p.get("nombre"), "ambito": p.get("ambito")}
    if not es_texto(pid) or not es_texto(p.get("nombre")):
        errores.append(f"partidos.json: entrada sin id o sin nombre: {p!r}")
        return None
    if p.get("ambito") not in ("estatal", "territorial"):
        errores.append(f"{pid}: ambito debe ser «estatal» o «territorial»")
    if es_texto(p.get("nombre_completo")):
        salida["nombre_completo"] = p["nombre_completo"]
    if p.get("ambito") == "territorial":
        comunidades = p.get("comunidades")
        if isinstance(comunidades, list) and comunidades and all(es_texto(c) for c in comunidades):
            salida["comunidades"] = comunidades
        else:
            avisos.append(f"{pid}: candidatura territorial sin «comunidades»")

    color = p.get("color")
    if isinstance(color, str) and RE_COLOR.match(color):
        salida["color"] = color.lower()
    else:
        if color is not None:
            avisos.append(f"{pid}: color {color!r} no es #rrggbb; se usa el gris neutro")
        salida["color"] = GRIS_NEUTRO
    if p.get("web") is not None:
        if es_url(p["web"]):
            salida["web"] = p["web"]
        else:
            errores.append(f"{pid}: «web» no es una URL")

    prog = p.get("programa") or {}
    estado = prog.get("estado")
    if not es_texto(estado):
        errores.append(f"{pid}: programa sin «estado»")
        return None
    sp = {"estado": estado}
    if estado not in ESTADOS_PROGRAMA_SIN_TEXTO:
        for clave in ("titulo", "url", "fecha_pdf", "paginas", "sha256"):
            if clave not in prog:
                errores.append(f"{pid}: programa {estado} sin «{clave}»")
        if not es_url(prog.get("url")):
            errores.append(f"{pid}: programa.url no es una URL")
        if not isinstance(prog.get("paginas"), int) or prog.get("paginas", 0) < 1:
            errores.append(f"{pid}: programa.paginas debe ser un entero positivo")
        if "fecha_pdf" in prog and not fecha_valida(prog["fecha_pdf"]):
            errores.append(f"{pid}: programa.fecha_pdf no es AAAA-MM-DD")
        if "sha256" in prog and not re.match(r"^[0-9a-f]{64}$", str(prog["sha256"])):
            errores.append(f"{pid}: programa.sha256 no son 64 caracteres hexadecimales")
        for clave in ("titulo", "url", "fecha_pdf", "paginas", "idioma", "sha256", "descargado"):
            if clave in prog:
                sp[clave] = prog[clave]
    if prog.get("url_archivo") is not None:
        if es_url(prog["url_archivo"]):
            sp["url_archivo"] = prog["url_archivo"]
        else:
            errores.append(f"{pid}: programa.url_archivo no es una URL")
    salida["programa"] = sp

    p23 = p.get("programa_2023")
    if p23 is not None:
        if isinstance(p23, dict) and es_url(p23.get("url")):
            salida["programa_2023"] = {"url": p23["url"]}
        else:
            errores.append(f"{pid}: programa_2023.url no es una URL")
    return salida


def construir_ficha(f, partido, origen, errores, avisos):
    """Devuelve la ficha con solo los campos que muestra la web, o None si no vale."""
    clave = f"{f.get('partido')}/{f.get('tema')}"
    estado = f.get("estado")
    if estado not in ESTADOS_FICHA:
        errores.append(f"{origen} {clave}: estado {estado!r} no es «propuesta» ni «sin_propuesta»")
        return None
    salida = {"estado": estado}
    paginas = partido["programa"].get("paginas")

    if estado == "propuesta":
        for campo in ("titular", "resumen"):
            if not es_texto(f.get(campo)):
                errores.append(f"{origen} {clave}: falta «{campo}»")
                return None
        if len(f["titular"]) > MAX_TITULAR:
            avisos.append(f"{origen} {clave}: titular de {len(f['titular'])} caracteres (máximo {MAX_TITULAR})")
        citas = f.get("citas")
        if not isinstance(citas, list) or not citas:
            errores.append(f"{origen} {clave}: sin citas")
            return None
        if len(citas) > MAX_CITAS:
            avisos.append(f"{origen} {clave}: {len(citas)} citas (máximo {MAX_CITAS})")
        salida["titular"] = f["titular"].strip()
        salida["resumen"] = texto_para_mostrar(f["resumen"])
        salida["citas"] = []
        for i, c in enumerate(citas, 1):
            if not isinstance(c, dict) or not es_texto(c.get("texto")):
                errores.append(f"{origen} {clave}: la cita {i} no tiene texto")
                return None
            pag = c.get("pagina_pdf")
            if not isinstance(pag, int) or isinstance(pag, bool) or not (1 <= pag <= (paginas or 0)):
                errores.append(f"{origen} {clave}: la cita {i} tiene pagina_pdf {pag!r} fuera de 1..{paginas}")
                return None
            sc = {"texto": texto_para_mostrar(c["texto"]), "pagina_pdf": pag}
            fin = c.get("pagina_pdf_fin")
            if fin is not None:
                if not isinstance(fin, int) or isinstance(fin, bool) or not (pag <= fin <= paginas):
                    errores.append(f"{origen} {clave}: la cita {i} tiene pagina_pdf_fin {fin!r} no válida")
                    return None
                if fin > pag:
                    sc["pagina_pdf_fin"] = fin
            if c.get("traduccion") is not None:
                if not es_texto(c["traduccion"]):
                    errores.append(f"{origen} {clave}: la cita {i} tiene una traducción vacía")
                    return None
                sc["traduccion"] = texto_para_mostrar(c["traduccion"])
            salida["citas"].append(sc)
    else:
        terminos = f.get("terminos_buscados")
        if not isinstance(terminos, list) or not terminos or not all(es_texto(t) for t in terminos):
            errores.append(f"{origen} {clave}: «sin_propuesta» sin terminos_buscados")
            return None
        salida["terminos_buscados"] = [t.strip() for t in terminos]
    return salida


def main():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--fecha", help="fecha de actualización AAAA-MM-DD (por defecto, hoy)")
    ap.add_argument("--estricto", action="store_true", help="falla si falta alguna ficha")
    args = ap.parse_args()

    fecha = args.fecha or datetime.date.today().isoformat()
    if not fecha_valida(fecha):
        print(f"ERROR: --fecha {fecha!r} no es AAAA-MM-DD")
        return 1

    errores, avisos = [], []
    partidos_crudos = leer_json(DATOS / "partidos.json")
    temas_crudos = leer_json(DATOS / "temas.json")
    criterios = leer_json(DATOS / "criterios.json")

    # Temas
    temas = []
    for t in temas_crudos:
        if not all(es_texto(t.get(c)) for c in ("id", "nombre", "pregunta")):
            errores.append(f"temas.json: tema incompleto: {t!r}")
            continue
        temas.append({c: t[c] for c in ("id", "nombre", "pregunta", "incluye", "origen") if es_texto(t.get(c))})
    ids_temas = [t["id"] for t in temas]
    if len(set(ids_temas)) != len(ids_temas):
        errores.append("temas.json: hay ids repetidos")

    # Partidos: primero estatales y luego territoriales, cada grupo en el orden del archivo.
    partidos = []
    for p in partidos_crudos:
        sp = construir_partido(p, errores, avisos)
        if sp:
            partidos.append(sp)
    partidos.sort(key=lambda sp: 0 if sp["ambito"] == "estatal" else 1)  # sort estable
    por_id = {sp["id"]: sp for sp in partidos}
    if len(por_id) != len(partidos):
        errores.append("partidos.json: hay ids repetidos")

    # Fichas de los archivos que existan ahora
    de_archivo = {}
    archivos = sorted((DATOS / "fichas").glob("*.json"))
    for ruta in archivos:
        try:
            contenido = leer_json(ruta)
        except (OSError, ValueError) as e:
            errores.append(f"fichas/{ruta.name}: no se puede leer ({e})")
            continue
        lista = contenido if isinstance(contenido, list) else [contenido]
        for f in lista:
            if not isinstance(f, dict):
                errores.append(f"fichas/{ruta.name}: una entrada no es un objeto")
                continue
            pid, tid = f.get("partido"), f.get("tema")
            if pid not in por_id:
                errores.append(f"fichas/{ruta.name}: partido desconocido {pid!r}")
                continue
            if tid not in ids_temas:
                errores.append(f"fichas/{ruta.name}: tema desconocido {tid!r}")
                continue
            if (pid, tid) in de_archivo:
                errores.append(f"fichas/{ruta.name}: ficha repetida {pid}/{tid}")
                continue
            de_archivo[(pid, tid)] = (f, ruta.name)

    fichas, faltan = {}, []
    cuenta = {"propuesta": 0, "sin_propuesta": 0, "pendiente": 0, "en_preparacion": 0}
    for sp in partidos:
        estado_prog = sp["programa"]["estado"]
        for tid in ids_temas:
            clave = f"{sp['id']}/{tid}"
            if estado_prog in ESTADOS_PROGRAMA_SIN_FICHAS:
                if estado_prog == "pendiente" and (sp["id"], tid) in de_archivo:
                    avisos.append(f"{clave}: hay ficha en archivo pero el programa está «pendiente»; se ignora")
                fichas[clave] = {"estado": estado_prog}
                cuenta[estado_prog] += 1
                continue
            if (sp["id"], tid) not in de_archivo:
                faltan.append(clave)
                continue
            f, origen = de_archivo[(sp["id"], tid)]
            sf = construir_ficha(f, sp, f"fichas/{origen}", errores, avisos)
            if sf:
                fichas[clave] = sf
                cuenta[sf["estado"]] += 1

    cp = criterios.get("partidos", {})
    datos = {
        "config": {
            "base_url": BASE_URL,
            "direccion": direccion_de(BASE_URL),
            "url_correcciones": URL_CORRECCIONES,
            "actualizado": fecha,
        },
        "criterios": {
            "partidos_regla": cp.get("regla"),
            "partidos_orden": cp.get("orden"),
            "partidos_fuente": cp.get("fuente"),
            "temas_regla": criterios.get("temas", {}).get("regla"),
            "fuente_unica": criterios.get("fuente_unica"),
            # El texto público, no la regla interna (que lleva fechas y notas de trabajo).
            "sin_programa_regla": criterios.get("sin_programa", {}).get("texto_publico")
            or criterios.get("sin_programa", {}).get("regla"),
        },
        "temas": temas,
        "partidos": partidos,
        "fichas": fichas,
    }

    for a in avisos:
        print(f"AVISO: {a}")
    if faltan:
        print(f"AVISO: faltan {len(faltan)} fichas de programas publicados (la web no las muestra):")
        por_partido = {}
        for clave in faltan:
            pid, tid = clave.split("/")
            por_partido.setdefault(pid, []).append(tid)
        for pid, ts in por_partido.items():
            detalle = f"los {len(ids_temas)} temas" if len(ts) == len(ids_temas) else ", ".join(ts)
            print(f"  - {pid}: {detalle}")
        if args.estricto:
            errores.append(f"--estricto: faltan {len(faltan)} fichas")
    for e in errores:
        print(f"ERROR: {e}")
    if errores:
        print(f"Resultado: {len(errores)} errores; no se ha escrito {SALIDA.relative_to(RAIZ).as_posix()}")
        return 1

    cuerpo = json.dumps(datos, ensure_ascii=False, indent=1)
    SALIDA.parent.mkdir(parents=True, exist_ok=True)
    with open(SALIDA, "w", encoding="utf-8", newline="\n") as f:
        f.write("// Generado por scripts/construir.py: no editar a mano.\n")
        f.write(f"window.DATOS = {cuerpo};\n")
    print(
        f"Resultado: {len(partidos)} partidos, {len(temas)} temas, {len(fichas)} fichas "
        f"({cuenta['propuesta']} propuesta, {cuenta['sin_propuesta']} sin_propuesta, "
        f"{cuenta['pendiente']} pendiente, {cuenta['en_preparacion']} en_preparacion), {len(faltan)} faltan, {len(avisos)} avisos, "
        f"{len(archivos)} archivos de fichas leídos; actualizado el {fecha} -> "
        f"{SALIDA.relative_to(RAIZ).as_posix()}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
