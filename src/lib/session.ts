import crypto from 'node:crypto';
import type { AstroCookies } from 'astro';

const CLIENTE_COOKIE = 'vehs_sesion';
const ADMIN_COOKIE = 'vehs_admin';
const DURACION_SEG = 60 * 60 * 8; // 8 horas

function secret(): string {
  const s = import.meta.env.SESSION_SECRET ?? process.env.SESSION_SECRET;
  if (!s) throw new Error('SESSION_SECRET no está configurada');
  return s;
}

function firmar(payload: string): string {
  return crypto.createHmac('sha256', secret()).update(payload).digest('base64url');
}

function crearToken(data: object): string {
  const payload = Buffer.from(JSON.stringify({ ...data, exp: Math.floor(Date.now() / 1000) + DURACION_SEG })).toString('base64url');
  return `${payload}.${firmar(payload)}`;
}

function leerToken<T>(token: string | undefined): T | null {
  if (!token) return null;
  const [payload, firma] = token.split('.');
  if (!payload || !firma) return null;
  const esperada = firmar(payload);
  if (firma.length !== esperada.length || !crypto.timingSafeEqual(Buffer.from(firma), Buffer.from(esperada))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8'));
    if (typeof data.exp !== 'number' || data.exp < Date.now() / 1000) return null;
    return data as T;
  } catch {
    return null;
  }
}

const opcionesCookie = {
  path: '/',
  httpOnly: true,
  secure: true,
  sameSite: 'lax' as const,
  maxAge: DURACION_SEG,
};

// ---- Sesión de cliente (empresa) ----

export function iniciarSesionEmpresa(cookies: AstroCookies, empresaId: number): void {
  cookies.set(CLIENTE_COOKIE, crearToken({ e: empresaId }), opcionesCookie);
}

export function empresaEnSesion(cookies: AstroCookies): number | null {
  const data = leerToken<{ e: number }>(cookies.get(CLIENTE_COOKIE)?.value);
  return typeof data?.e === 'number' ? data.e : null;
}

export function cerrarSesionEmpresa(cookies: AstroCookies): void {
  cookies.delete(CLIENTE_COOKIE, { path: '/' });
}

// ---- Sesión de administrador ----

export function iniciarSesionAdmin(cookies: AstroCookies): void {
  cookies.set(ADMIN_COOKIE, crearToken({ a: 1 }), opcionesCookie);
}

export function esAdmin(cookies: AstroCookies): boolean {
  return leerToken<{ a: number }>(cookies.get(ADMIN_COOKIE)?.value)?.a === 1;
}

export function cerrarSesionAdmin(cookies: AstroCookies): void {
  cookies.delete(ADMIN_COOKIE, { path: '/' });
}

export function validarPasswordAdmin(password: string): boolean {
  const esperada = import.meta.env.ADMIN_PASSWORD ?? process.env.ADMIN_PASSWORD;
  if (!esperada) return false;
  const a = crypto.createHash('sha256').update(password).digest();
  const b = crypto.createHash('sha256').update(esperada).digest();
  return crypto.timingSafeEqual(a, b);
}
