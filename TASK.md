# ESTADO ACTUAL & PRÓXIMAS TAREAS — Vértice EHS Landing

> Última actualización: Mayo 2026 (NEXUS Integration)

---

## ✅ COMPLETADO EN ESTA SESIÓN

### Arquitectura & Catálogo
- **Implementación de Ruta `/catalogo/`**: Directorio independiente de servicios con 5 categorías técnicas (Seguridad, Emergencias, Estudios, Salud, Medio Ambiente).
- **SPA Navigation**: Integración total con `react-router-dom` para transiciones sin recarga.
- **Limpieza de Landing**: Se eliminaron `CatalogSection2` y `CatalogSection3` de la página principal para evitar redundancia y potenciar la ruta dedicada.
- **Configuración Producción**: Añadido `vercel.json` con reglas de rewrites para rutas SPA.

### Visual Overhaul (Sesiones anteriores)
- Fondo cambiado de `#020617` a `#030508` (negro puro)
- Glassmorphism mejorado: `.adn-glass-card` con `backdrop-filter: blur(20px)`
- Borde cónico animado verde (`.adn-animated-border`)
- Espaciado aumentado a `py-32` en todas las secciones

### Orden canónico actual de LandingPage.tsx:
```
Hero → StatsBar → ServicePillars → ADNSection → TecnologiaSection
→ BrandResources → ComplianceCalculator → Resources → FAQ
```

---

## ⚠️ PENDIENTE — Próximas tareas priorizadas

### P1 — Alta prioridad

- [ ] **SEO Dinámico**: Implementar `react-helmet-async` para meta tags específicos en la ruta `/catalogo/`.
- [ ] **Hero**: Revisar si el contenido actual del Hero está alineado con el brand actual (mensajes, CTAs, video de fondo).
- [ ] **StatsBar**: Confirmar cifras actuales (18+ servicios, 500+ empresas).

### P2 — Media prioridad

- [ ] **ComplianceCalculator**: Verificar que la calculadora de cumplimiento funcione correctamente y tenga datos actualizados.
- [ ] **FAQ**: Revisar y actualizar preguntas/respuestas para que reflejen los servicios actuales (sin mencionar Sustainability).
- [ ] **ServicePillars mobile**: Verificar que los 3 pilares se vean bien en móvil (el layout es grid 2-col en desktop).

### P3 — Baja prioridad

- [ ] **SEO metadata**: Agregar meta tags, OG tags y sitemap para el landing y la ruta /catalogo/.
- [ ] **Performance**: Verificar Core Web Vitals — el video del hero puede afectar LCP.
- [ ] **ChatWidget**: Verificar que el widget de chat esté configurado con el número de WhatsApp correcto.

---

## 🔧 COMPONENTES DISPONIBLES (no renderizados)

Estos componentes existen en el código pero NO están en el landing. Pueden reactivarse si se necesitan:

| Componente | Archivo | Contenido |
|---|---|---|
| `ManifiestoSection` | `src/components/ManifiestoSection.tsx` | Manifiesto operativo |
| `Sustainability` | `src/components/Sections.tsx` | 5 pilares sustentabilidad + ISO 14001 |
| `SocialProof` | `src/components/Sections.tsx` | Stats + Sectores atendidos |
| `Process` | `src/components/Sections.tsx` | Proceso de trabajo |
| `Trust` | `src/components/Sections.tsx` | Elementos de confianza |
| `CatalogSection4` | `src/components/catalog/CatalogSection4.tsx` | Directorio de Servicios (NOM-STPS) |
| `CatalogSection5` | `src/components/catalog/CatalogSection5.tsx` | Estudios y Mediciones |
