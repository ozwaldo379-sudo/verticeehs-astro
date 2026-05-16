# Design System: Vértice EHS v2.0
**Project Identity:** Vértice EHS (Integrated Manifiesto & Catalog)

## 1. Visual Theme & Atmosphere
**Estética: "Clinical Editorial" / "Sovereign Lab"**
La interfaz debe transmitir autoridad, precisión quirúrgica y un sentido de urgencia controlada. Es un diseño denso pero sumamente estructurado, similar a un reporte forense de alta gama. 
- **Atmósfera:** Oscura, inmersiva, técnica.
- **Filosofía Visual:** "No-Line Rule" — El espacio y el contraste (Tonal Layering) separan los elementos, no los bordes de 1px.

## 2. Color Palette & Roles
*   **Deep Void Base** (`#030508`): Fondo primario. Un negro casi absoluto sin tintes azules, que proporciona profundidad infinita.
*   **Charcoal Surface** (`#0A0E14`): Usado para tarjetas, contenedores y fondos secundarios (Tonal Layering).
*   **Hazard Green** (`#2E9E3C`): Color de acento primario. Usado para acciones seguras, botones primarios, y progreso positivo. Representa cumplimiento y protección.
*   **Alert Orange** (`#E86650`): Color de acento de riesgo/urgencia. Usado para advertencias directas y bordes animados de impacto.
*   **Muted Steel** (`#94A3B8`): Texto secundario y descriptivo. Legible pero sin competir con los títulos.
*   **Sovereign White** (`#F8FAFC`): Texto principal de alto contraste.

## 3. Typography Rules
*   **Headings:** `Manrope`, sans-serif. 
    *   **Pesos:** `Bold` y `ExtraBold`.
    *   **Estilo:** `letter-spacing: -0.02em` (Apretado, editorial). Usado para la declaración del Manifiesto y Títulos de Sección.
*   **Body:** `Inter`, sans-serif.
    *   **Pesos:** `Regular` (400) y `Medium` (500).
    *   **Estilo:** `line-height: 1.6`. Diseñado para legibilidad en textos técnicos y descripciones de las NOMs.

## 4. Component Stylings
*   **ADN Glass Cards:** 
    *   **Forma:** `rounded-2xl` (Bordes generosos).
    *   **Material:** `backdrop-filter: blur(20px)` con fondo `rgba(10, 14, 20, 0.75)`.
    *   **Elevación:** Sin bordes sólidos, usa una ligera sombra de dispersión `0 4px 30px rgba(0, 0, 0, 0.4)`. Al hacer hover, se elevan sutilmente en `Y (-4px)`.
*   **Botones Primarios:** 
    *   **Forma:** `rounded-full` (Pill-shaped).
    *   **Color:** Fondo *Hazard Green*, texto blanco.
    *   **Shadow:** `0 8px 24px rgba(46, 158, 60, 0.25)` para simular un brillo interno de seguridad.
*   **Animated Borders (The Design Spell):**
    *   Usado para enfatizar el "Aviso Directo" o elementos críticos. Un borde de gradiente cónico que rota sutilmente.

## 5. Layout Principles
*   **Bento Grid:** Las secciones del catálogo usan estructuras asimétricas (Bento box) para organizar información densa sin abrumar.
*   **Physicality (ScrollSpy & 3D):** Los elementos entran con micro-animaciones (framer-motion) de abajo hacia arriba (`y: 20 -> y: 0`) con ligeros retrasos (*stagger*) para guiar la lectura.
*   **Espaciado (Breathable Density):** Secciones separadas por márgenes masivos (`py-32` o `8rem`) para dar "aire" a cada declaración del manifiesto.

## 6. Ambient Particle System (Design Spell — GLOBAL)
*   **Componente:** `src/components/ParticleBackground.astro`. Se inyecta en `Layout.astro` — aplica a **todas** las páginas del sitio.
*   **Tecnología:** Canvas 2D API (Vanilla JS). Zero dependencias externas. GPU-accelerated con `requestAnimationFrame`. Respeta `prefers-reduced-motion`.
*   **Colores de Partículas:** Los 3 colores del logo de Vértice EHS:
    *   `rgba(46, 158, 60, ...)` — Hazard Green
    *   `rgba(26, 92, 230, ...)` — Logo Blue
    *   `rgba(248, 250, 252, ...)` — Sovereign White
*   **Comportamiento:** Partículas circulares (radio 0.8–2.2px) flotando con velocidad muy baja (±0.18 px/frame). Alpha pulsando suavemente ("breathing"). El canvas es `position: fixed; z-index: 0` para no bloquear interacciones.
*   **Regla:** Todo contenido de la página debe vivir en `z-index: 1+` para aparecer sobre las partículas.

## 7. Gradient Title System (Design Spell — GLOBAL)
*   **Paleta:** Los mismos 3 colores del logo en gradiente animado: `#2E9E3C → #1A5CE6 → #F8FAFC → #1A5CE6 → #2E9E3C`.
*   **Animación:** `gradient-shift` keyframe. `background-size: 250% 250%`. Ciclo de 8s suave.
*   **Clases CSS disponibles (en `global.css`):**
    *   `.gradient-title` — Uso principal. Para spans dentro de H1/H2 grandes.
    *   `.gradient-title-subtle` — Versión desaturada. Para accentos secundarios.
    *   `.gradient-accent` — Verde dominante. Para H3 o palabras clave de impacto.
*   **Regla:** Aplicar solo a *una* palabra o frase por sección, no a headings completos. El contraste con el texto blanco circundante es lo que genera el impacto visual.
