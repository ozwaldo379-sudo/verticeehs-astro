import type { APIRoute } from 'astro';
import { sql } from '../../lib/db';
import { iniciarSesionEmpresa } from '../../lib/session';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const codigo = String(form.get('codigo') ?? '').trim().toUpperCase();

  if (!/^[A-Z]{2}\d{4}$/.test(codigo)) {
    return redirect('/clientes?error=formato', 303);
  }

  const q = sql();
  const filas = await q`SELECT id FROM empresas WHERE codigo = ${codigo} AND activa` as { id: number }[];

  if (filas.length === 0) {
    // Pausa breve para dificultar la enumeración de códigos por fuerza bruta
    await new Promise(r => setTimeout(r, 800));
    return redirect('/clientes?error=codigo', 303);
  }

  iniciarSesionEmpresa(cookies, filas[0].id);
  return redirect('/clientes/portal', 303);
};
