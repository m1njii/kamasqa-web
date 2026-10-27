export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  sector: string;
  service: string;
  url: string;
  technologies: string[];
  image: string;
  category: "B2B Industrial" | "E-commerce" | "Turismo & Bienestar" | "Logística & Energía";
  challenge: string;
  howWeHelp: string;
  capabilities: string[];
  techAndCriteria: string;
  expectedResults: string;
  highlights: { label: string; value: string }[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "hacsa",
    number: "01",
    title: "HACSA: Catálogo industrial de adhesivos y auxiliares",
    subtitle: "Ficha descriptiva de proyecto y solución de arquitectura web B2B",
    client: "HACSA",
    sector: "Adhesivos industriales",
    service: "Desarrollo web & Arquitectura B2B",
    url: "https://hacsa.com.pe/",
    technologies: ["WooCommerce", "WordPress", "PHP", "JavaScript", "CSS", "Elementor"],
    image: "/images/portfolio/hacsa.png",
    category: "B2B Industrial",
    challenge: "Cuando una empresa fabrica para varias industrias, el catálogo puede volverse difícil de recorrer. HACSA muestra cómo puedo transformar una oferta técnica de adhesivos y auxiliares en caminos comprensibles para fabricantes, talleres, distribuidores y compradores profesionales.",
    howWeHelp: "Conecto cada producto con su aplicación: calzado, marroquinería, construcción, carpintería o tapicería. La navegación combina inspiración, información de uso, tienda y contacto para que el cliente pueda comprar o pedir asesoría según la complejidad de su proceso.",
    capabilities: [
      "E-commerce industrial con categorías orientadas a aplicaciones.",
      "Organización de productos, carrito y consultas comerciales.",
      "Mensajes de calidad, asesoría y atención para negocios B2B.",
      "Integración de contenido de marca con acciones de compra."
    ],
    techAndCriteria: "La solución está construida con WordPress, WooCommerce y Elementor. Trabajo el catálogo desde la lógica del negocio: qué necesita saber el cliente, qué puede comprar directamente y cuándo conviene llevarlo a una conversación comercial.",
    expectedResults: "Una experiencia que conecta tu conocimiento del producto con una decisión más sencilla para quien compra. Si tu empresa vende soluciones técnicas a varias industrias, puedo ayudarte a ordenar el catálogo y convertirlo en una herramienta de ventas.",
    highlights: [
      { label: "Enfoque", value: "Taxonomía por Industria" },
      { label: "Modelo", value: "B2B + Venta Directa" },
      { label: "Rendimiento", value: "Navegación Asistida" }
    ]
  },
  {
    id: "fercumza",
    number: "02",
    title: "Fercumza: Equipos para laboratorio y construcción",
    subtitle: "Ficha descriptiva de proyecto y solución de arquitectura web B2B",
    client: "Fercumza",
    sector: "Equipos para laboratorio y construcción",
    service: "Desarrollo web & Catálogo Técnico",
    url: "https://fercumza.com/",
    technologies: ["WooCommerce", "WordPress", "PHP", "JavaScript", "CSS"],
    image: "/images/portfolio/fercumza.png",
    category: "B2B Industrial",
    challenge: "Presentar una oferta técnica de equipos especializados para laboratorio y construcción de forma accesible e intuitiva, facilitando la navegación para profesionales, ingenieros y empresas del sector.",
    howWeHelp: "Estructuro el catálogo en línea organizando la maquinaria y herramientas de medición por aplicación técnica, combinando especificaciones detalladas con opciones claras de cotización y contacto comercial.",
    capabilities: [
      "Catálogo de equipos técnicos organizado por especialidad y aplicación.",
      "Gestión de consultas comerciales y solicitudes de cotización para negocios B2B.",
      "Presentación clara de fichas técnicas y estándares de calidad del sector.",
      "Integración de canales de atención directa para asesoría especializada."
    ],
    techAndCriteria: "Desarrollado con WordPress y herramientas avanzadas de maquetación, optimizando la experiencia de búsqueda para que clientes corporativos e ingenieros encuentren y coticen rápidamente la maquinaria adecuada.",
    expectedResults: "Una plataforma confiable y profesional que convierte un catálogo técnico complejo en una canal eficiente para captar clientes B2B y agilizar el proceso de ventas.",
    highlights: [
      { label: "Enfoque", value: "Ingeniería y Laboratorio" },
      { label: "Conversión", value: "Cotizaciones B2B" },
      { label: "Fichas", value: "Normativa Técnica" }
    ]
  },
  {
    id: "overtime",
    number: "03",
    title: "Overtime: Tienda digital para coleccionismo y objetos únicos",
    subtitle: "E-commerce Headless de alta gama para cultura pop y memorabilia",
    client: "Overtime",
    sector: "Coleccionismo y antigüedades",
    service: "Desarrollo web Headless",
    url: "https://overtime.es/",
    technologies: ["React / Next.js", "WordPress + WooCommerce headless", "Cloudflare R2", "Tailwind CSS", "Cloudflare"],
    image: "/images/portfolio/overtime.png",
    category: "E-commerce",
    challenge: "Una tienda de coleccionismo necesita vender el valor de piezas únicas sin hacer que el catálogo se sienta caótico. Overtime muestra cómo diseño experiencias para explorar cultura pop, vintage, antigüedades y memorabilia con una identidad fuerte y rutas claras hacia la compra o la subasta.",
    howWeHelp: "Construyo una portada que presenta la marca, comunica beneficios y abre la puerta al inventario. Después organizo categorías, filtros, ofertas, productos destacados, envíos, devoluciones y atención para acompañar todo el recorrido del comprador.",
    capabilities: [
      "Frontends React orientados a catálogos visuales y descubrimiento.",
      "E-commerce headless conectado con WordPress y WooCommerce.",
      "Integración de imágenes en Cloudflare R2 para una biblioteca de media flexible.",
      "Interfaces responsive para inventarios que crecen y cambian con frecuencia."
    ],
    techAndCriteria: "El proyecto combina React/Next.js, WordPress + WooCommerce headless, Cloudflare R2, Tailwind CSS y Cloudflare. El valor está en coordinar frontend, catálogo y media para que la experiencia editorial no compita con la operación de la tienda.",
    expectedResults: "Una tienda con personalidad, pero también con estructura: el visitante descubre, compara y encuentra una acción siguiente. Si vendes productos visuales, coleccionables o de inventario cambiante, puedo ayudarte a construir una experiencia comercial que haga justicia a tu catálogo.",
    highlights: [
      { label: "Stack", value: "Next.js + Woo Headless" },
      { label: "Media CDN", value: "Cloudflare R2" },
      { label: "UX", value: "Descubrimiento Visual" }
    ]
  },
  {
    id: "realzza-store",
    number: "04",
    title: "Realzza Store: Soluciones de decoración y muebles para el hogar",
    subtitle: "E-commerce multicategoría con financiamiento directo",
    client: "Realzza Store",
    sector: "Muebles, decoración y electrohogar",
    service: "E-commerce y catálogo digital",
    url: "https://realzzastore.pe/",
    technologies: ["WooCommerce", "WordPress", "PHP", "JavaScript", "CSS"],
    image: "/images/portfolio/realzza-store.png",
    category: "E-commerce",
    challenge: "Una tienda de muebles y equipamiento para el hogar requiere organizar múltiples categorías (sala, cocina, dormitorio, oficina, electrohogar, tecnología) sin abrumar al comprador. Realzza Store demuestra cómo presentar productos de fabricación propia y catálogo variado con navegación fluida, precios directos de fábrica y opciones de crédito directo.",
    howWeHelp: "Diseño una portada enfocada en la propuesta de valor y facilidades de compra (envío a domicilio, crédito directo, muebles armados). Organizo las categorías de productos, ofertas destacadas y canales de atención rápida para guiar al usuario desde la búsqueda hasta la conversión final.",
    capabilities: [
      "E-commerce enfocado en navegación por categorías y venta directa.",
      "Estructuración de ofertas, promociones y catálogo multicategoría.",
      "Integración de facilidades de atención al cliente y gestión de consultas.",
      "Interfaces responsive optimizadas para la conversión en compras de hogar."
    ],
    techAndCriteria: "El proyecto integra WooCommerce y WordPress con un diseño dinámico en PHP, JavaScript y CSS. La clave radica en destacar los beneficios de fábrica y financiamiento rápido manteniéndolo accesible desde cualquier dispositivo.",
    expectedResults: "Una plataforma estructurada y orientada al cliente: el comprador explora colecciones, compara alternativas y realiza su pedido con facilidad. Si cuentas con un catálogo amplio de productos para el hogar o fabricación propia, puedo ayudarte a crear una experiencia de compra eficiente y cercana.",
    highlights: [
      { label: "Catálogo", value: "Multicategoría Integral" },
      { label: "Conversión", value: "Crédito Directo + Envío" },
      { label: "Velocidad", value: "Mobile Optimized" }
    ]
  },
  {
    id: "tambo-ilusion",
    number: "05",
    title: "Tambo Ilusión: Experiencia bilingüe para naturaleza y bienestar",
    subtitle: "Narrativa inmersiva para turismo regenerativo y retiros",
    client: "Tambo Ilusión",
    sector: "Turismo, bienestar y conservación",
    service: "Desarrollo web bilingüe Jamstack",
    url: "https://tamboilusion.com/es/",
    technologies: ["Astro", "WordPress headless", "Cloudflare"],
    image: "/images/portfolio/tambo-ilusion.png",
    category: "Turismo & Bienestar",
    challenge: "Una experiencia de naturaleza necesita transmitir calma, identidad y confianza antes de pedir una reserva. Tambo Ilusión muestra cómo puedo convertir una propuesta de estadías, retiros y bienestar en una experiencia bilingüe que invita a explorar.",
    howWeHelp: "Construyo una narrativa visual que presenta el lugar y luego guía a cada visitante hacia la decisión que le corresponde: conocer una estadía, revisar un programa, planificar un retiro o conversar por WhatsApp. El idioma deja de ser una barrera y se vuelve parte de la experiencia.",
    capabilities: [
      "Frontends Astro rápidos y orientados a contenido.",
      "Integración de un backend WordPress headless para que el equipo gestione contenidos.",
      "Experiencias bilingües con rutas equivalentes en español e inglés.",
      "Dirección visual para turismo, bienestar, conservación y hospitalidad."
    ],
    techAndCriteria: "El proyecto combina Astro en el frontend, WordPress headless como backend de contenidos y Cloudflare en la entrega. Mantengo la tecnología detrás de la historia: primero debe sentirse el lugar, después debe ser sencillo reservar, consultar o planificar.",
    expectedResults: "Una web bilingüe que no parece un folleto traducido, sino una experiencia coherente para distintos visitantes. Si tu negocio depende de explicar un lugar, una experiencia o una forma de vivir, puedo ayudarte a convertir esa identidad en una presencia digital memorable.",
    highlights: [
      { label: "Arquitectura", value: "Astro + Headless CMS" },
      { label: "Idiomas", value: "Bilingüe Nativo ES / EN" },
      { label: "Emoción", value: "Storytelling Sensorial" }
    ]
  },
  {
    id: "tiger-fuel",
    number: "06",
    title: "Tiger Fuel: Presencia B2B para transporte y entrega de combustible",
    subtitle: "Plataforma corporativa para operaciones logísticas críticas y energía",
    client: "Tiger Fuel Inc.",
    sector: "Transporte de combustible",
    service: "Desarrollo web corporativo B2B",
    url: "https://tigerfuel.net/",
    technologies: ["WordPress", "Elementor", "Cloudflare"],
    image: "/images/portfolio/tiger-fuel.png",
    category: "Logística & Energía",
    challenge: "Una empresa de transporte de combustible necesita comunicar confiabilidad antes de hablar de rutas o tarifas. Tiger Fuel muestra cómo puedo construir una presencia corporativa que ordena la comunicación para clientes, operación y talento.",
    howWeHelp: "Concentro la misión, la propuesta de servicio y las rutas que cada audiencia necesita: portal de clientes, información para empleados, oportunidades de empleo y contacto. La jerarquía hace que una operación compleja se entienda rápido.",
    capabilities: [
      "Sitios corporativos B2B orientados a confianza y continuidad operativa.",
      "Arquitectura de navegación para varias audiencias.",
      "Formularios comerciales y rutas diferenciadas de contacto.",
      "Mensajes de seguridad, servicio y puntualidad sin sobrecargar la página."
    ],
    techAndCriteria: "La solución utiliza WordPress, Elementor y Cloudflare. Elijo una base que permita al equipo actualizar información y crecer por secciones, mientras el diseño mantiene una imagen sólida y profesional.",
    expectedResults: "Una portada corporativa que ayuda a clientes, colaboradores y candidatos a encontrar su camino. Si tu empresa ofrece servicios críticos o trabaja en industrias reguladas, puedo ayudarte a comunicar capacidad y confianza con claridad.",
    highlights: [
      { label: "Audiencias", value: "Clientes + Operación + RRHH" },
      { label: "Seguridad", value: "Cloudflare Enterprise" },
      { label: "Imagen", value: "Autoridad Corporativa" }
    ]
  }
];
