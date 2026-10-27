# Conmutador de Servicios y Subservicios en Kamasqa Web Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar el botón estático de la sección `#servicios` en un conmutador interactivo animado que alterne fluidamente entre los 4 Servicios Principales y los 3 Subservicios Especializados (Hosting VPS, Correos Corporativos y Mantenimiento Puntual / Bolsa de Horas).

**Architecture:** Se define la estructura de datos tipada `subservices` en `src/data/site.ts`. En `ServicesGrid.astro` se implementa una arquitectura de doble panel (`#services-main-panel` y `#services-sub-panel`) controlada por el botón conmutador `#btn-toggle-services`. La transición utiliza clases CSS de animación coordinada (fade y translateY escalonado) para evitar saltos de maquetación, respetando los modos claro y oscuro, el diseño editorial y la respuesta táctil en móviles.

**Tech Stack:** Astro 4.x, TypeScript, CSS Variables personalizadas (`var(--c-amber)`, `var(--c-olive)`, `var(--c-sand)`, `var(--font-display)`, etc.), WhatsApp generator helper (`wa()`).

**Spec:** [`docs/superpowers/specs/2026-10-27-servicios-subservicios-design.md`](file:///g:/Programaci%C3%B3n/kamasqa-web/docs/superpowers/specs/2026-10-27-servicios-subservicios-design.md)

## Global Constraints
- Respetar rigurosamente el manual visual de Kamasqa: tipografías `--font-display` (Manrope), `--font-serif` (Fraunces), `--font-mono` (JetBrains Mono).
- Paleta oficial: `--c-olive` (`#6E7D4E`), `--c-sage` (`#D8E0C7`), `--c-amber` (`#AA7229`), `--c-sand` (`#F0C48C`), `--ink` (`#0E140D`), `--paper` (`#FAFBF9`).
- Soporte impecable en `html[data-theme="dark"]` y `html[data-theme="light"]`.
- Cero recargas de página (`preventDefault`).
- Cero saltos bruscos de altura (*Cumulative Layout Shift*).
- Accesibilidad con `aria-expanded` y atributos interactivos accesibles por teclado.

## Review Focus
1. **Doble clic o clics rápidos consecutivos:** Las transiciones CSS no deben colapsar ni dejar paneles en estados inconsistentes.
2. **Visualización móvil (<= 840px):** Los 3 subservicios deben ser completamente legibles, táctiles y fluidos sin scroll horizontal forzado.
3. **Contraste de color en modo oscuro:** Las insignias, bordes y textos secundarios de los subservicios deben mantener contraste accesible AAA/AA.
4. **Opciones visibles de Correos Corporativos:** Las 3 opciones (Individual, Pack 3, Pack 5) deben verse inmediatamente en la tarjeta sin requerir menús desplegables ocultos.
5. **Generación de enlaces WhatsApp:** Cada subservicio debe generar enlaces válidos con mensajes preconfigurados claros y amigables.

---

### Task 1: Definir la estructura de datos tipada para Subservicios en `site.ts`

**Files:**
- Modify: `src/data/site.ts`

- [ ] **Step 1: Definir los tipos de Subservicios en `site.ts`**
  Declarar `SubserviceItem` con soporte para características, opciones múltiples (para correos corporativos) y alcances biseccionados (para mantenimiento).
- [ ] **Step 2: Exportar el array `subservices` con los 3 subservicios oficiales**
  1. *Alojamiento Web VPS Dedicado* (IP independiente, SSL vitalicio, copias de seguridad automáticas diarias).
  2. *Correos Corporativos (@tuempresa.pe)* (Opción individual, Paquete de 3 y Paquete de 5 con soporte IMAP/POP3).
  3. *Mantenimiento Puntual / Bolsa de Horas* (Ajustes de código, bugs, malware, desglosado en Landing/Web Informativa y E-commerce).
- [ ] **Step 3: Verificar que el archivo compila sin errores de TypeScript**
  Ejecutar `npm run astro check` o validar los tipos en `site.ts`.

---

### Task 2: Diseñar la estructura HTML y estilos editoriales de los Subservicios en `ServicesGrid.astro`

**Files:**
- Modify: `src/components/sections/ServicesGrid.astro`

- [ ] **Step 1: Importar `subservices` en el frontmatter de `ServicesGrid.astro`**
- [ ] **Step 2: Reestructurar el contenedor de servicios en dos vistas**
  - Panel A: `#services-main-panel` (las 4 tarjetas existentes + carrusel móvil).
  - Panel B: `#services-sub-panel` (cuadrícula editorial de 3 columnas para los subservicios, oculta inicialmente con `display: none` o `opacity: 0`).
- [ ] **Step 3: Maquetar las 3 tarjetas de subservicios siguiendo el sistema visual de Kamasqa**
  - Tarjeta 1: Alojamiento VPS con insignias de rendimiento, IP dedicada, SSL y backups.
  - Tarjeta 2: Correos corporativos con selector visual o lista de las 3 opciones (Individual, Pack 3, Pack 5) directamente visibles con sus etiquetas.
  - Tarjeta 3: Mantenimiento web puntual con dos sub-bloques comparativos para Landing/Informativa y E-commerce.
  - Cada tarjeta con su botón de acción `btn-pill-action` o `vc-cta-text` hacia WhatsApp mediante `wa()`.
- [ ] **Step 4: Añadir estilos CSS acordes a la paleta, bordes redondeados (`28px`), blur, gradientes y modo oscuro**

---

### Task 3: Implementar la animación fluida y lógica del botón conmutador

**Files:**
- Modify: `src/components/sections/ServicesGrid.astro`

- [ ] **Step 1: Convertir el botón de la cabecera en botón interactivo**
  Cambiar `<a>` por `<button type="button" id="btn-toggle-services" class="btn-pill-action" aria-expanded="false">` con texto inicial *"Ver subservicios y soporte"* y flecha interactiva.
- [ ] **Step 2: Escribir el script del cliente para la transición animada**
  - Manejador de evento `click` con transición coordinada:
    1. Fade-out del panel activo con clase `.is-leaving`.
    2. Esperar 180-220ms.
    3. Ocultar panel anterior y mostrar panel nuevo con clase `.is-entering`.
    4. Actualizar texto del botón: *"← Volver a servicios principales"* vs *"Ver subservicios y soporte ⚡"*.
    5. Actualizar `aria-expanded` y actualizar las clases de rotación en el icono de flecha.
- [ ] **Step 3: Manejar estado de carrusel en móvil**
  Asegurar que el scroll del contenedor o la navegación móvil de la vista principal se preserve intacto cuando se regrese a ella.

---

### Task 4: Verificación integral, modo oscuro y compilación

**Files:**
- Modify: `src/layouts/Base.astro` (si se requieren traducciones dinámicas en el diccionario ES/EN)
- Test: Build de producción con `npm run build`

- [ ] **Step 1: Probar el build de Astro en la consola**
  Ejecutar `npm run build` dentro de `kamasqa-web` y confirmar que finaliza sin errores.
- [ ] **Step 2: Probar el renderizado visual y modo oscuro**
  Comprobar que no hay fuentes desalineadas, que los colores respetan el modo oscuro y claro, y que los 3 subservicios se ven armoniosos con los servicios principales.
- [ ] **Step 3: Documentar y presentar la solución terminada al usuario**
