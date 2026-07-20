#!/usr/bin/env node
/**
 * Generador de cotizaciones para el Portal de Clientes de Vértice EHS.
 *
 * Uso:
 *   npm run nueva-cotizacion -- --cliente "Global Denim" --servicio "NOM-010-STPS-2014 · Reconocimiento y Evaluación" --total 286875.00
 *
 * Genera un código único de acceso (2 letras iniciales + 4 dígitos aleatorios),
 * verifica colisiones contra los archivos existentes y crea
 * src/data/cotizaciones/<CODIGO>.html desde plantilla con la metadata pre-llenada.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const DIR = path.join(process.cwd(), 'src/data/cotizaciones');

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      args[argv[i].slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
    }
  }
  return args;
}

function iniciales(nombre) {
  const palabras = nombre
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // quitar acentos
    .replace(/[^a-zA-Z ]/g, '')
    .trim()
    .split(/\s+/)
    .filter(p => !['de', 'del', 'la', 'las', 'los', 'y', 'sa', 'cv', 'sc'].includes(p.toLowerCase()));
  if (palabras.length >= 2) return (palabras[0][0] + palabras[1][0]).toUpperCase();
  if (palabras.length === 1 && palabras[0].length >= 2) return palabras[0].slice(0, 2).toUpperCase();
  throw new Error(`No se pudieron derivar iniciales de: "${nombre}"`);
}

function codigoUnico(prefijo) {
  const existentes = new Set(
    fs.existsSync(DIR) ? fs.readdirSync(DIR).map(f => f.replace(/\.html$/, '').toUpperCase()) : []
  );
  for (let intento = 0; intento < 50; intento++) {
    const digitos = String(crypto.randomInt(0, 10000)).padStart(4, '0');
    const codigo = `${prefijo}${digitos}`;
    if (!existentes.has(codigo)) return codigo;
  }
  throw new Error(`Demasiadas colisiones para el prefijo ${prefijo}`);
}

const args = parseArgs(process.argv.slice(2));

if (!args.cliente) {
  console.error('Falta --cliente. Ejemplo:\n  npm run nueva-cotizacion -- --cliente "Global Denim" --servicio "NOM-010-STPS-2014 · Reconocimiento y Evaluación"');
  process.exit(1);
}

const cliente = args.cliente;
const servicio = args.servicio || 'Servicio EHS por definir';
const total = args.total || '0.00';
const hoy = new Date();
const expira = new Date(hoy.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 días de vigencia
const fmt = d => d.toISOString().slice(0, 10);

const prefijo = args.codigo ? String(args.codigo).toUpperCase() : codigoUnico(iniciales(cliente));
const codigo = /^[A-Z]{2}\d{4}$/.test(prefijo) ? prefijo : codigoUnico(iniciales(cliente));
const folioInterno = `VEHS${fmt(hoy).replace(/-/g, '').slice(2)}-${codigo.slice(0, 2)}`;

const plantilla = `<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cotización ${folioInterno} · Vértice EHS · ${servicio} · ${cliente}</title>
<meta name="description" content="Cotización ${folioInterno} — ${servicio} para ${cliente}.">
<meta name="quote-folio" content="${folioInterno}">
<meta name="quote-client" content="${cliente}">
<meta name="quote-service" content="${servicio}">
<meta name="quote-issued" content="${fmt(hoy)}">
<meta name="quote-expires" content="${fmt(expira)}">
<meta name="quote-currency" content="MXN">
<meta name="quote-total" content="${total}">
<meta name="robots" content="noindex">
<style>
  body { font-family: 'Inter', system-ui, sans-serif; background: #f2f6f9; color: #1d2b38; margin: 0; padding: 4rem 1.5rem; }
  .wrap { max-width: 860px; margin: 0 auto; background: #fff; border-radius: 18px; padding: 3rem; box-shadow: 0 6px 18px rgba(18,44,70,.13); }
  h1 { color: #122c46; }
  .todo { background: #fdf3e0; border: 1px solid #b97a10; border-radius: 12px; padding: 1.5rem; color: #b97a10; font-weight: 600; }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Cotización ${folioInterno}</h1>
    <p><strong>Cliente:</strong> ${cliente}<br>
       <strong>Servicio:</strong> ${servicio}<br>
       <strong>Emisión:</strong> ${fmt(hoy)} · <strong>Vigencia:</strong> ${fmt(expira)}</p>
    <div class="todo">⚠️ PLANTILLA — Reemplaza este archivo (o su contenido) con la cotización HTML final. Conserva las etiquetas &lt;meta name="quote-*"&gt; del &lt;head&gt;.</div>
  </div>
</body>
</html>
`;

fs.mkdirSync(DIR, { recursive: true });
const destino = path.join(DIR, `${codigo}.html`);
if (fs.existsSync(destino)) {
  console.error(`Ya existe ${destino} — no se sobrescribe.`);
  process.exit(1);
}
fs.writeFileSync(destino, plantilla, 'utf-8');

console.log(`
✅ Cotización creada
   Código de acceso : ${codigo}
   Folio interno    : ${folioInterno}
   Archivo          : src/data/cotizaciones/${codigo}.html
   URL (tras deploy): /clientes/cotizaciones/${codigo}

Siguientes pasos:
  1. Pega el HTML final de la cotización en el archivo (conserva los <meta name="quote-*">).
  2. npm run build   (verifica que compila)
  3. git add + commit + push → Vercel despliega y el código queda habilitado.
  4. Comparte el código ${codigo} con el cliente por WhatsApp/correo.
`);
