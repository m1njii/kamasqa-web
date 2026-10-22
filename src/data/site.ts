// Contenido central de KAMASQA V3 — Agencia Digital. Edita aquí textos, precios y contacto.

export const site = {
  name: "KAMASQA",
  url: "https://kamasqa.pe",
  phone: "+51 926 843 039",
  phoneRaw: "51926843039",
  email: "contacto@kamasqa.pe",
  city: "Lima, Perú",
  hours: "Lunes a Sábado · 9:00 AM a 7:00 PM",
  tagline: "Agencia digital de ingeniería y diseño web a medida para negocios que buscan liderar en internet.",
};

export const wa = (
  msg = "Hola equipo de Kamasqa Agencia Digital 👋\n\nEstuve revisando su web y me gustaría recibir asesoría para desarrollar la página web de mi negocio.\n\n• Quisiera agendar la reunión gratuita de 15 minutos o conocer cómo podemos empezar.",
) => `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#metodo", label: "Método" },
  { href: "/#faq", label: "Preguntas" },
  { href: "/perfil", label: "Perfil" },
];

export type ToolItem = {
  name: string;
  category: string;
  icon: string;
};

export const tools: ToolItem[] = [
  { name: "WordPress", category: "Desarrollo Web & CMS", icon: "wp" },
  { name: "React.js", category: "Interfaces Reactivas", icon: "react" },
  { name: "TypeScript", category: "Tipado Seguro", icon: "ts" },
  { name: "JavaScript ES6+", category: "Interactividad", icon: "js" },
  { name: "Figma", category: "Diseño UI/UX", icon: "figma" },
  { name: "Illustrator", category: "Gráfica Vectorial", icon: "illustrator" },
  { name: "WooCommerce", category: "E-Commerce & Catálogo", icon: "woo" },
  { name: "Google Workspace", category: "Entorno Cloud", icon: "workspace" },
  { name: "Tailwind & CSS3", category: "Estilizado Avanzado", icon: "css" },
  { name: "Node.js", category: "Backend & APIs", icon: "node" },
  { name: "Astro", category: "Sitios Estáticos", icon: "astro" },
  { name: "Cloudflare CDN", category: "Seguridad & SSL", icon: "cloudflare" },
  { name: "Google Analytics 4", category: "Métricas & SEO", icon: "analytics" },
  { name: "WhatsApp Business", category: "Conversión Directa", icon: "whatsapp" },
  { name: "Git & GitHub", category: "Control de Versiones", icon: "git" },
];

export type Service = {
  slug: string;
  name: string;
  tag: string;
  color: "amber" | "olive" | "sand" | "clay" | "pine" | "sun";
  short: string;
  description: string;
  forWho: string;
  time: string;
  features: string[];
  deliverables: { title: string; desc: string }[];
  metrics: { val: string; label: string }[];
  idealCases: string[];
  msg: string;
};

export const services: Service[] = [
  {
    slug: "landing-page",
    name: "Landing Page",
    tag: "Conversión & Campañas",
    color: "amber",
    short: "Una página de alto impacto diseñada con un único fin: convertir visitas en clientes reales por WhatsApp o formulario.",
    description:
      "Estructura persuasiva de principio a fin. Ideal para rentabilizar tus campañas en Meta Ads, TikTok Ads y Google Ads con velocidad de carga instantánea.",
    forWho: "Lanzamientos de productos, servicios profesionales, campañas pagadas, inmobiliarias, clínicas y captación acelerada de leads.",
    time: "4 a 7 días hábiles",
    features: [
      "Arquitectura de persuasión y copywriting enfocado en conversión",
      "Botones estratégicos y embudo directo hacia tu WhatsApp",
      "Formulario inteligente de contacto rápido sin fricción",
      "Diseño 100% Mobile-First (optimizado para tráfico de redes sociales)",
      "Integración de Píxel de Meta, TikTok y Google Analytics 4",
      "Certificado SSL de seguridad y despliegue en red global ultrarrápida",
    ],
    deliverables: [
      { title: "Diseño UI a medida en Figma", desc: "Identidad visual única, sin plantillas repetidas, alineada a tu marca." },
      { title: "Copywriting Comercial", desc: "Titulares, argumentos de venta y llamados a la acción que conectan con tu cliente." },
      { title: "Optimización Core Web Vitals", desc: "Carga en menos de 1 segundo para que no pierdas ningún clic de tus anuncios." },
      { title: "Conexión Directa a WhatsApp", desc: "Mensajes pre-configurados según la sección desde donde te escriba el cliente." },
    ],
    metrics: [
      { val: "< 0.8s", label: "Tiempo de carga" },
      { val: "100%", label: "Adaptada a móvil" },
      { val: "+3x", label: "Retención de clics" },
    ],
    idealCases: [
      "Campañas de anuncios en Instagram, Facebook y TikTok",
      "Servicios médicos, odontológicos, legales o consultorías",
      "Preventa de proyectos, talleres, eventos o infoproductos",
    ],
    msg:
      "Hola equipo de Kamasqa Agencia Digital 👋\n\n" +
      "Estoy interesado en cotizar una *Landing Page de Alta Conversión* para mi negocio.\n\n" +
      "• Objetivo: Captar clientes potenciales por WhatsApp y campañas de anuncios.\n" +
      "• Quisiera agendar la reunión gratuita de 15 minutos para revisar mi proyecto.",
  },
  {
    slug: "web-informativa",
    name: "Web Informativa",
    tag: "Autoridad Corporativa",
    color: "olive",
    short: "Tu sede digital oficial: transmite solidez, presenta tus servicios en detalle y posiciona tu marca en Google.",
    description:
      "Un sitio web multipágina completo desarrollado a medida o con gestión en WordPress, que respalda la trayectoria de tu empresa, genera confianza en clientes corporativos y trabaja 24/7.",
    forWho: "Empresas consolidadas, constructoras, estudios contables/legales, clínicas, agencias, consultoras y marcas B2B o B2C.",
    time: "7 a 14 días hábiles",
    features: [
      "Múltiples páginas o secciones: Inicio, Nosotros, Servicios, Proyectos y Contacto",
      "Diseño editorial exclusivo alineado al manual de tu marca",
      "Estructura SEO técnica avanzada para indexar en Google Perú",
      "Módulo de preguntas frecuentes, casos de éxito y respaldos de confianza",
      "Integración de canales directos: WhatsApp, correos corporativos y mapa interactivo",
      "Capacitación de autogestión (WordPress / Panel) y soporte post-lanzamiento",
    ],
    deliverables: [
      { title: "Arquitectura Multipágina", desc: "Navegación intuitiva para que tus clientes conozcan cada línea de servicio a fondo." },
      { title: "SEO Técnico & Semántico", desc: "Metadatos, Schema.org, sitemap XML y estructura H1-H3 lista para posicionar." },
      { title: "Ecosistema Corporativo", desc: "Vinculación con Google Workspace, correos con tu dominio propio y formularios." },
      { title: "Seguridad Blindada", desc: "Infraestructura optimizada de alto rendimiento y protegida con certificado SSL." },
    ],
    metrics: [
      { val: "99/100", label: "Puntaje SEO Técnico" },
      { val: "24/7", label: "Presencia institucional" },
      { val: "100%", label: "Autoadministrable" },
    ],
    idealCases: [
      "Empresas que licitan o atienden a clientes corporativos (B2B)",
      "Marcas que buscan aparecer en Google cuando buscan su rubro en Perú",
      "Negocios que necesitan renovar una web antigua por una moderna y veloz",
    ],
    msg:
      "Hola equipo de Kamasqa Agencia Digital 👋\n\n" +
      "Me interesa cotizar una *Web Informativa Corporativa* para mi empresa.\n\n" +
      "• Busco transmitir solidez institucional y posicionar mis servicios en Google.\n" +
      "• ¿Podemos agendar la sesión gratuita de 15 minutos para evaluar el alcance?",
  },
  {
    slug: "tienda-online",
    name: "Tienda Online",
    tag: "E-Commerce 24/7",
    color: "sand",
    short: "Tu catálogo digital con carrito de compras y pagos locales para vender todos los días en todo el Perú sin comisiones.",
    description:
      "Una plataforma de comercio electrónico ágil, intuitiva y pensada para el comprador peruano: compra rápida en celular, pagos con Yape/Plin/Tarjetas y panel autoadministrable.",
    forWho: "Marcas de moda, calzado, cosmética, tecnología, suplementos, tiendas físicas que se expanden a internet y distribuidoras.",
    time: "14 a 21 días hábiles",
    features: [
      "Catálogo organizado por categorías, filtros, tallas, colores y variantes",
      "Carrito de compras ultrarrápido y proceso de checkout sin trabas",
      "Pasarelas de pago locales: Yape, Plin, transferencia y tarjetas (Culqi / Niubiz / Izipay)",
      "Notificación instantánea de cada pedido directo a tu WhatsApp y correo",
      "Panel autoadministrable (WordPress / WooCommerce o a medida) para productos y stock",
      "Cálculo de envíos por distritos de Lima y provincias de todo el Perú",
    ],
    deliverables: [
      { title: "Catálogo & Variantes", desc: "Fichas de producto optimizadas con galería de fotos, precios de oferta y stock." },
      { title: "Checkout Local Peruano", desc: "Integración fluida con Yape, Plin y tarjetas de crédito/débito sin comisiones ocultas." },
      { title: "Panel de Autogestión", desc: "Administra tus pedidos, sube nuevos productos y crea cupones desde tu celular o PC." },
      { title: "Pedidos por WhatsApp", desc: "Opción híbrida para clientes que prefieren finalizar su carrito directo en WhatsApp." },
    ],
    metrics: [
      { val: "0%", label: "Comisión por venta" },
      { val: "100%", label: "Autoadministrable" },
      { val: "Todo Perú", label: "Cobertura de envíos" },
    ],
    idealCases: [
      "Tiendas por Instagram o TikTok que quieren automatizar sus ventas y stock",
      "Negocios con local físico que desean vender las 24 horas a nivel nacional",
      "Marcas propias que buscan independizarse de marketplaces con altas comisiones",
    ],
    msg:
      "Hola equipo de Kamasqa Agencia Digital 👋\n\n" +
      "Quisiera cotizar una *Tienda Online E-Commerce* para vender mis productos.\n\n" +
      "• Me interesa contar con catálogo autoadministrable y pagos con Yape, Plin y tarjetas incluidos.\n" +
      "• ¿En qué horario podríamos tener la reunión inicial de 15 minutos sin compromiso?",
  },
  {
    slug: "sistema-medida",
    name: "Web / Sistema a Medida",
    tag: "Bespoke & Plataformas",
    color: "clay",
    short: "Plataformas web avanzadas, paneles administrativos, portales de clientes o sistemas con flujos e integraciones a medida.",
    description:
      "Desarrollo de ingeniería con arquitectura escalable, bases de datos relacionales, autenticación de usuarios, paneles de control y APIs para empresas con necesidades operativas únicas.",
    forWho: "Empresas con flujos comerciales específicos, inmobiliarias con buscador avanzado, academias, portales de clientes y startups.",
    time: "3 a 5 semanas",
    features: [
      "Arquitectura de software personalizada con React, Astro, Node.js o TypeScript",
      "Panel de administración a medida con roles de usuario y permisos avanzados",
      "Base de datos escalable, modelado relacional y respaldos automáticos",
      "Autenticación segura de usuarios (login, registro y recuperación de accesos)",
      "Integración de APIs de terceros (pasarelas de pago, CRM, ERP o WhatsApp)",
      "Despliegue cloud de alta disponibilidad con monitoreo y soporte continuo",
    ],
    deliverables: [
      { title: "Arquitectura & Backend a Medida", desc: "Modelado relacional de datos y APIs optimizadas para máxima velocidad y seguridad." },
      { title: "Panel de Gestión Administrativa", desc: "Interfaz intuitiva para controlar usuarios, operaciones, reportes y métricas." },
      { title: "Seguridad & Control de Roles", desc: "Cifrado de datos, autenticación robusta y permisos segmentados por usuario." },
      { title: "Integración de Ecosistemas", desc: "Conexión bidireccional con pasarelas de pago, facturación electrónica o CRM." },
    ],
    metrics: [
      { val: "99.9%", label: "Disponibilidad Cloud" },
      { val: "100%", label: "Código propietario" },
      { val: "Escalable", label: "Crecimiento sin límites" },
    ],
    idealCases: [
      "Plataformas de gestión interna, portales de clientes o extranets",
      "Inmobiliarias o catálogos dinámicos con CRM sincronizado",
      "Empresas y startups que necesitan flujos y funcionalidades únicas",
    ],
    msg:
      "Hola equipo de Kamasqa Agencia Digital 👋\n\n" +
      "Quisiera cotizar un *Web / Sistema a Medida* para mi empresa.\n\n" +
      "• Busco una solución técnica personalizada con panel de gestión e integraciones.\n" +
      "• ¿Podríamos agendar una sesión inicial de 15 minutos para evaluar el alcance?",
  },
];

export const addons = [
  { id: "pagos", label: "Pasarela de pagos (Yape, Plin y tarjetas)", desc: "Cobros directos (Ya incluido gratis en Tienda Online).", price: 200, includedIn: ["tienda-online", "sistema-medida"] },
  { id: "copy", label: "Copywriting y textos comerciales", desc: "Redacción persuasiva enfocada en ventas.", price: 140, includedIn: [] },
  { id: "seo", label: "SEO Google Pro + Píxeles Ads", desc: "Posicionamiento en Google y medición Meta/Analytics.", price: 160, includedIn: [] },
  { id: "dominio", label: "Dominio (.pe / .com) + Correos", desc: "Dominio anual propio y cuentas @tuempresa.", price: 130, includedIn: [] },
  { id: "bilingue", label: "Versión Bilingüe (ES / EN)", desc: "Sitio completo en español e inglés.", price: 220, includedIn: [] },
];

export const steps = [
  {
    n: "01",
    title: "Reunión sin compromiso",
    text: "15 a 20 minutos por Meet o llamada. Escuchamos tu proyecto y lo que deseas lograr.",
  },
  {
    n: "02",
    title: "Cotización a tu medida",
    text: "Te enviamos una propuesta detallada con alcance, plazos e inversión. Cero sorpresas.",
  },
  {
    n: "03",
    title: "Diseño y desarrollo",
    text: "Construimos tu web con tu identidad visual y la revisamos contigo antes de publicar.",
  },
  {
    n: "04",
    title: "Lanzamiento y soporte",
    text: "Publicamos tu web, conectamos tu dominio y te brindamos acompañamiento post-entrega.",
  },
];

export const profileData = {
  eyebrow: "Agencia Digital · Lima, Perú",
  title: "Damos vida y arquitectura digital a negocios con visión.",
  etymology:
    "Kamasqa proviene del quechua y significa «aquello a lo que se le ha infundido vida, aliento y propósito». Como agencia digital, no fabricamos páginas en serie: creamos activos web con identidad propia, rendimiento superior y enfoque comercial.",
  stats: [
    { value: "< 0.9s", label: "Velocidad media de carga", detail: "Arquitectura optimizada de alto rendimiento" },
    { value: "100%", label: "Diseño y desarrollo a medida", detail: "Código propio y WordPress profesional a tu medida" },
    { value: "1 a 1", label: "Trato directo sin intermediarios", detail: "Hablas directamente con el equipo que crea tu web" },
    { value: "S/ 0", label: "Costos forzosos mensuales", detail: "Tú eres el único dueño de tu web y dominio" },
  ],
  pillars: [
    {
      code: "01",
      title: "Ingeniería Web & WordPress Optimizado",
      desc: "Desarrollamos con código moderno (TypeScript, JavaScript) y entornos profesionales en WordPress para lograr carga veloz, autogestión y máxima conversión.",
      tag: "Performance First",
    },
    {
      code: "02",
      title: "Diseño Editorial con Propósito",
      desc: "Prototipamos en Figma cuidando la tipografía, el contraste y la psicología de color para que tu marca destaque frente a tu competencia.",
      tag: "UI / UX Bespoke",
    },
    {
      code: "03",
      title: "Enfoque Comercial Peruano",
      desc: "Conocemos cómo compra el cliente en Perú: integramos flujos nativos hacia WhatsApp, pagos con Yape/Plin y experiencias 100% móviles.",
      tag: "Conversión Real",
    },
    {
      code: "04",
      title: "Transparencia Total",
      desc: "Desde la primera reunión gratuita de 15 minutos hasta la entrega final: plazos cumplidos, presupuesto fijo por escrito y soporte cercano.",
      tag: "Cero Sorpresas",
    },
  ],
  compare: [
    { topic: "Velocidad de carga", kamasqa: "Menos de 1 segundo (Código y WordPress optimizado)", other: "3 a 6 segundos sin optimización técnica" },
    { topic: "Seguridad técnica", kamasqa: "100% blindada con SSL y protección en la nube", other: "Configuración básica expuesta a caídas" },
    { topic: "Autogestión y propiedad", kamasqa: "100% tuya · Panel intuitivo sin cobros ocultos", other: "Costos sorpresa y dependencia constante" },
    { topic: "Identidad visual", kamasqa: "Diseño exclusivo creado para tu negocio", other: "Diseño genérico repetido en cientos de webs" },
    { topic: "Estrategia WhatsApp", kamasqa: "Embudo conversacional integrado en cada sección", other: "Solo un botón flotante básico sin estrategia" },
  ],
};

export const faqs = [
  {
    q: "¿Cómo funciona la reunión sin compromiso?",
    a: "Es una sesión breve de 15 a 20 minutos por Google Meet o llamada telefónica. Conversamos sobre tu negocio, tus objetivos comerciales y lo que necesitas lograr. Al finalizar, preparamos una cotización formal detallada. Tú decides con total libertad si avanzamos, sin ninguna presión.",
  },
  {
    q: "¿Cuánto tiempo toma tener mi página web lista?",
    a: "Una Landing Page toma entre 4 y 7 días hábiles; una Web Informativa corporativa entre 7 y 14 días hábiles; una Tienda Online completa entre 14 y 21 días hábiles; y un Sistema o Plataforma a Medida entre 3 y 5 semanas. Cumplimos estrictamente el cronograma acordado.",
  },
  {
    q: "¿Cuánto cuesta desarrollar una web con Kamasqa?",
    a: "Cada proyecto se cotiza de forma justa según su alcance real. Tras una breve reunión de 15 minutos te entregamos una propuesta técnica con presupuesto fijo por escrito, sin costos ocultos.",
  },
  {
    q: "¿Incluyen dominio (.pe o .com), hosting y certificado SSL?",
    a: "Sí. Te asesoramos en el registro de tu dominio propio (.pe o .com) a tu nombre, configuramos el despliegue en servidores de alta velocidad con certificado SSL seguro (candado https) y dejamos tus correos corporativos listos.",
  },
  {
    q: "¿Qué facilidades y medios de pago aceptan?",
    a: "Trabajamos con el esquema 50% al iniciar el proyecto y 50% al entregarte tu web 100% terminada y aprobada por ti. Aceptamos transferencias bancarias (BCP, BBVA, Interbank, Scotiabank), Yape, Plin y tarjetas.",
  },
];
