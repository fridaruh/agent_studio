export const es = {
  nav: {
    platform: 'Plataforma',
    agents: 'Agentes',
    security: 'Seguridad',
    faq: 'FAQ',
    careers: 'Carreras',
    contactUs: 'Contáctanos',
    activateAccount: 'Activar mi cuenta',
  },
  trustBadge: {
    text: 'Respaldado por [Inversor] · publicado en [Prensa]',
  },
  hero: {
    headline: 'Cotiza más rápido de lo que tu competencia puede contestar el teléfono.',
    subheadline: 'El agente IA diseñado para instaladores solares. Responde en segundos, cotiza en minutos.',
    cta1: 'Contáctanos',
    cta2: 'Activar mi cuenta',
    dashboardLabel: 'Pipeline de Leads',
    dashboardFilters: ['Todos', 'Nuevos', 'Cotizando', 'Cerrados'],
    dashboardStats: ['47 Activos', '23 Cotizando', '18 Cerrados'],
    leads: [
      { company: 'Industrias Monterrey', type: 'Comercial', msg: 'Necesitamos cotización para 500 paneles...', time: 'hace 2 min', status: 'Nuevo', statusColor: 'primary' },
      { company: 'Casa García', type: 'Residencial', msg: 'Me interesa la instalación en el techo...', time: 'hace 15 min', status: 'Cotizando', statusColor: 'success' },
      { company: 'Agro del Norte', type: 'Agrovoltaico', msg: 'Requiero evaluación para 10 hectáreas...', time: 'hace 1 h', status: 'Seguimiento', statusColor: 'muted' },
    ],
    clientsLabel: 'Empresas solares confían en nuestra plataforma',
  },
  press: {
    asSeenIn: 'Publicado en',
  },
  problem: {
    headline: 'Las ventas y el servicio solar todavía funcionan con hilos de WhatsApp, hojas dispersas y seguimiento manual.',
    narrative:
      'Una empresa solar de tamaño mediano recibe 80 leads este mes. Cada uno necesita una evaluación del sitio, una cotización personalizada paneles, inversor, opciones de financiamiento, proyección de ROI y 3–5 contactos de seguimiento antes de que el cliente decida. El equipo de ventas está saturado. La mitad de los leads reciben respuesta después de 48 horas. Un tercio nunca recibe un segundo seguimiento. Los deals que cierran lo hacen a pesar del proceso, no gracias a él.',
    cards: [
      {
        title: 'Las cotizaciones lentas pierden instalaciones',
        desc: 'Las cotizaciones personalizadas toman días. Para cuando respondes, el cliente ya firmó con el competidor que contestó en horas.',
      },
      {
        title: 'Los leads se enfrían sin seguimiento',
        desc: 'Después del primer contacto, la mayoría de los leads reciben 1 o 2 toques. El seguimiento automático y consistente es imposible sin una persona dedicada.',
      },
      {
        title: 'Sin vista única del cliente',
        desc: 'Conversaciones dispersas en WhatsApp, email y llamadas. Nadie conoce el historial completo de un lead o relación con el cliente.',
      },
      {
        title: 'Cuello de botella post-venta',
        desc: 'Solicitudes de mantenimiento, reclamos de garantía y alertas de monitoreo llegan sin estructura. La misma persona que vende atiende quejas de servicio.',
      },
    ],
  },
  metrics: {
    eyebrow: 'Impacto medible',
    headline: 'Lo que cambia cuando los agentes empiezan a trabajar',
    stats: [
      { value: 100, suffix: '%', label: 'De leads respondidos en menos de 5 minutos' },
      { value: 35, suffix: '%', label: 'Aumento en tasa de conversión cotización-cierre', prefix: '+' },
      { value: 10, suffix: ' h', label: 'Horas devueltas a cada vendedor por semana', prefix: '+' },
      { value: 80, suffix: '%', label: 'Reducción en tiempo de lead a cotización entregada' },
    ],
  },
  platformPreview: {
    eyebrow: 'Vista previa de la plataforma',
    headline: 'Bienvenido al futuro de las operaciones solares',
    panel1: {
      label: 'Centraliza cada lead y cliente',
      desc: 'Todos tus canales de entrada WhatsApp, formulario web, email fluyen hacia un dashboard en tiempo real. Cada lead es capturado, clasificado y asignado automáticamente.',
    },
    panel2: {
      label: 'Interactúa con tu pipeline',
      desc: 'Pregunta sobre cualquier lead, cotización o estado de instalación a través de un agente IA entrenado en tu operación. Sin búsqueda manual entre herramientas.',
    },
    chatMessages: [
      { role: 'user', text: '¿Cuántos leads están esperando cotización?' },
      { role: 'ai', text: 'Tienes 23 leads en etapa de cotización. Los 3 más urgentes son: Industrias Monterrey (3 días sin respuesta), Parque Solar Sonora (presupuesto >$2M) y Casa García (solicitó urgente). ¿Quieres que genere las cotizaciones ahora?' },
      { role: 'user', text: 'Genera la de Industrias Monterrey' },
      { role: 'ai', text: 'Cotización generada para Industrias Monterrey: 500 paneles JA Solar 580W, 2 inversores Huawei 100kW, producción estimada 850 MWh/año, ROI proyectado 4.2 años. Enviando por email ahora...' },
    ],
    audioCta: 'Escuchar demo en español',
    quotingCta: 'Probar el Agente de Cotización',
  },
  architecture: {
    eyebrow: 'Arquitectura',
    headline: 'Dos capas que se construyen una sobre la otra',
    layer1: {
      label: 'Torre de control para liderazgo',
      number: '01',
      title: 'Sistema de Registro (SOR)',
      desc: 'La base de datos central de tu operación. Se conecta a cada canal y sistema que tu empresa ya usa, sin integraciones manuales, sin depender de un CRM que alguien olvidó actualizar.',
      integrations: ['WhatsApp', 'Email', 'Llamadas', 'Web Form', 'CRM', 'Excel/Sheets', 'Salesforce', 'HubSpot', 'Google Sheets', 'SAP', 'NetSuite', 'Odoo'],
    },
    layer2: {
      label: 'Capa de ejecución autónoma',
      number: '02',
      title: 'Agentes Verticales',
      desc: 'Agentes IA que ejecutan flujos de trabajo completos de extremo a extremo. Operan como miembros del equipo de tiempo completo, calificando leads, generando cotizaciones, haciendo seguimiento, coordinando servicio, con 99% de precisión.',
      agents: ['Agente de Cotización', 'Agente de Seguimiento', 'Agente de Servicio', 'Agente de Éxito al Cliente', 'Agentes Personalizados'],
    },
  },
  differentiator: {
    eyebrow: 'Diferenciador clave',
    headline: 'IA que trabaja como trabaja tu equipo',
    subheadline:
      'Nuestros agentes no solo envían notificaciones, ejecutan flujos de trabajo completos, en cada canal, sin intervención humana.',
    context:
      'Las ventas solares son relacionales, de múltiples contactos y técnicamente complejas. Nuestros agentes lo entienden. Leen mensajes entrantes, extraen los datos correctos, generan cotizaciones personalizadas, hacen seguimiento en el momento adecuado y escalan a tu equipo solo cuando se necesita una decisión humana.',
    features: [
      {
        title: 'Responde al instante, 24/7',
        desc: '¿WhatsApp o email entrante a las 9pm? El agente responde con preguntas de calificación y próximos pasos en segundos.',
      },
      {
        title: 'Ejecuta flujos de extremo a extremo',
        desc: 'Desde recibir un lead hasta entregar una cotización completa con proyecciones de ROI, cero pasos manuales en el medio.',
      },
      {
        title: 'Escala cuando necesita tu juicio',
        desc: 'El agente conoce sus límites. Notifica a tu equipo en tiempo real cuando un cliente necesita una conversación humana.',
      },
      {
        title: 'Registro completo de actividad',
        desc: 'Cada interacción registrada. Sabes exactamente qué dijo el agente, cuándo, y qué respondió el cliente.',
      },
    ],
  },
  quotingAgent: {
    eyebrow: 'Agente 01',
    name: 'Agente de Cotización',
    subtitle:
      'Maneja solicitudes de cotización de instalación solar, residencial, comercial, industrial. Gestiona la recopilación de datos, dimensionamiento técnico, consulta de precios con proveedores y cálculo de ROI automáticamente.',
    channels: 'Canales: WhatsApp, Email, Formulario web',
    timeReduction: '3–7 días hábiles → menos de 4 horas',
    beforeTitle: 'Hoy manual',
    afterTitle: 'Con Agente IA',
    comparison: [
      ['Lead llega por WhatsApp y espera en cola', 'El agente responde en 60 segundos con preguntas de calificación'],
      ['El ingeniero revisa manualmente y agenda una llamada', 'El agente extrae todos los datos técnicos automáticamente de la conversación'],
      ['Cotización armada en Excel, enviada 3–7 días después', 'Cotización generada con precios reales y proyecciones de ROI'],
      ['El cliente recibe un PDF genérico', 'El cliente recibe comparativa personalizada de 2–3 opciones de sistema'],
      ['El equipo hace seguimiento si se acuerda', 'El agente hace seguimiento automático a las 24h, 48h y 7 días'],
    ],
    steps: [
      { title: 'Captura del lead', desc: 'Recibe solicitud vía WhatsApp o email automáticamente' },
      { title: 'Calificación', desc: 'Hace preguntas estructuradas para extraer requerimientos técnicos' },
      { title: 'Dimensionamiento técnico', desc: 'Calcula tamaño del sistema según consumo y ubicación' },
      { title: 'Consulta de precios', desc: 'Extrae precios actuales de paneles, inversores y BOS' },
      { title: 'Generación de cotización', desc: 'Crea propuesta personalizada con ROI y período de recuperación' },
      { title: 'Entrega al cliente', desc: 'Envía resumen de cotización con opciones recomendadas y próximos pasos' },
    ],
  },
  followUpAgent: {
    eyebrow: 'Agente 02',
    name: 'Agente de Seguimiento',
    subtitle:
      'Seguimiento sistemático y personalizado con cada prospecto en el pipeline. Navega el CRM e historial de conversaciones para enviar el mensaje correcto en el momento correcto. Cero leads se pierden.',
    promise: 'Cada lead recibe al menos 5 toques de seguimiento. Automáticamente. Sin un solo recordatorio manual.',
    steps: [
      { title: 'Escaneo del pipeline', desc: 'Identifica leads sin actividad en la ventana definida' },
      { title: 'Recuperación de contexto', desc: 'Lee historial de conversación y estado de cotización' },
      { title: 'Personalización del mensaje', desc: 'Crea seguimiento basado en perfil del lead y etapa' },
      { title: 'Envío del mensaje', desc: 'Envía por WhatsApp o email, según el canal preferido del cliente' },
      { title: 'Captura de respuesta', desc: 'Registra respuesta y actualiza el CRM automáticamente' },
      { title: 'Disparo de escalación', desc: 'Marca leads calientes para seguimiento humano inmediato' },
    ],
  },
  moreAgents: {
    eyebrow: 'Más agentes',
    headline: 'La plataforma crece contigo',
    agents: [
      {
        name: 'Agente de Servicio',
        status: 'Beta',
        desc: 'Maneja solicitudes post-instalación: programación de mantenimiento, alertas de monitoreo, reclamos de garantía y tickets de soporte técnico, triados y enrutados automáticamente.',
      },
      {
        name: 'Agente de Éxito al Cliente',
        status: 'Beta',
        desc: 'Gestiona la relación continua con el cliente: revisiones anuales de desempeño, oportunidades de upsell (almacenamiento de baterías, expansión), solicitudes de referidos.',
      },
      {
        name: 'Agentes Personalizados',
        status: 'Enterprise',
        desc: '¿Flujo de trabajo único en tu operación? Construimos agentes personalizados adaptados a tu negocio e integrados con tus sistemas existentes.',
      },
    ],
    cta1: 'Contáctanos',
    cta2: 'Activar mi cuenta',
  },
  videoDemo: {
    eyebrow: 'Demo',
    headline: 'Ve los agentes en acción',
    subheadline:
      'Mira cómo la plataforma maneja cotización, seguimiento y coordinación de servicio, de extremo a extremo, en tiempo real.',
    playLabel: 'Reproducir demo',
  },
  caseStudy: {
    eyebrow: 'Caso de éxito',
    client: '[Empresa Solar]',
    result: '[X horas de seguimiento manual eliminadas / Y% de aumento en tasa de cierre] en [N semanas]',
    cta: 'Ver caso completo',
  },
  security: {
    eyebrow: 'Seguridad',
    headline: 'Tus datos, protegidos por diseño',
    context:
      'Las empresas solares manejan información sensible de clientes, direcciones, facturas de energía, datos de financiamiento. Cada capa de nuestra infraestructura está diseñada para mantenerlos seguros.',
    pillars: [
      {
        number: '01',
        title: 'Cifrado de extremo a extremo',
        desc: 'Todos los datos en tránsito y en reposo cifrados con AES-256 y TLS 1.3. Sin almacenamiento en texto plano, nunca.',
      },
      {
        number: '02',
        title: 'RAG bajo demanda',
        desc: 'Los datos y documentos de tus clientes se recuperan solo cuando se necesitan, nunca almacenados en memoria compartida del modelo ni expuestos a otros inquilinos.',
      },
      {
        number: '03',
        title: 'Protección contra abuso de API',
        desc: 'Límites de tasa, detección de anomalías y rotación automática de tokens previenen el acceso no autorizado.',
      },
      {
        number: '04',
        title: 'Aislamiento de inquilino',
        desc: 'Cada empresa opera en un entorno completamente aislado. Tus datos nunca se mezclan con los de otro cliente.',
      },
    ],
  },
  useCases: {
    eyebrow: 'Casos de uso',
    headline: 'Agentes IA que trabajan en todo tipo de proyecto solar',
    intro: 'Desde una instalación residencial en el techo hasta un parque comercial, el agente se adapta al perfil y ejecuta el proceso correcto.',
    cases: [
      { type: 'Techo residencial', detail: 'Lead a cotización en menos de 4 horas, vía WhatsApp' },
      { type: 'Comercial PyME', detail: 'Propuesta multi-opción en un día hábil, vía email' },
      { type: 'Industrial / gran escala', detail: 'Pre-evaluación técnica con contacto a proveedores, 48h' },
      { type: 'Gobierno / municipal', detail: 'Propuesta formal con informe de ROI y notas regulatorias' },
      { type: 'Agrícola (agrivoltaico)', detail: 'Dimensionamiento especializado para uso dual de suelo' },
      { type: 'Off-grid / rural', detail: 'Evaluación de ubicación remota, cotización con opciones de batería' },
      { type: 'Proyectos EPC', detail: 'Desglose multi-fase con seguimiento por hitos' },
      { type: 'Sistemas híbridos (solar + batería)', detail: 'Cotización comparativa entre configuraciones de almacenamiento' },
      { type: 'Leads orientados a financiamiento', detail: 'El agente califica perfil crediticio y enruta al socio financiero' },
      { type: 'Modelo Arrendamiento / PPA', detail: 'Selección de tipo de contrato y términos explicados automáticamente' },
      { type: 'Solicitud de servicio de mantenimiento', detail: 'Ticket abierto, triado y programado en menos de una hora' },
      { type: 'Garantía / reclamos', detail: 'Auto-documentado y escalado al equipo interno correcto' },
    ],
  },
  integrations: {
    eyebrow: 'Integraciones',
    headline: 'Funciona con lo que ya usas',
    tagline: 'Sin migraciones. Sin cambios de stack. Solo conecta.',
    bottomCta: '¿Usas otra herramienta? Hablemos, nos integramos con ella.',
    categories: [
      { name: 'CRM', tools: ['Salesforce', 'HubSpot', 'Dynamics', 'Pipedrive'] },
      { name: 'Email', tools: ['Gmail', 'Outlook'] },
      { name: 'Mensajería', tools: ['WhatsApp Business API'] },
      { name: 'Gestión', tools: ['Monday.com', 'Asana', 'Jira'] },
      { name: 'Diseño solar', tools: ['Aurora Solar', 'Helioscope'] },
      { name: 'Sistemas ERP', tools: ['SAP', 'NetSuite', 'Odoo'] },
      { name: 'Importación', tools: ['Excel / CSV'] },
      { name: 'Portales', tools: ['Cualquier portal con acceso'] },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    headline: 'Todo lo que necesitas saber',
    questions: [
      {
        q: '¿Cuánto tiempo toma la implementación?',
        a: 'La mayoría de las empresas están completamente activas en 5–7 días hábiles. No se requiere equipo de TI de tu lado.',
      },
      {
        q: '¿Esto reemplaza a mi equipo de ventas?',
        a: 'No. Los agentes se encargan de las tareas repetitivas y manuales para que tu equipo pueda enfocarse en cerrar deals y construir relaciones.',
      },
      {
        q: '¿En qué canales trabaja el agente?',
        a: 'WhatsApp, email y formularios web de forma nativa. La integración telefónica está disponible bajo solicitud.',
      },
      {
        q: '¿Qué tan precisas son las cotizaciones que genera el agente?',
        a: '99% de precisión en dimensionamiento técnico y precios, con puntos de control humano que tu equipo controla antes de la entrega.',
      },
      {
        q: '¿Puede manejar leads en diferentes estados o regiones?',
        a: 'Sí. El agente se adapta a tarifas eléctricas locales, datos de irradiación solar e incentivos regionales.',
      },
      {
        q: '¿Qué ROI puedo esperar?',
        a: 'Las empresas típicamente ven un ROI de 5–8x en los primeros 90 días, impulsado por cotizaciones más rápidas y seguimiento sistemático que recupera leads que de otra forma se enfriarían.',
      },
      {
        q: '¿Los datos de mis clientes están seguros?',
        a: 'Sí. Seguridad de nivel empresarial diseñada para empresas que manejan información sensible de clientes. Cifrada en reposo y en tránsito.',
      },
      {
        q: '¿El agente puede aprender nuestros precios y catálogo de productos?',
        a: 'Sí. Entrenamos al agente en tus líneas de productos específicas, niveles de precios y reglas de negocio antes de salir en vivo.',
      },
      {
        q: '¿Funciona con nuestro CRM actual?',
        a: 'Sí. Nos integramos con Salesforce, HubSpot, Dynamics, Pipedrive y la mayoría de los demás. Si lo usas, podemos conectarlo.',
      },
      {
        q: '¿Puedo personalizar el tono y mensajes del agente?',
        a: 'Sí. El agente habla con la voz de tu empresa, con tu marca y siguiendo tus directrices de comunicación.',
      },
    ],
  },
  contact: {
    meta: 'Contacto: Close Energy',
    subtitle: 'Solo toma 30 segundos. Con esta información te preparamos una propuesta de activación.',
    sectionCompany: 'TU EMPRESA',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo de negocios',
    phone: 'Teléfono',
    company: 'Nombre de tu empresa',
    sectionOperation: 'TU OPERACIÓN',
    installTitle: '¿Qué tipo de instalaciones haces?',
    installOptions: ['Residencial', 'Comercial', 'Industrial'],
    volumeTitle: '¿Cuántos proyectos cierran al mes?',
    volumeOptions: ['1 – 5 proyectos', '6 – 15 proyectos', '16 – 50 proyectos', 'Más de 50'],
    bottleneckTitle: '¿Cuál es tu mayor cuello de botella hoy?',
    bottleneckPlaceholder: 'Selecciona una opción',
    bottleneckOptions: ['Cotizaciones lentas', 'Seguimiento de leads', 'Coordinación de servicio', 'Sin vista única del cliente'],
    sectionLast: 'UNA ÚLTIMA COSA',
    referralTitle: '¿Cómo llegaste a Close Energy?',
    referralOptions: ['Anuncio en redes', 'Contenido orgánico', 'Recomendación', 'IA (ChatGPT, Claude...)', 'Google', 'Otro'],
    submit: 'Activar mi cuenta',
    successTitle: 'Ya estás en la lista.',
    successBody: 'Nos pondremos en contacto contigo por correo o WhatsApp en menos de 24 horas con tu propuesta de activación.',
  },
  team: {
    eyebrow: 'Nuestro equipo',
    headline: 'Las personas y agentes detrás de Close Energy',
    subheadline: 'Un equipo humano con visión de producto y un equipo autónomo de agentes IA que opera 24/7.',
    founders: [
      {
        name: 'Iker Viramontes',
        initials: 'IV',
        role: 'Founder & CEO',
        desc: 'Lidera la visión y estrategia de Close Energy. Construye la plataforma que convierte la adopción de IA en una ventaja comercial real para empresas solares.',
      },
      {
        name: 'Frida Ruh',
        initials: 'FR',
        role: 'Founder & CTO',
        desc: 'Arquitecta de la infraestructura de agentes IA. Diseña y construye los sistemas que dan autonomía de extremo a extremo a las operaciones solares.',
      },
    ],
    autonomousEyebrow: 'Equipo Autónomo',
    autonomousDesc: 'Agentes IA que operan sin pausa, sin instrucciones manuales, sin días libres.',
    agents: [
      { name: 'Stanley', role: 'AI Head of Content', desc: 'Crea y distribuye contenido de producto, actualizaciones y mensajes de marca en cada canal.' },
      { name: 'Elliot', role: 'Scope & Task Agent', desc: 'Gestiona y prioriza tareas de proyecto, coordina dependencias y mantiene al equipo alineado.' },
      { name: 'Nova', role: 'AI Quoting Agent', desc: 'Procesa solicitudes de cotización entrantes y genera propuestas personalizadas en minutos.' },
      { name: 'Rex', role: 'AI Follow-up Agent', desc: 'Ejecuta secuencias de seguimiento personalizadas para cada prospecto en el pipeline.' },
    ],
  },
  cta: {
    headline: '¿Listo para dejar de perder leads por seguimiento lento?',
    subheadline: 'Empieza hoy.',
    cta1: 'Contáctanos',
    cta2: 'Activar mi cuenta',
  },
  footer: {
    tagline: 'Agentes IA para ventas y operaciones solares.',
    product: { title: 'Producto', links: ['Plataforma', 'Agentes', 'Seguridad', 'Integraciones'] },
    company: { title: 'Empresa', links: ['Equipo', 'ROI', 'FAQ', 'Carreras'] },
    resources: { title: 'Recursos', links: ['Blog', 'Casos de éxito'] },
    contact: { title: 'Contacto', links: ['Contáctanos'] },
    legal: '© 2026 Close Energy. Todos los derechos reservados.',
  },
}

export type Translations = typeof es
