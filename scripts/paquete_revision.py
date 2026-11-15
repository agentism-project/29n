"""Prepara el paquete de la revisión ciega de neutralidad.

Uso:  py -3 -E scripts/paquete_revision.py

Escribe revision/paquete.json (fichas con el partido sustituido por un código al azar
y los nombres de partido tapados) y revision/clave.json (código -> partido), que el
revisor no debe ver.
"""

import json
import random
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DATOS = RAIZ / "datos"
SALIDA = RAIZ / "revision"


def main() -> None:
    partidos = json.loads((DATOS / "partidos.json").read_text(encoding="utf-8"))
    nombres = []
    for p in partidos:
        nombres += [p["nombre"], p.get("nombre_completo", "")]
    nombres = sorted({n for n in nombres if n}, key=len, reverse=True)
    # Solo palabras enteras: sin \b, «ERC» tapaba «supermercados» y «terceros».
    tapar = re.compile(r"\b(?:" + "|".join(re.escape(n) for n in nombres) + r")\b", re.IGNORECASE)

    archivos = sorted((DATOS / "fichas").glob("*.json"))
    ids = [a.stem for a in archivos]
    codigos = [f"P{n:02d}" for n in random.sample(range(1, 100), len(ids))]
    clave = dict(zip(codigos, ids))
    codigo_de = {v: k for k, v in clave.items()}

    paquete = []
    for a in archivos:
        for f in json.loads(a.read_text(encoding="utf-8")):
            g = {k: v for k, v in f.items() if k not in ("partido", "seleccion")}
            g["codigo"] = codigo_de[f["partido"]]
            texto = json.dumps(g, ensure_ascii=False)
            paquete.append(json.loads(tapar.sub("[PARTIDO]", texto)))
    random.shuffle(paquete)

    SALIDA.mkdir(exist_ok=True)
    (SALIDA / "paquete.json").write_text(json.dumps(paquete, ensure_ascii=False, indent=1), encoding="utf-8")
    (SALIDA / "clave.json").write_text(json.dumps(clave, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(paquete)} fichas de {len(ids)} partidos -> revision/paquete.json")


if __name__ == "__main__":
    main()
