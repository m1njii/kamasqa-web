# Diseño Técnico: Conmutador de Servicios Principales y Subservicios

- **Fecha:** 27 de Octubre de 2026
- **Proyecto:** `kamasqa-web`
- **Ubicación:** `src/components/sections/ServicesGrid.astro` y `src/data/site.ts`
- **Estado:** Propuesta aprobada por el usuario (Enfoque 1)

---

## 1. Intención y Propósito
El botón superior derecho de la cabecera de la sección `#servicios` (anteriormente enlace estático a WhatsApp con texto "Calcular presupuesto") se convierte en un conmutador interactivo. Al hacer clic, alterna con una animación suave entre la vista de los **4 Servicios Principales** y la vista de los **3 Subservicios Especializados**, permitiendo regresar en cualquier momento.

---

## 2. Objetivos, No-Objetivos y Anti-Objetivos

### Objetivos
1. **Vista Inicial:** Mostrar los 4 servicios principales (*Landing Page*, *Web Informativa*, *Tienda Online*, *Web/Sistema a Medida*).
2. **Botón Conmutador:**
   - Estado Principal: `"Ver subservicios y soporte"` (con icono y estilo acorde al sistema de diseño).
   - Estado Subservicios: `"← Volver a servicios principales"` con microanimación en el icono.
3. **Transición con Animación:** Transición fluida entre vistas (fade-out sutil de la vista activa y fade-in con ligero escalonamiento `translateY` para las nuevas tarjetas), garantizando cero saltos bruscos de maquetación.
4. **Presentación de los 3 Subservicios:**
   - **Subservicio 1: Alojamiento Web VPS Dedicado:**
     - Infraestructura optimizada, IP independiente, certificado SSL vitalicio, respaldos automáticos diarios y soporte directo.
   - **Subservicio 2: Correos Corporativos (`@tuempresa.pe`):**
     - Muestra desde el primer instante las 3 modalidades:
       * Opción Individual (1 cuenta)
       * Paquete de 3 Cuentas Corporativas
       * Paquete de 5 Cuentas Corporativas
     - Con soporte IMAP/POP3, configuración DNS, webmail seguro y sincronización móvil.
   - **Subservicio 3: Mantenimiento Web Puntual / Bolsa de Horas de Soporte:**
     - Ajustes complejos en código, resolución de errores (bugs), desinfección de malware o configuraciones de servidor a pedido.
     - Dos modalidades visualmente diferenciadas:
       * *Landing Page / Web Informativa:* Actualización de textos, imágenes, colores, formularios y ajustes menores.
       * *E-commerce (Tienda en Línea):* Gestión y subida de productos, inventario, cupones/descuentos y pasarelas de pago.
5. **Conversión Comercial:** Cada subservicio incluye su botón formal para solicitar cotización por WhatsApp con mensaje pre-redactado y contextual.
6. **Diseño y Responsividad:** Adaptable a modo claro / modo oscuro y compatible con pantallas de escritorio, tabletas y móviles.

### No-Objetivos
- No crear páginas estáticas independientes `/servicios/subservicios/...` por el momento.
- No alterar las demás secciones de la página (`Hero`, `TechMarquee`, `WorldCoverage`, `Faq`).

### Anti-Objetivos
- No recargar la página (`event.preventDefault()`).
- No generar saltos toscos de maquetación ni romper el scroll del usuario.
- No desarmar la interactividad del carrusel táctil móvil de los servicios principales al regresar a ellos.

---

## 3. Enfoques Considerados y Selección
1. **Enfoque 1 (Seleccionado por el usuario):** Conmutador en cabecera con animación editorial cruzada (fade & scale/translate) en la cuadrícula de tarjetas.
2. **Enfoque 2:** Selector segmentado (Tabs visibles "Principales" / "Subservicios").
3. **Enfoque 3:** Volteo 3D individual de tarjetas (descartado por asimetría de 4 a 3 tarjetas).

---

## 4. Estructura de Datos e Implementación
- Se creará una estructura tipada `subservices` en `src/data/site.ts` con la información detallada de los 3 subservicios.
- En `ServicesGrid.astro`:
  - Contenedor con dos paneles: `#services-main-panel` y `#services-sub-panel`.
  - El botón conmutador `#btn-toggle-services` gestionará el estado y los atributos de accesibilidad (`aria-expanded`, `aria-controls`).
  - Script del lado del cliente para conmutar las clases con microanimaciones CSS.
