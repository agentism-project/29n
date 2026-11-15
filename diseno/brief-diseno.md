# Brief de diseño: comparador de programas electorales 29-N

## Qué es

Una web de una sola página que muestra, tema por tema, qué proponen los programas electorales oficiales de los partidos para las elecciones generales del 29 de noviembre de 2026. Cada afirmación lleva la cita literal y la página exacta del programa oficial donde se puede comprobar.

Proyecto ciudadano, anónimo y neutral: ni marca personal ni de empresa.

## Para quién

Cualquier persona, pero sobre todo gente joven (18-30) que llega desde el móvil, a través de WhatsApp, Instagram, TikTok o X. Muchos no han leído nunca un programa electoral. Hay que entenderlo en 5 segundos.

## La idea que lo distingue: cada pantalla es una captura

La web está pensada para que lo que se ve en el móvil se pueda capturar y compartir tal cual, y siga teniendo sentido fuera de la web:

1. **Cada vista es una unidad completa**: un tema con todos los partidos, o un partido con todos los temas, cabe en una pantalla de móvil sin desplazarse (con resúmenes de una línea).
2. **Cada vista lleva su procedencia dentro**: un pie fijo y discreto con «Fuente: programas oficiales 29-N · [dirección web] · actualizado el dd/mm». Una captura sin ese pie no debe ser posible desde la propia web.
3. **Botón «Compartir imagen»** en cada vista: genera la imagen ya maquetada en tres formatos, con la dirección web y un código QR pequeño:
   - Historia 9:16 (1080×1920): Instagram, TikTok, estados de WhatsApp.
   - Publicación 4:5 (1080×1350): Instagram y LinkedIn; si hay más partidos de los que caben, carrusel (portada + diapositivas + cierre con la dirección).
   - Cuadrada 1:1 (1080×1080): X, Facebook, WhatsApp.

## Vistas

1. **Inicio**: título, una frase de qué es, selector «¿Dónde votas?» (comunidad autónoma: muestra solo los partidos que se presentan allí; por defecto «Toda España»), y la cuadrícula de temas (icono + nombre).
2. **Tema** (la vista estrella): nombre e icono del tema arriba; debajo, un renglón por partido: marca de color + nombre + titular de ≤ 8 palabras. Hasta 12 partidos; si son más de 6, separados en «Partidos estatales» y «Partidos territoriales». Tocar un renglón abre la ficha.
3. **Ficha** (partido × tema): titular, resumen de ≤ 30 palabras en lenguaje llano, cita literal desplegable, y botón «Ver en el programa · pág. N» que abre el PDF oficial en esa página. Estados posibles: con propuesta / «el programa no trata este tema» / «programa aún no publicado».
4. **Partido**: los temas en orden, un renglón cada uno con su titular.
5. **Cómo se ha hecho**: criterio de selección de partidos y temas, reglas de neutralidad, versión de cada programa, cómo pedir una corrección.

## Estilo

- Minimalista, profesional y atractivo. Mucho blanco, tipografía grande y contundente (cuerpo ≥ 16 px, titulares 20-24 px en móvil), una sola familia sans-serif.
- **Interfaz monocroma** (negro, blanco, grises). Ningún color de acento: casi todos los colores están asociados a algún partido.
- Los colores de partido solo en una marca pequeña e igual para todos (punto o barra); nunca fondos de partido. **Sin logotipos**: solo el nombre.
- Mismo tamaño, mismo peso y misma estructura para todos los partidos. Orden fijo, el del criterio publicado.
- Iconos de tema sencillos, de trazo, coherentes entre sí. Sin emojis en los contenidos.
- Modo claro y oscuro.
- Accesible: contraste AA, objetivos táctiles ≥ 44 px, legible en un móvil pequeño (360 px de ancho).
- Tono neutro: ni adjetivos ni valoraciones en la interfaz.

## Contenido de ejemplo

Usa **marcadores neutros**, nunca partidos ni propuestas reales: «Partido A» … «Partido L», colores de ejemplo variados, temas reales de muestra (Vivienda, Empleo y salarios, Pensiones, Impuestos, Sanidad, Educación, Inmigración, Energía y clima, Modelo territorial, Coste de la vida) y titulares de ejemplo genéricos («Propuesta de ejemplo sobre alquiler»).

## Qué entregar

Dos o tres propuestas claramente distintas. Cada una con:

1. Inicio (móvil).
2. Vista Tema con 12 partidos (móvil), demostrando que cabe en una captura.
3. Ficha con la cita desplegada (móvil).
4. Las tres imágenes de «Compartir» del mismo tema (9:16, 4:5 y 1:1).
5. La vista Tema en escritorio (tabla de temas × partidos).
