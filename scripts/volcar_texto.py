"""Vuelca el texto de cada programa publicado a fuentes/texto/<id>.txt, con marcas de página.

Uso:  py -3 -E scripts/volcar_texto.py [id ...]     (sin ids: todos los publicados)

Las marcas «===== PÁGINA PDF N =====» numeran las páginas como el visor de PDF
(1 = primera página del archivo), que es el número que se cita y se enlaza (#page=N).
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from verificar import DATOS, FUENTES, TEXTO, paginas  # noqa: E402


def main() -> int:
    partidos = json.loads((DATOS / "partidos.json").read_text(encoding="utf-8"))
    pedidos = set(sys.argv[1:])
    for p in partidos:
        if (p.get("programa") or {}).get("estado") != "publicado":
            continue
        if pedidos and p["id"] not in pedidos:
            continue
        texto = paginas(p["id"], FUENTES / f"{p['id']}.pdf")
        salida = TEXTO / f"{p['id']}.txt"
        with salida.open("w", encoding="utf-8") as f:
            for n, t in enumerate(texto, start=1):
                f.write(f"\n===== PÁGINA PDF {n} =====\n")
                f.write(t.strip() if t.strip() else "[página sin texto extraíble]")
                f.write("\n")
        vacias = [n for n, t in enumerate(texto, start=1) if not t.strip()]
        print(f"{p['id']}: {len(texto)} páginas -> {salida.name}; sin texto: {vacias}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
