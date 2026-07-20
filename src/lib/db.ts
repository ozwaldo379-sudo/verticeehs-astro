import { neon } from '@neondatabase/serverless';

export interface Empresa {
  id: number;
  razon_social: string;
  nombre_comercial: string | null;
  codigo: string;
  contacto_email: string | null;
  activa: boolean;
  creada_en: string;
}

export interface Documento {
  id: number;
  empresa_id: number;
  tipo: 'cotizacion' | 'constancia' | 'estudio' | 'expediente' | 'otro';
  titulo: string;
  descripcion: string | null;
  html: string | null;
  archivo_nombre: string | null;
  archivo_mime: string | null;
  emitido: string | null;
  vence: string | null;
  visible: boolean;
  creado_en: string;
}

export function sql() {
  const url = import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL no está configurada');
  return neon(url);
}

export const TIPOS_DOCUMENTO: Record<Documento['tipo'], string> = {
  cotizacion: 'Cotización',
  constancia: 'Constancia DC-3',
  estudio: 'Estudio',
  expediente: 'Expediente Legal',
  otro: 'Documento',
};
