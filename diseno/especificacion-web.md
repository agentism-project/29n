# Especificación de la web

Comparador ciudadano de los programas electorales del 29-N. Anónimo y neutral: ningún nombre de autor, ninguna marca, ningún enlace a empresas o personas.

## Principios

1. **Cada pantalla es una captura.** Cada vista se entiende sola si alguien hace una captura: lleva el tema o el partido arriba y el sello de procedencia abajo.
2. **Todo se puede comprobar.** Cada propuesta enlaza al PDF oficial en su página exacta (`<url>#page=N`).
3. **Igual para todos.** Mismo tamaño, peso, estructura y orden de criterio para cada partido. Los colores de partido solo en un punto pequeño e igual para todos. Sin logotipos.
4. **Privacidad y sencillez.** Sitio estático en GitHub Pages. Sin cookies, sin analítica, sin peticiones a terceros al cargar la página (la tipografía va alojada en el propio sitio). Sin framework: HTML, CSS y JavaScript sin dependencias.

## Diseño

La propuesta 2 «Tarjetas» (`diseno/referencia/p2-*.dc.html`): fondo gris claro, tarjetas blancas redondeadas, DM Sans, interfaz monocroma (#141414 sobre #f1f1ef). Tres ajustes aprobados:

1. **El nombre del partido tan visible como el titular**: mismo tamaño y en negrita; nunca una etiqueta gris pequeña.
2. **Imágenes para compartir con más fuerza**: el título del tema muy grande y el texto más grueso, tomando el tratamiento tipográfico de `diseno/referencia/p3-historia.dc.html` (pero en claro, con las tarjetas de la propuesta 2).
3. **Modo oscuro** que sigue al del móvil (`prefers-color-scheme`), con contraste AA.

Accesible: contraste AA, objetivos táctiles de 44 px, `lang="es"`, enlaces y botones reales, se lee a 360 px de ancho sin desplazamiento horizontal, respeta `prefers-reduced-motion`.

## Datos

`scripts/construir.py` lee `datos/partidos.json`, `datos/temas.json`, `datos/criterios.json` y `datos/fichas/*.json` y escribe `web/datos.js` (`window.DATOS = {…}`), así la web funciona sin servidor. Para cada candidatura sin programa genera las fichas en estado `pendiente`. No inventa nada: si un dato falta, la web no lo muestra.

Campos opcionales que la web usa si existen: `programa.url_archivo` (copia en archive.org), `programa_2023.url` (solo para el enlace «Consultar su programa de 2023»), `web` (página oficial del partido), `color`.

Orden: primero las candidaturas estatales y luego las territoriales, cada grupo por orden alfabético, como en `partidos.json`. Las territoriales muestran su comunidad junto al nombre («ERC · Cataluña»).

## Vistas (rutas con `#`)

- `#/` **Inicio**: título «¿Qué proponen? Elecciones generales 29-N», una frase de qué es, la cuadrícula de los 10 temas (icono de trazo + nombre), acceso a «Partidos» y a «Cómo se ha hecho».
- `#/tema/<id>` **Tema** (la vista estrella, como `p2-tema`): icono, nombre y pregunta del tema; tarjeta «Partidos estatales» y tarjeta «Partidos de comunidades autónomas» (rótulos cambiados el 16-11: el Frente Amplio y Podemos no se presentan en todas las provincias). Cada renglón: punto de color + nombre del partido + titular. Estados: «El programa no trata este tema», «Aún no ha publicado su programa», «Programa publicado: resumen en preparación» (desde el 16-11: programa ya fijado por su huella, fichas aún sin revisar; la ficha enlaza al PDF). Cada renglón abre la ficha.
- `#/ficha/<partido>/<tema>` **Ficha** (como `p2-ficha`): partido y tema, titular, resumen, citas literales (con la traducción debajo cuando la cita no está en castellano, marcada «Traducción»), y para cada cita el botón «Ver en el programa · pág. N». En `sin_propuesta`: lo dice y lista los términos buscados. En `pendiente`: «Aún no ha publicado su programa para el 29-N», enlace a su web y, si existe, «Consultar su programa de 2023» con la nota «No lo resumimos: puede no coincidir con lo que proponen hoy». Navegación al partido anterior y siguiente del mismo tema. Botones «Compartir imagen» y «Ver todos los partidos en este tema».
- `#/partido/<id>` **Partido**: sus 10 temas, un renglón cada uno, y los datos de su programa (título, fecha, páginas, huella SHA-256 abreviada, enlace).
- `#/metodo` **Cómo se ha hecho**: las reglas de `criterios.json` en lenguaje llano (selección de partidos citando el estudio del CIS **sin ninguna cifra ni orden de la encuesta**; temas y su origen; fuente única; cómo se redacta y se comprueba cada ficha: cita literal comprobada automáticamente contra el PDF y revisión ciega de neutralidad; qué pasa con quien no ha publicado programa), la tabla de versiones de los programas, y cómo pedir una corrección (enlace a las «issues» del repositorio, configurable). Fecha de la última actualización.

**Sello en todas las vistas**: «Fuente: programas electorales oficiales · <dirección> · actualizado el dd/mm/aaaa». Debajo, más pequeño: «Proyecto ciudadano independiente, sin relación con ningún partido.»

La dirección pública va en una sola constante de configuración (`BASE_URL`), porque aún no está decidida.

## Imágenes para compartir

Generadas de antemano, desde las mismas vistas, para que la web y las imágenes nunca digan cosas distintas:

- Una ruta `#/captura/...` dibuja un marco de tamaño fijo con los mismos datos.
- `scripts/imagenes.cjs` (Node, `require('puppeteer-core')`; la resolución de módulos lo encuentra en un `node_modules` superior; Chrome en su ruta estándar de Windows o en la variable `CHROME_PATH`) guarda los PNG en `web/img/`. Ninguna ruta personal escrita en el código.
- Por tema: dos historias 9:16 (1080×1920), una con las estatales y otra con las territoriales, y un carrusel 4:5 (1080×1350) de portada (tema y pregunta), estatales, territoriales y cierre (dirección y «Comprueba cada cita, con su página, en la web»).
- Por ficha: una imagen 4:5 con partido, tema, titular, resumen, «Programa oficial, pág. N» y la dirección.
- Texto legible en un móvil: los renglones de partido a 34 px o más sobre 1080 px de ancho.
- «Compartir imagen» usa `navigator.share` con el archivo cuando el navegador lo admite y, si no, lo descarga.

## Colores de partido

Un punto pequeño. Tómalos del sitio oficial de cada candidatura (la meta `theme-color` o el color principal de su identidad), anota la fuente en `partidos.json` y, si un color no se puede confirmar, usa un gris neutro: es preferible a uno inventado.
