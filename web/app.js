/* Comparador de programas 29-N: vistas con rutas «#/...», sin dependencias.
   Los datos vienen de datos.js (window.DATOS), que genera scripts/construir.py.
   Las rutas «#/captura/...» dibujan las imágenes para compartir con los mismos datos
   y las mismas funciones que las vistas, para que web e imágenes nunca digan cosas distintas. */
'use strict';

(function () {
  var D = window.DATOS;
  var app = document.getElementById('app');
  if (!D || !app) {
    if (app) app.textContent = 'No se han podido cargar los datos.';
    return;
  }

  var TEMAS = D.temas;
  var PARTIDOS = D.partidos;
  var temaPorId = new Map(TEMAS.map(function (t) { return [t.id, t]; }));
  var partidoPorId = new Map(PARTIDOS.map(function (p) { return [p.id, p]; }));
  var ESTATALES = PARTIDOS.filter(function (p) { return p.ambito === 'estatal'; });
  var TERRITORIALES = PARTIDOS.filter(function (p) { return p.ambito !== 'estatal'; });
  var DIRECCION = D.config.direccion;
  var FECHA = fechaES(D.config.actualizado);

  var TEXTO_ESTADO = {
    sin_propuesta: 'El programa no trata este tema',
    pendiente: 'Aún no ha publicado su programa',
    en_preparacion: 'Programa publicado: resumen en preparación'
  };
  var GRUPOS = {
    estatales: 'Partidos estatales',
    territoriales: 'Partidos de comunidades autónomas'
  };

  /* ---------- utilidades ---------- */

  function esc(valor) {
    return String(valor).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function fechaES(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? m[3] + '/' + m[2] + '/' + m[1] : '';
  }

  function ficha(partidoId, temaId) {
    return D.fichas[partidoId + '/' + temaId] || null;
  }

  function comunidadDe(p) {
    return p.ambito !== 'estatal' && p.comunidades ? p.comunidades.join(', ') : '';
  }

  function hayPrograma(p) {
    return p.programa && p.programa.estado !== 'pendiente' && p.programa.url;
  }

  function enlacePagina(p, cita) {
    return p.programa.url + '#page=' + cita.pagina_pdf;
  }

  function textoPagina(cita) {
    return cita.pagina_pdf_fin ? 'págs. ' + cita.pagina_pdf + '-' + cita.pagina_pdf_fin : 'pág. ' + cita.pagina_pdf;
  }

  function unirConY(lista) {
    if (lista.length < 2) return lista.join('');
    return lista.slice(0, -1).join(', ') + ' y ' + lista[lista.length - 1];
  }

  /* «pág. 7», «págs. 7 y 8», «págs. 28, 55 y 56» */
  function paginasDeFicha(f) {
    var vistas = [];
    var partes = [];
    (f.citas || []).slice().sort(function (a, b) { return a.pagina_pdf - b.pagina_pdf; }).forEach(function (c) {
      var t = c.pagina_pdf_fin ? c.pagina_pdf + '-' + c.pagina_pdf_fin : String(c.pagina_pdf);
      if (vistas.indexOf(t) === -1) { vistas.push(t); partes.push(t); }
    });
    var plural = partes.length > 1 || (partes[0] || '').indexOf('-') !== -1;
    return (plural ? 'págs. ' : 'pág. ') + unirConY(partes);
  }

  function hostDe(url) {
    try { return new URL(url).host.replace(/^www\./, ''); } catch (e) { return url; }
  }

  function huellaCorta(sha) {
    return sha ? sha.slice(0, 12) + '…' : '';
  }

  /* Los renglones de un tema: los mismos para la vista y para las imágenes. */
  function filasTema(temaId) {
    function fila(p) {
      var f = ficha(p.id, temaId);
      if (!f) return null;
      return {
        partido: p,
        ficha: f,
        estado: f.estado,
        texto: f.estado === 'propuesta' ? f.titular : TEXTO_ESTADO[f.estado]
      };
    }
    return {
      estatales: ESTATALES.map(fila).filter(Boolean),
      territoriales: TERRITORIALES.map(fila).filter(Boolean)
    };
  }

  /* ---------- iconos de trazo ---------- */

  var ICONOS = {
    vivienda: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    inmigracion: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9s1.2-6.5 3.6-9z"/>',
    economia: '<path d="M3 9.5h18l-1.8 10.5H4.8z"/><path d="M8.5 9.5L12 4l3.5 5.5"/><path d="M9.5 13v4"/><path d="M14.5 13v4"/>',
    empleo: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><path d="M3 13h18"/>',
    sanidad: '<path d="M9.5 3.5h5v6h6v5h-6v6h-5v-6h-6v-5h6z"/>',
    educacion: '<path d="M2.5 9L12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11v4.5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3V11"/><path d="M21.5 9v5.5"/>',
    regeneracion: '<path d="M12 4v16"/><path d="M8 20h8"/><path d="M5 7h14"/><path d="M5 7l-2.5 6a2.5 2.5 0 0 0 5 0z"/><path d="M19 7l-2.5 6a2.5 2.5 0 0 0 5 0z"/>',
    pensiones: '<path d="M6 3h12"/><path d="M6 21h12"/><path d="M7.5 3v2.5c0 3 4.5 4.5 4.5 6.5s-4.5 3.5-4.5 6.5V21"/><path d="M16.5 3v2.5c0 3-4.5 4.5-4.5 6.5s4.5 3.5 4.5 6.5V21"/>',
    impuestos: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 15l6-6"/><circle cx="9.5" cy="9.5" r="1"/><circle cx="14.5" cy="14.5" r="1"/>',
    territorio: '<path d="M3 6.5l6-3 6 3 6-3v14l-6 3-6-3-6 3z"/><path d="M9 3.5v14"/><path d="M15 6.5v14"/>',
    igualdad: '<circle cx="12" cy="12" r="9"/><path d="M8 10h8"/><path d="M8 14h8"/>',
    aborto: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/>'
  };
  function numeroEnLetra(n) {
    var letras = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez',
      'once', 'doce', 'trece', 'catorce', 'quince'];
    return letras[n] || String(n);
  }
  var FLECHAS = {
    derecha: '<path d="M9 5l7 7-7 7"/>',
    izquierda: '<path d="M15 5l-7 7 7 7"/>',
    externo: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',
    compartir: '<path d="M12 3v12"/><path d="M7 8l5-5 5 5"/><path d="M5 13v7h14v-7"/>',
    documento: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 16h6"/>'
  };

  function svg(trazos, tam, grosor, clase) {
    return '<svg' + (clase ? ' class="' + clase + '"' : '') + ' width="' + tam + '" height="' + tam +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (grosor || 1.8) +
      '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + trazos + '</svg>';
  }
  function icono(temaId, tam, grosor, clase) {
    return svg(ICONOS[temaId] || '<circle cx="12" cy="12" r="8"/>', tam, grosor, clase);
  }
  function flecha(nombre, tam, grosor, clase) {
    return svg(FLECHAS[nombre], tam, grosor || 2, clase);
  }

  function punto(p) {
    return '<span class="punto" style="background:' + esc(p.color) + '" aria-hidden="true"></span>';
  }

  function nombreConComunidad(p) {
    var com = comunidadDe(p);
    return esc(p.nombre) + (com ? ' <span class="comunidad">· ' + esc(com) + '</span>' : '');
  }

  /* ---------- piezas comunes ---------- */

  function pie() {
    return '<footer class="sello">Fuente: programas electorales oficiales · <b>' + esc(DIRECCION) +
      '</b> · actualizado el ' + FECHA + '</footer>' +
      '<p class="independiente">Proyecto ciudadano independiente, sin relación con ningún partido.</p>' +
      '<nav class="pie-enlaces" aria-label="Más"><a href="#/material">Material para compartir</a>' +
      '<a href="#/metodo">Cómo se ha hecho</a></nav>';
  }

  function barraInicio(derecha) {
    return '<nav class="barra" aria-label="Navegación"><a class="pastilla" href="#/">29-N · ¿Qué proponen?</a>' +
      (derecha || '') + '</nav>';
  }

  function pastillaAtras(href, texto) {
    return '<a class="pastilla pastilla-atras" href="' + href + '">' + flecha('izquierda', 16) + esc(texto) + '</a>';
  }

  function enlaceExterno(href, texto, clase) {
    return '<a class="' + clase + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' +
      texto + flecha('externo', 16) + '</a>';
  }

  /* ---------- vistas ---------- */

  function vistaInicio() {
    var rejilla = TEMAS.map(function (t) {
      return '<li><a href="#/tema/' + esc(t.id) + '"><span class="icono-caja">' + icono(t.id, 24) + '</span>' +
        esc(t.nombre) + '</a></li>';
    }).join('');
    return {
      titulo: '¿Qué proponen? Elecciones generales 29-N',
      html:
        '<header class="portada">' +
        '<h1 tabindex="-1">¿Qué proponen?<span class="sub">Elecciones generales 29-N</span></h1>' +
        '<p class="intro">Lo que dice el programa electoral oficial de cada partido sobre ' + numeroEnLetra(TEMAS.length) + ' temas, en una línea, ' +
        'con la cita literal y la página donde comprobarlo.</p>' +
        '<a class="pastilla pastilla-material" href="#/material">' + flecha('compartir', 16) + 'Material para compartir</a>' +
        '</header>' +
        '<main class="contenido">' +
        '<h2 class="vh">Temas</h2>' +
        '<ul class="rejilla">' + rejilla + '</ul>' +
        '<nav class="enlaces" aria-label="Más información">' +
        '<a class="pastilla" href="#/partidos">Partidos</a>' +
        '<a class="pastilla" href="#/metodo">Cómo se ha hecho</a>' +
        '</nav>' +
        '</main>'
    };
  }

  function listaFilasTema(filas, temaId) {
    return '<ul class="tarjeta lista">' + filas.map(function (r) {
      var clase = r.estado === 'propuesta' ? 'fila-titular' : 'fila-titular estado';
      return '<li><a class="fila" href="#/ficha/' + esc(r.partido.id) + '/' + esc(temaId) + '">' +
        punto(r.partido) +
        '<span class="fila-texto"><span class="fila-nombre">' + nombreConComunidad(r.partido) + '</span>' +
        '<span class="vh">: </span><span class="' + clase + '">' + esc(r.texto) + '</span></span>' +
        flecha('derecha', 14, 2, 'flecha') + '</a></li>';
    }).join('') + '</ul>';
  }

  function grupoTema(clave, filas, temaId) {
    if (!filas.length) return '';
    var id = 'grupo-' + clave;
    return '<section aria-labelledby="' + id + '">' +
      '<h2 class="grupo-cabecera" id="' + id + '"><span>' + GRUPOS[clave] + '</span><span>' + filas.length +
      '<span class="vh"> candidaturas</span></span></h2>' +
      listaFilasTema(filas, temaId) + '</section>';
  }

  function vistaTema(temaId) {
    var t = temaPorId.get(temaId);
    if (!t) return null;
    var filas = filasTema(temaId);
    return {
      titulo: t.nombre + ': qué propone cada partido · 29-N',
      html:
        barraInicio('<a class="pastilla" href="#/partidos">Partidos</a>') +
        '<header class="cabecera">' +
        '<div class="tema-titulo"><span class="icono-caja">' + icono(t.id, 26) + '</span>' +
        '<h1 tabindex="-1">' + esc(t.nombre) + '</h1></div>' +
        '<p class="pregunta">' + esc(t.pregunta) + '</p>' +
        '</header>' +
        '<main class="contenido">' +
        grupoTema('estatales', filas.estatales, temaId) +
        grupoTema('territoriales', filas.territoriales, temaId) +
        panelCompartirTema(t) +
        '</main>'
    };
  }

  function vistaFicha(partidoId, temaId) {
    var p = partidoPorId.get(partidoId);
    var t = temaPorId.get(temaId);
    var f = p && t ? ficha(partidoId, temaId) : null;
    if (!f) return null;

    var filas = filasTema(temaId);
    var orden = filas.estatales.concat(filas.territoriales).map(function (r) { return r.partido; });
    var i = orden.indexOf(p);
    var anterior = orden[(i - 1 + orden.length) % orden.length];
    var siguiente = orden[(i + 1) % orden.length];
    var com = comunidadDe(p);

    var titular = f.estado === 'propuesta' ? f.titular :
      f.estado === 'pendiente' ? 'Aún no ha publicado su programa para el 29-N' :
      f.estado === 'en_preparacion' ? TEXTO_ESTADO.en_preparacion : TEXTO_ESTADO.sin_propuesta;

    var cuerpo = '';
    var bloques = '';
    if (f.estado === 'propuesta') {
      cuerpo = '<p class="resumen">' + esc(f.resumen) + '</p>';
      var lang = p.programa.idioma && p.programa.idioma !== 'es' ? p.programa.idioma : '';
      var citas = f.citas.map(function (c) {
        var atributoLang = c.traduccion && lang ? ' lang="' + esc(lang) + '"' : '';
        return '<figure class="cita">' +
          '<blockquote' + atributoLang + '>«' + esc(c.texto) + '»</blockquote>' +
          (c.traduccion ? '<p class="traduccion"><span class="etiqueta">Traducción</span>' + esc(c.traduccion) + '</p>' : '') +
          enlaceExterno(enlacePagina(p, c), 'Ver en el programa · ' + textoPagina(c), 'boton boton-negro boton-pagina') +
          '</figure>';
      }).join('');
      var versión = p.programa.fecha_pdf ? ', versión del ' + fechaES(p.programa.fecha_pdf) : '';
      bloques =
        '<section class="tarjeta citas" aria-labelledby="titulo-citas">' +
        '<div class="citas-cabecera"><h2 id="titulo-citas">' + (f.citas.length > 1 ? 'Citas literales del programa' : 'Cita literal del programa') +
        '</h2><button type="button" class="enlace-boton" id="alternar-citas" aria-expanded="true">Ocultar</button></div>' +
        citas +
        '<p class="pie-citas">Programa oficial de ' + esc(p.nombre) + ': «' + esc(p.programa.titulo) + '»' + versión + '.</p>' +
        '</section>';
    } else if (f.estado === 'sin_propuesta') {
      cuerpo =
        '<p class="resumen">Hemos buscado estos términos en todo el programa y leído cada aparición: ninguna es una propuesta sobre este tema.</p>' +
        '<ul class="terminos" aria-label="Términos buscados">' + f.terminos_buscados.map(function (term) {
          return '<li>«' + esc(term) + '»</li>';
        }).join('') + '</ul>' +
        enlaceExterno(p.programa.url, 'Abrir el programa completo', 'boton boton-claro');
    } else if (f.estado === 'en_preparacion') {
      cuerpo =
        '<p class="resumen">Ya ha publicado su programa, «' + esc(p.programa.titulo) + '». Estamos preparando el resumen de cada tema, con sus citas y sus páginas. Mientras, puedes leerlo completo.</p>' +
        enlaceExterno(p.programa.url, 'Abrir el programa (PDF)', 'boton boton-negro') +
        (p.programa.url_archivo ? enlaceExterno(p.programa.url_archivo, 'Copia archivada', 'boton boton-claro') : '');
    } else {
      if (p.web) cuerpo += enlaceExterno(p.web, 'Su web oficial · ' + esc(hostDe(p.web)), 'boton boton-negro');
      if (p.programa_2023) {
        cuerpo += enlaceExterno(p.programa_2023.url, 'Consultar su programa de 2023', 'boton boton-claro') +
          '<p class="nota">No lo resumimos: puede no coincidir con lo que proponen hoy.</p>';
      }
    }

    var compartir = IMG.ficha(p.id, t.id);
    return {
      titulo: p.nombre + ' · ' + t.nombre + ' · 29-N',
      html:
        '<nav class="barra" aria-label="Navegación">' + pastillaAtras('#/tema/' + esc(t.id), t.nombre) +
        '<span class="contador">Ficha ' + (i + 1) + ' de ' + orden.length + '</span></nav>' +
        '<main class="contenido">' +
        '<article class="tarjeta ficha">' +
        '<div class="chips"><span class="chip">' + icono(t.id, 14, 2) + esc(t.nombre) + '</span></div>' +
        '<h1 tabindex="-1"><span class="ficha-partido">' + punto(p) + esc(p.nombre) +
        (com ? ' <span class="ficha-comunidad">· ' + esc(com) + '</span>' : '') + '</span>' +
        '<span class="vh">: </span>' +
        '<span class="ficha-titular' + (f.estado === 'propuesta' ? '' : ' estado') + '">' + esc(titular) + '</span></h1>' +
        cuerpo +
        '</article>' +
        bloques +
        '<div class="acciones">' +
        '<button type="button" class="boton boton-claro" data-imagen="' + esc(compartir) + '" data-titulo="' +
        esc(p.nombre + ' · ' + t.nombre) + '" data-enlace="' + esc(D.config.base_url + '#/ficha/' + p.id + '/' + t.id) + '">' +
        flecha('compartir', 16) + 'Compartir imagen</button>' +
        '<p class="estado-compartir" role="status"></p>' +
        '<a class="boton boton-claro" href="#/tema/' + esc(t.id) + '">Ver todos los partidos en este tema</a>' +
        '</div>' +
        (orden.length > 1 ?
          '<nav class="vecinos" aria-label="Otros partidos en este tema">' +
          '<a class="pastilla pastilla-atras" href="#/ficha/' + esc(anterior.id) + '/' + esc(t.id) + '">' + flecha('izquierda', 16) +
          '<span><span class="vh">Partido anterior: </span>' + esc(anterior.nombre) + '</span></a>' +
          '<a class="pastilla siguiente" href="#/ficha/' + esc(siguiente.id) + '/' + esc(t.id) + '">' +
          '<span><span class="vh">Partido siguiente: </span>' + esc(siguiente.nombre) + '</span>' + flecha('derecha', 16) + '</a>' +
          '</nav>' : '') +
        '</main>'
    };
  }

  function datosPrograma(p) {
    if (!hayPrograma(p)) {
      var html = '<p class="resumen">Aún no ha publicado su programa para el 29-N.</p>';
      if (p.web) html += enlaceExterno(p.web, 'Su web oficial · ' + esc(hostDe(p.web)), 'boton boton-negro');
      if (p.programa_2023) {
        html += enlaceExterno(p.programa_2023.url, 'Consultar su programa de 2023', 'boton boton-claro') +
          '<p class="nota">No lo resumimos: puede no coincidir con lo que proponen hoy.</p>';
      }
      return html;
    }
    var g = p.programa;
    var filas = [];
    filas.push(['Título', '«' + esc(g.titulo) + '»']);
    if (g.fecha_pdf) filas.push(['Fecha del PDF', fechaES(g.fecha_pdf)]);
    if (g.paginas) filas.push(['Páginas', String(g.paginas)]);
    if (g.sha256) filas.push(['Huella SHA-256', '<span class="huella" title="' + esc(g.sha256) + '">' + esc(huellaCorta(g.sha256)) + '</span>']);
    var html2 = '<dl>' + filas.map(function (f) { return '<dt>' + f[0] + '</dt><dd>' + f[1] + '</dd>'; }).join('') + '</dl>' +
      enlaceExterno(g.url, 'Abrir el programa (PDF)', 'boton boton-negro');
    if (g.url_archivo) html2 += enlaceExterno(g.url_archivo, 'Copia archivada', 'boton boton-claro');
    if (p.web) html2 += enlaceExterno(p.web, 'Su web oficial · ' + esc(hostDe(p.web)), 'boton boton-claro');
    return html2;
  }

  function vistaPartido(partidoId) {
    var p = partidoPorId.get(partidoId);
    if (!p) return null;
    var com = comunidadDe(p);
    var filas = TEMAS.map(function (t) {
      var f = ficha(p.id, t.id);
      if (!f) return '';
      var texto = f.estado === 'propuesta' ? f.titular : TEXTO_ESTADO[f.estado];
      var clase = f.estado === 'propuesta' ? 'fila-titular' : 'fila-titular estado';
      return '<li><a class="fila fila-tema" href="#/ficha/' + esc(p.id) + '/' + esc(t.id) + '">' +
        icono(t.id, 20, 1.8, 'icono-fila') +
        '<span class="fila-texto"><span class="fila-nombre">' + esc(t.nombre) + '</span>' +
        '<span class="vh">: </span><span class="' + clase + '">' + esc(texto) + '</span></span>' +
        flecha('derecha', 14, 2, 'flecha') + '</a></li>';
    }).join('');
    return {
      titulo: p.nombre + ': qué propone · 29-N',
      html:
        '<nav class="barra" aria-label="Navegación">' + pastillaAtras('#/partidos', 'Partidos') + '</nav>' +
        '<header class="tarjeta partido-cabecera">' +
        '<h1 tabindex="-1">' + punto(p) + esc(p.nombre) + '</h1>' +
        (com ? '<p class="nombre-completo">Se presenta en ' + esc(com) + '</p>' : '<p class="nombre-completo">Partido de ámbito estatal</p>') +
        (p.nombre_completo ? '<p class="nombre-completo">' + esc(p.nombre_completo) + '</p>' : '') +
        '</header>' +
        '<main class="contenido">' +
        (filas ? '<section aria-labelledby="titulo-temas"><h2 class="grupo-cabecera" id="titulo-temas"><span>Sus propuestas, tema a tema</span></h2>' +
          '<ul class="tarjeta lista">' + filas + '</ul></section>' : '') +
        '<section class="tarjeta datos" aria-labelledby="titulo-programa"><h2 id="titulo-programa">Su programa</h2>' +
        datosPrograma(p) + '</section>' +
        '</main>'
    };
  }

  function vistaPartidos() {
    function lista(ps) {
      return '<ul class="tarjeta lista">' + ps.map(function (p) {
        var estado = hayPrograma(p) ?
          '<span class="fila-titular">Programa del ' + esc(fechaES(p.programa.fecha_pdf)) + '</span>' :
          '<span class="fila-titular estado">Aún no ha publicado su programa</span>';
        return '<li><a class="fila" href="#/partido/' + esc(p.id) + '">' + punto(p) +
          '<span class="fila-texto"><span class="fila-nombre">' + nombreConComunidad(p) + '</span>' +
          '<span class="vh">: </span>' + estado + '</span>' + flecha('derecha', 14, 2, 'flecha') + '</a></li>';
      }).join('') + '</ul>';
    }
    function grupo(clave, ps) {
      if (!ps.length) return '';
      return '<section aria-labelledby="grupo-' + clave + '"><h2 class="grupo-cabecera" id="grupo-' + clave + '"><span>' +
        GRUPOS[clave] + '</span><span>' + ps.length + '<span class="vh"> candidaturas</span></span></h2>' + lista(ps) + '</section>';
    }
    return {
      titulo: 'Partidos · 29-N',
      html:
        barraInicio() +
        '<header class="cabecera"><div class="tema-titulo"><h1 tabindex="-1">Partidos</h1></div>' +
        '<p class="pregunta">Por orden alfabético: primero los partidos estatales y después los de comunidades autónomas. No todos se presentan en todas las provincias: comprueba tu papeleta.</p></header>' +
        '<main class="contenido">' + grupo('estatales', ESTATALES) + grupo('territoriales', TERRITORIALES) + '</main>'
    };
  }

  function vistaMetodo() {
    var C = D.criterios || {};
    function parrafo(texto) { return texto ? '<p>' + esc(texto) + '</p>' : ''; }

    var temas = TEMAS.map(function (t) {
      return '<li><b>' + esc(t.nombre) + '</b>' + (t.origen ? '. <span class="origen">' + esc(t.origen) + '</span>' : '') + '</li>';
    }).join('');

    var filasVersiones = PARTIDOS.map(function (p) {
      var com = comunidadDe(p);
      var nombre = '<th scope="row">' + esc(p.nombre) + (com ? '<br><span class="comunidad">' + esc(com) + '</span>' : '') + '</th>';
      if (!hayPrograma(p)) {
        return '<tr>' + nombre + '<td class="estado">Aún no ha publicado su programa</td><td>—</td></tr>';
      }
      var g = p.programa;
      return '<tr>' + nombre + '<td>«' + esc(g.titulo) + '»<br>PDF del ' + esc(fechaES(g.fecha_pdf)) + ' · ' + esc(g.paginas) + ' págs.<br>' +
        '<a href="' + esc(g.url) + '" target="_blank" rel="noopener noreferrer">Abrir el PDF</a>' +
        (g.url_archivo ? ' · <a href="' + esc(g.url_archivo) + '" target="_blank" rel="noopener noreferrer">Copia archivada</a>' : '') +
        '</td><td><span class="huella" title="' + esc(g.sha256) + '">' + esc(huellaCorta(g.sha256)) + '</span></td></tr>';
    }).join('');

    var huellas = PARTIDOS.filter(hayPrograma).map(function (p) {
      return '<dt>' + esc(p.nombre) + '</dt><dd class="huella">' + esc(p.programa.sha256) + '</dd>';
    }).join('');

    return {
      titulo: 'Cómo se ha hecho · 29-N',
      html:
        barraInicio('<a class="pastilla" href="#/partidos">Partidos</a>') +
        '<header class="cabecera"><div class="tema-titulo"><h1 tabindex="-1">Cómo se ha hecho</h1></div>' +
        '<p class="pregunta">Qué partidos y temas aparecen, de dónde sale cada frase y cómo comprobarla.</p></header>' +
        '<main class="contenido">' +

        '<section class="tarjeta texto" aria-labelledby="m-partidos"><h2 id="m-partidos">Qué partidos aparecen</h2>' +
        parrafo(C.partidos_regla) +
        (C.partidos_orden ? '<p><b>Orden.</b> ' + esc(C.partidos_orden) + '</p>' : '') + '</section>' +

        '<section class="tarjeta texto" aria-labelledby="m-temas"><h2 id="m-temas">Qué temas y por qué</h2>' +
        parrafo(C.temas_regla) + '<ul class="puntos">' + temas + '</ul></section>' +

        '<section class="tarjeta texto" aria-labelledby="m-fuente"><h2 id="m-fuente">De dónde sale cada dato</h2>' +
        parrafo(C.fuente_unica) +
        '<p>La huella SHA-256 es un código que identifica un archivo exacto: si el PDF cambiara en una sola letra, la huella sería otra. ' +
        'Así cualquiera puede comprobar que citamos la misma versión.</p></section>' +

        '<section class="tarjeta texto" aria-labelledby="m-fichas"><h2 id="m-fichas">Cómo se escribe y se comprueba cada ficha</h2>' +
        '<ul class="puntos">' +
        '<li>Una ficha recoge lo que dice un programa sobre un tema: un titular, un resumen corto en lenguaje llano y de una a tres citas literales, cada una con su página.</li>' +
        '<li>Las propuestas se eligen por la importancia que les da el propio programa (su resumen, sus medidas principales, el comienzo de cada apartado), con el mismo criterio para todos los partidos.</li>' +
        '<li>Todo lo que dicen el titular y el resumen está en las citas.</li>' +
        '<li>Cada cita se comprueba automáticamente contra el texto del PDF oficial, en la página indicada.</li>' +
        '<li>Una revisión ciega comprueba que la redacción es neutral.</li>' +
        '<li>Las citas en catalán, gallego o euskera llevan debajo su traducción al castellano, marcada como «Traducción».</li>' +
        '<li>Si un programa no trata un tema, la ficha lo dice y enumera los términos que se han buscado en todo el programa.</li>' +
        '</ul></section>' +

        '<section class="tarjeta texto" aria-labelledby="m-sin"><h2 id="m-sin">Qué pasa con quien no ha publicado programa</h2>' +
        parrafo(C.sin_programa_regla) + '</section>' +

        '<section class="tarjeta texto" aria-labelledby="m-versiones"><h2 id="m-versiones">Versiones de los programas</h2>' +
        '<table class="tabla"><thead><tr><th scope="col">Candidatura</th><th scope="col">Programa</th><th scope="col">Huella</th></tr></thead>' +
        '<tbody>' + filasVersiones + '</tbody></table>' +
        (huellas ? '<details class="huellas"><summary>Huellas SHA-256 completas</summary><dl>' + huellas + '</dl></details>' : '') +
        '</section>' +

        '<section class="tarjeta texto" aria-labelledby="m-correccion"><h2 id="m-correccion">Cómo pedir una corrección</h2>' +
        '<p>Si ves un error, ábrelo como incidencia en el repositorio público del proyecto. Indica la ficha y la página del programa.</p>' +
        enlaceExterno(D.config.url_correcciones, 'Pedir una corrección', 'boton boton-claro') +
        '<p>Última actualización: ' + FECHA + '.</p>' +
        '</section>' +
        '</main>'
    };
  }

  /* ---------- imágenes ya generadas (scripts/imagenes.cjs usa los mismos nombres) ---------- */

  var IMG = {
    historia: function (t, grupo) { return 'img/tema-' + t + '-historia-' + grupo + '.png'; },
    carrusel: function (t, n) { return 'img/tema-' + t + '-carrusel-' + n + '.png'; },
    ficha: function (p, t) { return 'img/ficha-' + p + '-' + t + '.png'; },
    miniatura: function (ruta) { return 'img/miniaturas/' + ruta.split('/').pop().replace('.png', '.webp'); }
  };
  var GRUPO_CORTO = { estatales: 'estatales', territoriales: 'comunidades' };
  var DIAPOSITIVAS = ['portada', 'estatales', 'comunidades', 'cierre'];

  function miniatura(ruta, pieTexto, formato, compartir) {
    return '<a class="miniatura" href="' + esc(ruta) + '" download="' + esc(ruta.split('/').pop()) + '"' +
      (compartir ? ' data-compartir="' + esc(ruta) + '"' : '') + '>' +
      '<span class="caja caja-' + formato + '"><img src="' + esc(IMG.miniatura(ruta)) + '" alt="" loading="lazy" decoding="async"' +
      ' width="360" height="' + (formato === 'historia' ? 640 : 450) + '"></span>' +
      '<span class="miniatura-pie">' + pieTexto + '</span></a>';
  }

  function miniaturasTema(t, compartir) {
    var historias = ['estatales', 'territoriales'].map(function (g) {
      return miniatura(IMG.historia(t.id, g), 'Historia · ' + GRUPO_CORTO[g], 'historia', compartir);
    }).join('');
    var carrusel = [1, 2, 3, 4].map(function (n) {
      return miniatura(IMG.carrusel(t.id, n), n + '/4 · ' + DIAPOSITIVAS[n - 1], '45', compartir);
    }).join('');
    return { historias: historias, carrusel: carrusel };
  }

  function panelCompartirTema(t) {
    var m = miniaturasTema(t, true);
    var rutasCarrusel = [1, 2, 3, 4].map(function (n) { return IMG.carrusel(t.id, n); }).join(' ');
    return '<section class="acciones" aria-label="Compartir">' +
      '<button type="button" class="boton boton-claro" id="abrir-compartir" aria-expanded="false" aria-controls="panel-compartir">' +
      flecha('compartir', 16) + 'Compartir imagen</button>' +
      '<div class="tarjeta panel-compartir" id="panel-compartir" hidden data-titulo="' + esc(t.nombre + ' · 29-N') +
      '" data-enlace="' + esc(D.config.base_url + '#/tema/' + t.id) + '">' +
      '<h2 class="panel-titulo">Historias (9:16)</h2>' +
      '<div class="miniaturas dos">' + m.historias + '</div>' +
      '<h2 class="panel-titulo">Carrusel (4:5, cuatro imágenes)</h2>' +
      '<button type="button" class="boton boton-negro" data-compartir-varias="' + esc(rutasCarrusel) + '" hidden>' +
      flecha('compartir', 16) + 'Compartir el carrusel completo</button>' +
      '<div class="miniaturas cuatro">' + m.carrusel + '</div>' +
      '<p class="nota" data-nota-compartir>Toca una imagen para descargarla.</p>' +
      '<p class="estado-compartir" role="status"></p>' +
      '<a class="enlace-simple" href="#/material">Todo el material para compartir</a>' +
      '</div></section>';
  }

  function vistaMaterial() {
    var temas = TEMAS.map(function (t) {
      var m = miniaturasTema(t, false);
      return '<section class="tarjeta material-bloque" aria-labelledby="mt-' + esc(t.id) + '">' +
        '<h3 id="mt-' + esc(t.id) + '"><span class="icono-caja">' + icono(t.id, 20) + '</span>' + esc(t.nombre) + '</h3>' +
        '<div class="miniaturas dos">' + m.historias + '</div>' +
        '<div class="miniaturas cuatro">' + m.carrusel + '</div></section>';
    }).join('');
    var partidos = PARTIDOS.map(function (p) {
      var items = TEMAS.filter(function (t) { return ficha(p.id, t.id); }).map(function (t) {
        return miniatura(IMG.ficha(p.id, t.id), esc(t.nombre), '45', false);
      }).join('');
      if (!items) return '';
      return '<details class="tarjeta material-bloque"><summary>' + punto(p) +
        '<span class="fila-nombre">' + nombreConComunidad(p) + '</span></summary>' +
        '<div class="miniaturas">' + items + '</div></details>';
    }).join('');
    return {
      titulo: 'Material para compartir · 29-N',
      html:
        barraInicio('<a class="pastilla" href="#/partidos">Partidos</a>') +
        '<header class="cabecera"><div class="tema-titulo"><h1 tabindex="-1">Material para compartir</h1></div>' +
        '<p class="pregunta">Imágenes listas para redes, hechas con los mismos datos que la web. Toca una para descargarla. ' +
        'Historias en 9:16 (1080×1920); carrusel y fichas en 4:5 (1080×1350).</p></header>' +
        '<main class="contenido">' +
        '<section class="material-lista" aria-labelledby="m-temas"><h2 class="grupo-cabecera" id="m-temas"><span>Por tema</span></h2>' + temas + '</section>' +
        '<section class="material-lista" aria-labelledby="m-partidos"><h2 class="grupo-cabecera" id="m-partidos"><span>Por partido: una imagen por tema</span></h2>' + partidos + '</section>' +
        '</main>'
    };
  }

  function vistaNoEncontrada() {
    return {
      titulo: 'Página no encontrada · 29-N',
      html:
        barraInicio() +
        '<main class="contenido"><div class="tarjeta texto"><h1 tabindex="-1">Página no encontrada</h1>' +
        '<p>Esta dirección no corresponde a ningún tema, partido ni ficha.</p>' +
        '<a class="boton boton-negro" href="#/">Ir al inicio</a></div></main>'
    };
  }

  /* ---------- compartir imagen ---------- */

  var imagenesPedidas = new Map();

  function obtenerImagen(ruta) {
    if (!imagenesPedidas.has(ruta)) {
      var promesa = fetch(ruta).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.blob();
      });
      promesa.catch(function () { imagenesPedidas.delete(ruta); });
      imagenesPedidas.set(ruta, promesa);
    }
    return imagenesPedidas.get(ruta);
  }

  /* ¿Admite este navegador compartir n archivos PNG de una vez? */
  function puedeCompartir(n) {
    if (!navigator.share || !navigator.canShare) return false;
    try {
      var archivos = [];
      for (var i = 0; i < n; i++) archivos.push(new File([''], 'prueba-' + i + '.png', { type: 'image/png' }));
      return navigator.canShare({ files: archivos });
    } catch (e) {
      return false;
    }
  }

  function descargar(blob, nombre, retraso) {
    setTimeout(function () {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = nombre;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
    }, retraso || 0);
  }

  /* Comparte una o varias imágenes con navigator.share; si el navegador no puede, las descarga. */
  function compartirImagenes(rutas, titulo, enlace, estado) {
    estado.textContent = '';
    var nombres = rutas.map(function (r) { return r.split('/').pop(); });
    function descargarTodas(blobs) {
      blobs.forEach(function (b, i) { descargar(b, nombres[i], i * 400); });
      estado.textContent = blobs.length > 1 ? 'Imágenes descargadas.' : 'Imagen descargada.';
    }
    return Promise.all(rutas.map(obtenerImagen)).then(function (blobs) {
      var archivos = blobs.map(function (b, i) { return new File([b], nombres[i], { type: 'image/png' }); });
      if (navigator.share && navigator.canShare && navigator.canShare({ files: archivos })) {
        return navigator.share({ files: archivos, title: titulo, text: enlace }).catch(function (e) {
          if (e && e.name === 'AbortError') return;
          descargarTodas(blobs);
        });
      }
      descargarTodas(blobs);
    }).catch(function () {
      estado.textContent = rutas.length > 1 ? 'No se han podido preparar las imágenes.' : 'No se ha podido preparar la imagen.';
    });
  }

  /* Pide las imágenes antes del clic, para que el navegador permita compartirlas al pulsar. */
  function precargar(rutas) {
    rutas.forEach(function (r) { obtenerImagen(r).catch(function () {}); });
  }
  function precargarAlAcercarse(el, rutas) {
    ['pointerdown', 'focus', 'mouseenter'].forEach(function (ev) {
      el.addEventListener(ev, function () { precargar(rutas); }, { once: true, passive: true });
    });
  }

  function conectarFicha() {
    var boton = app.querySelector('button[data-imagen]');
    if (!boton) return;
    var rutas = [boton.getAttribute('data-imagen')];
    var estado = boton.parentNode.querySelector('.estado-compartir');
    precargarAlAcercarse(boton, rutas);
    boton.addEventListener('click', function () {
      compartirImagenes(rutas, boton.getAttribute('data-titulo'), boton.getAttribute('data-enlace'), estado);
    });
  }

  /* Panel de la vista Tema: sin navigator.share, las miniaturas son enlaces de descarga normales. */
  function conectarPanelTema() {
    var abrir = document.getElementById('abrir-compartir');
    var panel = document.getElementById('panel-compartir');
    if (!abrir || !panel) return;
    var estado = panel.querySelector('.estado-compartir');
    var titulo = panel.getAttribute('data-titulo');
    var enlace = panel.getAttribute('data-enlace');
    var enlaces = Array.prototype.slice.call(panel.querySelectorAll('a[data-compartir]'));
    var todas = enlaces.map(function (a) { return a.getAttribute('data-compartir'); });
    var botonCarrusel = panel.querySelector('[data-compartir-varias]');
    var rutasCarrusel = botonCarrusel ? botonCarrusel.getAttribute('data-compartir-varias').split(' ') : [];
    var compartirUna = puedeCompartir(1);

    abrir.addEventListener('click', function () {
      var abierto = abrir.getAttribute('aria-expanded') === 'true';
      abrir.setAttribute('aria-expanded', abierto ? 'false' : 'true');
      panel.hidden = abierto;
      if (!abierto && compartirUna) precargar(todas);
    });
    if (compartirUna) {
      panel.querySelector('[data-nota-compartir]').textContent = 'Toca una imagen para compartirla.';
      enlaces.forEach(function (a) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          compartirImagenes([a.getAttribute('data-compartir')], titulo, enlace, estado);
        });
      });
    }
    if (botonCarrusel && puedeCompartir(rutasCarrusel.length)) {
      botonCarrusel.hidden = false;
      botonCarrusel.addEventListener('click', function () {
        compartirImagenes(rutasCarrusel, titulo, enlace, estado);
      });
    }
  }

  function conectar() {
    var alternar = document.getElementById('alternar-citas');
    if (alternar) {
      alternar.addEventListener('click', function () {
        var seccion = alternar.closest('.citas');
        var visibles = alternar.getAttribute('aria-expanded') === 'true';
        alternar.setAttribute('aria-expanded', visibles ? 'false' : 'true');
        alternar.textContent = visibles ? 'Mostrar' : 'Ocultar';
        if (visibles) seccion.setAttribute('data-ocultas', ''); else seccion.removeAttribute('data-ocultas');
      });
    }
    conectarFicha();
    conectarPanelTema();
  }

  /* ---------- imágenes para compartir (#/captura/...) ---------- */

  function capPie(invita) {
    return '<div class="cap-pie">' +
      '<span class="cap-invita">' + invita + '</span>' +
      '<span class="cap-direccion">' + esc(DIRECCION) + '</span>' +
      '<span class="cap-fuente">Fuente: programas electorales oficiales · actualizado el ' + FECHA + '</span>' +
      '<span class="cap-independiente">Proyecto ciudadano independiente, sin relación con ningún partido.</span>' +
      '</div>';
  }

  function capSello(pagina, conDireccion) {
    return '<div class="cap-sello">' +
      (conDireccion ? '<span><b>' + esc(DIRECCION) + '</b> · actualizado el ' + FECHA + '</span>' : '<span></span>') +
      (pagina ? '<span class="cap-pagina">' + pagina + '</span>' : '') + '</div>';
  }

  function capFilas(clave, filas) {
    return '<div class="cap-etiqueta"><span class="cap-grupo">' + GRUPOS[clave] + '</span><span class="cap-cuenta">' + filas.length + '</span></div>' +
      '<div class="cap-lista">' + filas.map(function (r) {
        return '<div class="cap-fila">' + punto(r.partido) +
          '<div class="cap-fila-texto"><span class="cap-nombre">' + nombreConComunidad(r.partido) + '</span>' +
          '<span class="cap-titular' + (r.estado === 'propuesta' ? '' : ' estado') + '">' + esc(r.texto) + '</span></div></div>';
      }).join('') + '</div>';
  }

  function capKicker(t) {
    return '<div class="cap-kicker"><span class="cap-icono">' + icono(t.id, 38, 1.9) + '</span>Elecciones generales · 29-N</div>';
  }

  function capTemaLinea(t) {
    return '<div class="cap-tema-linea"><span class="cap-icono">' + icono(t.id, 44, 1.9) + '</span>' +
      '<span class="cap-tema-nombre">' + esc(t.nombre) + '</span></div>';
  }

  /* Pasos de ajuste, en orden, hasta que el contenido quepa en el marco:
     ['var', selector|null, variable, mínimo, decremento]  baja una variable CSS (en el marco si selector es null)
     ['fuente', selector, null, mínimo, decremento]        baja el tamaño de letra de un elemento
     ['ocultar', selector]                                 oculta un elemento (último recurso) */

  function capHistoria(t, clave) {
    return {
      html:
        '<div class="marco marco-historia">' +
        '<header class="cap-cabecera">' + capKicker(t) +
        '<h1 class="cap-titulo">' + esc(t.nombre) + '</h1>' +
        '<p class="cap-pregunta">' + esc(t.pregunta) + '</p></header>' +
        capFilas(clave, filasTema(t.id)[clave]) +
        '<div class="cap-hueco"></div>' +
        capPie('Cita literal y página de cada propuesta en') +
        '</div>',
      titulo: { selector: '.cap-titulo', min: 96, lineas: 3 },
      pasos: [['var', null, '--fila', 36, 1], ['var', null, '--fila-pad', 10, 1], ['fuente', '.cap-pregunta', null, 32, 2],
        ['fuente', '.cap-titulo', null, 96, 2], ['var', null, '--fila', 34, 1], ['var', null, '--fila-pad', 6, 1],
        ['ocultar', '.cap-pregunta']]
    };
  }

  function capCarrusel(t, n) {
    if (n === 1) {
      return {
        html:
          '<div class="marco marco-45 cap-portada">' +
          '<header class="cap-cabecera"><div class="cap-kicker">Elecciones generales · 29-N</div>' +
          '<span class="cap-icono">' + icono(t.id, 84, 1.8) + '</span>' +
          '<h1 class="cap-titulo">' + esc(t.nombre) + '</h1>' +
          '<p class="cap-pregunta">' + esc(t.pregunta) + '</p></header>' +
          '<p class="cap-desliza">Qué propone cada partido según su programa oficial, en una línea. Desliza para verlo.</p>' +
          capSello('1/4', true) + '</div>',
        titulo: { selector: '.cap-titulo', min: 96, lineas: 4 },
        pasos: [['fuente', '.cap-titulo', null, 96, 2], ['fuente', '.cap-pregunta', null, 40, 2]]
      };
    }
    if (n === 2 || n === 3) {
      var clave = n === 2 ? 'estatales' : 'territoriales';
      return {
        html:
          '<div class="marco marco-45">' + capTemaLinea(t) + capFilas(clave, filasTema(t.id)[clave]) +
          capSello(n + '/4', true) + '</div>',
        titulo: { selector: '.cap-tema-nombre', min: 40, lineas: 2 },
        pasos: [['var', null, '--fila', 36, 1], ['fuente', '.cap-tema-nombre', null, 40, 2],
          ['var', null, '--fila', 34, 1], ['var', null, '--fila-pad', 6, 1]]
      };
    }
    return {
      html:
        '<div class="marco marco-45 cap-cierre">' + capTemaLinea(t) +
        '<div class="cap-centro"><p class="cap-grande">Comprueba cada cita, con su página, en la web</p>' +
        capPie('Todas las propuestas y sus citas en') + '</div>' + capSello('4/4', false) + '</div>',
      titulo: { selector: '.cap-tema-nombre', min: 40, lineas: 2 },
      pasos: [['fuente', '.cap-grande', null, 56, 2]]
    };
  }

  function capFicha(p, t, f) {
    var com = comunidadDe(p);
    var titular, resumen, paginas;
    if (f.estado === 'propuesta') {
      titular = esc(f.titular);
      resumen = esc(f.resumen);
      paginas = 'Programa oficial, ' + paginasDeFicha(f);
    } else if (f.estado === 'sin_propuesta') {
      titular = TEXTO_ESTADO.sin_propuesta;
      resumen = 'Términos buscados en todo el programa: ' + f.terminos_buscados.map(function (x) { return '«' + esc(x) + '»'; }).join(', ') + '.';
      paginas = 'Programa oficial: «' + esc(p.programa.titulo) + '»';
    } else if (f.estado === 'en_preparacion') {
      titular = TEXTO_ESTADO.en_preparacion;
      resumen = '';
      paginas = 'Programa oficial: «' + esc(p.programa.titulo) + '»';
    } else {
      titular = 'Aún no ha publicado su programa para el 29-N';
      resumen = '';
      paginas = '';
    }
    return {
      html:
        '<div class="marco marco-45">' + capTemaLinea(t) +
        '<div class="cap-tarjeta-ficha">' +
        '<div class="cap-ficha-partido">' + punto(p) + esc(p.nombre) + (com ? ' <span class="comunidad">· ' + esc(com) + '</span>' : '') + '</div>' +
        '<div class="cap-ficha-titular' + (f.estado === 'propuesta' ? '' : ' estado') + '">' + titular + '</div>' +
        (resumen ? '<p class="cap-ficha-resumen">' + resumen + '</p>' : '') +
        (paginas ? '<div class="cap-ficha-paginas">' + flecha('documento', 36, 2) + '<span>' + paginas + '</span></div>' : '') +
        '</div>' +
        '<div class="cap-hueco"></div>' +
        capPie('Cita literal y página de cada propuesta en') + '</div>',
      titulo: { selector: '.cap-tema-nombre', min: 40, lineas: 2 },
      pasos: [['var', '.cap-tarjeta-ficha', '--e', 0.8, 0.02]]
    };
  }

  function tamFuente(el) { return parseFloat(getComputedStyle(el).fontSize); }

  function desborda(marco) {
    if (marco.scrollHeight > marco.clientHeight + 1) return true;
    var els = marco.querySelectorAll('.cap-titulo, .cap-tema-nombre, .cap-nombre, .cap-titular, .cap-ficha-partido, .cap-ficha-titular, .cap-direccion');
    for (var i = 0; i < els.length; i++) {
      if (els[i].scrollWidth > els[i].clientWidth + 1) return true;
    }
    return false;
  }

  /* Encoge el título hasta que ninguna palabra se salga y quepa en el número de líneas. */
  function ajustarTitulo(marco, cfg) {
    var el = marco.querySelector(cfg.selector);
    if (!el) return;
    for (var guarda = 0; guarda < 200; guarda++) {
      var s = tamFuente(el);
      var lh = parseFloat(getComputedStyle(el).lineHeight) || s;
      var cabe = el.scrollWidth <= el.clientWidth + 1 && el.getBoundingClientRect().height <= lh * cfg.lineas + 2;
      if (cabe || s - 2 < cfg.min) return;
      el.style.fontSize = (s - 2) + 'px';
    }
  }

  function aplicarPaso(marco, paso) {
    var tipo = paso[0];
    var el, actual;
    if (tipo === 'var') {
      el = paso[1] ? marco.querySelector(paso[1]) : marco;
      if (!el) return false;
      var crudo = getComputedStyle(el).getPropertyValue(paso[2]).trim();
      actual = parseFloat(crudo);
      var nuevo = Math.round((actual - paso[4]) * 1000) / 1000;
      if (!(nuevo >= paso[3] - 1e-9)) return false;
      el.style.setProperty(paso[2], /px$/.test(crudo) ? nuevo + 'px' : String(nuevo));
      return true;
    }
    if (tipo === 'fuente') {
      el = marco.querySelector(paso[1]);
      if (!el || el.hidden) return false;
      actual = tamFuente(el);
      if (actual - paso[4] < paso[3]) return false;
      el.style.fontSize = (actual - paso[4]) + 'px';
      return true;
    }
    if (tipo === 'ocultar') {
      el = marco.querySelector(paso[1]);
      if (!el || el.hidden) return false;
      el.hidden = true;
      return true;
    }
    return false;
  }

  function ajustarMarco(marco, cfg) {
    if (cfg.titulo) ajustarTitulo(marco, cfg.titulo);
    (cfg.pasos || []).forEach(function (paso) {
      var guarda = 0;
      while (desborda(marco) && guarda++ < 400) {
        if (!aplicarPaso(marco, paso)) break;
      }
    });
    return !desborda(marco);
  }

  /* El estado de ajuste de un marco, para aplicar el mismo tamaño a las dos imágenes de un tema
     (estatales y territoriales): igual tamaño de letra para todos los partidos. */
  var VARIABLES_MARCO = ['--fila', '--fila-pad'];
  var ELEMENTOS_AJUSTABLES = ['.cap-titulo', '.cap-pregunta', '.cap-tema-nombre'];

  function capturarEstado(marco) {
    var estado = { vars: {}, elementos: {} };
    VARIABLES_MARCO.forEach(function (n) { estado.vars[n] = marco.style.getPropertyValue(n); });
    ELEMENTOS_AJUSTABLES.forEach(function (s) {
      var el = marco.querySelector(s);
      if (el) estado.elementos[s] = { tam: el.style.fontSize, oculto: el.hidden };
    });
    return estado;
  }

  function aplicarEstado(marco, estado) {
    Object.keys(estado.vars).forEach(function (n) {
      if (estado.vars[n]) marco.style.setProperty(n, estado.vars[n]);
    });
    Object.keys(estado.elementos).forEach(function (s) {
      var el = marco.querySelector(s);
      if (!el) return;
      el.style.fontSize = estado.elementos[s].tam;
      el.hidden = estado.elementos[s].oculto;
    });
  }

  function fuentesListas() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var cargas = ['400', '500', '600', '700', '800'].map(function (w) {
      return document.fonts.load(w + ' 40px "DM Sans"', 'Áa«»·ñç');
    });
    cargas.push(document.fonts.load('italic 500 40px "DM Sans"', 'Áa'));
    return Promise.all(cargas).then(function () { return document.fonts.ready; }).catch(function () {});
  }

  /* Qué dibujar para una ruta #/captura/...: el marco pedido y, si comparte tamaño con otros,
     la lista completa de marcos que deben quedar iguales (siempre la misma, sea cual sea el pedido). */
  function configCaptura(r) {
    var t = temaPorId.get(r[1]);
    if (r[0] === 'historia' && r.length === 3 && t && GRUPOS[r[2]]) {
      return { cfg: capHistoria(t, r[2]), hermanos: [capHistoria(t, 'territoriales'), capHistoria(t, 'estatales')] };
    }
    if (r[0] === 'carrusel' && r.length === 3 && t && /^[1-4]$/.test(r[2])) {
      var n = Number(r[2]);
      var hermanos = n === 2 || n === 3 ? [capCarrusel(t, 3), capCarrusel(t, 2)] : [];
      return { cfg: capCarrusel(t, n), hermanos: hermanos };
    }
    if (r[0] === 'ficha' && (r.length === 3 || r.length === 4)) {
      var p = partidoPorId.get(r[1]);
      var tf = temaPorId.get(r[2]);
      var f = p && tf ? ficha(r[1], r[2]) : null;
      if (!f) return null;
      var cfg = capFicha(p, tf, f);
      var escala = r.length === 4 ? parseFloat(r[3]) : NaN;
      if (escala > 0) cfg.escala = escala;
      return { cfg: cfg, hermanos: [] };
    }
    return null;
  }

  var turno = 0;
  function renderCaptura(r) {
    var miTurno = ++turno;
    var c = configCaptura(r);
    document.title = 'Imagen para compartir';
    delete document.body.dataset.capturaLista;
    delete document.body.dataset.capturaOk;
    delete document.body.dataset.capturaEscala;
    if (!c) {
      app.innerHTML = '<p>Imagen no encontrada.</p>';
      document.body.dataset.capturaOk = '0';
      document.body.dataset.capturaLista = location.hash;
      return;
    }
    app.innerHTML = c.cfg.html;
    fuentesListas().then(function () {
      if (miTurno !== turno) return;
      var estado = null;
      c.hermanos.forEach(function (h) {
        app.innerHTML = h.html;
        var m = app.querySelector('.marco');
        if (estado) aplicarEstado(m, estado);
        ajustarMarco(m, h);
        estado = capturarEstado(m);
      });
      app.innerHTML = c.cfg.html;
      var marco = app.querySelector('.marco');
      if (estado) aplicarEstado(marco, estado);
      var tarjeta = marco.querySelector('.cap-tarjeta-ficha');
      if (tarjeta && c.cfg.escala) tarjeta.style.setProperty('--e', String(c.cfg.escala));
      var ok = ajustarMarco(marco, c.cfg);
      if (tarjeta) document.body.dataset.capturaEscala = getComputedStyle(tarjeta).getPropertyValue('--e').trim();
      document.body.dataset.capturaOk = ok ? '1' : '0';
      document.body.dataset.capturaLista = location.hash;
    });
  }

  /* ---------- rutas ---------- */

  function partesRuta() {
    var h = location.hash || '';
    if (h.indexOf('#/') !== 0) return [];
    return h.slice(2).split('/').filter(Boolean).map(function (s) {
      try { return decodeURIComponent(s); } catch (e) { return s; }
    });
  }

  var primera = true;
  function render() {
    var r = partesRuta();
    var esCaptura = r[0] === 'captura';
    document.body.classList.toggle('modo-captura', esCaptura);
    if (esCaptura) {
      renderCaptura(r.slice(1));
      return;
    }
    var vista = null;
    if (r.length === 0) vista = vistaInicio();
    else if (r[0] === 'tema' && r.length === 2) vista = vistaTema(r[1]);
    else if (r[0] === 'ficha' && r.length === 3) vista = vistaFicha(r[1], r[2]);
    else if (r[0] === 'partido' && r.length === 2) vista = vistaPartido(r[1]);
    else if (r[0] === 'partidos' && r.length === 1) vista = vistaPartidos();
    else if (r[0] === 'metodo' && r.length === 1) vista = vistaMetodo();
    else if (r[0] === 'material' && r.length === 1) vista = vistaMaterial();
    vista = vista || vistaNoEncontrada();
    document.title = vista.titulo;
    app.innerHTML = '<div class="pagina">' + vista.html + pie() + '</div>';
    conectar();
    if (!primera) {
      window.scrollTo(0, 0);
      var h1 = app.querySelector('h1');
      if (h1) h1.focus({ preventScroll: true });
    }
    primera = false;
  }

  window.addEventListener('hashchange', render);
  render();
})();
