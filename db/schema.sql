-- Schema del Portal de Clientes de Vértice EHS (Neon Postgres)
-- Ejecutar una vez en la consola SQL de Neon (o: psql $DATABASE_URL -f db/schema.sql)

CREATE TABLE IF NOT EXISTS empresas (
  id            serial PRIMARY KEY,
  razon_social  text NOT NULL,
  nombre_comercial text,
  codigo        char(6) UNIQUE NOT NULL,        -- código de acceso: 2 letras + 4 dígitos (ej. GD2035)
  contacto_email text,
  activa        boolean NOT NULL DEFAULT true,
  creada_en     timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS documentos (
  id            serial PRIMARY KEY,
  empresa_id    int NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  tipo          text NOT NULL CHECK (tipo IN ('cotizacion','constancia','estudio','expediente','otro')),
  titulo        text NOT NULL,
  descripcion   text,
  html          text,        -- cotizaciones editables desde el admin (HTML completo)
  archivo       bytea,       -- PDFs y otros binarios (constancias DC-3, estudios)
  archivo_nombre text,
  archivo_mime  text,
  emitido       date,
  vence         date,
  visible       boolean NOT NULL DEFAULT true,
  creado_en     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS documentos_empresa_idx ON documentos (empresa_id) WHERE visible;

-- Seed inicial: los tres clientes actuales.
-- Los códigos se generan al darlos de alta desde /admin; estos son ejemplos
-- que puedes reemplazar (el de Global Denim conserva GD2035 por compatibilidad
-- con la cotización estática ya entregada).
INSERT INTO empresas (razon_social, nombre_comercial, codigo) VALUES
  ('Global Denim S.A. de C.V.', 'Global Denim', 'GD2035')
ON CONFLICT (codigo) DO NOTHING;
