// Generado por scripts/construir.py: no editar a mano.
window.DATOS = {
 "config": {
  "base_url": "https://agentism-project.github.io/29n/",
  "direccion": "agentism-project.github.io/29n",
  "url_correcciones": "https://github.com/agentism-project/29n/issues",
  "actualizado": "2026-11-16"
 },
 "criterios": {
  "partidos_regla": "Candidaturas a las que el estudio preelectoral del CIS n.º 3584 (elecciones generales 2026) atribuye al menos un escaño en su horquilla nacional. La página nombra el estudio, no reproduce sus cifras.",
  "partidos_orden": "Alfabético, primero los partidos estatales y luego los de comunidades autónomas. No se ordena por la encuesta: el orden revelaría su resultado, y desde el 24-11 no se pueden difundir sondeos.",
  "partidos_fuente": "https://www.cis.es/documents/d/guest/3584_estimacion-pdf",
  "temas_regla": "Los problemas del top 10 del barómetro del CIS de octubre de 2026 que corresponden a una política pública, más Pensiones, Impuestos, Modelo territorial, Igualdad entre mujeres y hombres, y Aborto y gestación subrogada, añadidos por el equipo por ser temas de mucho debate en los que los programas proponen cosas muy distintas, y señalados como tales.",
  "fuente_unica": "El programa electoral oficial de cada candidatura para el 29-N, en la versión fijada por su SHA-256. Ni declaraciones ni prensa.",
  "sin_programa_regla": "Una candidatura que aún no ha publicado programa aparece como «Aún no ha publicado su programa», con enlace a su web oficial. Si el mismo partido publicó programa en 2023, enlazamos a ese programa sin resumir ni citar nada de él, porque puede no coincidir con lo que propone hoy. Cuando publica su programa, lo enlazamos con su huella en cuanto lo comprobamos («Programa publicado: resumen en preparación») y añadimos sus fichas cuando han pasado las mismas comprobaciones que las de los demás partidos."
 },
 "temas": [
  {
   "id": "vivienda",
   "nombre": "Vivienda",
   "pregunta": "¿Qué proponen para poder pagar una vivienda?",
   "incluye": "alquiler, compra, vivienda pública o social, suelo, desahucios, ocupación ilegal, pisos turísticos, ayudas para emanciparse",
   "origen": "Problema citado en el barómetro del CIS de octubre de 2026: «Vivienda»"
  },
  {
   "id": "inmigracion",
   "nombre": "Inmigración",
   "pregunta": "¿Qué proponen sobre inmigración?",
   "incluye": "fronteras y llegadas, regularización, expulsiones, asilo, menores migrantes, integración, acceso a servicios y ayudas",
   "origen": "Problema citado en el barómetro del CIS de octubre de 2026: «Inmigración»"
  },
  {
   "id": "economia",
   "nombre": "Economía y coste de la vida",
   "pregunta": "¿Qué proponen contra el coste de la vida?",
   "incluye": "precios, cesta de la compra, factura de la luz y el gas, ayudas a familias, crecimiento, industria. No: impuestos (van a Impuestos) ni salarios (van a Empleo)",
   "origen": "Problema citado en el barómetro del CIS de octubre de 2026: «Crisis económica»"
  },
  {
   "id": "empleo",
   "nombre": "Empleo y salarios",
   "pregunta": "¿Qué proponen sobre trabajo y sueldos?",
   "incluye": "salario mínimo, jornada laboral, paro, contratos y despido, autónomos y su cuota, empleo joven, conciliación laboral",
   "origen": "Problema citado en el barómetro del CIS de octubre de 2026: «Calidad del empleo» y «Paro»"
  },
  {
   "id": "sanidad",
   "nombre": "Sanidad",
   "pregunta": "¿Qué proponen para la sanidad?",
   "incluye": "listas de espera, atención primaria, salud mental, sanidad pública y privada, profesionales sanitarios, medicamentos, salud dental",
   "origen": "Problema citado en el barómetro del CIS de octubre de 2026: «Sanidad»"
  },
  {
   "id": "educacion",
   "nombre": "Educación",
   "pregunta": "¿Qué proponen para la educación?",
   "incluye": "escuela, 0-3 años, universidad, formación profesional, becas, profesorado, lenguas en la escuela",
   "origen": "Problema citado en el barómetro del CIS de octubre de 2026: «Educación»"
  },
  {
   "id": "regeneracion",
   "nombre": "Corrupción y regeneración",
   "pregunta": "¿Qué proponen contra la corrupción y para cambiar cómo funciona la política?",
   "incluye": "corrupción, transparencia, justicia y su gobierno, ley electoral, independencia de las instituciones, financiación de los partidos",
   "origen": "Problema citado en el barómetro del CIS de octubre de 2026: «Críticas al Gobierno y a los partidos»; «Problemas políticos»; «Mal comportamiento de los políticos»"
  },
  {
   "id": "pensiones",
   "nombre": "Pensiones",
   "pregunta": "¿Qué proponen sobre las pensiones?",
   "incluye": "subida de las pensiones, edad de jubilación, sostenibilidad del sistema, pensiones mínimas y no contributivas, planes privados",
   "origen": "Añadido por el equipo: no está entre los diez problemas más citados en ese barómetro"
  },
  {
   "id": "impuestos",
   "nombre": "Impuestos",
   "pregunta": "¿Qué proponen sobre impuestos?",
   "incluye": "IRPF, IVA, impuesto de sociedades, patrimonio y grandes fortunas, sucesiones, impuestos a bancos y energéticas, fraude fiscal",
   "origen": "Añadido por el equipo: no está entre los diez problemas más citados en ese barómetro"
  },
  {
   "id": "territorio",
   "nombre": "Modelo territorial y financiación",
   "pregunta": "¿Qué proponen sobre las comunidades autónomas y su financiación?",
   "incluye": "financiación autonómica, competencias, autogobierno, referéndum o autodeterminación, deuda autonómica, lenguas cooficiales, modelo de Estado",
   "origen": "Añadido por el equipo: no está entre los diez problemas más citados en ese barómetro"
  },
  {
   "id": "igualdad",
   "nombre": "Igualdad entre mujeres y hombres",
   "pregunta": "¿Qué proponen sobre igualdad entre mujeres y hombres y sobre la violencia contra las mujeres?",
   "incluye": "violencia contra las mujeres (de género, machista o intrafamiliar, con el término de cada programa), leyes y organismos de igualdad, brecha salarial entre mujeres y hombres, paridad, prostitución y trata. No: conciliación (va a Empleo), aborto y gestación subrogada (van a su tema), derechos LGTBI (no son un tema de este comparador)",
   "origen": "Añadido por el equipo: no está entre los diez problemas más citados en ese barómetro"
  },
  {
   "id": "aborto",
   "nombre": "Aborto y gestación subrogada",
   "pregunta": "¿Qué proponen sobre el aborto y la gestación subrogada?",
   "incluye": "ley de plazos y supuestos, acceso al aborto en la sanidad pública, objeción de conciencia, menores de 16 y 17 años, recoger el aborto en la Constitución, ayudas a la embarazada y alternativas al aborto, prohibición o regulación de la gestación subrogada, inscripción de los niños nacidos así en el extranjero. No: ayudas a la natalidad en general (van a Economía)",
   "origen": "Añadido por el equipo: no está entre los diez problemas más citados en ese barómetro"
  }
 ],
 "partidos": [
  {
   "id": "fa",
   "nombre": "Frente Amplio",
   "ambito": "estatal",
   "color": "#f03c00",
   "web": "https://frenteamplio.info/",
   "programa": {
    "estado": "publicado",
    "titulo": "Un programa como una casa",
    "url": "https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf",
    "fecha_pdf": "2026-11-16",
    "paginas": 151,
    "idioma": "es",
    "sha256": "df6e4d967a3a41386656273c32c2df3edc6681b6ee047b190b2ebb91f1a36f04",
    "descargado": "2026-11-16"
   }
  },
  {
   "id": "podemos",
   "nombre": "Podemos",
   "ambito": "estatal",
   "color": "#683278",
   "web": "https://podemos.info/",
   "programa": {
    "estado": "pendiente"
   }
  },
  {
   "id": "pp",
   "nombre": "PP",
   "ambito": "estatal",
   "nombre_completo": "Partido Popular",
   "color": "#21599e",
   "web": "https://www.pp.es/",
   "programa": {
    "estado": "publicado",
    "titulo": "Reconstrucción nacional",
    "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf",
    "fecha_pdf": "2026-11-10",
    "paginas": 64,
    "idioma": "es",
    "sha256": "ae0c35d7ef3faf540acaa79d47abbe3ae2bf56a3a755c4e78a8f5bf3ea49789c",
    "descargado": "2026-11-15"
   }
  },
  {
   "id": "psoe",
   "nombre": "PSOE",
   "ambito": "estatal",
   "nombre_completo": "Partido Socialista Obrero Español",
   "color": "#f31912",
   "web": "https://www.psoe.es/",
   "programa": {
    "estado": "publicado",
    "titulo": "La fuerza de seguir avanzando",
    "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26.pdf",
    "fecha_pdf": "2026-11-15",
    "paginas": 114,
    "idioma": "es",
    "sha256": "e9c8341339538b550641b6ddb1c3fdfeef7fda6a8a1a4be9e8d6a44cbc229bf5",
    "descargado": "2026-11-15"
   }
  },
  {
   "id": "vox",
   "nombre": "Vox",
   "ambito": "estatal",
   "color": "#7cbd2a",
   "web": "https://www.voxespana.es/",
   "programa": {
    "estado": "publicado",
    "titulo": "Es sentido común",
    "url": "https://www.voxespana.es/wp-content/uploads/2026/11/Programa-completo-A5-1.pdf",
    "fecha_pdf": "2026-11-04",
    "paginas": 66,
    "idioma": "es",
    "sha256": "065abf6720be2f7b19b8e911920c2ee2ce5c2059d0ae8bf09770bc790ed11b65",
    "descargado": "2026-11-15",
    "url_archivo": "https://web.archive.org/web/20261115171226/https://www.voxespana.es/wp-content/uploads/2026/11/Programa-completo-A5-1.pdf"
   }
  },
  {
   "id": "adelante",
   "nombre": "Adelante Andalucía",
   "ambito": "territorial",
   "comunidades": [
    "Andalucía"
   ],
   "color": "#24c87e",
   "web": "https://adelanteandalucia.org/",
   "programa": {
    "estado": "publicado",
    "titulo": "Un programa para frenar a las derechas",
    "url": "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf",
    "fecha_pdf": "2026-11-15",
    "paginas": 134,
    "idioma": "es",
    "sha256": "8dbe28d038792b9f2a66c96d40d43cf5fd0f310dbc0de17f6c7ebb3e6d55db30",
    "descargado": "2026-11-15",
    "url_archivo": "https://web.archive.org/web/20261116112602/https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf"
   }
  },
  {
   "id": "arames",
   "nombre": "Ara Més-Front Ampli",
   "ambito": "territorial",
   "comunidades": [
    "Illes Balears"
   ],
   "color": "#8a8a8a",
   "programa": {
    "estado": "pendiente"
   }
  },
  {
   "id": "bng",
   "nombre": "BNG",
   "ambito": "territorial",
   "nombre_completo": "Bloque Nacionalista Galego",
   "comunidades": [
    "Galicia"
   ],
   "color": "#6aade4",
   "web": "https://www.bng.gal/",
   "programa": {
    "estado": "publicado",
    "titulo": "29N. Xerais 2026. Programa electoral",
    "url": "https://www.bng.gal/media/bnggaliza/files/2026/11/12/26_bng_xerais_documentos_programa_electoral.pdf",
    "fecha_pdf": "2026-11-12",
    "paginas": 91,
    "idioma": "gl",
    "sha256": "1ab47bae90bd6de4be2cd42e1999c635757359ef9789a6c402ba7d64d9530432",
    "descargado": "2026-11-15",
    "url_archivo": "https://web.archive.org/web/20261112195808/https://www.bng.gal/media/bnggaliza/files/2026/11/12/26_bng_xerais_documentos_programa_electoral.pdf"
   }
  },
  {
   "id": "compromis",
   "nombre": "Compromís: Front Valencià",
   "ambito": "territorial",
   "comunidades": [
    "Comunitat Valenciana"
   ],
   "color": "#ff6720",
   "web": "https://frontvalencia.org/",
   "programa": {
    "estado": "publicado",
    "titulo": "Programa electoral 29N Compromís-Front Valencià",
    "url": "https://frontvalencia.org/programa-compromis-front-valencia.pdf",
    "fecha_pdf": "2026-11-13",
    "paginas": 64,
    "idioma": "ca-valencia",
    "sha256": "37b569d6ac31a21a8f972dcfd5be3740c32f50fe1c6f3e87c9a1f68027ee6b55",
    "descargado": "2026-11-15"
   }
  },
  {
   "id": "pnv",
   "nombre": "EAJ-PNV",
   "ambito": "territorial",
   "nombre_completo": "Euzko Alderdi Jeltzalea-Partido Nacionalista Vasco",
   "comunidades": [
    "País Vasco"
   ],
   "color": "#00902f",
   "web": "https://www.eaj-pnv.eus/",
   "programa": {
    "estado": "publicado",
    "titulo": "Programa elecciones generales 2026. Euskadi zaindu",
    "url": "https://www.eaj-pnv.eus/es/adjuntos-documentos/21765/pdf/programa-electoral-29n",
    "fecha_pdf": "2026-11-09",
    "paginas": 43,
    "idioma": "es",
    "sha256": "5af7a5b6f67c26bad87ef6c3ca01ae38aa1f1d7d9029efb32fc52482de0c1314",
    "descargado": "2026-11-15",
    "url_archivo": "https://web.archive.org/web/20261115171945/https://www.eaj-pnv.eus/es/adjuntos-documentos/21765/pdf/programa-electoral-29n"
   }
  },
  {
   "id": "bildu",
   "nombre": "EH Bildu",
   "ambito": "territorial",
   "comunidades": [
    "País Vasco",
    "Navarra"
   ],
   "color": "#00c19f",
   "web": "https://ehbildu.eus/",
   "programa": {
    "estado": "publicado",
    "titulo": "Posible egin. Garantía y derechos",
    "url": "https://ehbildu.eus/media/dokumentuak/posibleegin-programa-cas.pdf",
    "fecha_pdf": "2026-11-16",
    "paginas": 30,
    "idioma": "es",
    "sha256": "ceb655c9c8ebb036a15fa7829865d6e2d178525eb7db92629d702ac5e8d16047",
    "descargado": "2026-11-16"
   }
  },
  {
   "id": "erc",
   "nombre": "ERC",
   "ambito": "territorial",
   "nombre_completo": "Esquerra Republicana de Catalunya",
   "comunidades": [
    "Cataluña"
   ],
   "color": "#f95838",
   "web": "https://www.esquerra.cat/",
   "programa": {
    "estado": "publicado",
    "titulo": "Pel país. Per la gent. Pel futur.",
    "url": "https://esquerrarepublicana.cat/documents/e2026-programa.pdf",
    "fecha_pdf": "2026-11-10",
    "paginas": 48,
    "idioma": "ca",
    "sha256": "61728d162a6e88d492d44a0b0994effb31f9e4abb85ebf8aea715d870a9b2e04",
    "descargado": "2026-11-15",
    "url_archivo": "https://web.archive.org/web/20261115171915/https://esquerrarepublicana.cat/documents/e2026-programa.pdf"
   }
  },
  {
   "id": "junts",
   "nombre": "Junts",
   "ambito": "territorial",
   "comunidades": [
    "Cataluña"
   ],
   "color": "#00c3b2",
   "web": "https://junts.cat/",
   "programa": {
    "estado": "pendiente"
   }
  },
  {
   "id": "upc",
   "nombre": "Unidad del Pueblo Canario",
   "ambito": "territorial",
   "comunidades": [
    "Canarias"
   ],
   "color": "#8a8a8a",
   "programa": {
    "estado": "pendiente"
   }
  }
 ],
 "fichas": {
  "fa/vivienda": {
   "estado": "propuesta",
   "titular": "Crear pisos públicos de alquiler",
   "resumen": "Propone 1,5 millones de viviendas públicas de alquiler, con el 1 % del PIB (producción del país) al año. Y limitar alquileres en zonas tensionadas según la renta del barrio.",
   "citas": [
    {
     "texto": "invertiremos el 1 % del PIB anual para levantar un gran parque público de 1,5 millones de viviendas en alquiler asequible",
     "pagina_pdf": 7
    },
    {
     "texto": "Tope de precios de alquiler vinculado al 25 % de la renta del barrio […] Limitaremos por ley el precio del alquiler residencial en todas las zonas tensionadas",
     "pagina_pdf": 13
    }
   ]
  },
  "fa/inmigracion": {
   "estado": "propuesta",
   "titular": "Regularizar por una vía estable",
   "resumen": "Propone resolver todas las solicitudes de la regularización extraordinaria de 2026. Y reformar la Ley de Extranjería con una vía estable y permanente para regularizar a migrantes.",
   "citas": [
    {
     "texto": "Culminar la regularización extraordinaria de 2026 : Resolveremos todas las solicitudes con medios suficientes, de modo que ninguna persona quede fuera por retrasos de la Administración.",
     "pagina_pdf": 126
    },
    {
     "texto": "Procedimiento estable de regularización: Reformaremos de forma integral la Ley de Extranjería para instaurar un procedimiento estable, permanente y reglado de regularización administrativa.",
     "pagina_pdf": 126
    }
   ]
  },
  "fa/economia": {
   "estado": "propuesta",
   "titular": "Dar 200 € al mes por cada menor",
   "resumen": "Propone dar 200 € al mes por cada menor y tres horas de luz gratis al día. También, topes al precio de alimentos básicos ante abusos probados o emergencias.",
   "citas": [
    {
     "texto": "Aprobaremos la Ley de Prestación Universal por Crianza que concederá 200 € al mes por cada menor de 18 años a cargo.",
     "pagina_pdf": 21
    },
    {
     "texto": "Tres horas de luz gratis al día: En las horas de mayor producción de energía eléctrica solar y en las que hay excedente con respecto a lo que consumimos, la luz será gratis para todos los hogares, tengan o no placas solares.",
     "pagina_pdf": 64
    },
    {
     "texto": "Estableceremos mecanismos de control de precios en alimentos básicos de consumo diario con la fijación de topes máximos en la cesta saludable y condicionados a situaciones de emergencia o abuso acreditado.",
     "pagina_pdf": 56
    }
   ]
  },
  "fa/empleo": {
   "estado": "propuesta",
   "titular": "Ir hacia la semana de 32 horas",
   "resumen": "Propone bajar la jornada semanal a 37,5 horas ya y avanzar hacia 32, sin bajar sueldo. Y un salario mínimo nunca inferior al 60 % del sueldo medio neto.",
   "citas": [
    {
     "texto": "Avanzaremos hacia la jornada laboral máxima de 32 horas semanales sin reducción salarial —empezando por las 37,5 horas de forma inmediata—",
     "pagina_pdf": 7
    },
    {
     "texto": "Garantizaremos por ley una subida progresiva del Salario Mínimo Interprofesional (SMI) manteniendo un suelo permanente equivalente al 60 % del salario medio neto de la economía.",
     "pagina_pdf": 51
    }
   ]
  },
  "fa/sanidad": {
   "estado": "propuesta",
   "titular": "Dedicar 8 % del PIB a sanidad",
   "resumen": "Propone dedicar al menos el 8 % del PIB (producción del país) a la sanidad pública, con gestión pública directa como norma. Y incluir salud dental, visual, auditiva y mental.",
   "citas": [
    {
     "texto": "Blindaje del gasto sanitario público: Compromiso desde los Presupuestos Generales del Estado del 8 % del PIB estatal para la sanidad pública.",
     "pagina_pdf": 26
    },
    {
     "texto": "Apostaremos de nuevo por una Ley de Gestión Pública e Integridad del Sistema Nacional de Salud para consagrar la gestión pública directa como la vía general para los centros y servicios del Sistema Nacional de Salud (SNS).",
     "pagina_pdf": 26
    },
    {
     "texto": "Apostamos por una sanidad 100 % pública, universal y de gestión directa con un suelo del 8 % del PIB —incorporando la salud bucodental, visual, auditiva y mental—",
     "pagina_pdf": 7
    }
   ]
  },
  "fa/educacion": {
   "estado": "propuesta",
   "titular": "Invertir el 7 % del PIB en 2030",
   "resumen": "Propone una ley para que la inversión estatal en educación llegue al 7 % del PIB (producción del país) en 2030. Y como máximo 15 alumnos por clase en Primaria.",
   "citas": [
    {
     "texto": "Aprobaremos una Ley de Financiación Educativa que blinde legalmente un porcentaje mínimo de inversión estatal y que deberá llegar al 7 % del PIB en 2030.",
     "pagina_pdf": 31
    },
    {
     "texto": "Fijaremos por ley ratios máximas por aula: […] 15 en Primaria y FP, 20 en Secundaria y 23 en Bachillerato",
     "pagina_pdf": 31
    }
   ]
  },
  "fa/regeneracion": {
   "estado": "propuesta",
   "titular": "Aprobar una ley de integridad",
   "resumen": "Propone una Ley de Integridad Pública para registrar quién controla cada empresa que no cotiza en Bolsa. Y que ningún partido pueda bloquear la renovación del gobierno de los jueces.",
   "citas": [
    {
     "texto": "Aprobaremos una Ley de Integridad Pública […] la inscripción obligatoria y actualizada en el Registro Mercantil de los cambios de propiedad de las sociedades limitadas y las anónimas no cotizadas, identificando a sus socios, la cadena de propiedad y las personas que ejercen el control efectivo",
     "pagina_pdf": 141
    },
    {
     "texto": "Reformaremos la Ley Orgánica del Poder Judicial para que ningún partido pueda volver a bloquear la renovación del Consejo General del Poder Judicial",
     "pagina_pdf": 148
    }
   ]
  },
  "fa/pensiones": {
   "estado": "propuesta",
   "titular": "Subir pensiones con los precios",
   "resumen": "Propone recoger en la Constitución que las pensiones públicas suban con los precios y que ninguna sea menor que el salario mínimo. Y devolver la jubilación a los 65 años.",
   "citas": [
    {
     "texto": "Reforzaremos el nivel de protección constitucional […] ubicaremos el derecho a la pensión pública y su revalorización automática con arreglo al IPC, que ninguna sea inferior al SMI y que no se privatice la gestión de las pensiones públicas",
     "pagina_pdf": 57
    },
    {
     "texto": "Devolveremos la edad de jubilación a los 65 años",
     "pagina_pdf": 57
    }
   ]
  },
  "fa/impuestos": {
   "estado": "propuesta",
   "titular": "Gravar más a grandes empresas",
   "resumen": "Propone un impuesto mínimo: 20 % a grandes empresas y 2 % a patrimonios mayores de un millón. Y bajar el impuesto sobre la renta a sueldos hasta 27.000 €.",
   "citas": [
    {
     "texto": "Impondremos un tipo mínimo efectivo del 20 % sobre el resultado contable ajustado para las grandes empresas y grupos corporativos",
     "pagina_pdf": 44
    },
    {
     "texto": "Reformaremos el Impuesto de Solidaridad de las Grandes Fortunas para garantizar que los patrimonios con más de un millón de euros paguen como mínimo el 2 %.",
     "pagina_pdf": 45
    },
    {
     "texto": "Bajaremos el IRPF a las rentas del trabajo de hasta 27.000 euros (1,5 veces el SMI).",
     "pagina_pdf": 46
    }
   ]
  },
  "fa/territorio": {
   "estado": "propuesta",
   "titular": "Dar más dinero a las autonomías",
   "resumen": "Propone sumar cada año al menos un 2,3 % del PIB (producción del país) a las autonomías. Y impulsar un modelo «federal y plurinacional», con «derecho a decidir» en referéndum.",
   "citas": [
    {
     "texto": "Destinaremos al menos un 2,3 % del PIB adicional al sistema de financiación autonómica cada año.",
     "pagina_pdf": 103
    },
    {
     "texto": "Promoveremos el debate para formar una mayoría social y política e impulsar el cambio de modelo territorial establecido en la Constitución, en un sentido federal y plurinacional incluyendo el derecho a decidir mediante referéndum",
     "pagina_pdf": 140
    }
   ]
  },
  "fa/igualdad": {
   "estado": "propuesta",
   "titular": "Subir el gasto en igualdad",
   "resumen": "Propone dar por ley a igualdad el 5 % o más del presupuesto no financiero del Estado, un 10 % más al año contra las violencias machistas y listas paritarias.",
   "citas": [
    {
     "texto": "Asignaremos de forma obligatoria por ley al menos un 5 % del presupuesto no financiero del Estado a políticas de igualdad efectiva entre mujeres y hombres",
     "pagina_pdf": 38
    },
    {
     "texto": "Aumentaremos un 10 % (con carácter adicional anual) la partida contra las violencias machistas",
     "pagina_pdf": 38
    },
    {
     "texto": "Adaptaremos la normativa electoral para consolidar una paridad real y efectiva. Proponemos un modelo de listas en el que el formato cremallera se aplique como garantía mínima",
     "pagina_pdf": 37
    }
   ]
  },
  "fa/aborto": {
   "estado": "propuesta",
   "titular": "Garantizar el derecho al aborto",
   "resumen": "Propone reformar la Constitución para incluir el derecho al aborto. Quiere garantizarlo en centros públicos de todas las comunidades, con los gastos de viaje incluidos, y formación obligatoria para sanitarios.",
   "citas": [
    {
     "texto": "Reformaremos el artículo 43 de la Constitución para incluir el derecho al aborto",
     "pagina_pdf": 28
    },
    {
     "texto": "Garantía del aborto (IVE): Estrategia para garantizar la IVE en centros públicos en todas las comunidades autónomas y ciudades autónomas, […] incluyendo gastos de desplazamiento. Formación obligatoria en IVE en planes de estudio y especialidades sanitarias.",
     "pagina_pdf": 28
    }
   ]
  },
  "podemos/vivienda": {
   "estado": "pendiente"
  },
  "podemos/inmigracion": {
   "estado": "pendiente"
  },
  "podemos/economia": {
   "estado": "pendiente"
  },
  "podemos/empleo": {
   "estado": "pendiente"
  },
  "podemos/sanidad": {
   "estado": "pendiente"
  },
  "podemos/educacion": {
   "estado": "pendiente"
  },
  "podemos/regeneracion": {
   "estado": "pendiente"
  },
  "podemos/pensiones": {
   "estado": "pendiente"
  },
  "podemos/impuestos": {
   "estado": "pendiente"
  },
  "podemos/territorio": {
   "estado": "pendiente"
  },
  "podemos/igualdad": {
   "estado": "pendiente"
  },
  "podemos/aborto": {
   "estado": "pendiente"
  },
  "pp/vivienda": {
   "estado": "propuesta",
   "titular": "Construir un millón de viviendas",
   "resumen": "Propone construir un millón de viviendas y agilizar trámites. Quiere derogar la Ley de Vivienda y eliminar las zonas tensionadas y el índice de precios, que permiten limitar el alquiler.",
   "citas": [
    {
     "texto": "CONSTRUIREMOS UN MILLÓN DE VIVIENDAS. Movilizaremos suelo público y privado en colaboración con las Comunidades Autónomas y las entidades locales. Aprobaremos una nueva Ley del Suelo para agilizar el planeamiento urbanístico y reforzar su seguridad jurídica.",
     "pagina_pdf": 41
    },
    {
     "texto": "DEROGAREMOS LA LEY DE VIVIENDA. Recuperaremos la seguridad jurídica que necesitan propietarios e inquilinos. Eliminaremos las zonas tensionadas y el índice de precios, que han introducido más intervención, más incertidumbre y menos oferta en el mercado del alquiler.",
     "pagina_pdf": 42
    },
    {
     "texto": "IMPULSAREMOS LOS PROYECTOS RESIDENCIALES ESTRATÉGICOS PARA CONSTRUIR ANTES. Crearemos, con las Comunidades Autónomas y los ayuntamientos, una figura urbanística que unifique los trámites de planeamiento, gestión y ejecución de los grandes desarrollos de vivienda",
     "pagina_pdf": 42
    }
   ]
  },
  "pp/inmigracion": {
   "estado": "propuesta",
   "titular": "Reforzar las fronteras",
   "resumen": "Propone una autoridad única de inmigración y más agentes en las fronteras, con apoyo militar si lo exige la seguridad. Quiere visados por puntos según formación, idioma e integración.",
   "citas": [
    {
     "texto": "HABRÁ UNA AUTORIDAD ÚNICA PARA TODA LA POLÍTICA MIGRATORIA. Una autoridad única dirigirá la entrada, la permanencia, el retorno y la integración, y coordinará a los departamentos implicados y al resto de administraciones.",
     "pagina_pdf": 18
    },
    {
     "texto": "LA FRONTERA SUR TENDRÁ MÁS AGENTES Y EL APOYO DE LAS FUERZAS ARMADAS. Reforzaremos efectivos, vigilancia e infraestructuras en las fronteras terrestres, marítimas y aeroportuarias. […] Las Fuerzas Armadas apoyarán en la frontera cuando lo exija la seguridad nacional",
     "pagina_pdf": 18
    },
    {
     "texto": "SÓLO FUNCIONARÁ LA VÍA LEGAL DE ACCESO A ESPAÑA. Implantaremos visados por puntos que valoren la formación, la experiencia, el idioma y la integración.",
     "pagina_pdf": 19
    }
   ]
  },
  "pp/economia": {
   "estado": "propuesta",
   "titular": "Hacer la economía más productiva",
   "resumen": "Quiere una economía más productiva, con un test de productividad para normas económicas nuevas. Propone alargar la vida de las nucleares y una tarifa social de energía para hogares vulnerables.",
   "citas": [
    {
     "texto": "TODA NUEVA NORMA ECONÓMICA PASARÁ UN TEST DE PRODUCTIVIDAD. Acercarnos al nivel de vida de los países más prósperos de Europa exige una economía más productiva.",
     "pagina_pdf": 48
    },
    {
     "texto": "ELIMINAREMOS EL CALENDARIO DE CIERRE DE ALMARAZ, ASCÓ, VANDELLÓS, COFRENTES Y TRILLO. En los primeros cien días de Gobierno tramitaremos la extensión de su vida útil con el visto bueno del Consejo de Seguridad Nuclear, garantizando la seguridad de las instalaciones.",
     "pagina_pdf": 54
    },
    {
     "texto": "Los hogares más vulnerables tendrán una Tarifa Social Única que sustituirá y mejorará los actuales bonos eléctrico y térmico. La ayuda llegará a quienes la necesitan y será compatible con cualquier contrato de luz y gas.",
     "pagina_pdf": 54
    }
   ]
  },
  "pp/empleo": {
   "estado": "propuesta",
   "titular": "Dar un cheque de formación",
   "resumen": "Propone que cada trabajador tenga un cheque para formarse en inteligencia artificial. Quiere que los nuevos autónomos no paguen cuota el primer año y abaratar las dos primeras contrataciones.",
   "citas": [
    {
     "texto": "LA INTELIGENCIA ARTIFICIAL AMPLIARÁ LAS OPORTUNIDADES DE TRABAJAR, Y CADA TRABAJADOR TENDRÁ UN CHEQUE PARA FORMARSE EN ELLA. […] Cada trabajador tendrá un cheque de formación, que conservará, aunque cambie de empresa, para formarse donde elija.",
     "pagina_pdf": 45
    },
    {
     "texto": "DEJAREMOS EMPRENDER A QUIEN QUIERA EMPRENDER.Los nuevos autónomos no pagarán cuota a la Seguridad Social durante su primer año, ni durante el segundo si sus ingresos no llegan al salario mínimo.",
     "pagina_pdf": 46
    },
    {
     "texto": "Contratar dejará de ser un salto al vacío: bonificaremos el 100% de las cotizaciones empresariales por el primer trabajador durante un año y el 50% por el segundo.",
     "pagina_pdf": 46
    }
   ]
  },
  "pp/sanidad": {
   "estado": "propuesta",
   "titular": "Reducir las listas de espera",
   "resumen": "Propone un plan urgente contra las listas de espera, acordado con las comunidades autónomas. Quiere al menos 4.500 médicos más en atención primaria y un plan de salud mental.",
   "citas": [
    {
     "texto": "REDUCIREMOS LAS LISTAS DE ESPERA Y ASEGURAREMOS LA FINANCIACIÓN SANITARIA. […] pondremos en marcha, de acuerdo con las Comunidades Autónomas y respetando sus competencias de gestión, un plan urgente de reducción de listas de espera para asegurar una atención ágil y de calidad.",
     "pagina_pdf": 52
    },
    {
     "texto": "Incorporaremos, en coordinación con las Comunidades Autónomas, más profesionales al Sistema Nacional de Salud —médicos, enfermeras y resto de profesionales sanitarios— para contar con las plantillas que se necesitan hoy y en el futuro. En Atención Primaria, al menos 4.500 médicos más.",
     "pagina_pdf": 52
    },
    {
     "texto": "TAMBIÉN HABRÁ MÁS PROFESIONALES Y MÁS ATENCIÓN A LA SALUD MENTAL. Aprobaremos un Plan Nacional de Salud Mental 2027-2037, con financiación garantizada, para que deje de ser una asignatura pendiente de nuestro Estado del bienestar.",
     "pagina_pdf": 53
    }
   ]
  },
  "pp/educacion": {
   "estado": "propuesta",
   "titular": "Sustituir la ley educativa",
   "resumen": "Quiere que todos salgan de primaria leyendo y calculando bien y sustituir la ley educativa LOMLOE. Propone nota mínima para estudiar Magisterio y que los padres elijan colegio.",
   "citas": [
    {
     "texto": "NINGÚN ALUMNO SE QUEDARÁ ATRÁS: TODOS SALDRÁN DE PRIMARIA LEYENDO Y CALCULANDO BIEN. Acordaremos con docentes, inspectores, expertos y familias un nuevo marco educativo que sustituya a la LOMLOE.",
     "pagina_pdf": 51
    },
    {
     "texto": "SER PROFESOR SERÁ UNA CARRERA DE PRESTIGIO, CON AUTORIDAD EN EL AULA. Prestigiaremos la profesión docente, exigiremos una nota mínima para acceder al grado de Magisterio",
     "pagina_pdf": 51
    },
    {
     "texto": "LOS PADRES ELEGIRÁN COLEGIO, Y NINGÚN CONCIERTO EDUCATIVO SE ELIMINARÁ DONDE HAYA DEMANDA SUFICIENTE. La demanda de las familias volverá a contar para programar las plazas, y se podrá elegir centro en todo el municipio de residencia, con criterios públicos.",
     "pagina_pdf": 51
    }
   ]
  },
  "pp/regeneracion": {
   "estado": "propuesta",
   "titular": "Recuperar penas por malversación",
   "resumen": "Propone restablecer las penas por malversación y recuperar bienes de la corrupción. Quiere más control del voto por correo y excluir del Tribunal Constitucional a quien tuvo cargos políticos recientes.",
   "citas": [
    {
     "texto": "LOS CORRUPTOS DEVOLVERÁN LO ROBADO. Restableceremos las penas por malversación. Reforzaremos la Oficina de Recuperación y Gestión de Activos para localizar y administrar los bienes procedentes de los delitos que se hayan cometido.",
     "pagina_pdf": 28
    },
    {
     "texto": "REFORZAREMOS EL CONTROL DEL VOTO POR CORREO EN TODO SU RECORRIDO. Garantizaremos el ejercicio efectivo y seguro del derecho al voto por correo. La Administración electoral reforzará el control y la supervisión de la recepción, custodia y entrega de los votos por parte de Correos.",
     "pagina_pdf": 24
    },
    {
     "texto": "LA INDEPENDENCIA DEL TRIBUNAL CONSTITUCIONAL ES UNA PRIORIDAD DEMOCRÁTICA. […] Ningún candidato podrá haber ocupado cargos políticos durante los cinco años anteriores y estableceremos un régimen estricto de incompatibilidades.",
     "pagina_pdf": 26
    }
   ]
  },
  "pp/pensiones": {
   "estado": "propuesta",
   "titular": "Subir pensiones con los precios",
   "resumen": "Quiere subir las pensiones cada año con los precios, también las futuras de los jóvenes. Propone reconstruir el Pacto de Toledo, el acuerdo entre partidos sobre pensiones.",
   "citas": [
    {
     "texto": "GARANTIZAREMOS LAS PENSIONES DE HOY Y SU FUTURO.Reconstruiremos el Pacto de Toledo sobre un principio claro: las pensiones son un compromiso de Estado, por encima de la confrontación partidista.",
     "pagina_pdf": 34
    },
    {
     "texto": "Aseguraremos que mantengan su poder adquisitivo y suban cada año con el IPC. Aseguraremos a los más jóvenes que sus futuras pensiones también mantendrán su poder adquisitivo. Incentivaremos la jubilación activa mediante deducciones en el IRPF.",
     "pagina_pdf": 34
    }
   ]
  },
  "pp/impuestos": {
   "estado": "propuesta",
   "titular": "Bajar el impuesto sobre la renta",
   "resumen": "Propone bajar el impuesto sobre la renta a rentas medias y bajas, y a jóvenes sus cuatro primeros años pagándolo. Quiere actualizarlo con la inflación y eximir el salario mínimo.",
   "citas": [
    {
     "texto": "Elevaremos los mínimos personales y familiares del IRPF y bajaremos el IRPF de las rentas medias y bajas y de las familias. Quien cobre el salario mínimo no pagará IRPF: por ley, el umbral subirá automáticamente cada vez que suba el SMI",
     "pagina_pdf": 47
    },
    {
     "texto": "fue la decisión de no actualizar el IRPF mientras los precios crecían casi un 30%. Deflactaremos la tarifa y actualizaremos los principales parámetros del impuesto para impedir que la inflación vuelva a utilizarse como una subida encubierta de impuestos.",
     "pagina_pdf": 47
    },
    {
     "texto": "Reduciremos el IRPF de los trabajadores y autónomos de 18 a 35 años durante los cuatro primeros años en que paguen IRPF. La reducción será del 100% el primer año, del 75% el segundo, del 50% el tercero y del 25% el cuarto.",
     "pagina_pdf": 47
    }
   ]
  },
  "pp/territorio": {
   "estado": "propuesta",
   "titular": "Acordar la financiación regional",
   "resumen": "Propone un nuevo modelo de financiación autonómica, acordado entre todos y llevado a las Cortes. Plantea que ninguna comunidad salga del sistema común y cada una responda de su deuda.",
   "citas": [
    {
     "texto": "Convocaremos la Conferencia de Presidentes al inicio de la legislatura para sentar las bases de un nuevo modelo de financiación autonómica, que se acordará de manera multilateral en el Consejo de Política Fiscal y Financiera y se llevará a las Cortes.",
     "pagina_pdf": 33
    },
    {
     "texto": "Ninguna de las Comunidades que actualmente integran el régimen común saldrá de él ni habrá nuevos regímenes singulares negociados bilateralmente al margen de este sistema. Lo que es de todos se decidirá entre todos, en los foros multilaterales previstos para ello.",
     "pagina_pdf": 33
    },
    {
     "texto": "CADA COMUNIDAD AUTÓNOMA RESPONDERÁ DE SU DEUDA. Cada Comunidad responderá de sus decisiones y de su deuda. Trabajaremos de forma multilateral, en el Consejo de Política Fiscal y Financiera y con las mismas reglas para todas, en una reestructuración de la deuda de las Comunidades Autónomas.",
     "pagina_pdf": 33
    }
   ]
  },
  "pp/igualdad": {
   "estado": "propuesta",
   "titular": "Proteger a víctimas de violencia",
   "resumen": "Propone aparatos fiables para vigilar órdenes de alejamiento y proteger a los hijos de las víctimas. Quiere una ley contra la trata y menos trabas profesionales para las mujeres.",
   "citas": [
    {
     "texto": "Garantizaremos la fiabilidad de los dispositivos que vigilan las órdenes de alejamiento. […] reforzaremos la valoración del riesgo y los planes individuales de seguridad, con protección también para los hijos de las víctimas de violencia de género.",
     "pagina_pdf": 17
    },
    {
     "texto": "SE PROTEGERÁ A LAS MUJERES Y A LAS NIÑAS FRENTE A LA TRATA, LA MUTILACIÓN GENITAL Y LOS MATRIMONIOS FORZADOS. Aprobaremos una ley integral contra la trata de seres humanos para proteger a las víctimas y perseguir a las redes que se lucran con ellas.",
     "pagina_pdf": 17
    },
    {
     "texto": "NI TRABAS NI CULPAS. IGUALDAD REAL. Trabajaremos para que las políticas de igualdad aborden los problemas reales que siguen limitando la libertad y las oportunidades de las personas. Eliminaremos los obstáculos que todavía frenan la trayectoria profesional y personal de las mujeres.",
     "pagina_pdf": 35
    }
   ]
  },
  "pp/aborto": {
   "estado": "sin_propuesta",
   "terminos_buscados": [
    "abort",
    "embaraz",
    "gestaci",
    "gestante",
    "subroga",
    "vientre",
    "interrupci",
    "objeci",
    "concebid",
    "nacid",
    "matern",
    "prenatal"
   ]
  },
  "psoe/vivienda": {
   "estado": "propuesta",
   "titular": "Movilizar el 1 % del PIB al año",
   "resumen": "Propone movilizar cada año el 1 % del PIB (producción del país) para vivienda. Quiere alargar los alquileres y gravar viviendas de grandes propietarios sin uso residencial ni alquiler asequible.",
   "citas": [
    {
     "texto": "Movilizar anualmente un 1% del PIB para garantizar el acceso a la vivienda. La vivienda a precio asequible será la principal prioridad de la legislatura, con objetivos que se evaluarán de forma periódica.",
     "pagina_pdf": 27
    },
    {
     "texto": "Ampliar la duración de los contratos de arrendamiento, reforzando la estabilidad residencial de las personas inquilinas.",
     "pagina_pdf": 30
    },
    {
     "texto": "Priorizar el uso residencial y asequible de las viviendas existentes a través de un impuesto progresivo a las viviendas de grandes tenedores que no se destinen al alquiler asequible o a usos residenciales.",
     "pagina_pdf": 32
    }
   ]
  },
  "psoe/inmigracion": {
   "estado": "propuesta",
   "titular": "Aplicar un plan de integración",
   "resumen": "Propone un plan de integración con 500 millones de euros iniciales. Quiere más vías legales para pedir asilo, simplificar trámites e impulsar la contratación en el país de origen.",
   "citas": [
    {
     "texto": "Desplegar el Plan de Integración y Ciudadanía 2026 -2030, con una dotación inicial de 500 millones de euros y la colaboración de las administraciones públicas y los agentes sociales, para favorecer la integración y la convivencia",
     "pagina_pdf": 92
    },
    {
     "texto": "Ampliar las vías legales y seguras de protección internacional y reforzar el sistema público de acogida y asilo, con mecanismos para el reasentamiento y visados humanitarios",
     "pagina_pdf": 92
    },
    {
     "texto": "Queremos seguir avanzando en esta dirección: simplificar los trámites, dar seguridad jurídica, impulsar la contratación en origen, agilizar la homologación de títulos y facilitar el acceso al empleo, para aprovechar el talento de quienes vienen a vivir y trabajar aquí.",
     "pagina_pdf": 92
    }
   ]
  },
  "psoe/economia": {
   "estado": "propuesta",
   "titular": "Movilizar 120.000 millones",
   "resumen": "Propone movilizar 120.000 millones de euros para seguir modernizando la economía. Quiere simplificar el ingreso mínimo vital y unir las ayudas de luz, transporte y agua en un bono automático.",
   "citas": [
    {
     "texto": "abriremos una nueva etapa de inversión productiva, apoyada en instrumentos como el Fondo España Crece, que movilizará 120.000 millones de euros para asegurar que la modernización continúe más allá de los fondos europeos.",
     "pagina_pdf": 13
    },
    {
     "texto": "Potenciar el IMV. Crear pasarelas que automaticen y simplifiquen la concesión del IMV, utilizando datos de renta y patrimonio más recientes. Se adecuarán las cuantías y umbrales al coste de la crianza para hogares perceptores con niñas y niños.",
     "pagina_pdf": 38
    },
    {
     "texto": "Integrar el bono social eléctrico, el térmico, las bonificaciones de transporte y las tarifas sociales de telecomunicaciones y agua (estas últimas por convenio) en un único derecho que se reconozca de oficio a partir de los datos fiscales y de Seguridad Social, sin necesidad de solicitarlo.",
     "pagina_pdf": 38
    }
   ]
  },
  "psoe/empleo": {
   "estado": "propuesta",
   "titular": "Fijar por ley el salario mínimo",
   "resumen": "Propone fijar por ley el salario mínimo por encima del 60 % del salario medio y bajar la jornada a 37,5 horas sin perder sueldo. Quiere registro digital de horas.",
   "citas": [
    {
     "texto": "Blindar por ley el SMI por encima del 60% del salario medio y actualizarlo periódicamente según los precios, los salarios, la productividad y las necesidades de las personas trabajadoras",
     "pagina_pdf": 37
    },
    {
     "texto": "Completar la reducción de la jornada a 37,5 horas e incentivar los avances en la negociación colectiva hacia las 35 horas. Trabajar menos horas debe permitir ganar tiempo para la familia, los cuidados, el descanso y la vida personal, sin perder salario.",
     "pagina_pdf": 41
    },
    {
     "texto": "Erradicar las horas extra ilegales y no remuneradas. Implantar un registro horario digital fiable, que recoja las jornadas laborales reales, haciendo efectivo el derecho al descanso y la desconexión digital y reforzar la Inspección de Trabajo para perseguir los incumplimientos.",
     "pagina_pdf": 41
    }
   ]
  },
  "psoe/sanidad": {
   "estado": "propuesta",
   "titular": "Acabar con las listas de espera",
   "resumen": "Propone acabar con las listas de espera con gasto público cercano al 7 % del PIB (producción del país). Quiere sumar el dentista básico a lo público y limitar privatizaciones.",
   "citas": [
    {
     "texto": "Acabar con las listas de espera , consolidando una financiación pública de la sanidad en torno al 7% del PIB, reforzando el carácter público del Sistema Nacional de Salud y aumentando progresivamente la inversión en prevención hasta converger con la media europea.",
     "pagina_pdf": 49
    },
    {
     "texto": "Incorporaremos progresivamente a la sanidad pública los tratamientos básicos para toda la población adulta, empezando por empastes, endodoncias, reconstrucciones y tratamientos periodontales.",
     "pagina_pdf": 49
    },
    {
     "texto": "Limitar la privatización de la sanidad estableciendo la gestión directa como modalidad preferente en la prestación sanitaria",
     "pagina_pdf": 49
    }
   ]
  },
  "psoe/educacion": {
   "estado": "propuesta",
   "titular": "Escuela de 0 a 3 años para todos",
   "resumen": "Propone que la educación de 0 a 3 años llegue a todos, con más escuelas infantiles públicas. Quiere más becas, un tope de alumnos por aula y un estatuto docente.",
   "citas": [
    {
     "texto": "Universalizar la educación de 0 a 3 años , promoviendo su inclusión plena en el sistema, aumentando progresivamente la oferta de escuelas infantiles públicas",
     "pagina_pdf": 51
    },
    {
     "texto": "Ampliar y mejorar el sistema de becas y limitar la capacidad máxima por aula, incrementando la financiación y cobertura de las ayudas al estudio, con una actualización de los umbrales de renta",
     "pagina_pdf": 52
    },
    {
     "texto": "Aprobar el Estatuto del Docente para dignificar y reforzar la profesión docente, simplificando las cargas burocráticas, impulsando un plan nacional de bienestar docente",
     "pagina_pdf": 52
    }
   ]
  },
  "psoe/regeneracion": {
   "estado": "propuesta",
   "titular": "Aprobar una ley de integridad",
   "resumen": "Propone una ley y una agencia de integridad pública contra la corrupción. Quiere un registro obligatorio de grupos de interés y más autonomía para la Fiscalía.",
   "citas": [
    {
     "texto": "Aprobar una Ley Orgánica de Integridad Pública y una Estrategia Nacional Anticorrupción con mapas de riesgos en todas las administraciones , y crear una Agencia Independiente de Integridad Pública que coordine los organismos de supervisión y refuerce la protección de quienes denuncian.",
     "pagina_pdf": 102
    },
    {
     "texto": "Aprobar una ley de grupos de interés , con registro obligatorio, publicidad de sus reuniones y huella normativa, y ampliar la transparencia del patrimonio, las actividades y las incompatibilidades de los cargos públicos.",
     "pagina_pdf": 102
    },
    {
     "texto": "Reforzar la autonomía del Ministerio Fiscal, con un mandato de cinco años para la Fiscalía General del Estado desvinculado de la legislatura y la prohibición de instrucciones del Gobierno sobre casos concretos",
     "pagina_pdf": 100
    }
   ]
  },
  "psoe/pensiones": {
   "estado": "propuesta",
   "titular": "Subir pensiones con los precios",
   "resumen": "Propone recoger en la Constitución la subida de las pensiones con los precios (IPC). Quiere subir las pensiones mínimas y que el Estado financie las prestaciones no contributivas.",
   "citas": [
    {
     "texto": "Seguir desplegando las medidas de refuerzo del sistema público de pensiones y de garantía de poder adquisitivo de las pensiones actuales y futuras , y culminando el proceso de convergencia de las cuantías de las pensiones mínimas con estándares de ingresos del conjunto de la sociedad.",
     "pagina_pdf": 39
    },
    {
     "texto": "Culminar la separación de fuentes de financiación , asumiendo el Estado la financiación de prestaciones y complementos de naturaleza no contributiva",
     "pagina_pdf": 40
    },
    {
     "texto": "Blindar constitucionalmente el sistema público de pensiones y su revalorización conforme al IPC, garantizando el derecho de las personas mayores a una pensión digna, suficiente y actualizada.",
     "pagina_pdf": 40
    }
   ]
  },
  "psoe/impuestos": {
   "estado": "propuesta",
   "titular": "Gravar rentas de capital altas",
   "resumen": "Propone gravar más las rentas de capital desde 50.000 euros, hasta un 35 %. Quiere más impuestos a grandes tecnológicas y la rebaja por hijo para quien no declara.",
   "citas": [
    {
     "texto": "Incrementar la tributación de las rentas de capital más elevadas. Mantener intactos los dos primeros tramos (19% hasta 6.000€ y 21% hasta 50.000 €) y elevar los tipos a partir de ahí, llegando progresivamente a un tipo máximo del 35% para rentas del capital superiores a 300.000€.",
     "pagina_pdf": 48
    },
    {
     "texto": "Aumentar los impuestos a los tecnooligarcas, complementando la actual tasa Google. […] se debe complementar con medidas adicionales dirigidas a grandes tecnológicas y al sector de la IA.",
     "pagina_pdf": 48
    },
    {
     "texto": "Convertiremos el mínimo exento por descendiente en el IRPF en un crédito fiscal reembolsable, lo que permitirá que se beneficien de él 2 millones de hogares de ingresos medios y bajos que no tienen obligación de presentar declaración o que carecen de cuota para beneficiarse del mínimo actual.",
     "pagina_pdf": 49
    }
   ]
  },
  "psoe/territorio": {
   "estado": "propuesta",
   "titular": "Dar más dinero a las comunidades",
   "resumen": "Propone una nueva financiación autonómica con 21.000 millones de euros más y que el Estado asuma 83.000 millones de deuda de las comunidades. Quiere un Senado de representación territorial.",
   "citas": [
    {
     "texto": "Impulsaremos el nuevo sistema de financiación autonómica propuesto por el Gobierno de España y aprobado en el Consejo de Política Fiscal y Financiera, que aporta 21.000 millones de euros adicionales",
     "pagina_pdf": 60
    },
    {
     "texto": "Avanzaremos en la asunción parcial por el Estado de 83.000 millones de euros de deuda autonómica, reduciendo la carga financiera de las Comunidades Autónomas",
     "pagina_pdf": 61
    },
    {
     "texto": "Reformar el Senado para convertirlo en una auténtica Cámara de representación territorial, haciendo coincidir sus circunscripciones con el ámbito autonómico.",
     "pagina_pdf": 91
    }
   ]
  },
  "psoe/igualdad": {
   "estado": "propuesta",
   "titular": "Aprobar ley de violencia vicaria",
   "resumen": "Propone una ley contra la violencia vicaria, otra contra la trata y otra para abolir la prostitución. Quiere que sea delito crear y difundir montajes sexuales falsos con inteligencia artificial.",
   "citas": [
    {
     "texto": "Aprobar una Ley Orgánica contra la Violencia Vicaria como manifestación de la violencia de género, para garantizar la protección, prevención y atención a las víctimas.",
     "pagina_pdf": 82
    },
    {
     "texto": "Aprobar una Ley Orgánica contra la Trata de Seres Humanos, y una Ley Orgánica Abolicionista del Sistema Prostitucional, prohibiendo el proxenetismo en todas sus formas y reconociendo a las personas prostituidas como víctimas con plenos derechos",
     "pagina_pdf": 83
    },
    {
     "texto": "Tipificar como delito específico la creación y difusión de deepfakes sexuales, adaptando el Código Penal a los desafíos planteados por la inteligencia artificial generativa.",
     "pagina_pdf": 84
    }
   ]
  },
  "psoe/aborto": {
   "estado": "propuesta",
   "titular": "Garantizar el derecho al aborto",
   "resumen": "Propone reformar la Constitución para garantizar el derecho al aborto por igual en todo el territorio. Quiere reforzar la prohibición de la gestación subrogada y perseguir su intermediación y promoción.",
   "citas": [
    {
     "texto": "Blindar constitucionalmente el derecho a la interrupción voluntaria del embarazo. Impulsaremos la reforma del artículo 43 de la Constitución, iniciada en 2026, para reforzar la garantía del derecho al aborto en condiciones de igualdad en todo el territorio frente a los intentos de retroceso.",
     "pagina_pdf": 81
    },
    {
     "texto": "Fortalecer la protección frente a la explotación reproductiva , reforzando la prohibición de la gestación por sustitución y la persecución de las actividades de intermediación y promoción.",
     "pagina_pdf": 81
    }
   ]
  },
  "vox/vivienda": {
   "estado": "propuesta",
   "titular": "Aplicar la «prioridad nacional»",
   "resumen": "Propone la «prioridad nacional»: preferencia de los españoles en vivienda protegida, social y ayudas al alquiler. Quiere reformar la Ley del Suelo y construir más vivienda nueva y protegida.",
   "citas": [
    {
     "texto": "Las casas, en España, para los españoles. Prioridad nacional para acceder a una vivienda protegida, social o a una ayuda al alquiler.",
     "pagina_pdf": 23
    },
    {
     "texto": "Reforma de la Ley del Suelo. Volver a ver grúas en los cielos. Incrementar de manera sustancial y sostenida en el tiempo la construcción de vivienda nueva: ampliación de suelo disponible, agilización de procedimientos",
     "pagina_pdf": 23
    },
    {
     "texto": "Ampliación de la inversión pública en vivienda por habitante. Aumentar con urgencia la construcción de vivienda protegida para las familias españolas",
     "pagina_pdf": 23
    }
   ]
  },
  "vox/inmigracion": {
   "estado": "propuesta",
   "titular": "No acoger a más inmigrantes",
   "resumen": "Plantea no acoger más inmigrantes y prohibir las «regularizaciones masivas»: quien entre ilegalmente nunca podrá regularizarse. Quiere endurecer los requisitos de nacionalidad y suprimir el arraigo (vía para tener papeles).",
   "citas": [
    {
     "texto": "Ni uno más. Después de recibir a 5 millones de personas en 5 años España no puede acoger a más inmigrantes. Prohibición de las regularizaciones masivas. Quien entra de forma ilegal jamás podrá regularizar su situación.",
     "pagina_pdf": 15
    },
    {
     "texto": "Endurecimiento de los requisitos de adquisición de la nacionalidad española.",
     "pagina_pdf": 15
    },
    {
     "texto": "Supresión de la institución del arraigo como forma de atajar la inmigración ilegal",
     "pagina_pdf": 15
    }
   ]
  },
  "vox/economia": {
   "estado": "propuesta",
   "titular": "Reindustrializar España",
   "resumen": "Propone reindustrializar España y una energía «segura, cierta y asequible», sin tope a la inversión en redes eléctricas. Quiere extender los beneficios de familia numerosa desde el primer hijo.",
   "citas": [
    {
     "texto": "Reindustrialización radical de la economía española . Revolucionar la política energética: segura, cierta y asequible.",
     "pagina_pdf": 11
    },
    {
     "texto": "Eliminar el tope a la inversión en redes para que España tenga la red eléctrica que necesita para crecer, contratar y construir vivienda.",
     "pagina_pdf": 11
    },
    {
     "texto": "Todos los beneficios que ahora existen para las familias numerosas se aumentarán y se extenderán a todas las familias de manera progresiva desde el primer hijo",
     "pagina_pdf": 51
    }
   ]
  },
  "vox/empleo": {
   "estado": "propuesta",
   "titular": "Derogar ley laboral «de Sánchez»",
   "resumen": "Plantea «trabajo estable y salarios dignos» y quiere derogar «la legislación laboral de Sánchez». Propone cuota cero para autónomos que ingresen menos del salario mínimo.",
   "citas": [
    {
     "texto": "Trabajo estable y salarios dignos para los españoles.",
     "pagina_pdf": 12
    },
    {
     "texto": "Derogar la legislación laboral de Sánchez",
     "pagina_pdf": 13
    },
    {
     "texto": "Apoyo a los trabajadores autónomos. Cuota de cero euros si los ingresos no llegan al Salario Mínimo Interprofesional y, superado dicho umbral, una cuota progresiva desde los 50 euros en función de sus ingresos.",
     "pagina_pdf": 9
    }
   ]
  },
  "vox/sanidad": {
   "estado": "propuesta",
   "titular": "Unificar la tarjeta sanitaria",
   "resumen": "Propone una tarjeta sanitaria única con historia clínica compartida en toda España. Quiere reforzar la atención primaria y pediátrica. Plantea un plan nacional para reducir las listas de espera.",
   "citas": [
    {
     "texto": "Misma atención de calidad para todos los españoles: tarjeta sanitaria única con historia clínica compartida en todo el territorio nacional.",
     "pagina_pdf": 37
    },
    {
     "texto": "Refuerzo de la atención primaria y pediátrica en todo el territorio nacional.",
     "pagina_pdf": 37
    },
    {
     "texto": "Plan nacional de reducción de listas de espera",
     "pagina_pdf": 37
    }
   ]
  },
  "vox/educacion": {
   "estado": "propuesta",
   "titular": "Unificar currículo y exámenes",
   "resumen": "Propone unificar currículo, evaluaciones e inspección, y garantizar la educación en español en toda España. Quiere libre elección de centro y derogar la ley de educación (LOMLOE).",
   "citas": [
    {
     "texto": "unificar currículo, evaluaciones nacionales e inspección. Reválidas y EVAU única. Se garantizará la educación en español en todo el territorio nacional.",
     "pagina_pdf": 41
    },
    {
     "texto": "Garantizar la libre elección de centro educativo en todos los niveles",
     "pagina_pdf": 41
    },
    {
     "texto": "Eliminación de contenidos ideológicos ajenos a las materias académicas. Derogación de la LOMLOE",
     "pagina_pdf": 41
    }
   ]
  },
  "vox/regeneracion": {
   "estado": "propuesta",
   "titular": "«Despolitizar» la Justicia",
   "resumen": "Propone que los jueces elijan a doce miembros del Consejo General del Poder Judicial. Quiere auditar las administraciones y que los cargos públicos condenados por corrupción respondan con sus bienes.",
   "citas": [
    {
     "texto": "Independencia y despolitización de la Justicia. Modificar la Ley Orgánica del Poder Judicial para que los doce vocales de procedencia judicial del Consejo General del Poder Judicial sean elegidos mediante voto personal, directo y secreto por y entre los propios jueces y magistrados",
     "pagina_pdf": 55
    },
    {
     "texto": "Lucha contra la corrupción. Auditoría integral de todas las Administraciones con el fin destapar cualquier indicio de corrupción y llevarlo ante la Justicia.",
     "pagina_pdf": 57
    },
    {
     "texto": "Reforzaremos la responsabilidad patrimonial personal de los cargos públicos condenados por delitos de corrupción, garantizando que respondan con todos sus bienes presentes y futuros",
     "pagina_pdf": 57
    }
   ]
  },
  "vox/pensiones": {
   "estado": "propuesta",
   "titular": "Garantizar pensiones sostenibles",
   "resumen": "Plantea sostener las pensiones revitalizando la economía, con más empleo y mejores salarios. Propone que el Estado pague la cotización de los españoles dedicados a cuidar a sus hijos.",
   "citas": [
    {
     "texto": "Garantizar la sostenibilidad del sistema de pensiones. Revitalizar la economía, impulsar el empleo, mejorar los salarios y aumentar la riqueza.",
     "pagina_pdf": 10
    },
    {
     "texto": "Cotización a la Seguridad Social financiada por el Estado para los españoles dedicados al cuidado de sus hijos. Formar una familia y criar a los hijos es una contribución esencial al futuro de España y no puede ser motivo de penalización en la jubilación.",
     "pagina_pdf": 51
    }
   ]
  },
  "vox/impuestos": {
   "estado": "propuesta",
   "titular": "Bajar los impuestos",
   "resumen": "Plantea una «rebaja masiva de impuestos»: bajar el impuesto sobre la renta, también según el número de hijos; el IVA, sobre todo de productos básicos, y el de sociedades (empresas).",
   "citas": [
    {
     "texto": "Rebaja masiva de impuestos […] Reforma del sistema de tributación sobre la renta (IRPF). Simplificación y bajada del IRPF. Reducción del tipo aplicable del IRPF para cada contribuyente o familia en función del número de hijos.",
     "pagina_pdf": 9
    },
    {
     "texto": "Rebaja del tipo reducido y del tipo general del IVA atendiendo prioritariamente a productos esenciales y de primera necesidad.",
     "pagina_pdf": 9
    },
    {
     "texto": "Reducir el tipo del Impuesto de Sociedades",
     "pagina_pdf": 9
    }
   ]
  },
  "vox/territorio": {
   "estado": "propuesta",
   "titular": "Garantizar la unidad de mercado",
   "resumen": "Propone que lo legal en una región lo sea en toda España. Quiere recuperar el delito de sedición e ilegalizar partidos y organizaciones que atenten contra la unidad de España.",
   "citas": [
    {
     "texto": "España es un solo mercado y una sola Nación. Ley de Unidad de Mercado. Lo que es legal en una región de España, lo es en toda España.",
     "pagina_pdf": 28
    },
    {
     "texto": "Respuesta contundente frente a los ataques contra la Unidad Nacional. Recuperar el delito de sedición",
     "pagina_pdf": 55
    },
    {
     "texto": "Ilegalización de los partidos políticos, asociaciones u organizaciones de cualquier tipo que atenten contra la soberanía e independencia de España, su unidad e integridad territorial.",
     "pagina_pdf": 56
    }
   ]
  },
  "vox/igualdad": {
   "estado": "propuesta",
   "titular": "Derogar las «leyes de género»",
   "resumen": "Propone derogar las «leyes de género» y aprobar otras que protejan a las mujeres víctimas de violencia. Quiere más prevención, protección policial y judicial y asistencia a las víctimas.",
   "citas": [
    {
     "texto": "Derogar las leyes que han criminalizado a los hombres y desprotegido a las mujeres. Las leyes de género no han contribuido a proteger a las mujeres o reducir el número de víctimas",
     "pagina_pdf": 30
    },
    {
     "texto": "En su lugar, impulsar la aprobación de leyes y normas que protejan de verdad a las mujeres víctimas de violencia, en especial a aquellas que sufran maltrato",
     "pagina_pdf": 30
    },
    {
     "texto": "Protección efectiva de las mujeres frente a la violencia y las agresiones sexuales. Reforzar la prevención, la protección policial y judicial y la asistencia integral a las víctimas",
     "pagina_pdf": 46
    }
   ]
  },
  "vox/aborto": {
   "estado": "propuesta",
   "titular": "Defender «el derecho a la vida»",
   "resumen": "Propone defender «el derecho a la vida» desde la concepción y acabar con la «cultura de la muerte». Quiere garantizar la objeción de conciencia de sanitarios y farmacéuticos.",
   "citas": [
    {
     "texto": "Defensa del derecho a la vida desde su concepción hasta la muerte natural y fin de la cultura de la muerte. Garantizar la objeción de conciencia de los profesionales sanitarios y farmacéuticos",
     "pagina_pdf": 52
    }
   ]
  },
  "adelante/vivienda": {
   "estado": "propuesta",
   "titular": "Alquiler máximo: 20 % del sueldo",
   "resumen": "Propone que ningún alquiler supere el 20 % del salario, con contratos indefinidos. Quiere que los pisos de bancos y fondos sean públicos y prohibir que los fondos compren vivienda.",
   "citas": [
    {
     "texto": "Ningún alquiler por encima del 20 % del salario y contratos indefinidos.",
     "pagina_pdf": 4
    },
    {
     "texto": "Desprivatización de todas las viviendas de bancos y fondos de inversión para la creación de un parque público de al menos el 9 % del total en régimen de alquiler accesible.",
     "pagina_pdf": 4
    },
    {
     "texto": "Prohibición de la compra especulativa y de que los fondos compren vivienda.",
     "pagina_pdf": 4
    }
   ]
  },
  "adelante/inmigracion": {
   "estado": "propuesta",
   "titular": "Derogar la Ley de Extranjería",
   "resumen": "Propone derogar la Ley de Extranjería, una regularización extraordinaria y cerrar los centros de internamiento de extranjeros, empezando por el de Algeciras.",
   "citas": [
    {
     "texto": "Derogación de la Ley de Extranjería, regularización extraordinaria y cierre de los CIE, empezando por Algeciras.",
     "pagina_pdf": 28
    },
    {
     "texto": "Derogación de la ley actual y una nueva basada en derechos.",
     "pagina_pdf": 106
    }
   ]
  },
  "adelante/economia": {
   "estado": "propuesta",
   "titular": "Crear supermercados públicos",
   "resumen": "Propone crear supermercados públicos con precios asequibles en productos básicos y una banca pública que preste a pymes y autónomos. Quiere «desprivatizar» la energía y crear una empresa pública andaluza.",
   "citas": [
    {
     "texto": "Creación de supermercados públicos que paguen precios justos a agricultores/as y ganaderos/as, potencien las cadenas cortas de distribución y garanticen precios asequibles en productos de primer necesidad a toda la población.",
     "pagina_pdf": 12
    },
    {
     "texto": "Entidad pública con control democrático que dé crédito a pymes, personas autónomas, cooperativas y vivienda pública, con cuentas básicas gratuitas.",
     "pagina_pdf": 61
    },
    {
     "texto": "Desprivatizar la energía y crear una empresa pública andaluza de energía",
     "pagina_pdf": 22
    }
   ]
  },
  "adelante/empleo": {
   "estado": "propuesta",
   "titular": "Reducir la jornada a 32 horas",
   "resumen": "Propone 32 horas semanales y prohibir el turno partido, sin rebaja de sueldo. Quiere que salarios y salario mínimo suban por ley con los precios.",
   "citas": [
    {
     "texto": "jornada de 32 horas y salarios que suban con los precios.",
     "pagina_pdf": 57
    },
    {
     "texto": "Sin rebaja de sueldo, en dos años en las grandes empresas y en cuatro en las pymes, con apoyo público para reorganizarse, y prohibición del turno partido sin rebaja de salario.",
     "pagina_pdf": 63
    },
    {
     "texto": "Salarios y salario mínimo ligados a la inflación por ley.",
     "pagina_pdf": 9
    }
   ]
  },
  "adelante/sanidad": {
   "estado": "propuesta",
   "titular": "Hacer 100 % pública la sanidad",
   "resumen": "Propone una sanidad 100 % pública, sin conciertos con la privada, con gasto mínimo del 8 % del PIB (producción del país). Quiere cita en atención primaria en 48 horas.",
   "citas": [
    {
     "texto": "Sanidad 100 % pública, con un suelo de gasto del 8 % del PIB fijado por ley, derogación de la Ley 15/1997 y fin de los conciertos y externalizaciones",
     "pagina_pdf": 14
    },
    {
     "texto": "La atención primaria será el centro del sistema: cita en 48 horas, al menos 10 minutos por paciente",
     "pagina_pdf": 36
    },
    {
     "texto": "Cita en salud mental comunitaria en un máximo de 15 días desde la derivación",
     "pagina_pdf": 39
    }
   ]
  },
  "adelante/educacion": {
   "estado": "propuesta",
   "titular": "Avanzar a una sola red pública",
   "resumen": "Propone avanzar hacia una sola red educativa pública, laica y gratuita, con al menos el 5 % del PIB (producción del país). Quiere escuela de 0-3 años pública y gratuita.",
   "citas": [
    {
     "texto": "La educación pública tendrá un suelo del 5 % del PIB y avanzaremos hacia una sola red pública, laica y gratuita, con un plan de transición para los conciertos.",
     "pagina_pdf": 42
    },
    {
     "texto": "La etapa 0–3 será universal, pública y gratuita",
     "pagina_pdf": 44
    },
    {
     "texto": "Ninguna universidad privada más y ni un euro público desviado a la privada",
     "pagina_pdf": 19
    }
   ]
  },
  "adelante/regeneracion": {
   "estado": "propuesta",
   "titular": "Pagar a cargos su sueldo previo",
   "resumen": "Propone que los cargos públicos cobren lo que ganaban antes, o el salario medio si vienen del paro, sin pagas vitalicias. Quiere una autoridad independiente contra la corrupción.",
   "citas": [
    {
     "texto": "Cobrarán lo que cobraban, sin pagas vitalicias y con una autoridad independiente contra la corrupción.",
     "pagina_pdf": 26
    },
    {
     "texto": "Los cargos públicos cobrarán lo mismo que ganaban antes, y quien venga del paro, el salario medio.",
     "pagina_pdf": 90
    }
   ]
  },
  "adelante/pensiones": {
   "estado": "propuesta",
   "titular": "Subir pensiones con los precios",
   "resumen": "Propone recoger en la Constitución las pensiones públicas y subirlas por ley con los precios. Quiere pensiones mínimas iguales al salario mínimo neto y jubilación a los 64 años.",
   "citas": [
    {
     "texto": "Un sistema público blindado en la Constitución y revalorizado con el IPC real por ley",
     "pagina_pdf": 13
    },
    {
     "texto": "pensiones mínimas y no contributivas iguales al salario mínimo neto",
     "pagina_pdf": 13
    },
    {
     "texto": "jubilación a los 64 años, desde los 55 con contrato de relevo",
     "pagina_pdf": 13
    }
   ]
  },
  "adelante/impuestos": {
   "estado": "propuesta",
   "titular": "Gravar las grandes fortunas",
   "resumen": "Propone gravar grandes fortunas, terratenientes y, permanentemente, beneficios extraordinarios de banca y eléctricas. Quiere bajar el impuesto sobre la renta a rentas bajas y subirlo con fuerza desde 100.000 euros.",
   "citas": [
    {
     "texto": "Impuesto a las grandes fortunas y a los terratenientes; un IRPF que baje a las rentas más bajas y suba con fuerza a partir de 100.000 euros al año, e impuestos permanentes a los beneficios extraordinarios de la banca y las eléctricas.",
     "pagina_pdf": 10
    }
   ]
  },
  "adelante/territorio": {
   "estado": "propuesta",
   "titular": "Reformar la financiación",
   "resumen": "Propone que la financiación no garantice a las comunidades más ricas seguir recibiendo más. Quiere el máximo autogobierno y que se pague la «deuda histórica» que reconoce el Estatuto.",
   "citas": [
    {
     "texto": "El nuevo sistema no garantizará a las comunidades más ricas que sigan recibiendo más.",
     "pagina_pdf": 72
    },
    {
     "texto": "pago de la deuda histórica que reconoce el Estatuto",
     "pagina_pdf": 23
    },
    {
     "texto": "Exigimos el máximo nivel de autonomía y autogobierno en cualquier reforma.",
     "pagina_pdf": 24
    }
   ]
  },
  "adelante/igualdad": {
   "estado": "propuesta",
   "titular": "Gastar más contra el machismo",
   "resumen": "Propone dar más dinero, para varios años, al Pacto de Estado contra la violencia machista y que llegue a los ayuntamientos. Quiere una ley de igualdad de sueldos entre sexos.",
   "citas": [
    {
     "texto": "Igualdad real y lucha contra el machismo Pacto de Estado contra la violencia machista con presupuesto",
     "pagina_pdf": 27
    },
    {
     "texto": "Pacto de Estado con presupuesto Más financiación, finalista y plurianual, que llegue a los ayuntamientos.",
     "pagina_pdf": 98
    },
    {
     "texto": "Ley de igualdad retributiva Salarios desglosados por sexo, incluidos complementos, y planes de igualdad con objetivos medibles.",
     "pagina_pdf": 100
    }
   ]
  },
  "adelante/aborto": {
   "estado": "propuesta",
   "titular": "Garantizar el aborto público",
   "resumen": "Propone garantizar el aborto en la sanidad pública y recogerlo en la Constitución. No quiere dinero público para «organizaciones que acosan» a quien aborta. Quiere prohibir la gestación subrogada.",
   "citas": [
    {
     "texto": "El derecho al aborto se garantizará en la sanidad pública de todas las provincias, sin conciertos ni copagos, y quedará blindado en la Constitución.",
     "pagina_pdf": 40
    },
    {
     "texto": "ni un euro público para las organizaciones que acosan a las mujeres que abortan.",
     "pagina_pdf": 27
    },
    {
     "texto": "Prohibición de la gestación subrogada",
     "pagina_pdf": 98
    }
   ]
  },
  "arames/vivienda": {
   "estado": "pendiente"
  },
  "arames/inmigracion": {
   "estado": "pendiente"
  },
  "arames/economia": {
   "estado": "pendiente"
  },
  "arames/empleo": {
   "estado": "pendiente"
  },
  "arames/sanidad": {
   "estado": "pendiente"
  },
  "arames/educacion": {
   "estado": "pendiente"
  },
  "arames/regeneracion": {
   "estado": "pendiente"
  },
  "arames/pensiones": {
   "estado": "pendiente"
  },
  "arames/impuestos": {
   "estado": "pendiente"
  },
  "arames/territorio": {
   "estado": "pendiente"
  },
  "arames/igualdad": {
   "estado": "pendiente"
  },
  "arames/aborto": {
   "estado": "pendiente"
  },
  "bng/vivienda": {
   "estado": "propuesta",
   "titular": "Limitar el precio del alquiler",
   "resumen": "Propone limitar por ley los alquileres y prohibir desahucios de personas vulnerables. Quiere frenar el uso turístico de viviendas y dedicar el 3 % del presupuesto estatal a alquiler público.",
   "citas": [
    {
     "texto": "Topar por lei os prezos dos alugueiros e prohibir os desafiuzamentos de persoas en situación de vulnerabilidade, así como decretar a suspensión automática e indefinida de calquera lanzamento sen alternativa habitacional",
     "pagina_pdf": 12,
     "traduccion": "Topar por ley los precios de los alquileres y prohibir los desahucios de personas en situación de vulnerabilidad, así como decretar la suspensión automática e indefinida de cualquier lanzamiento sin alternativa habitacional"
    },
    {
     "texto": "Estabelecer mecanismos eficaces para frear a fuxida de vivenda habitual cara o alugueiro de tempada, por habitacións e de uso turístico.",
     "pagina_pdf": 12,
     "traduccion": "Establecer mecanismos eficaces para frenar la fuga de vivienda habitual hacia el alquiler de temporada, por habitaciones y de uso turístico."
    },
    {
     "texto": "Destinar o 3% dos Orzamentos Xerais do Estado para financiar mediante o Plan estatal de vivenda a creación dun parque público de alugueiro permanente.",
     "pagina_pdf": 12,
     "traduccion": "Destinar el 3% de los Presupuestos Generales del Estado para financiar mediante el Plan estatal de vivienda la creación de un parque público de alquiler permanente."
    }
   ]
  },
  "bng/inmigracion": {
   "estado": "propuesta",
   "titular": "Facilitar la regularización",
   "resumen": "Propone facilitar la regularización de inmigrantes y garantizar sus derechos, como vivienda o sanidad. Pide cerrar los centros de internamiento de extranjeros y acabar con las deportaciones en caliente.",
   "citas": [
    {
     "texto": "Promover a regularización administrativa como vía para eliminar a irregularidade como ferramenta de explotación.",
     "pagina_pdf": 22,
     "traduccion": "Promover la regularización administrativa como vía para eliminar la irregularidad como herramienta de explotación."
    },
    {
     "texto": "Impulsar as reformas lexislativas necesarias para garantir os dereitos da poboación inmigrante (vivenda, traballo, atención sanitaria, educación...) así como favorecer e facilitar os procesos de regularización administrativa.",
     "pagina_pdf": 23,
     "traduccion": "Impulsar las reformas legislativas necesarias para garantizar los derechos de la población inmigrante (vivienda, trabajo, atención sanitaria, educación...) así como favorecer y facilitar los procesos de regularización administrativa."
    },
    {
     "texto": "Demandar o peche dos Centros de Internamento para Estranxeiros (CIEs) no Estado español e o fin das deportacións en quente, garantindo o respecto escrupuloso dos dereitos humanos para a poboación inmigrante, refuxiada e/ou solicitante de asilo.",
     "pagina_pdf": 23,
     "traduccion": "Demandar el cierre de los Centros de Internamiento de Extranjeros (CIE) en el Estado español y el fin de las deportaciones en caliente, garantizando el respeto escrupuloso de los derechos humanos para la población inmigrante, refugiada y/o solicitante de asilo."
    }
   ]
  },
  "bng/economia": {
   "estado": "propuesta",
   "titular": "Regular precios de comida básica",
   "resumen": "Propone regular por ley el precio de los alimentos básicos y fijar un máximo para gasolina y diésel. Quiere una tarifa eléctrica gallega con menos peajes por transportar la electricidad.",
   "citas": [
    {
     "texto": "Regular legalmente os prezos dos produtos básicos de alimentación, garantindo simultaneamente prezos accesíbeis para a maioría social e retribucións xustas para quen os produce.",
     "pagina_pdf": 21,
     "traduccion": "Regular legalmente los precios de los productos básicos de alimentación, garantizando simultáneamente precios asequibles para la mayoría social y retribuciones justas para quien los produce."
    },
    {
     "texto": "Estabelecer con carácter urxente un prezo máximo legal para a gasolina e o diésel —tomando como referencia o prezo medio das gasolineiras o 24 de febreiro de 2022— que se manterá vixente ata a estabilización dos prezos e a aprobación dunha solución fiscal xusta.",
     "pagina_pdf": 21,
     "traduccion": "Establecer con carácter urgente un precio máximo legal para la gasolina y el diésel —tomando como referencia el precio medio de las gasolineras el 24 de febrero de 2022— que se mantendrá vigente hasta la estabilización de los precios y la aprobación de una solución fiscal justa."
    },
    {
     "texto": "Impulsar unha tarifa eléctrica galega que considere, a través de redución nas peaxes do transporte, o papel de Galiza de nación excedentaria na produción eléctrica, compensando o impacto ambiental e social derivado da súa produción.",
     "pagina_pdf": 54,
     "traduccion": "Impulsar una tarifa eléctrica gallega que tenga en cuenta, mediante una reducción de los peajes del transporte, el papel de Galicia como nación excedentaria en producción eléctrica, compensando el impacto ambiental y social derivado de su producción."
    }
   ]
  },
  "bng/empleo": {
   "estado": "propuesta",
   "titular": "Derogar las reformas laborales",
   "resumen": "Propone derogar las reformas laborales y recuperar 45 días de indemnización por despido improcedente. Quiere 35 horas semanales sin bajar sueldo y el salario mínimo al 60 % del medio.",
   "citas": [
    {
     "texto": "Derrogar integramente das contrarreformas laborais que consolidaron a mudanza aprobada en 2021 e impulsar unha modificación integral do Estatuto do Traballo para restituír, entre outros dereitos: Os 45 días de indemnización e un máximo de 42 mensualidades por despedimento improcedente.",
     "pagina_pdf": 15,
     "traduccion": "Derogar íntegramente las contrarreformas laborales que consolidaron el cambio aprobado en 2021 e impulsar una modificación integral del Estatuto del Trabajo para restituir, entre otros derechos: Los 45 días de indemnización y un máximo de 42 mensualidades por despido improcedente."
    },
    {
     "texto": "Promover a implantación da xornada laboral de 35 horas semanais sen redución salarial, e avanzar no horizonte da xornada de 32 horas semanais en 4 xornadas.",
     "pagina_pdf": 15,
     "traduccion": "Promover la implantación de la jornada laboral de 35 horas semanales sin reducción salarial, y avanzar en el horizonte de la jornada de 32 horas semanales en 4 jornadas."
    },
    {
     "texto": "Incrementar o Salario Mínimo Interprofesional até o situar no 60 % do salario medio, tal e como fixa a Carta Social Europea conforme aos datos do EUROSTAT.",
     "pagina_pdf": 15,
     "traduccion": "Incrementar el Salario Mínimo Interprofesional hasta situarlo en el 60 % del salario medio, tal y como fija la Carta Social Europea conforme a los datos de EUROSTAT."
    }
   ]
  },
  "bng/sanidad": {
   "estado": "propuesta",
   "titular": "Financiar más la sanidad pública",
   "resumen": "Propone financiar la sanidad pública al menos como la media europea por habitante y que solo entidades públicas la gestionen. Quiere ampliar los servicios cubiertos, como la atención dental.",
   "citas": [
    {
     "texto": "Aumentar o financiamento da sanidade pública, até como mínimo a media de investimento por habitante da UE, co incremento do valor dos parámetros de dispersión e envellecemento da poboación",
     "pagina_pdf": 37,
     "traduccion": "Aumentar la financiación de la sanidad pública hasta, como mínimo, la media de inversión por habitante de la UE, con el incremento del valor de los parámetros de dispersión y envejecimiento de la población"
    },
    {
     "texto": "Garantir o carácter público da sanidade e reducir as súas posibilidades de privatización, mediante unha modificación da Lei 15/97 […] que asegure que a titularidade, o financiamento, a xestión e a provisión de servizos sanitarios se fará con entidades exclusivamente públicas.",
     "pagina_pdf": 37,
     "traduccion": "Garantizar el carácter público de la sanidad y reducir sus posibilidades de privatización, mediante una modificación de la Ley 15/97 […] que asegure que la titularidad, la financiación, la gestión y la provisión de servicios sanitarios se hará con entidades exclusivamente públicas."
    },
    {
     "texto": "Ampliar a Carteira de Servizos comúns do sistema público de saúde […] así como as prestacións sanitarias actualmente fora da atención primaria, ou só parcialmente financiadas como asistencia odontolóxica",
     "pagina_pdf": 37,
     "traduccion": "Ampliar la Cartera de Servicios comunes del sistema público de salud […] así como las prestaciones sanitarias actualmente fuera de la atención primaria, o solo parcialmente financiadas, como la asistencia odontológica"
    }
   ]
  },
  "bng/educacion": {
   "estado": "propuesta",
   "titular": "Que Galicia decida su educación",
   "resumen": "Quiere leyes educativas gallegas. Propone una sola red, la pública, de 0 a 18 años, y dedicar a educación al menos el 7 % del PIB (producción del país).",
   "citas": [
    {
     "texto": "Estabelecer un marco educativo novo que supere as limitacións competenciais […] que Galiza poida organizar e ordenar o sistema educativo mediante unha Lei galega de educación que regule o noso sistema educativo até o Bacharelato, unha Lei galega de formación profesional",
     "pagina_pdf": 34,
     "traduccion": "Establecer un marco educativo nuevo que supere las limitaciones competenciales […] que Galicia pueda organizar y ordenar el sistema educativo mediante una Ley gallega de educación que regule nuestro sistema educativo hasta el Bachillerato, una Ley gallega de formación profesional"
    },
    {
     "texto": "Promover un modelo educativo fundamentado no dereito universal á educación para os galegos e galegas de 0 a 18 anos e obrigatoria de 3 a 18 anos, sustentado nunha única rede de ensino, a pública",
     "pagina_pdf": 34,
     "traduccion": "Promover un modelo educativo fundamentado en el derecho universal a la educación para los gallegos y gallegas de 0 a 18 años, y obligatoria de 3 a 18 años, sustentado en una única red de enseñanza, la pública"
    },
    {
     "texto": "Dotar o sistema educativo de maiores niveis de calidade, apostando polo crecemento dos orzamentos destinados á educación até lle dedicar, como mínimo, 7% do PIB.",
     "pagina_pdf": 35,
     "traduccion": "Dotar al sistema educativo de mayores niveles de calidad, apostando por el crecimiento de los presupuestos destinados a la educación hasta dedicarle, como mínimo, el 7% del PIB."
    }
   ]
  },
  "bng/regeneracion": {
   "estado": "propuesta",
   "titular": "Inhabilitar cargos que defrauden",
   "resumen": "Propone inhabilitar a cargos públicos que defrauden a Hacienda y regular estrictamente las puertas giratorias. Quiere que Galicia sea distrito electoral y quitar el mínimo del 5 % de votos.",
   "citas": [
    {
     "texto": "Inhabilitación directa de cargos públicos e representativos que cometan fraude fiscal ou cando se detecten operacións económicas propias —ou en conivencia co seu contorno familiar e profesional— a través de paraísos fiscais",
     "pagina_pdf": 41,
     "traduccion": "Inhabilitación directa de cargos públicos y representativos que cometan fraude fiscal o cuando se detecten operaciones económicas propias —o en connivencia con su entorno familiar y profesional— a través de paraísos fiscales"
    },
    {
     "texto": "Regulación estrita das portas xiratorias e das incompatibilidades; concretamente a supresión da posibilidade de acordar a compatibilidade profesional polas propias Cámaras daquelas persoas que ostentaren a condición de deputadas e senadoras.",
     "pagina_pdf": 41,
     "traduccion": "Regulación estricta de las puertas giratorias y de las incompatibilidades; concretamente, la supresión de la posibilidad de que las propias Cámaras acuerden la compatibilidad profesional de aquellas personas que ostenten la condición de diputadas y senadoras."
    },
    {
     "texto": "Reformar estruturalmente a normativa electoral: implantación do método proporcional directo (cota Hare); estabelecemento de Galiza como circunscrición electoral; eliminación das porcentaxes mínimas de 5% para conseguir representación",
     "pagina_pdf": 32,
     "traduccion": "Reformar estructuralmente la normativa electoral: implantación del método proporcional directo (cuota Hare); establecimiento de Galicia como circunscripción electoral; eliminación de los porcentajes mínimos del 5% para conseguir representación"
    }
   ]
  },
  "bng/pensiones": {
   "estado": "propuesta",
   "titular": "Derogar reformas de pensiones",
   "resumen": "Propone derogar las reformas de pensiones de 2011, 2013, 2021 y 2023. Quiere subir cada año las pensiones según los precios (IPC) y que las mínimas lleguen al salario mínimo.",
   "citas": [
    {
     "texto": "Derrogación das reformas das pensións aprobadas en 2011, 2013, 2021 e 2023.",
     "pagina_pdf": 18,
     "traduccion": "Derogación de las reformas de las pensiones aprobadas en 2011, 2013, 2021 y 2023."
    },
    {
     "texto": "Incremento das pensións mínimas até situalas como mínimo na mesma contía que o Salario Mínimo Interprofesional (60 % do salario medio, conforme ás cifras do EUROSTAT).",
     "pagina_pdf": 18,
     "traduccion": "Incremento de las pensiones mínimas hasta situarlas, como mínimo, en la misma cuantía que el Salario Mínimo Interprofesional (60 % del salario medio, conforme a las cifras de EUROSTAT)."
    },
    {
     "texto": "Revalorización anual das pensións conforme ao IPC real.",
     "pagina_pdf": 18,
     "traduccion": "Revalorización anual de las pensiones conforme al IPC real."
    }
   ]
  },
  "bng/impuestos": {
   "estado": "propuesta",
   "titular": "Gravar más las rentas altas",
   "resumen": "Propone gravar más las rentas altas, también de capital. Quiere IVA al 5 % en luz y gas y hacer permanentes y ampliar impuestos a banca, grandes energéticas y fortunas.",
   "citas": [
    {
     "texto": "defendemos promover reformas na lexislación estatal para lograr un incremento da progresividade na tributación dos rendementos do capital e das rendas máis altas",
     "pagina_pdf": 43,
     "traduccion": "defendemos promover reformas en la legislación estatal para lograr un incremento de la progresividad en la tributación de los rendimientos del capital y de las rentas más altas"
    },
    {
     "texto": "Rebaixar de novo o IVE aplicado á electricidade, gas, biomasa para quecemento e madeira para leña, e do resto de subministracións básicas ao 5% e estabelecer a súa permanencia.",
     "pagina_pdf": 44,
     "traduccion": "Rebajar de nuevo el IVA aplicado a la electricidad, el gas, la biomasa para calefacción y la madera para leña, y el del resto de suministros básicos, al 5% y establecer su permanencia."
    },
    {
     "texto": "Blindar a permanencia dos impostos específicos aos beneficios da banca, das grandes enerxéticas e ás grandes fortunas, reducir os límites de exención, aumentar a súa progresividade e traspasar a súa xestión á Galiza.",
     "pagina_pdf": 44,
     "traduccion": "Blindar la permanencia de los impuestos específicos a los beneficios de la banca, de las grandes energéticas y a las grandes fortunas, reducir los límites de exención, aumentar su progresividad y traspasar su gestión a Galicia."
    }
   ]
  },
  "bng/territorio": {
   "estado": "propuesta",
   "titular": "Que Galicia cobre los impuestos",
   "resumen": "Propone un concierto económico: que Galicia recaude todos los impuestos y decida cómo invertirlos. Pide todos los traspasos pendientes del Estado. Quiere permitir referendos vinculantes, también sobre autodeterminación.",
   "citas": [
    {
     "texto": "Un novo modelo de financiamento baseado no concerto económico e na bilateralidade co Estado. Trátase de que Galiza recade todos os impostos e teña capacidade para decidir como os inviste",
     "pagina_pdf": 8,
     "traduccion": "Un nuevo modelo de financiación basado en el concierto económico y en la bilateralidad con el Estado. Se trata de que Galicia recaude todos los impuestos y tenga capacidad para decidir cómo los invierte"
    },
    {
     "texto": "En todo o caso, traspaso á Administración Galega de todas aquelas competencia previstas e que aínda detén a Administración do Estado.",
     "pagina_pdf": 10,
     "traduccion": "En todo caso, traspaso a la Administración gallega de todas aquellas competencias previstas y que aún tiene la Administración del Estado."
    },
    {
     "texto": "Impulsar a participación directa a través de consultas populares. Neste sentido, promoveremos e apoiaremos as mudanzas legais precisas que posibilitaren a convocatoria de referendos vinculantes en asuntos de interese, incluído o dereito de autodeterminación",
     "pagina_pdf": 32,
     "traduccion": "Impulsar la participación directa a través de consultas populares. En este sentido, promoveremos y apoyaremos los cambios legales precisos que hagan posible la convocatoria de referendos vinculantes en asuntos de interés, incluido el derecho de autodeterminación"
    }
   ]
  },
  "bng/igualdad": {
   "estado": "propuesta",
   "titular": "Combatir toda violencia machista",
   "resumen": "Propone una reforma legal integral que cubra toda violencia contra las mujeres. Quiere recoger el término feminicidio en la ley y abolir la prostitución castigando a proxenetas y clientes.",
   "citas": [
    {
     "texto": "Cumprir as obrigas internacionais en materia de prevención e loita contra todas as formas de violencia machista, […] realizar unha reforma lexislativa integral que garanta a cobertura de todos os tipos de violencias contra as mulleres na lei orgánica correspondente",
     "pagina_pdf": 24,
     "traduccion": "Cumplir las obligaciones internacionales en materia de prevención y lucha contra todas las formas de violencia machista, […] realizar una reforma legislativa integral que garantice la cobertura de todos los tipos de violencias contra las mujeres en la ley orgánica correspondiente"
    },
    {
     "texto": "Introducir o termo feminicidio na lexislación española e impulsar un Estatuto de Vítima de Feminicidio para unha abordaxe integral da violencia machista.",
     "pagina_pdf": 25,
     "traduccion": "Introducir el término feminicidio en la legislación española e impulsar un Estatuto de Víctima de Feminicidio para un abordaje integral de la violencia machista."
    },
    {
     "texto": "Impulsar medidas estratéxicas conducentes á abolición da prostitución desde unha perspectiva que puna e persiga o proxeneta e prostituidor, ficando as mulleres prostituídas libres de calquera criminalización, estigmatización ou aproximación moralista.",
     "pagina_pdf": 26,
     "traduccion": "Impulsar medidas estratégicas conducentes a la abolición de la prostitución desde una perspectiva que castigue y persiga al proxeneta y al prostituidor, quedando las mujeres prostituidas libres de cualquier criminalización, estigmatización o aproximación moralista."
    }
   ]
  },
  "bng/aborto": {
   "estado": "propuesta",
   "titular": "Impedir la gestación subrogada",
   "resumen": "Rechaza legalizar o regular la gestación subrogada («vientres de alquiler»), que ve como explotación de las mujeres. Propone cambios legales para impedir que se haga a través de otros países.",
   "citas": [
    {
     "texto": "Oposición firme e contundente ante calquera intento de legalización, regulamentación e banalización dos ventres de alugueiro por se trataren dunha forma de explotación dos corpos das mulleres, así como de mercantilización de seres humanos (mulleres e crianzas).",
     "pagina_pdf": 26,
     "traduccion": "Oposición firme y contundente ante cualquier intento de legalización, regulación y banalización de los vientres de alquiler por tratarse de una forma de explotación de los cuerpos de las mujeres, así como de mercantilización de seres humanos (mujeres y niños)."
    },
    {
     "texto": "Impulsar as mudanzas legais necesarias para impedir esta práctica a través de terceiros países.",
     "pagina_pdf": 26,
     "traduccion": "Impulsar los cambios legales necesarios para impedir esta práctica a través de terceros países."
    }
   ]
  },
  "compromis/vivienda": {
   "estado": "propuesta",
   "titular": "Vetar compras de «fondos buitre»",
   "resumen": "Propone prohibir que sociedades especulativas y «fondos buitre» compren viviendas. Quiere el alquiler indefinido como norma y expropiar viviendas a grandes fondos para ampliar la vivienda pública.",
   "citas": [
    {
     "texto": "Prohibirem que societats especulatives i fons voltor puguen comprar habitatges al nostre País i impedirem que eludisquen aquesta prohibició mitjançant societats instrumentals o interposades.",
     "pagina_pdf": 4,
     "traduccion": "Prohibiremos que sociedades especulativas y fondos buitre puedan comprar viviendas en nuestro País e impediremos que eludan esta prohibición mediante sociedades instrumentales o interpuestas."
    },
    {
     "texto": "Promourem el lloguer indefinit com a règim ordinari, garantint el dret a recuperar la possessió per motius d’ús personal o familiar.",
     "pagina_pdf": 4,
     "traduccion": "Promoveremos el alquiler indefinido como régimen ordinario, garantizando el derecho a recuperar la posesión por motivos de uso personal o familiar."
    },
    {
     "texto": "Aprovarem una nova Llei d’Expropiació de Grans Fons i Societat Tenidores per a ampliar el parc públic d’habitatge, començant per fons que tinguen més de 1000 habitatges baixant fins als 50 immobles.",
     "pagina_pdf": 4,
     "traduccion": "Aprobaremos una nueva Ley de Expropiación de Grandes Fondos y Sociedades Tenedoras para ampliar el parque público de vivienda, empezando por fondos que tengan más de 1000 viviendas y bajando hasta los 50 inmuebles."
    }
   ]
  },
  "compromis/inmigracion": {
   "estado": "propuesta",
   "titular": "Regularizar a quien vive aquí",
   "resumen": "Propone regularizar y dar derechos a quienes viven aquí, y facilitar el permiso de trabajo. Quiere eliminar los centros de internamiento de extranjeros y prohibir devoluciones encubiertas como retornos voluntarios.",
   "citas": [
    {
     "texto": "Exigirem l’eliminació dels CIES.",
     "pagina_pdf": 64,
     "traduccion": "Exigiremos la eliminación de los CIES."
    },
    {
     "texto": "Regularitzarem i donarem drets per als qui viuen ací. Impulsarem vies de regularització i reformes que faciliten la documentació i autorització de treball, amb procediments clars i garanties.",
     "pagina_pdf": 64,
     "traduccion": "Regularizaremos y daremos derechos a quienes viven aquí. Impulsaremos vías de regularización y reformas que faciliten la documentación y la autorización de trabajo, con procedimientos claros y garantías."
    },
    {
     "texto": "Prohibirem radicalment les devolucions il·legals encobertes sota retorns voluntaris, assegurant que tota persona migrant reba informació veraç, exacta, exhaustiva i en un idioma comprensible sobre les conseqüències jurídiques del retorn.",
     "pagina_pdf": 64,
     "traduccion": "Prohibiremos radicalmente las devoluciones ilegales encubiertas bajo retornos voluntarios, asegurando que toda persona migrante reciba información veraz, exacta, exhaustiva y en un idioma comprensible sobre las consecuencias jurídicas del retorno."
    }
   ]
  },
  "compromis/economia": {
   "estado": "propuesta",
   "titular": "Reformar el mercado eléctrico",
   "resumen": "Propone contratos largos a precio fijo para quien produce luz renovable. Quiere dar 200 euros al mes por hijo y más control público de márgenes de grandes cadenas de alimentación.",
   "citas": [
    {
     "texto": "Reduirem el pes del mercat marginalista i implementarem un model de remuneració regulat i estable, amb contractes a llarg termini a preu fix per a les renovables, que traslladen a la ciutadania el baix cost real de generar-les i acaben amb la volatilitat.",
     "pagina_pdf": 29,
     "traduccion": "Reduciremos el peso del mercado marginalista e implementaremos un modelo de remuneración regulado y estable, con contratos a largo plazo a precio fijo para las renovables, que trasladen a la ciudadanía el bajo coste real de generarlas y acaben con la volatilidad."
    },
    {
     "texto": "Implementarem una prestació universal per criança de 200 euros mensuals per fill o filla per acabar amb la transmissió generacional de l’empobriment.",
     "pagina_pdf": 46,
     "traduccion": "Implementaremos una prestación universal por crianza de 200 euros mensuales por hijo o hija para acabar con la transmisión generacional del empobrecimiento."
    },
    {
     "texto": "Ampliarem el control públic sobre la concentració empresarial i els marges de les grans cadenes de distribució alimentària, exigint transparència en els preus i els marges de cada fase de la cadena i actuant contra les pràctiques abusives que perjudiquen les persones productores i consumidores.",
     "pagina_pdf": 24,
     "traduccion": "Ampliaremos el control público sobre la concentración empresarial y los márgenes de las grandes cadenas de distribución alimentaria, exigiendo transparencia en los precios y los márgenes de cada fase de la cadena y actuando contra las prácticas abusivas que perjudican a las personas productoras y consumidoras."
    }
   ]
  },
  "compromis/empleo": {
   "estado": "propuesta",
   "titular": "Reducir la jornada a cuatro días",
   "resumen": "Propone una semana de cuatro días (32 horas) sin bajar sueldo. Quiere un salario mínimo legal del 60 % del sueldo medio. Plantea facilitar a los autónomos cobrar el paro.",
   "citas": [
    {
     "texto": "Reduirem la jornada laboral a quatre dies (trenta-dues hores) setmanals, sense disminució del sou.",
     "pagina_pdf": 6,
     "traduccion": "Reduciremos la jornada laboral a cuatro días (treinta y dos horas) semanales, sin disminución del sueldo."
    },
    {
     "texto": "Garantirem per llei que l’SMI arribe al 60% del salari mitjà, sense que l’augment puga absorbir els complements retributius, i impulsarem mesures per a augmentar el salari mitjà.",
     "pagina_pdf": 6,
     "traduccion": "Garantizaremos por ley que el SMI llegue al 60 % del salario medio, sin que el aumento pueda absorber los complementos retributivos, e impulsaremos medidas para aumentar el salario medio."
    },
    {
     "texto": "Millorarem la protecció social de les persones autònomes fent que per accedir a la prestació per cessament d’activitat només hagen d’acreditar un any de pèrdues.",
     "pagina_pdf": 7,
     "traduccion": "Mejoraremos la protección social de las personas autónomas haciendo que, para acceder a la prestación por cese de actividad, solo tengan que acreditar un año de pérdidas."
    }
   ]
  },
  "compromis/sanidad": {
   "estado": "propuesta",
   "titular": "Garantizar la gestión pública",
   "resumen": "Propone garantizar la gestión pública de la sanidad. Quiere atención para todos, tengan o no papeles, y reforzar la atención primaria con listas de espera máximas fijadas por ley.",
   "citas": [
    {
     "texto": "Blindarem la gestió pública de la sanitat i impedirem la mercantilització de l’atenció sanitària i la privatització de la gestió dels serveis públics a través de la derogació de la Llei 15/1997.",
     "pagina_pdf": 9,
     "traduccion": "Blindaremos la gestión pública de la sanidad e impediremos la mercantilización de la atención sanitaria y la privatización de la gestión de los servicios públicos mediante la derogación de la Ley 15/1997."
    },
    {
     "texto": "Garantirem l’accés universal a l’atenció sanitària pública, sense discriminacions per origen o situació administrativa.",
     "pagina_pdf": 9,
     "traduccion": "Garantizaremos el acceso universal a la atención sanitaria pública, sin discriminaciones por origen o situación administrativa."
    },
    {
     "texto": "Reforçarem l’atenció primària, la salut comunitària i la prevenció, fixant per llei bàsica un finançament mínim així com unes ràtios poblacionals i llistes d’espera màxims, i millorant la continuïtat assistencial.",
     "pagina_pdf": 9,
     "traduccion": "Reforzaremos la atención primaria, la salud comunitaria y la prevención, fijando por ley básica una financiación mínima así como unas ratios de población y listas de espera máximas, y mejorando la continuidad asistencial."
    }
   ]
  },
  "compromis/educacion": {
   "estado": "propuesta",
   "titular": "Subir la inversión en educación",
   "resumen": "Propone acercar la inversión educativa al 7 % del PIB (producción del país). Quiere prohibir ceder suelo público a colegios privados y que la concertada solo complemente la pública.",
   "citas": [
    {
     "texto": "Exigirem recursos per a una educació pública de qualitat, amb millora de la inclusió i de les condicions d’aprenentatge, augmentant la inversió educativa estatal i les transferències a les comunitats autònomes, amb l’objectiu d’avançar cap a una inversió educativa equivalent al 7% del PIB estatal.",
     "pagina_pdf": 10,
     "traduccion": "Exigiremos recursos para una educación pública de calidad, con mejora de la inclusión y de las condiciones de aprendizaje, aumentando la inversión educativa estatal y las transferencias a las comunidades autónomas, con el objetivo de avanzar hacia una inversión educativa equivalente al 7 % del PIB estatal."
    },
    {
     "texto": "Prohibirem la cessió de sòl públic per a la construcció de centres educatius privats.",
     "pagina_pdf": 10,
     "traduccion": "Prohibiremos la cesión de suelo público para la construcción de centros educativos privados."
    },
    {
     "texto": "Modificarem la normativa bàsica de concerts educatius perquè la xarxa concertada siga realment subsidiària de la pública.",
     "pagina_pdf": 10,
     "traduccion": "Modificaremos la normativa básica de conciertos educativos para que la red concertada sea realmente subsidiaria de la pública."
    }
   ]
  },
  "compromis/regeneracion": {
   "estado": "propuesta",
   "titular": "No tratar con paraísos fiscales",
   "resumen": "Propone prohibir que la Administración trate con paraísos fiscales o con empresas que los usen. Quiere reformar el Tribunal de Cuentas para garantizar su independencia y crear una oficina antifraude.",
   "citas": [
    {
     "texto": "Prohibirem que l'Administració pública es relacione mitjançant els paradisos fiscals i amb empreses que en facen us, incloent el finançament i la contractació pública.",
     "pagina_pdf": 40,
     "traduccion": "Prohibiremos que la Administración pública se relacione a través de los paraísos fiscales y con empresas que hagan uso de ellos, incluidas la financiación y la contratación pública."
    },
    {
     "texto": "Promourem la reforma del Tribunal de Cuentas per a garantir-ne la independència i que compte amb els mitjans suficients per a desenvolupar la seua tasca.",
     "pagina_pdf": 40,
     "traduccion": "Promoveremos la reforma del Tribunal de Cuentas para garantizar su independencia y que cuente con los medios suficientes para desarrollar su tarea."
    },
    {
     "texto": "Crearem una oficina antifrau que perseguisca qualsevol tipus d'il·legalitat en l'àmbit de l'administració pública i en previnga el delicte.",
     "pagina_pdf": 40,
     "traduccion": "Crearemos una oficina antifraude que persiga cualquier tipo de ilegalidad en el ámbito de la administración pública y prevenga el delito."
    }
   ]
  },
  "compromis/pensiones": {
   "estado": "propuesta",
   "titular": "Recuperar la jubilación a los 65",
   "resumen": "Propone recuperar la jubilación a los 65 años y no recortar la pensión anticipada de quien trabajó 40 años. Quiere que los sueldos más altos coticen por completo.",
   "citas": [
    {
     "texto": "Retornarem l'edat de jubilació als 65 anys.",
     "pagina_pdf": 8,
     "traduccion": "Devolveremos la edad de jubilación a los 65 años."
    },
    {
     "texto": "Eliminarem el coeficients reductors que penalitzen aquells treballadors i treballadores que malgrat haver treballat 40 anys veuen penalitzada la seua pensió quan es jubilen anticipadament de forma voluntària.",
     "pagina_pdf": 8,
     "traduccion": "Eliminaremos los coeficientes reductores que penalizan a aquellos trabajadores y trabajadoras que, pese a haber trabajado 40 años, ven penalizada su pensión cuando se jubilan anticipadamente de forma voluntaria."
    },
    {
     "texto": "Acabarem amb el topall a la base màxima de cotització, perquè les nòmines més altes cotitzen íntegrament a la Seguretat Social.",
     "pagina_pdf": 8,
     "traduccion": "Acabaremos con el tope de la base máxima de cotización, para que las nóminas más altas coticen íntegramente a la Seguridad Social."
    }
   ]
  },
  "compromis/impuestos": {
   "estado": "propuesta",
   "titular": "Gravar más las grandes fortunas",
   "resumen": "Propone que el impuesto sobre la renta no suba por la inflación a quien gana menos de 30.000 euros. Quiere mantener y ampliar el impuesto a las grandes fortunas.",
   "citas": [
    {
     "texto": "Deflactarem l’IRPF en les rendes inferiors a 30.000€ per tal d’ajustar-lo a la inflació.",
     "pagina_pdf": 18,
     "traduccion": "Deflactaremos el IRPF en las rentas inferiores a 30.000 € para ajustarlo a la inflación."
    },
    {
     "texto": "Mantindrem i ampliarem l’Impost a les Grans Fortunes per a aproximar-la a propostes internacionals de tributació progressiva al patrimoni com la taxa Zucman.",
     "pagina_pdf": 18,
     "traduccion": "Mantendremos y ampliaremos el Impuesto a las Grandes Fortunas para aproximarlo a propuestas internacionales de tributación progresiva del patrimonio como la tasa Zucman."
    }
   ]
  },
  "compromis/territorio": {
   "estado": "propuesta",
   "titular": "Cambiar la financiación regional",
   "resumen": "Propone reformar la financiación autonómica, que considera insuficiente para los valencianos. Plantea un concierto económico o que la Generalitat Valenciana recaude la mayoría de impuestos. Quiere ampliar el autogobierno valenciano.",
   "citas": [
    {
     "texto": "Reformarem el sistema de finançament autonòmic per a que atenga a criteris poblacionals i de prestació dels serveis públics i desenvolupament competencial, per tal d’acabar amb l’infrafinançament valencià.",
     "pagina_pdf": 57,
     "traduccion": "Reformaremos el sistema de financiación autonómica para que atienda a criterios de población, de prestación de los servicios públicos y de desarrollo competencial, con el fin de acabar con la infrafinanciación valenciana."
    },
    {
     "texto": "Apostarem per un concert econòmic responsable o, en el seu defecte, per un sistema de finançament on la Generalitat Valenciana recapte directament la major part dels tributs.",
     "pagina_pdf": 57,
     "traduccion": "Apostaremos por un concierto económico responsable o, en su defecto, por un sistema de financiación en el que la Generalitat Valenciana recaude directamente la mayor parte de los tributos."
    },
    {
     "texto": "Avançarem en el desplegament de l’autogovern i en el traspàs a la Generalitat Valenciana de les competències que permeten gestionar millor els serveis i les infraestructures que afecten directament al territori.",
     "pagina_pdf": 59,
     "traduccion": "Avanzaremos en el despliegue del autogobierno y en el traspaso a la Generalitat Valenciana de las competencias que permiten gestionar mejor los servicios y las infraestructuras que afectan directamente al territorio."
    }
   ]
  },
  "compromis/igualdad": {
   "estado": "propuesta",
   "titular": "Castigar la violencia machista",
   "resumen": "Propone revisar la protección de las víctimas, con auditorías externas de los fallos, y una respuesta penal proporcionada y efectiva. Quiere sancionar la explotación sexual, no a las personas prostituidas.",
   "citas": [
    {
     "texto": "Revisarem de manera integral els protocols de valoració del risc i de protecció de les víctimes, incorporant auditories externes dels casos en què els mecanismes de protecció hagen fallat.",
     "pagina_pdf": 54,
     "traduccion": "Revisaremos de manera integral los protocolos de valoración del riesgo y de protección de las víctimas, incorporando auditorías externas de los casos en que los mecanismos de protección hayan fallado."
    },
    {
     "texto": "Garantirem una resposta penal proporcionada i efectiva davant la violència masclista, amb especial atenció a la reincidència, l’incompliment de les ordres de protecció i les conductes d’alt risc.",
     "pagina_pdf": 54,
     "traduccion": "Garantizaremos una respuesta penal proporcionada y efectiva ante la violencia machista, con especial atención a la reincidencia, el incumplimiento de las órdenes de protección y las conductas de alto riesgo."
    },
    {
     "texto": "Establirem majors responsabilitats i sancions per a activitats que impliquen explotació sexual i tràfic de persones amb finalitats d’explotació sexual, amb un règim penal proporcionat per als supòsits més greus, evitant en tot cas sancionar les persones prostituïdes.",
     "pagina_pdf": 54,
     "traduccion": "Estableceremos mayores responsabilidades y sanciones para actividades que impliquen explotación sexual y trata de personas con fines de explotación sexual, con un régimen penal proporcionado para los supuestos más graves, evitando en todo caso sancionar a las personas prostituidas."
    }
   ]
  },
  "compromis/aborto": {
   "estado": "propuesta",
   "titular": "Garantizar el aborto gratuito",
   "resumen": "Propone el aborto gratuito en la sanidad pública. Quiere vigilar la objeción de conciencia para que no la ejerza un hospital entero, y reforzar la prohibición de la gestación subrogada.",
   "citas": [
    {
     "texto": "Garantirem la interrupció voluntària de l’embaràs gratuïta, segura i accessible dins de la xarxa sanitària pública, en els termes previstos legalment, sense desplaçaments injustificats ni obstacles administratius.",
     "pagina_pdf": 52,
     "traduccion": "Garantizaremos la interrupción voluntaria del embarazo gratuita, segura y accesible dentro de la red sanitaria pública, en los términos previstos legalmente, sin desplazamientos injustificados ni obstáculos administrativos."
    },
    {
     "texto": "Regularem i supervisarem l’objecció de consciència individual per a impedir que es convertisca en una objecció institucional encoberta. Cap hospital públic ha de deixar de prestar el servei per falta de planificació.",
     "pagina_pdf": 53,
     "traduccion": "Regularemos y supervisaremos la objeción de conciencia individual para impedir que se convierta en una objeción institucional encubierta. Ningún hospital público debe dejar de prestar el servicio por falta de planificación."
    },
    {
     "texto": "Reforçarem la prohibició dels contractes de gestació per substitució/gestació subrogada/ventres de lloguer o qualsevol altre eufemisme, amb les garanties constitucionals i jurídiques corresponents.",
     "pagina_pdf": 53,
     "traduccion": "Reforzaremos la prohibición de los contratos de gestación por sustitución/gestación subrogada/vientres de alquiler o cualquier otro eufemismo, con las garantías constitucionales y jurídicas correspondientes."
    }
   ]
  },
  "pnv/vivienda": {
   "estado": "propuesta",
   "titular": "Aumentar la oferta de viviendas",
   "resumen": "Propone agilizar los trámites para construir, movilizar viviendas vacías y rehabilitar edificios. Quiere evitar que se usen contratos de temporada para esquivar las garantías del alquiler.",
   "citas": [
    {
     "texto": "Agilizar los trámites urbanísticos para facilitar la construcción de nuevas viviendas, con plazos razonables y garantías legales.",
     "pagina_pdf": 7
    },
    {
     "texto": "Movilizar viviendas vacías y rehabilitar edificios para aumentar la oferta residencial.",
     "pagina_pdf": 7
    },
    {
     "texto": "Evitar que los contratos de temporada se utilicen fraudulentamente para eludir las garantías del alquiler de vivienda habitual.",
     "pagina_pdf": 8
    }
   ]
  },
  "pnv/inmigracion": {
   "estado": "propuesta",
   "titular": "Que Euskadi decida en migración",
   "resumen": "Quiere que Euskadi decida más sobre migración. Propone una acogida descentralizada, sin grandes centros, para quienes piden protección internacional, y favorecer la integración y el aprendizaje del euskera.",
   "citas": [
    {
     "texto": "Promover mayores competencias para Euskadi en materia de migración y extranjería, avanzando hacia una gestión integral que abarque la llegada, la acogida, la residencia, el trabajo y la integración.",
     "pagina_pdf": 24
    },
    {
     "texto": "Reclamar un acuerdo entre el Estado y las instituciones vascas que garantice […] una atención digna a las personas solicitantes de protección internacional, priorizando un modelo de acogida descentralizado y rechazando la implantación de grandes centros como el previsto en Arana, Vitoria-Gasteiz.",
     "pagina_pdf": 25
    },
    {
     "texto": "Promover la integración social y laboral de las personas migrantes, favoreciendo su autonomía, su participación en la sociedad vasca y el aprendizaje del euskera como herramienta de integración y convivencia.",
     "pagina_pdf": 25
    }
   ]
  },
  "pnv/economia": {
   "estado": "propuesta",
   "titular": "Fortalecer la industria vasca",
   "resumen": "Propone fortalecer la industria vasca y acelerar la inversión en redes eléctricas. Quiere mantener los bonos sociales de energía para personas vulnerables y la tarifa regulada del gas.",
   "citas": [
    {
     "texto": "Fortalecer la industria vasca, facilitando la inversión, la innovación y la modernización productiva mediante una legislación industrial que tenga en cuenta nuestra realidad.",
     "pagina_pdf": 14
    },
    {
     "texto": "Acelerar las inversiones en redes eléctricas de Euskadi, garantizando capacidad suficiente para nuevas industrias, ampliaciones empresariales, electrificación y demanda residencial.",
     "pagina_pdf": 15
    },
    {
     "texto": "Mantener la protección de las personas consumidoras de energía en situación de vulnerabilidad, incluidos los bonos sociales eléctrico y térmico, y preservar la Tarifa de Último Recurso del gas natural.",
     "pagina_pdf": 16
    }
   ]
  },
  "pnv/empleo": {
   "estado": "propuesta",
   "titular": "Que Euskadi fije salario mínimo",
   "resumen": "Quiere que Euskadi pueda fijar su propio salario mínimo, siempre por encima del estatal. Propone reforzar la Inspección de Trabajo y ampliar la prestación por desempleo hasta 36 meses.",
   "citas": [
    {
     "texto": "Reclamar, en el marco de un nuevo estatus político para Euskadi, la competencia plena para establecer un salario mínimo propio, adaptado al coste de vida y siempre por encima del mínimo estatal.",
     "pagina_pdf": 9
    },
    {
     "texto": "Detectar y sancionar mejor los abusos laborales reforzando la Inspección de Trabajo para combatir el fraude laboral, la contratación irregular, las falsas personas autónomas, la economía sumergida y los incumplimientos de la normativa laboral.",
     "pagina_pdf": 9
    },
    {
     "texto": "Ampliar la cobertura de la prestación por desempleo hasta un máximo de 36 meses, vinculándola a procesos de mejora de la empleabilidad y reforzando la protección de las personas con mayores dificultades para reincorporarse al mercado laboral.",
     "pagina_pdf": 9
    }
   ]
  },
  "pnv/sanidad": {
   "estado": "propuesta",
   "titular": "Formar más especialistas",
   "resumen": "Propone formar más especialistas sanitarios donde se necesitan y permitir que su selección valore saber las lenguas oficiales donde haya varias. Quiere completar los traspasos sanitarios pendientes a Euskadi.",
   "citas": [
    {
     "texto": "Formar más especialistas sanitarios donde se necesitan, adaptando el sistema MIR para adecuar la oferta de plazas a las necesidades reales de profesionales, evitar que queden vacantes y agilizar la acreditación de nuevas unidades docentes.",
     "pagina_pdf": 32
    },
    {
     "texto": "Permitir la valoración del conocimiento de las lenguas oficiales en el acceso a la formación sanitaria especializada, en los territorios con más de una lengua oficial.",
     "pagina_pdf": 32
    },
    {
     "texto": "Culminar las transferencias sanitarias pendientes a Euskadi, especialmente en formación sanitaria especializada, acreditación de plazas, control sanitario de las incapacidades laborales y sanidad exterior.",
     "pagina_pdf": 32
    }
   ]
  },
  "pnv/educacion": {
   "estado": "propuesta",
   "titular": "Que Euskadi decida su educación",
   "resumen": "Quiere que Euskadi siga decidiendo sobre su educación, sin interferencias del Estado. Propone una educación inclusiva, plurilingüe e intercultural y fortalecer la Formación Profesional Dual con las empresas.",
   "citas": [
    {
     "texto": "Preservar las competencias educativas de Euskadi, evitando interferencias estatales en los ámbitos de decisión que corresponden a las instituciones vascas.",
     "pagina_pdf": 10
    },
    {
     "texto": "Impulsar una educación inclusiva, plurilingüe e intercultural, que garantice los derechos de la infancia y la adolescencia y la igualdad de oportunidades.",
     "pagina_pdf": 10
    },
    {
     "texto": "Fortalecer la Formación Profesional Dual, favoreciendo la colaboración entre los centros formativos y las empresas y su conexión con las oportunidades de empleo.",
     "pagina_pdf": 10
    }
   ]
  },
  "pnv/regeneracion": {
   "estado": "propuesta",
   "titular": "Aprobar nueva ley de secretos",
   "resumen": "Propone una nueva ley de secretos oficiales, con criterios objetivos y plazos concretos de desclasificación automática. Quiere reforzar la transparencia y la rendición de cuentas de las administraciones.",
   "citas": [
    {
     "texto": "Asegurar la aprobación de una nueva Ley de Secretos Oficiales, que sustituya la legislación vigente, establezca criterios objetivos de clasificación y fije plazos concretos de desclasificación automática.",
     "pagina_pdf": 40
    },
    {
     "texto": "Reforzar la transparencia y la rendición de cuentas de las administraciones públicas, garantizando el acceso de la ciudadanía a información comprensible sobre sus decisiones, presupuestos y resultados.",
     "pagina_pdf": 40
    }
   ]
  },
  "pnv/pensiones": {
   "estado": "propuesta",
   "titular": "Subir pensiones con los precios",
   "resumen": "Propone subir las pensiones cada año según los precios (IPC) y mejorar las mínimas y no contributivas. Quiere eliminar la penalización por jubilarse antes con más de 40 años cotizados.",
   "citas": [
    {
     "texto": "Evitar que las pensiones pierdan poder adquisitivo: revalorizarlas anualmente conforme al IPC, protegiendo su poder adquisitivo frente al incremento del coste de la vida.",
     "pagina_pdf": 31
    },
    {
     "texto": "Mejorar progresivamente las pensiones mínimas y no contributivas, prestando especial atención a las personas con menores ingresos y en situación de vulnerabilidad.",
     "pagina_pdf": 31
    },
    {
     "texto": "Eliminar las penalizaciones de la jubilación anticipada para las personas trabajadoras con más de 40 años cotizados, reconociendo las largas carreras laborales y promoviendo medidas para corregir las penalizaciones que afectan también a quienes ya están jubilados.",
     "pagina_pdf": 31
    }
   ]
  },
  "pnv/impuestos": {
   "estado": "propuesta",
   "titular": "Reformar el IVA de lo esencial",
   "resumen": "Propone reformar el IVA (impuesto al consumo) de lo esencial: estudiar tipo cero o muy reducido en algunos alimentos básicos. Quiere bajar el impuesto sobre la electricidad al 0,5 %.",
   "citas": [
    {
     "texto": "Favorecer una reforma integral del IVA de los bienes y servicios esenciales, estudiando la aplicación de tipos cero o superreducidos a determinados alimentos básicos (pescado, carne, entre otros) […] dentro del marco europeo.",
     "pagina_pdf": 21
    },
    {
     "texto": "Reducir de forma permanente el Impuesto Especial sobre la Electricidad al 0,5 %, dentro de los límites permitidos por la normativa europea.",
     "pagina_pdf": 16
    }
   ]
  },
  "pnv/territorio": {
   "estado": "propuesta",
   "titular": "Cumplir el Estatuto de Gernika",
   "resumen": "Quiere que se cumpla entero el Estatuto de Gernika. Propone más capacidad fiscal vasca reformando el Concierto Económico. Plantea una relación con el Estado que reconozca la «realidad nacional vasca».",
   "citas": [
    {
     "texto": "Asegurar el cumplimiento íntegro del Estatuto de Gernika y la culminación de todas las transferencias pendientes, garantizando que las competencias reconocidas puedan ejercerse de forma efectiva y con los recursos correspondientes.",
     "pagina_pdf": 38
    },
    {
     "texto": "Aumentar nuestras capacidades financiero-fiscales promoviendo la modificación de la Ley del Concierto económico y el convenio económico.",
     "pagina_pdf": 39
    },
    {
     "texto": "Favorecer una nueva relación política entre Euskadi y el Estado basada en el reconocimiento de la realidad nacional vasca, el respeto a la voluntad democrática de la sociedad vasca y la capacidad de decisión de sus instituciones.",
     "pagina_pdf": 39
    }
   ]
  },
  "pnv/igualdad": {
   "estado": "propuesta",
   "titular": "Aplicar las leyes de igualdad",
   "resumen": "Propone aplicar las leyes de igualdad y reforzar sus organismos. Quiere que se cumplan todas las medidas estatales del Pacto de Estado contra la Violencia de Género, renovado en 2025.",
   "citas": [
    {
     "texto": "Asegurar la aplicación efectiva de las leyes de igualdad y la incorporación de la perspectiva de género en las políticas públicas, desde su elaboración hasta su evaluación.",
     "pagina_pdf": 26
    },
    {
     "texto": "Asegurar la transposición y aplicación de las Directivas europeas 2024/1499 y 2024/1500, reforzando la independencia y capacidad de actuación de los organismos de igualdad y respetando las competencias y funciones de Emakunde.",
     "pagina_pdf": 26
    },
    {
     "texto": "Asegurar el cumplimiento íntegro de las medidas estatales del Pacto de Estado contra la Violencia de Género renovado en 2025, especialmente en materia de violencia digital, económica y protección de las víctimas.",
     "pagina_pdf": 26
    }
   ]
  },
  "pnv/aborto": {
   "estado": "propuesta",
   "titular": "Evitar el acoso a quien aborta",
   "resumen": "Propone zonas de protección de al menos 150 metros alrededor de los centros de aborto, para impedir el acoso y proteger la intimidad de las mujeres.",
   "citas": [
    {
     "texto": "Modificar la Ley de Seguridad Ciudadana para establecer perímetros de protección de al menos 150 metros alrededor de los centros donde se practica la interrupción voluntaria del embarazo, mediante medidas proporcionadas que impidan el acoso y protejan la intimidad y la libertad de las mujeres.",
     "pagina_pdf": 26
    }
   ]
  },
  "bildu/vivienda": {
   "estado": "propuesta",
   "titular": "Alquilar con prórroga automática",
   "resumen": "Propone alquileres con prórroga automática y la prohibición permanente de desahucios de vulnerables sin otra vivienda. El alquiler subiría como máximo un 2 % anual si los precios suben más.",
   "citas": [
    {
     "texto": "Establecer contratos de arrendamiento ordinarios con prórroga automática como mecanismo para ofrecer estabilidad y seguridad a inquilinas e inquilinos y también a pequeños propietarios.",
     "pagina_pdf": 5
    },
    {
     "texto": "Establecer de manera estructural y permanente la prohibición de desahucios para personas y familias vulnerables sin alternativa habitacional",
     "pagina_pdf": 5
    },
    {
     "texto": "Establecer de manera estructural el máximo de 2% de actualización anual de renta en los contratos de arrendamiento, siempre que el IPC interanual a fecha de actualización supere este porcentaje.",
     "pagina_pdf": 5
    }
   ]
  },
  "bildu/inmigracion": {
   "estado": "propuesta",
   "titular": "Regularizar de forma estable",
   "resumen": "Propone una regularización estable y una nueva ley de extranjería. Rechaza las devoluciones sumarias (sin trámite). Quiere que los migrantes accedan a sanidad, educación y vivienda, tengan o no papeles.",
   "citas": [
    {
     "texto": "Regularización y nueva Ley de Extranjería: Garantizar una regularización efectiva, accesible y estable.",
     "pagina_pdf": 20
    },
    {
     "texto": "Rechazar las disposiciones restrictivas del Pacto Europeo sobre Migración y Asilo, las devoluciones sumarias, la externalización de fronteras y los CIE",
     "pagina_pdf": 20
    },
    {
     "texto": "Derecho universal a la acogida y a los servicios públicos: […] eliminación de barreras para acceder a la sanidad, educación, vivienda y protección social, independientemente de la situación administrativa.",
     "pagina_pdf": 20
    }
   ]
  },
  "bildu/economia": {
   "estado": "propuesta",
   "titular": "Limitar precios en emergencias",
   "resumen": "Ante emergencias, propone intervenir los márgenes de beneficio de grandes energéticas y alimentarias, y limitar temporalmente precios esenciales como luz, gas o transporte. Y recuperar el «tope al gas».",
   "citas": [
    {
     "texto": "Establecer un mecanismo de intervención extraordinaria sobre los márgenes de las grandes empresas de los sectores energético y alimentario, que impida que, en situaciones de emergencia […] trasladen de forma desproporcionada dichas subidas a los precios finales",
     "pagina_pdf": 8
    },
    {
     "texto": "Recuperar el mecanismo de intervención sobre el precio del gas utilizado para generación eléctrica en situaciones extraordinarias de encarecimiento como la actual, tomando como referencia la experiencia del mecanismo ibérico o “tope al gas”.",
     "pagina_pdf": 8
    },
    {
     "texto": "Establecer límites temporales a los precios de bienes y servicios esenciales, como la electricidad, el gas, los combustibles, el transporte y determinados productos básicos, ante situaciones de emergencia",
     "pagina_pdf": 8
    }
   ]
  },
  "bildu/empleo": {
   "estado": "propuesta",
   "titular": "Reducir la jornada a 32 horas",
   "resumen": "Propone 32 horas semanales de trabajo sin bajar sueldo. Quiere al menos 45 días de indemnización por despido improcedente. Cada comunidad podría fijar su salario mínimo, nunca inferior al estatal.",
   "citas": [
    {
     "texto": "Reducción de la jornada laboral hasta las 32 horas semanales o la jornada de 4 días sin reducción salarial.",
     "pagina_pdf": 6
    },
    {
     "texto": "Modificación del Estatuto de los Trabajadores para que las CCAA puedan establecer su propio SMI en atención a la realidad socioeconómica constituyendo el SMI fijado por el estado el mínimo legal indisponible.",
     "pagina_pdf": 6
    },
    {
     "texto": "Indemnización por despido improcedente de al menos 45 días",
     "pagina_pdf": 6
    }
   ]
  },
  "bildu/sanidad": {
   "estado": "propuesta",
   "titular": "Ampliar lo que cubre la sanidad",
   "resumen": "Propone incluir salud dental y visual para colectivos vulnerables. Quiere derogar la ley de 1997 que, según el programa, permite privatizar servicios sanitarios, y cambiar el modelo de salud mental.",
   "citas": [
    {
     "texto": "Ampliar la cartera común básica con prestaciones como la de la salud bucodental y los productos ópticos y salud visual para aquellos colectivos históricamente desatendidos o en situación de mayor vulnerabilidad",
     "pagina_pdf": 10
    },
    {
     "texto": "Derogar la Ley 15/1997 de 25 de abril, sobre habilitación de nuevas formas de gestión del Sistema Nacional de Salud, aprobada por el PP que permite la privatización y externalización de los servicios sanitarios.",
     "pagina_pdf": 11
    },
    {
     "texto": "Impulsar un cambio de modelo en la atención de salud mental en la nueva estrategia de Salud Mental del Sistema Nacional de Salud.",
     "pagina_pdf": 11
    }
   ]
  },
  "bildu/educacion": {
   "estado": "propuesta",
   "titular": "Reducir los alumnos por aula",
   "resumen": "Propone menos alumnos por aula y acercar la inversión al 6 % que define la UNESCO (Naciones Unidas). Quiere un sistema educativo propio, en euskera y «soberano», para «Euskal Herria».",
   "citas": [
    {
     "texto": "Defendemos, mediante la capacidad y herramientas propias de nuestro autogobierno, un sistema educativo propio para Euskal Herria, de calidad, inclusivo, coeducativo, participativo, laiko, euskaldun y soberano.",
     "pagina_pdf": 11
    },
    {
     "texto": "Apostamos por una bajada de ratios como una oportunidad para mejorar la calidad educativa.",
     "pagina_pdf": 11
    },
    {
     "texto": "Aumentar la financiación, acercándonos progresivamente al 6% de inversión definido por la UNESCO.",
     "pagina_pdf": 12
    }
   ]
  },
  "bildu/regeneracion": {
   "estado": "propuesta",
   "titular": "Derogar la ley de secretos",
   "resumen": "Propone derogar la Ley de Secretos Oficiales para garantizar la transparencia. Quiere un reparto transparente y objetivo del dinero público en publicidad institucional (anuncios de las administraciones).",
   "citas": [
    {
     "texto": "Derogar la Ley de Secretos Oficiales, en vigor desde el franquismo, para asegurar una legislación que garantice la transparencia, la accesibilidad, la información",
     "pagina_pdf": 27
    },
    {
     "texto": "Impulsar la reforma de la Ley de Publicidad y Comunicación Institucional para garantizar que el dinero público esté al servicio del derecho de la ciudadanía a recibir información veraz y plural […] asegurando un reparto de los recursos públicos transparente, objetivo y no discriminatorio",
     "pagina_pdf": 22
    }
   ]
  },
  "bildu/pensiones": {
   "estado": "propuesta",
   "titular": "No subir la edad de jubilación",
   "resumen": "Quiere garantizar pensiones públicas, sin recortes, privatización ni retraso de la jubilación. Propone mantener su subida anual según los precios y elevar las mínimas hasta al menos 1.220 €.",
   "citas": [
    {
     "texto": "Blindar el carácter público de las pensiones/el sistema público de pensiones rechazando cualquier intento de recorte, privatización o aumento de la edad de jubilación y periodo de cómputo.",
     "pagina_pdf": 7
    },
    {
     "texto": "Garantizar el poder adquisitivo de las y los pensionistas, manteniendo y blindando la revalorización anual al IPC.",
     "pagina_pdf": 7
    },
    {
     "texto": "Aumentar las pensiones mínimas al menos hasta los 1.220 €, estableciendo la cuantía y su actualización acorde al SMI",
     "pagina_pdf": 8
    }
   ]
  },
  "bildu/impuestos": {
   "estado": "propuesta",
   "titular": "Gravar más a energéticas y banca",
   "resumen": "Propone recuperar el impuesto a las empresas energéticas y hacerlo permanente, y gravar más a la banca y las grandes fortunas. Plantea gravar los beneficios de grandes distribuidoras de alimentos.",
   "citas": [
    {
     "texto": "Recuperar el impuesto a la energéticas […] haciéndolo permanente.",
     "pagina_pdf": 14
    },
    {
     "texto": "Aumentar el peso impositivo del impuesto a la banca y las grandes fortunas.",
     "pagina_pdf": 14
    },
    {
     "texto": "Aprobar un nuevo impuesto especial sobre los beneficios de las grandes distribuidoras alimentarias",
     "pagina_pdf": 14
    }
   ]
  },
  "bildu/territorio": {
   "estado": "propuesta",
   "titular": "Reconocer el «derecho a decidir»",
   "resumen": "Propone reconocer a «Euskal Herria» como nación y el «derecho a decidir» del pueblo vasco. Quiere que el País Vasco y Navarra reciban todos los poderes pendientes de sus estatutos.",
   "citas": [
    {
     "texto": "El respeto y reconocimiento de Euskal Herria como nación, así como de las diferentes naciones que actualmente componen el estado español.",
     "pagina_pdf": 23
    },
    {
     "texto": "El reconocimiento del derecho a decidir del pueblo vasco como mecanismo democrático y legítimo para dicha solución",
     "pagina_pdf": 24
    },
    {
     "texto": "Exigiremos la transferencia de todas las competencias contempladas en el Estatuto Vasco y el Amejoramiento Navarro aún pendientes tras más de 40 años.",
     "pagina_pdf": 24
    }
   ]
  },
  "bildu/igualdad": {
   "estado": "propuesta",
   "titular": "Reconocer la violencia vicaria",
   "resumen": "Propone avanzar en el reconocimiento y la penalización de la violencia vicaria y prevenir las violencias sexuales en internet. Quiere revisar la protección de las mujeres víctimas de violencia machista.",
   "citas": [
    {
     "texto": "Avanzar en el reconocimiento y penalización de la violencia vicaria.",
     "pagina_pdf": 19
    },
    {
     "texto": "Prevenir las violencias sexuales en el ámbito digital, que comprenden la difusión de actos de violencia sexual a través de medios tecnológicos.",
     "pagina_pdf": 19
    },
    {
     "texto": "Analizar y revisar los recursos y sistemas existentes en la actualidad para la protección y reparación de mujeres víctimas de violencia machista.",
     "pagina_pdf": 19
    }
   ]
  },
  "bildu/aborto": {
   "estado": "propuesta",
   "titular": "Garantizar el acceso al aborto",
   "resumen": "Propone garantizar el derecho al aborto y un acceso libre, seguro, confidencial y digno. Plantea zonas de protección frente al acoso en torno a los centros que lo practican.",
   "citas": [
    {
     "texto": "Blindar el derecho al aborto. Para ello, daremos los pasos y propondremos todas las medidas necesarias para garantizar el acceso libre, seguro, confidencial y digno al aborto.",
     "pagina_pdf": 19
    },
    {
     "texto": "Avanzar en medidas de protección frente al acoso en el acceso al aborto. Particularmente defenderemos medidas concretas de protección en torno a los centros sanitarios que practican interrupciones voluntarias del embarazo como perímetros de protección",
     "pagina_pdf": 19
    }
   ]
  },
  "erc/vivienda": {
   "estado": "propuesta",
   "titular": "Que Cataluña regule el alquiler",
   "resumen": "Quiere que Cataluña pueda legislar sobre alquileres. Propone dedicar a vivienda al menos el 1,5 % del PIB (producción del país) y traspasarle gratis los inmuebles de la Sareb.",
   "citas": [
    {
     "texto": "Impulsar l’aprovació d’una legislació estatal, per la via de l’article 150.1 de la Constitució espanyola, que delegui formalment a la Generalitat de Catalunya la facultat de legislar de manera plena i integral en matèria d’arrendaments urbans.",
     "pagina_pdf": 19,
     "traduccion": "Impulsar la aprobación de una legislación estatal, por la vía del artículo 150.1 de la Constitución española, que delegue formalmente en la Generalitat de Cataluña la facultad de legislar de manera plena e integral en materia de arrendamientos urbanos."
    },
    {
     "texto": "Augment del finançament estatal en matèria d’habitatge. Cal garantir un finançament públic adequat a les polítiques d’habitatge i incloure’l als pressupostos generals de l’Estat, que dediqui a aquestes polítiques almenys l’1,5 % del Producte Interior Brut (PIB)",
     "pagina_pdf": 19,
     "traduccion": "Aumento de la financiación estatal en materia de vivienda. Hay que garantizar una financiación pública adecuada para las políticas de vivienda e incluirla en los presupuestos generales del Estado, que dedique a estas políticas al menos el 1,5 % del Producto Interior Bruto (PIB)"
    },
    {
     "texto": "Traspàs immediat de tots els immobles de la SAREB i Casa 47 a la Generalitat de Catalunya. Resulta urgent el traspàs immediat i gratuït de la titularitat d’aquests immobles a la Generalitat […] per poder-los destinar a l’ampliació del parc públic d’habitatge.",
     "pagina_pdf": 19,
     "traduccion": "Traspaso inmediato de todos los inmuebles de la SAREB y Casa 47 a la Generalitat de Cataluña. Resulta urgente el traspaso inmediato y gratuito de la titularidad de estos inmuebles a la Generalitat […] para poder destinarlos a la ampliación del parque público de vivienda."
    }
   ]
  },
  "erc/inmigracion": {
   "estado": "propuesta",
   "titular": "Que Cataluña decida en migración",
   "resumen": "Quiere que Cataluña gestione la migración y el asilo. Pide evitar «deportaciones automáticas», rechaza centros de retorno en terceros países y propone vías legales y seguras para migrar.",
   "citas": [
    {
     "texto": "Exigir el traspàs integral de les competències en migració i asil a Catalunya per garantir una gestió pròpia de l’acollida, l’avaluació de les necessitats i la integració, des d’una perspectiva de drets humans i inclusió social.",
     "pagina_pdf": 14,
     "traduccion": "Exigir el traspaso integral de las competencias en migración y asilo a Cataluña para garantizar una gestión propia de la acogida, la evaluación de las necesidades y la integración, desde una perspectiva de derechos humanos e inclusión social."
    },
    {
     "texto": "Condicionar l’aplicació i el desenvolupament legislatiu del Reglament europeu de Retorn a garanties efectives dels drets fonamentals, per evitar la deriva punitiva i les deportacions automàtiques. Rebutgem la creació de centres de retorn a països tercers",
     "pagina_pdf": 14,
     "traduccion": "Condicionar la aplicación y el desarrollo legislativo del Reglamento europeo de Retorno a garantías efectivas de los derechos fundamentales, para evitar la deriva punitiva y las deportaciones automáticas. Rechazamos la creación de centros de retorno en terceros países"
    },
    {
     "texto": "Posar fi a l’externalització de les fronteres i garantir vies legals i segures per migrar.",
     "pagina_pdf": 17,
     "traduccion": "Poner fin a la externalización de las fronteras y garantizar vías legales y seguras para migrar."
    }
   ]
  },
  "erc/economia": {
   "estado": "propuesta",
   "titular": "Crear una ayuda por crianza",
   "resumen": "Propone una ayuda universal por crianza desde 200 euros por familia. Quiere un plan contra la subida de precios y un bono social de la luz automático y más amplio.",
   "citas": [
    {
     "texto": "Traspassar els recursos necessaris per a la creació d’una prestació universal per criança adaptada a cada territori. La distribució d’una prestació universal per criança a partir de 200 euros per família que s’elevi en aquells territoris amb un cost de vida més alt",
     "pagina_pdf": 21,
     "traduccion": "Traspasar los recursos necesarios para la creación de una prestación universal por crianza adaptada a cada territorio. La distribución de una prestación universal por crianza a partir de 200 euros por familia que se eleve en aquellos territorios con un coste de vida más alto"
    },
    {
     "texto": "Dissenyar un pla de reducció sectorial de la inflació. Presentar un pla conjunt entre l’Administració General de l’Estat i les comunitats autònomes per combatre la inflació dels sectors on ha crescut més (aliments, energia, habitatge)",
     "pagina_pdf": 21,
     "traduccion": "Diseñar un plan de reducción sectorial de la inflación. Presentar un plan conjunto entre la Administración General del Estado y las comunidades autónomas para combatir la inflación de los sectores donde más ha crecido (alimentos, energía, vivienda)"
    },
    {
     "texto": "Automatitzar i ampliar el bo social elèctric. Reduir els obstacles burocràtics per accedir al bo social elèctric, automatitzant-ne la concessió, ampliant els llindars de renda per accedir-hi",
     "pagina_pdf": 21,
     "traduccion": "Automatizar y ampliar el bono social eléctrico. Reducir los obstáculos burocráticos para acceder al bono social eléctrico, automatizando su concesión, ampliando los umbrales de renta para acceder a él"
    }
   ]
  },
  "erc/empleo": {
   "estado": "propuesta",
   "titular": "Que Cataluña fije salario mínimo",
   "resumen": "Quiere que Cataluña pueda fijar su salario mínimo, en 1.460 euros. Propone recuperar 45 días por año trabajado de indemnización por despido improcedente y 37,5 horas semanales sin bajar sueldos.",
   "citas": [
    {
     "texto": "Transferir les competències a la Generalitat de Catalunya per establir un salari mínim català (SMC) a 1.460 €.",
     "pagina_pdf": 20,
     "traduccion": "Transferir las competencias a la Generalitat de Cataluña para establecer un salario mínimo catalán (SMC) de 1.460 €."
    },
    {
     "texto": "Derogar els aspectes de les reformes laborals de 2010 i 2012 que continuen vigents. Revertir l’abaratiment i la facilitació de l’acomiadament, recuperant la indemnització per acomiadament improcedent de 45 dies per any treballat, amb un màxim de 42 mensualitats",
     "pagina_pdf": 26,
     "traduccion": "Derogar los aspectos de las reformas laborales de 2010 y 2012 que siguen vigentes. Revertir el abaratamiento y la facilitación del despido, recuperando la indemnización por despido improcedente de 45 días por año trabajado, con un máximo de 42 mensualidades"
    },
    {
     "texto": "Reduir la durada màxima de la jornada laboral setmanal a 37 hores i mitja sense reducció salarial.",
     "pagina_pdf": 26,
     "traduccion": "Reducir la duración máxima de la jornada laboral semanal a 37 horas y media sin reducción salarial."
    }
   ]
  },
  "erc/sanidad": {
   "estado": "propuesta",
   "titular": "Fortalecer la sanidad pública",
   "resumen": "Propone fortalecer la sanidad pública para reducir las listas de espera y frenar la privatización. Quiere más dinero del Estado para más profesionales y atención psicológica gratuita para todos.",
   "citas": [
    {
     "texto": "Defensar i enfortir el sistema sanitari públic. Blindar una sanitat pública, universal i de qualitat, reforçant la capacitat assistencial del sistema per reduir les llistes d’espera, garantir una atenció equitativa i frenar la privatització de la sanitat.",
     "pagina_pdf": 41,
     "traduccion": "Defender y fortalecer el sistema sanitario público. Blindar una sanidad pública, universal y de calidad, reforzando la capacidad asistencial del sistema para reducir las listas de espera, garantizar una atención equitativa y frenar la privatización de la sanidad."
    },
    {
     "texto": "Incrementar el finançament estatal del sistema públic de salut per garantir una atenció sanitària de qualitat i unes condicions laborals dignes. […] Aquest increment ha de resultar suficient per ampliar les plantilles de professionals sanitaris",
     "pagina_pdf": 41,
     "traduccion": "Incrementar la financiación estatal del sistema público de salud para garantizar una atención sanitaria de calidad y unas condiciones laborales dignas. […] Este incremento debe resultar suficiente para ampliar las plantillas de profesionales sanitarios"
    },
    {
     "texto": "Ampliar el finançament públic de l’atenció psicològica de la sanitat pública. Garantir l’accés universal i gratuït a l’atenció psicològica i a la salut mental, així com l’accés a la psicoteràpia i als tractaments necessaris.",
     "pagina_pdf": 42,
     "traduccion": "Ampliar la financiación pública de la atención psicológica de la sanidad pública. Garantizar el acceso universal y gratuito a la atención psicológica y a la salud mental, así como el acceso a la psicoterapia y a los tratamientos necesarios."
    }
   ]
  },
  "erc/educacion": {
   "estado": "propuesta",
   "titular": "Proteger la inmersión en catalán",
   "resumen": "Quiere proteger la escuela pública en catalán. Propone dedicar a educación el 6 % del PIB (producción del país) y garantizar plazas públicas gratuitas de 0 a 3 años.",
   "citas": [
    {
     "texto": "Blindar el model d’escola catalana i la immersió lingüística. Defensar un model d’escola pública, laica, gratuïta i de qualitat, amb el català com a llengua vehicular i d’acollida, com a eina de cohesió social, inclusió i igualtat d’oportunitats.",
     "pagina_pdf": 10,
     "traduccion": "Blindar el modelo de escuela catalana y la inmersión lingüística. Defender un modelo de escuela pública, laica, gratuita y de calidad, con el catalán como lengua vehicular y de acogida, como herramienta de cohesión social, inclusión e igualdad de oportunidades."
    },
    {
     "texto": "Garantir un finançament estatal digne per a l’educació. Destinar el 6 % del PIB estatal a l’educació i posar fi a l’infrafinançament del sistema educatiu, assegurant els recursos necessaris per reforçar l’escola pública, reduir les ràtios i millorar les condicions salarials del professorat.",
     "pagina_pdf": 11,
     "traduccion": "Garantizar una financiación estatal digna para la educación. Destinar el 6 % del PIB estatal a la educación y poner fin a la infrafinanciación del sistema educativo, asegurando los recursos necesarios para reforzar la escuela pública, reducir las ratios y mejorar las condiciones salariales del profesorado."
    },
    {
     "texto": "Assegurar el finançament estatal de l’educació pública i gratuïta de 0 a 3 anys. Establir un sistema de finançament estatal suficient i estable per fer efectiu l’accés universal i gratuït de tots els infants a una plaça educativa pública de 0 a 3 anys",
     "pagina_pdf": 11,
     "traduccion": "Asegurar la financiación estatal de la educación pública y gratuita de 0 a 3 años. Establecer un sistema de financiación estatal suficiente y estable para hacer efectivo el acceso universal y gratuito de todos los niños a una plaza educativa pública de 0 a 3 años"
    }
   ]
  },
  "erc/regeneracion": {
   "estado": "propuesta",
   "titular": "Sumar 180 jueces en Cataluña",
   "resumen": "Propone 180 jueces más en Cataluña. Quiere denunciar contratos públicos a empresas condenadas por corrupción y aplicar la ley electoral europea, con pluralidad y voto desde los 16 años.",
   "citas": [
    {
     "texto": "Garantir més recursos judicials per agilitzar els procediments i acabar amb la impunitat. Cal continuar apostant pel desplegament de noves places de jutges i jutgesses a Catalunya, garantint el compliment de l’acord a iniciativa d’Esquerra Republicana per incorporar 180 places entre 2026 i 2027",
     "pagina_pdf": 43,
     "traduccion": "Garantizar más recursos judiciales para agilizar los procedimientos y acabar con la impunidad. Hay que seguir apostando por el despliegue de nuevas plazas de jueces y juezas en Cataluña, garantizando el cumplimiento del acuerdo a iniciativa de Esquerra Republicana para incorporar 180 plazas entre 2026 y 2027"
    },
    {
     "texto": "Garantir el compliment de la normativa pressupostària també al ministeri de defensa, evitar l’ocultació de despesa per motius polítics i denunciar l’adjudicació de contractes públics a empreses implicades i condemnades en casos de corrupció.",
     "pagina_pdf": 16,
     "traduccion": "Garantizar el cumplimiento de la normativa presupuestaria también en el ministerio de defensa, evitar la ocultación de gasto por motivos políticos y denunciar la adjudicación de contratos públicos a empresas implicadas y condenadas en casos de corrupción."
    },
    {
     "texto": "Promoure la transposició de la Llei Electoral Europea, assegurant que garanteixi la pluralitat i la representativitat […] En aquest marc, promoure també l’exercici del dret de vot a partir dels 16 anys.",
     "pagina_pdf": 17,
     "traduccion": "Promover la transposición de la Ley Electoral Europea, asegurando que garantice la pluralidad y la representatividad […] En este marco, promover también el ejercicio del derecho de voto a partir de los 16 años."
    }
   ]
  },
  "erc/pensiones": {
   "estado": "propuesta",
   "titular": "Subir pensiones con los precios",
   "resumen": "Propone asegurar que las pensiones suban con los precios, medidos en cada territorio. Quiere jubilación anticipada sin penalización para trabajos penosos, peligrosos, tóxicos o insalubres.",
   "citas": [
    {
     "texto": "Blindar la revaloració de les pensions per evitar la pèrdua de capacitat adquisitiva de les persones pensionistes. Cal garantir l’actualització de pensions públiques d’acord amb la inflació.",
     "pagina_pdf": 26,
     "traduccion": "Blindar la revalorización de las pensiones para evitar la pérdida de poder adquisitivo de las personas pensionistas. Hay que garantizar la actualización de las pensiones públicas de acuerdo con la inflación."
    },
    {
     "texto": "Revalorar les pensions d’acord amb l’IPC de cada territori. Revisar el sistema estatal de pensions per tenir en compte les diferències territorials en el cost de la vida i establir mecanismes d’actualització de les prestacions vinculats a l’IPC de cada territori",
     "pagina_pdf": 26,
     "traduccion": "Revalorizar las pensiones de acuerdo con el IPC de cada territorio. Revisar el sistema estatal de pensiones para tener en cuenta las diferencias territoriales en el coste de la vida y establecer mecanismos de actualización de las prestaciones vinculados al IPC de cada territorio"
    },
    {
     "texto": "Garantir l’accés a la jubilació anticipada sense penalitzacions en la pensió a les persones treballadores de sectors i professions especialment penosos, perillosos, tòxics o insalubres",
     "pagina_pdf": 26,
     "traduccion": "Garantizar el acceso a la jubilación anticipada sin penalizaciones en la pensión a las personas trabajadoras de sectores y profesiones especialmente penosos, peligrosos, tóxicos o insalubres"
    }
   ]
  },
  "erc/impuestos": {
   "estado": "propuesta",
   "titular": "Reformar el impuesto de la renta",
   "resumen": "Propone subir al 35 % el tipo máximo del capital y bajar impuestos al trabajo hasta 35.000 euros. Quiere menos IVA en alimentos básicos y más impuesto a grandes fortunas.",
   "citas": [
    {
     "texto": "Dur a terme una reforma social de l’IRPF. Augmentar el tipus màxim de l’IRPF sobre els guanys de capital del 30 % al 35 % per acabar amb el tracte de favor respecte a les rendes del treball. Alhora, cal reduir els tipus de la fiscalitat del treball per als trams inferiors als 35.000 euros",
     "pagina_pdf": 21,
     "traduccion": "Llevar a cabo una reforma social del IRPF. Aumentar el tipo máximo del IRPF sobre las ganancias de capital del 30 % al 35 % para acabar con el trato de favor respecto a las rentas del trabajo. A la vez, hay que reducir los tipos de la fiscalidad del trabajo para los tramos inferiores a 35.000 euros"
    },
    {
     "texto": "Rebaixar l’IVA aplicable a aliments bàsics i productes d’higiene, acabant amb un gran nombre de les reduccions i deduccions respecte a la mitjana europea.",
     "pagina_pdf": 21,
     "traduccion": "Rebajar el IVA aplicable a alimentos básicos y productos de higiene, acabando con un gran número de las reducciones y deducciones respecto a la media europea."
    },
    {
     "texto": "Fer permanent l’impost temporal de solidaritat de les grans fortunes, augmentant el tipus per a fortunes de més de 10 milions d’euros i creant un tram nou a partir de 100 milions d’euros.",
     "pagina_pdf": 22,
     "traduccion": "Hacer permanente el impuesto temporal de solidaridad de las grandes fortunas, aumentando el tipo para fortunas de más de 10 millones de euros y creando un tramo nuevo a partir de 100 millones de euros."
    }
   ]
  },
  "erc/territorio": {
   "estado": "propuesta",
   "titular": "Negociar un referéndum catalán",
   "resumen": "Propone negociar un referéndum de autodeterminación en Cataluña, con acompañamiento internacional. Quiere un nuevo modelo de financiación y perdonar más de 17.100 millones de euros de deuda de la Generalitat.",
   "citas": [
    {
     "texto": "Dret d’autodeterminació. Negociar la convocatòria d’un referèndum d’autodeterminació a Catalunya amb acompanyament internacional, amb la Unió Europea i el Consell d’Europa com a facilitadors",
     "pagina_pdf": 8,
     "traduccion": "Derecho de autodeterminación. Negociar la convocatoria de un referéndum de autodeterminación en Cataluña con acompañamiento internacional, con la Unión Europea y el Consejo de Europa como facilitadores"
    },
    {
     "texto": "Aprovar un nou model de finançament per garantir la sobirania dels Països Catalans i el benestar de la ciutadania. […] Ara, resulta urgent combatre el dèficit fiscal i garantir el finançament de les institucions catalanes per mitjà de canvis de model en el sentit dels acords esmentats.",
     "pagina_pdf": 12,
     "traduccion": "Aprobar un nuevo modelo de financiación para garantizar la soberanía de los Países Catalanes y el bienestar de la ciudadanía. […] Ahora resulta urgente combatir el déficit fiscal y garantizar la financiación de las instituciones catalanas mediante cambios de modelo en el sentido de los acuerdos mencionados."
    },
    {
     "texto": "Condonar de forma efectiva els més de 17.100 milions d’euros del FLA. Dur a terme la tramitació del projecte de llei impulsat per Esquerra Republicana, que suposa una reducció de deute de la Generalitat equivalent a la inversió que fa en quatre anys.",
     "pagina_pdf": 12,
     "traduccion": "Condonar de forma efectiva los más de 17.100 millones de euros del FLA. Llevar a cabo la tramitación del proyecto de ley impulsado por Esquerra Republicana, que supone una reducción de deuda de la Generalitat equivalente a la inversión que hace en cuatro años."
    }
   ]
  },
  "erc/igualdad": {
   "estado": "propuesta",
   "titular": "Garantizar políticas de igualdad",
   "resumen": "Plantea asegurar por ley y presupuesto las políticas feministas. Quiere reformar las leyes contra la violencia machista y aprobar una ley contra la trata y la explotación de personas.",
   "citas": [
    {
     "texto": "Blindar les polítiques d’igualtat i combatre els discursos d’odi i discriminatoris. Establir garanties normatives, pressupostàries i institucionals que assegurin la continuïtat de les polítiques feministes, els serveis d’atenció i els recursos de prevenció de les violències masclistes.",
     "pagina_pdf": 24,
     "traduccion": "Blindar las políticas de igualdad y combatir los discursos de odio y discriminatorios. Establecer garantías normativas, presupuestarias e institucionales que aseguren la continuidad de las políticas feministas, los servicios de atención y los recursos de prevención de las violencias machistas."
    },
    {
     "texto": "Reforçar i actualitzar la legislació contra totes les formes de violència masclista. Reformar la Llei orgànica 1/2004 i la resta de legislació estatal per garantir la prevenció, detecció, protecció i reparació davant totes les violències masclistes, incloses l’econòmica, la vicària i la digital.",
     "pagina_pdf": 24,
     "traduccion": "Reforzar y actualizar la legislación contra todas las formas de violencia machista. Reformar la Ley Orgánica 1/2004 y el resto de la legislación estatal para garantizar la prevención, detección, protección y reparación ante todas las violencias machistas, incluidas la económica, la vicaria y la digital."
    },
    {
     "texto": "Aprovar una llei integral contra el tràfic i l’explotació d’éssers humans. Reforçar la prevenció, la persecució dels delictes i la protecció i reparació de les víctimes, especialment dones i nenes explotades sexualment.",
     "pagina_pdf": 24,
     "traduccion": "Aprobar una ley integral contra la trata y la explotación de seres humanos. Reforzar la prevención, la persecución de los delitos y la protección y reparación de las víctimas, especialmente mujeres y niñas explotadas sexualmente."
    }
   ]
  },
  "erc/aborto": {
   "estado": "sin_propuesta",
   "terminos_buscados": [
    "avort",
    "interrupció",
    "embaràs",
    "subrogad",
    "ventre de lloguer",
    "objecció",
    "gestaci",
    "reproductiu",
    "embarass",
    "ventres de lloguer",
    "matern",
    "concebu",
    "nascu",
    "prenatal",
    "gestant"
   ]
  },
  "junts/vivienda": {
   "estado": "pendiente"
  },
  "junts/inmigracion": {
   "estado": "pendiente"
  },
  "junts/economia": {
   "estado": "pendiente"
  },
  "junts/empleo": {
   "estado": "pendiente"
  },
  "junts/sanidad": {
   "estado": "pendiente"
  },
  "junts/educacion": {
   "estado": "pendiente"
  },
  "junts/regeneracion": {
   "estado": "pendiente"
  },
  "junts/pensiones": {
   "estado": "pendiente"
  },
  "junts/impuestos": {
   "estado": "pendiente"
  },
  "junts/territorio": {
   "estado": "pendiente"
  },
  "junts/igualdad": {
   "estado": "pendiente"
  },
  "junts/aborto": {
   "estado": "pendiente"
  },
  "upc/vivienda": {
   "estado": "pendiente"
  },
  "upc/inmigracion": {
   "estado": "pendiente"
  },
  "upc/economia": {
   "estado": "pendiente"
  },
  "upc/empleo": {
   "estado": "pendiente"
  },
  "upc/sanidad": {
   "estado": "pendiente"
  },
  "upc/educacion": {
   "estado": "pendiente"
  },
  "upc/regeneracion": {
   "estado": "pendiente"
  },
  "upc/pensiones": {
   "estado": "pendiente"
  },
  "upc/impuestos": {
   "estado": "pendiente"
  },
  "upc/territorio": {
   "estado": "pendiente"
  },
  "upc/igualdad": {
   "estado": "pendiente"
  },
  "upc/aborto": {
   "estado": "pendiente"
  }
 }
};
