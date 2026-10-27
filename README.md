<div align="center">

# KAMASQA
### Agencia Digital · Ingeniería & Diseño Web

[![Astro](https://img.shields.io/badge/Astro-4.16-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Licencia](https://img.shields.io/badge/Propiedad-Privada-6E7D4E?style=flat-square)](https://kamasqa.pe)
[![Ubicación](https://img.shields.io/badge/Sede-Lima%2C%20Perú-AA7229?style=flat-square)](https://kamasqa.pe)

**Plataforma web oficial de KAMASQA** ([kamasqa.pe](https://kamasqa.pe)), agencia digital especializada en el diseño y desarrollo de sitios web de alto rendimiento, interfaces a medida y soluciones digitales para empresas que buscan liderar en internet.

[Servicios](#-servicios-especializados) • [Stack Tecnológico](#-stack-tecnológico) • [Estructura](#-estructura-del-proyecto) • [Instalación](#-instalación-y-desarrollo) • [Despliegue](#-despliegue) • [Contacto](#-contacto-oficial)

---

</div>

## 🌐 Acerca del Proyecto

El sitio web de **KAMASQA** está construido como una aplicación estática ultrarrápida (*Static Site Generation - SSG*) impulsada por **Astro** y **TypeScript**. Incorpora una dirección visual editorial inspirada en la arquitectura moderna y la naturaleza andina, con micro-interacciones pulidas, soporte bimodal nativo (modo claro y modo noche) y optimización integral de Core Web Vitals para garantizar tiempos de carga inferiores a 1 segundo.

### Características Principales

- **Arquitectura SSG:** Rutas estáticas pre-renderizadas para máxima velocidad de entrega y seguridad sin base de datos expuesta.
- **Identidad Bimodal:** Selector dinámico entre modo día y modo noche con persistencia en `localStorage`, fondo ambiental interactivo y paleta coordinada.
- **Experiencia Mobile-First:** Drawer de navegación táctil con gestos, carruseles optimizados con snap scrolling y controles ergonómicos para smartphones ($\ge 44 \times 44\text{px}$).
- **Internacionalización Integral (i18n):** Selector interactivo de idioma (Español / Inglés) con motor cliente reactivo que cubre el 100% de la navegación, fichas técnicas, portafolio y servicios.
- **Rendimiento y Web Vitals:** Carga asíncrona de scripts de terceros (Google Tag Manager) en hilos separados mediante **Partytown** para evitar bloqueos del hilo principal.
- **Cumplimiento Legal Integral:** Páginas formales de Términos y Condiciones y Política de Privacidad adaptadas a la legislación peruana (Ley N° 29733 de Protección de Datos Personales).

---

## 🎨 Paleta de Color Oficial

La identidad corporativa de Kamasqa está fundamentada en una paleta cromática orgánica y sofisticada:

| Muestra | Nombre | Hex | Rol en la Interfaz |
| :---: | :--- | :---: | :--- |
| ![#6E7D4E](https://via.placeholder.com/18/6E7D4E/000000?text=+) | **Verde Oliva** | `#6E7D4E` | Tono identitario principal, botones de acción y badges |
| ![#D8E0C7](https://via.placeholder.com/18/D8E0C7/000000?text=+) | **Salvia Suave** | `#D8E0C7` | Bordes translúcidos, acentos sutiles y contraste suave |
| ![#FFFFFF](https://via.placeholder.com/18/FFFFFF/000000?text=+) | **Blanco Puro** | `#FFFFFF` | Fondos limpios en modo claro y textos de alto contraste |
| ![#AA7229](https://via.placeholder.com/18/AA7229/000000?text=+) | **Ocre Ámbar** | `#AA7229` | Acento cálido para conversiones, destaques y enlaces |
| ![#F0C48C](https://via.placeholder.com/18/F0C48C/000000?text=+) | **Arena Albaricoque** | `#F0C48C` | Iluminación perimetral, etiquetas secundarias y detalles |

---

## 💼 Servicios Especializados

La plataforma presenta las líneas principales de ingeniería y desarrollo web de Kamasqa:

1. **Landing Page (Conversión & Campañas):** Páginas monoproducto de alto impacto visual orientadas a captar prospectos y derivar tráfico de Meta Ads, Google Ads y TikTok directo a WhatsApp o formularios.
2. **Web Informativa (Autoridad Corporativa):** Sedes digitales multipágina diseñadas para fortalecer el respaldo institucional de empresas, consultorías y firmas profesionales con optimización SEO on-page.
3. **Tienda Online (E-Commerce 24/7):** Catálogos digitales completos con carrito de compras, pasarelas de pago peruanas (Yape, Plin, tarjetas) y gestión de pedidos.
4. **Sistema a Medida (Bespoke & Plataformas):** Paneles administrativos, intranets, plataformas web y flujos operativos adaptados a la lógica del negocio.
5. **Subservicios Especializados:** Alojamiento Web VPS con IP dedicada, Correos Corporativos oficiales y Mantenimiento / Soporte TI por horas.

---

## 🛠 Stack Tecnológico

- **Core Framework:** [Astro 4.x](https://astro.build/) en modo estático (`output: 'static'`).
- **Lenguaje:** [TypeScript 5.x](https://www.typescriptlang.org/) con verificación estricta (`strict: true`).
- **Estilos:** CSS3 modular con custom properties y metodología BEM por componentes.
- **Rendimiento:** [@astrojs/partytown](https://partytown.builder.io/) para ejecución de analítica (GTM / GA4) en Web Workers.
- **Tipografía:** [Fraunces](https://fonts.google.com/specimen/Fraunces), [Manrope](https://fonts.google.com/specimen/Manrope) y [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).

---

## 📁 Estructura del Proyecto

```text
kamasqa-web/
├── public/                       # Activos estáticos públicos
│   ├── images/
│   │   ├── portfolio/            # Capturas de casos de éxito
│   │   └── services/             # Renders 3D de servicios y subservicios
│   ├── background.mp4            # Video ambiental optimizado
│   ├── favicon.svg               # Favicon vectorial
│   ├── icon.png                  # Isotipo oficial de Kamasqa
│   ├── robots.txt                # Directivas para rastreadores de búsqueda
│   └── whatsapp-fab.png          # Icono del botón flotante
│
├── src/
│   ├── components/               # Componentes modulares reutilizables
│   │   ├── Header.astro          # Cabecera, navegación y selectores
│   │   ├── Footer.astro          # Pie de página corporativo
│   │   ├── SEO.astro             # Metadatos Open Graph, Twitter Cards y JSON-LD
│   │   ├── WhatsAppFab.astro     # Botón flotante de contacto directo
│   │   └── sections/             # Secciones modulares de la página principal
│   │       ├── Hero.astro        # Portada principal con video de fondo
│   │       ├── TechMarquee.astro # Cinta de tecnologías y herramientas
│   │       ├── ServicesGrid.astro# Módulo de soluciones y subservicios
│   │       ├── WorldCoverage.astro# Cobertura técnica y alcance internacional
│   │       ├── EditorialBottom.astro # Metodología de ingeniería en 4 fases
│   │       ├── ContactBand.astro # Pabellón de contacto editorial
│   │       ├── ContactReach.astro# Coordenadas y canales directos
│   │       └── Faq.astro         # Preguntas frecuentes con acordeón nativo
│   │
│   ├── data/                     # Modelos de contenido y traducción
│   │   ├── portfolio.ts          # Casos de éxito y proyectos
│   │   ├── site.ts               # Constantes, enlaces y servicios
│   │   └── translations.ts       # Diccionario central ES/EN
│   │
│   ├── layouts/
│   │   └── Base.astro            # Layout maestro (HTML shell, fuentes, GTM, fondo)
│   │
│   ├── pages/                    # Rutas de la plataforma
│   │   ├── index.astro           # Portada principal
│   │   ├── perfil.astro          # Perfil de agencia y pilares de ingeniería
│   │   ├── portafolio.astro      # Casos de éxito con tarjetas 3D interactivas
│   │   ├── terminos-y-condiciones.astro # Términos y condiciones formales
│   │   ├── politica-de-privacidad.astro # Política de privacidad y datos
│   │   ├── 404.astro             # Página de error personalizada
│   │   └── servicios/
│   │       └── [slug].astro      # Fichas técnicas dinámicas de cada servicio
│   │
│   ├── scripts/                  # Controladores interactivos cliente
│   │   ├── perfil.ts             # Control de pilares y métricas
│   │   ├── portfolio.ts          # Giro 3D, filtros de sector y carrusel
│   │   └── servicesGrid.ts       # Conmutador de vistas y carrusel móvil
│   │
│   ├── styles/                   # Hojas de estilo modulares por dominio
│   │   ├── global.css            # Tokens, tipografía y utilidades globales
│   │   ├── header.css            # Cabecera, drawer móvil y selectores
│   │   ├── legal.css             # Estructura de términos y privacidad
│   │   ├── perfil.css            # Estilos de perfil y pilares
│   │   ├── portfolio.css         # Tarjetas 3D y grilla de portafolio
│   │   ├── serviceDetail.css     # Fichas técnicas de servicio
│   │   └── servicesGrid.css      # Soluciones principales y subservicios
│   │
│   └── utils/
│       └── i18n.ts               # Motor de internacionalización cliente
│
├── astro.config.mjs              # Configuración de Astro y plugins
├── package.json                  # Dependencias y scripts
├── tsconfig.json                 # Configuración de TypeScript
└── README.md                     # Documentación oficial
```

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- **Node.js** v18.17.0 o superior
- **npm** v9.0.0 o superior

### Pasos de Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/KAMASQA/kamasqa-web.git
   cd kamasqa-web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El entorno estará disponible localmente en `http://localhost:4321/`.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera el directorio estático optimizado en `./dist`.

5. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## 📦 Despliegue

El proyecto produce una salida estática pura (`dist/`), lo que permite desplegarlo sin servidor Node.js en cualquier proveedor de CDN o hosting estático:

- **Cloudflare Pages:** Conectar el repositorio de GitHub, configurar el comando de build `npm run build` y directorio de salida `dist`.
- **Vercel / Netlify:** Detección automática de framework Astro con salida estática.
- **Servidor Tradicional (Nginx / Apache / cPanel):** Subir el contenido de la carpeta `dist/` a la raíz pública del dominio (`public_html`).

---

## 📞 Contacto Oficial

- **Empresa:** KAMASQA Agencia Digital
- **RUC:** 20615299970
- **Correo Electrónico:** [contacto@kamasqa.pe](mailto:contacto@kamasqa.pe)
- **WhatsApp Oficial:** [+51 926 843 039](https://wa.me/51926843039)
- **Sede:** Lima, Perú
- **Sitio Web:** [https://kamasqa.pe](https://kamasqa.pe)

---

<div align="center">
  <small>© 2026 KAMASQA. Todos los derechos reservados.</small>
</div>
