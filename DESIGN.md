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
