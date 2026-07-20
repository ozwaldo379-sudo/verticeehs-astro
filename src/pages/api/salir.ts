import type { APIRoute } from 'astro';
import { cerrarSesionEmpresa, cerrarSesionAdmin } from '../../lib/session';

export const prerender = false;

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cerrarSesionEmpresa(cookies);
  cerrarSesionAdmin(cookies);
  return redirect('/clientes', 303);
};
