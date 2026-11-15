/* Genera las imágenes para compartir en web/img/ dibujándolas con la propia web
   (rutas #/captura/...), para que web e imágenes nunca digan cosas distintas.

   Uso (desde la carpeta del proyecto, después de scripts/construir.py):
     node scripts/imagenes.cjs                    todas las imágenes (borra antes los PNG de web/img)
     node scripts/imagenes.cjs --solo tema-vivienda   solo las que empiezan así (no borra nada)

   Requisitos: puppeteer-core (se resuelve desde un node_modules superior) y Chrome en su
   ruta estándar de Windows o en la variable de entorno CHROME_PATH.

   Por tema: tema-<tema>-historia-estatales.png y -territoriales.png (1080x1920) y
   tema-<tema>-carrusel-1..4.png (1080x1350). Por ficha: ficha-<partido>-<tema>.png (1080x1350).
   Igual para todos: las dos imágenes de un tema comparten tamaño de letra (lo fija app.js), y
   todas las fichas usan la misma escala, la mayor que cabe en todas.
   Además, una miniatura WebP de 360 px de ancho de cada imagen en web/img/miniaturas/ (mismo
   nombre, .webp), para el panel «Compartir imagen» de cada tema y la página #/material.
   Sale con código 1 si alguna imagen no cabe en su marco, si la página da errores o si
   pide algo a un servidor que no sea el local. */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer-core');

const RAIZ = path.resolve(__dirname, '..');
const WEB = path.join(RAIZ, 'web');
const IMG = path.join(WEB, 'img');
const MINIATURAS = path.join(IMG, 'miniaturas');
const ANCHO_MINIATURA = 360;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8'
};

function rutaChrome() {
  const sufijo = path.join('Google', 'Chrome', 'Application', 'chrome.exe');
  const candidatos = [
    process.env.CHROME_PATH,
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, sufijo),
    process.env['PROGRAMFILES(X86)'] && path.join(process.env['PROGRAMFILES(X86)'], sufijo),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, sufijo)
  ].filter(Boolean);
  const encontrada = candidatos.find((c) => fs.existsSync(c));
  if (!encontrada) {
    throw new Error('No se encuentra Chrome. Indica su ruta en la variable de entorno CHROME_PATH.');
  }
  return encontrada;
}

