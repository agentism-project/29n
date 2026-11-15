# Reglas para redactar las fichas

Una ficha = lo que dice **un** programa sobre **un** tema. Se lee en un móvil, la lee gente que nunca ha abierto un programa electoral, y cualquier persona tiene que poder comprobarla en el PDF oficial en un minuto. Un solo error de atribución invalida todo el proyecto: ante la duda, menos y literal.

## Fuente

- Solo el texto del programa: `fuentes/texto/<id>.txt`. Las marcas `===== PÁGINA PDF N =====` numeran las páginas como el visor de PDF; ese N es el que se cita.
- Nada de prensa, declaraciones, otros documentos del partido, conocimiento previo ni suposiciones. Si no está en el texto, no está.
- Léelo **entero** antes de escribir (por tramos de 150 líneas). Un tema puede aparecer fuera de su capítulo (por ejemplo, vivienda en el capítulo de jóvenes).

## Temas

Los diez temas, su pregunta y lo que incluye cada uno están en `datos/temas.json`. Una medida va al tema cuyo «incluye» la describe; si encaja en dos, al que el propio programa la asigna por capítulo. Las exclusiones explícitas de un «incluye» («No: impuestos») mandan sobre el capítulo: un impuesto va a Impuestos aunque el programa lo trate en su capítulo de energía.

## Qué propuestas elegir (el punto con más riesgo de sesgo)

Por tema, de 1 a 3 propuestas (como mucho 3 medidas; nunca juntes dos medidas distintas en una cita con `[…]`), elegidas por **el énfasis del propio programa**, en este orden:
1. Las que el programa destaca: resumen, decálogo, «medidas principales», la introducción del capítulo o apartado donde está el tema y las primeras medidas numeradas de ese apartado.
2. Las concretas y comprobables (una cifra, una ley, un plazo) antes que las declaraciones generales.
3. Las que responden directamente a la pregunta del tema.

No elijas por lo que te parezca más polémico, más llamativo o más importante. Elige igual para todos los partidos.

## Campos

```json
{
  "partido": "pnv",
  "tema": "vivienda",
  "estado": "propuesta",
  "titular": "Construir más vivienda en alquiler",
  "resumen": "Propone ... y ...",
  "citas": [
    {"texto": "copia literal", "pagina_pdf": 7},
    {"texto": "otra copia literal", "pagina_pdf": 8, "traduccion": "solo si el original no está en castellano"}
  ],
  "seleccion": "Por qué estas propuestas: p. ej. «primeras medidas del capítulo 1.1»"
}
```

- **titular**: la propuesta principal, en infinitivo (o «Que … decida …» cuando la propuesta es quién decide algo) y en castellano llano, **máximo 32 caracteres** contando espacios. Sin adjetivos valorativos. Ej.: «Bajar el IVA de la luz al 10 %». Palabras que entienda alguien de 18 años: «competencias» → «que Euskadi decida sobre…»; «IPC» → «los precios». La única sigla permitida sin explicar es IVA.
- **resumen**: entre 20 y 30 palabras, frases cortas, palabras de uso diario (lectura fácil). Verbos neutros: «propone», «plantea», «quiere». Nunca «promete», «asegura», «pretende», «defiende con firmeza», ni valoraciones de viabilidad o coste. Sin siglas sin explicar (IRPF → «impuesto sobre la renta»). No digas lo que el programa no incluye: cuenta solo lo que sí dice.
- **citas**: de 1 a 3, cada una copiada **carácter a carácter** del texto (≤ 300 caracteres), con su `pagina_pdf`. Para omitir un trozo dentro de la misma página, `[…]`. Si una frase cruza de página, añade `"pagina_pdf_fin"`. Copia también las erratas: no corrijas nada.
- **traduccion**: solo cuando la cita está en catalán, gallego o euskera; traducción fiel al castellano.
- **Trazabilidad**: cada idea y cada cifra del titular y del resumen tiene que estar en una de las citas. Si no la puedes citar, no la escribas.
- **seleccion**: una línea con el motivo de la elección, para la revisión.

## Cuando el programa no trata el tema

```json
{"partido": "pnv", "tema": "inmigracion", "estado": "sin_propuesta",
 "terminos_buscados": ["inmigra", "migrant", "extranjer", "asilo", "frontera", "regulariza"],
 "apariciones_revisadas": true,
 "nota": "Las 2 apariciones de «frontera» hablan de comercio exterior, no de inmigración."}
```

Antes de marcarlo, busca en el texto completo las raíces de las palabras del tema (`terminos_buscados`, en el idioma del programa) y lee cada aparición. Si alguna es una propuesta sobre el tema, no es `sin_propuesta`. Si el programa solo menciona el tema sin proponer nada concreto, es `propuesta` con un resumen que lo diga («Menciona X, sin medidas concretas») y su cita.

## Comprobación antes de entregar

Desde la carpeta del proyecto, ejecuta `py -3 -E scripts/verificar.py --partido <id>` y corrige hasta que diga `0 fallos`. No entregues con fallos.
