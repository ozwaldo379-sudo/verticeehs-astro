import type { APIRoute } from 'astro';
import { sql } from '../../../lib/db';
import { empresaEnSesion, esAdmin } from '../../../lib/session';

export const prerender = false;

export const GET: APIRoute = async ({ params, cookies, url }) => {
  const id = Number(params.id);
  if (!Number.isInteger(id)) return new Response('No encontrado', { status: 404 });

  const empresaId = empresaEnSesion(cookies);
  const admin = esAdmin(cookies);
  if (!empresaId && !admin) return new Response('No autorizado', { status: 401 });

  const q = sql();
  const filas = await q`
    SELECT empresa_id, titulo, html, archivo, archivo_nombre, archivo_mime
    FROM documentos WHERE id = ${id} AND visible
  ` as { empresa_id: number; titulo: string; html: string | null; archivo: Uint8Array | null; archivo_nombre: string | null; archivo_mime: string | null }[];

  if (filas.length === 0) return new Response('No encontrado', { status: 404 });
  const doc = filas[0];

  // Un cliente solo puede ver documentos de SU empresa; el admin ve todo.
  if (!admin && doc.empresa_id !== empresaId) return new Response('No autorizado', { status: 403 });

  if (doc.html) {
    return new Response(doc.html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  if (doc.archivo) {
    const descargar = url.searchParams.has('descargar');
    const nombre = doc.archivo_nombre ?? `${doc.titulo}.pdf`;
    return new Response(new Uint8Array(doc.archivo), {
      headers: {
        'Content-Type': doc.archivo_mime ?? 'application/octet-stream',
        'Content-Disposition': `${descargar ? 'attachment' : 'inline'}; filename="${encodeURIComponent(nombre)}"`,
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  return new Response('Documento sin contenido', { status: 404 });
};