function servidorLocal() {
  return new Promise((resolver, rechazar) => {
    const srv = http.createServer((req, res) => {
      let ruta;
      try {
        ruta = decodeURIComponent(new URL(req.url, 'http://local').pathname);
      } catch (e) {
        res.writeHead(400);
        res.end();
        return;
      }
      if (ruta.endsWith('/')) ruta += 'index.html';
      const archivo = path.join(WEB, path.normalize(ruta));
      if (!archivo.startsWith(WEB + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      fs.readFile(archivo, (err, datos) => {
        if (err) {
          res.writeHead(404);
          res.end();
          return;
        }
        res.writeHead(200, { 'Content-Type': TIPOS[path.extname(archivo)] || 'application/octet-stream' });
        res.end(datos);
      });
    });
    srv.on('error', rechazar);
    srv.listen(0, '127.0.0.1', () => resolver(srv));
  });
}

function leerArgumentos() {
  const args = process.argv.slice(2);
  const i = args.indexOf('--solo');
  return { solo: i !== -1 ? args[i + 1] || '' : null };
}

function listaDeTrabajos(temas, fichas) {
  const trabajos = [];
  for (const t of temas) {
    for (const grupo of ['estatales', 'territoriales']) {
      trabajos.push({ ruta: `historia/${t}/${grupo}`, archivo: `tema-${t}-historia-${grupo}.png`, ancho: 1080, alto: 1920 });
    }
    for (let n = 1; n <= 4; n++) {
      trabajos.push({ ruta: `carrusel/${t}/${n}`, archivo: `tema-${t}-carrusel-${n}.png`, ancho: 1080, alto: 1350 });
    }
  }
  for (const clave of fichas) {
    const [p, t] = clave.split('/');
    trabajos.push({ ruta: `ficha/${p}/${t}`, archivo: `ficha-${p}-${t}.png`, ancho: 1080, alto: 1350 });
  }
  return trabajos;
}

async function main() {
  const { solo } = leerArgumentos();
  if (!fs.existsSync(path.join(WEB, 'datos.js'))) {
    throw new Error('Falta web/datos.js: ejecuta antes scripts/construir.py.');
  }
  const srv = await servidorLocal();
  const anfitrion = `127.0.0.1:${srv.address().port}`;
  const base = `http://${anfitrion}/index.html`;
  const navegador = await puppeteer.launch({
    executablePath: rutaChrome(),
    headless: true,
    args: ['--no-first-run', '--no-default-browser-check', '--hide-scrollbars']
  });
  const errores = [];
  const ajenas = [];
  const desbordadas = [];
  let hechas = 0;
  let miniaturas = 0;
  try {
    const pagina = await navegador.newPage();
    await pagina.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: 'light' },
      { name: 'prefers-reduced-motion', value: 'reduce' }
    ]);
    await pagina.setRequestInterception(true);
    pagina.on('request', (r) => {
      const url = new URL(r.url());
      if (url.protocol === 'data:' || url.protocol === 'blob:' || url.host === anfitrion) {
        r.continue();
      } else {
        ajenas.push(r.url());
        r.abort();
      }
    });
    pagina.on('pageerror', (e) => errores.push(String(e)));
    pagina.on('console', (m) => {
      if (m.type() === 'error') errores.push(m.text());
    });

    await pagina.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
    await pagina.goto(base + '#/', { waitUntil: 'load' });
    const { temas, fichas } = await pagina.evaluate(() => ({
      temas: window.DATOS.temas.map((t) => t.id),
      fichas: Object.keys(window.DATOS.fichas)
    }));

    const todos = listaDeTrabajos(temas, fichas);
    let trabajos = solo !== null ? todos.filter((t) => t.archivo.startsWith(solo)) : todos;
    fs.mkdirSync(MINIATURAS, { recursive: true });
    if (solo === null) {
      for (const viejo of fs.readdirSync(IMG)) {
        if (viejo.endsWith('.png')) fs.unlinkSync(path.join(IMG, viejo));
      }
      for (const viejo of fs.readdirSync(MINIATURAS)) {
        if (viejo.endsWith('.webp')) fs.unlinkSync(path.join(MINIATURAS, viejo));
      }
    }

    async function dibujar(t, ruta) {
      const hash = '#/captura/' + ruta;
      await pagina.setViewport({ width: t.ancho, height: t.alto, deviceScaleFactor: 1 });
      await pagina.evaluate((h) => { location.hash = h; }, hash);
      await pagina.waitForFunction((h) => document.body.dataset.capturaLista === h, { timeout: 20000 }, hash);
      return pagina.evaluate(() => ({
        cabe: document.body.dataset.capturaOk === '1',
        escala: parseFloat(document.body.dataset.capturaEscala)
      }));
    }

    // Igual para todos: las imágenes de ficha usan una sola escala de letra, la mayor que
    // cabe en todas las fichas (se mide siempre sobre todas, también con --solo).
    let escala = null;
    if (trabajos.some((t) => t.ruta.startsWith('ficha/'))) {
      for (const t of todos.filter((x) => x.ruta.startsWith('ficha/'))) {
        const r = await dibujar(t, t.ruta);
        if (!r.cabe) desbordadas.push(t.archivo + ' (incluso con la letra más pequeña)');
        if (Number.isFinite(r.escala) && (escala === null || r.escala < escala)) escala = r.escala;
      }
      console.log(`Escala común de las fichas: ${escala}`);
    }

    for (const t of trabajos) {
      const esFicha = t.ruta.startsWith('ficha/');
      const r = await dibujar(t, esFicha ? `${t.ruta}/${escala}` : t.ruta);
      if (!r.cabe) desbordadas.push(t.archivo);
      if (esFicha && Math.abs(r.escala - escala) > 1e-6) {
        desbordadas.push(`${t.archivo} (escala ${r.escala} en vez de ${escala})`);
      }
      await pagina.screenshot({
        path: path.join(IMG, t.archivo),
        clip: { x: 0, y: 0, width: t.ancho, height: t.alto }
      });
      hechas += 1;
    }

    // Miniaturas: la misma imagen ya guardada, reducida en el navegador (no se vuelve a dibujar,
    // así la miniatura nunca puede decir algo distinto de la imagen).
    for (const t of trabajos) {
      const datos = await pagina.evaluate(async (src, ancho) => {
        const img = new Image();
        img.src = src;
        await img.decode();
        let lienzo = img;
        let w = img.naturalWidth;
        let h = img.naturalHeight;
        while (w / 2 >= ancho) {
          const c = document.createElement('canvas');
          c.width = Math.round(w / 2);
          c.height = Math.round(h / 2);
          const ctx = c.getContext('2d');
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(lienzo, 0, 0, c.width, c.height);
          lienzo = c;
          w = c.width;
          h = c.height;
        }
        const final = document.createElement('canvas');
        final.width = ancho;
        final.height = Math.round(img.naturalHeight * ancho / img.naturalWidth);
        const ctx = final.getContext('2d');
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(lienzo, 0, 0, final.width, final.height);
        return final.toDataURL('image/webp', 0.85);
      }, `/img/${t.archivo}?v=${Date.now()}`, ANCHO_MINIATURA);
      if (!datos.startsWith('data:image/webp;base64,')) {
        errores.push(`miniatura no generada: ${t.archivo}`);
        continue;
      }
      fs.writeFileSync(path.join(MINIATURAS, t.archivo.replace(/\.png$/, '.webp')), Buffer.from(datos.split(',')[1], 'base64'));
      miniaturas += 1;
    }
  } finally {
    await navegador.close();
    srv.close();
  }

  console.log(`Imágenes: ${hechas} en web/img; miniaturas: ${miniaturas} en web/img/miniaturas`);
  for (const a of desbordadas) console.log(`ERROR: el contenido no cabe en el marco: ${a}`);
  for (const e of errores) console.log(`ERROR en la página: ${e}`);
  for (const u of ajenas) console.log(`ERROR: petición a otro servidor (bloqueada): ${u}`);
  const fallos = desbordadas.length + errores.length + ajenas.length;
  console.log(`Resultado: ${hechas} imágenes, ${fallos} fallos`);
  return fallos ? 1 : 0;
}

main().then(
  (codigo) => { process.exitCode = codigo; },
  (e) => { console.error(`ERROR: ${e.message}`); process.exitCode = 1; }
);
