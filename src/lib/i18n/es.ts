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
    headline: 'Automatización comercial para empresas solares y de soluciones energéticas.',
    subheadline: 'Close Energy atiende, califica, cotiza y da seguimiento a prospectos mientras tu equipo conserva el control de las decisiones comerciales y técnicas.',
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
    clientsLabel: 'Una operación comercial conectada',
  },
  press: {
    asSeenIn: 'Publicado en',
  },
  problem: {
    headline: 'Una parte importante de la venta depende de que una persona esté disponible.',
    narrative:
      'Cuando el equipo está en campo, en una reunión o atendiendo a otros clientes, un nuevo prospecto puede quedar esperando. Close Energy continúa la conversación: responde dudas, recopila información, califica la oportunidad, prepara cotizaciones preliminares y avisa al equipo cuando se requiere intervención.',
    cards: [
      {
        title: 'La atención depende de la disponibilidad',
        desc: 'Responder preguntas, recopilar datos y preparar una propuesta compiten con las visitas, reuniones y cierres del equipo.',
      },
      {
        title: 'El seguimiento requiere continuidad',
        desc: 'Las conversaciones necesitan contexto, información pendiente y próximos pasos claros para avanzar.',
      },
      {
        title: 'La información vive en varios canales',
        desc: 'Sin un historial común, revisar una oportunidad y coordinar la siguiente acción toma tiempo del equipo comercial.',
      },
      {
        title: 'El equipo debe enfocarse en avanzar oportunidades',
        desc: 'Las tareas repetitivas pueden automatizarse para reservar el criterio humano para decisiones comerciales o técnicas.',
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
    headline: 'Una plataforma para operar el proceso comercial',
    panel1: {
      label: 'Centraliza cada lead y cliente',
      desc: 'Centraliza conversaciones, oportunidades, cotizaciones y actividad comercial en un mismo proceso configurable.',
    },
    panel2: {
      label: 'Interactúa con tu pipeline',
      desc: 'Consulta prospectos, cotizaciones y seguimientos con el contexto registrado en tu operación.',
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
      'Los agentes automatizan trabajo operativo dentro de reglas configuradas y escalan al equipo las decisiones que requieren validación.',
    context:
      'Las ventas de soluciones energéticas combinan conversaciones, datos técnicos y decisiones comerciales. Los agentes registran actividad, solicitan información, aplican criterios definidos por tu empresa y mantienen al equipo al tanto cuando debe intervenir.',
    features: [
      {
        title: 'Atiende nuevos prospectos',
        desc: 'Responde preguntas, captura necesidades y propone los siguientes pasos según el flujo configurado.',
      },
      {
        title: 'Automatiza tareas comerciales',
        desc: 'Conecta atención, calificación, cotización preliminar, seguimiento y actualización del pipeline.',
      },
      {
        title: 'Escala cuando necesita tu juicio',
        desc: 'El equipo conserva el control de las decisiones comerciales o técnicas que requieren validación.',
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
      'Transforma información comercial y técnica en dimensionamientos y cotizaciones preliminares usando las reglas, precios, productos, tarifas y parámetros definidos por tu empresa.',
    channels: 'Canales: WhatsApp, Email, Formulario web',
    timeReduction: 'De la información inicial a una propuesta preliminar',
    beforeTitle: 'Hoy manual',
    afterTitle: 'Con Agente IA',
    comparison: [
      ['El prospecto comparte una necesidad inicial', 'El agente recopila datos con preguntas estructuradas'],
      ['El equipo reúne información técnica y comercial', 'El agente aplica los criterios y parámetros configurados'],
      ['La propuesta requiere preparación manual', 'El agente prepara una cotización preliminar para revisión según el alcance'],
      ['El equipo valida el siguiente paso', 'La oportunidad se escala cuando requiere criterio humano'],
      ['El historial se actualiza manualmente', 'La actividad y los próximos pasos se registran en el pipeline'],
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
      'Mantiene activa la conversación con prospectos, solicita información pendiente, registra respuestas y escala oportunidades cuando se requiere intervención comercial.',
    promise: 'El seguimiento se ejecuta con las reglas y los criterios definidos por tu equipo.',
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
    eyebrow: 'Agente 03',
    headline: 'Agente de Desempeño Comercial',
    agents: [
      {
        name: 'Lectura de la operación',
        status: 'Pipeline',
        desc: 'Analiza actividad, oportunidades, cotizaciones y seguimiento para identificar qué está ocurriendo en el proceso comercial.',
      },
      {
        name: 'Prioridades accionables',
        status: 'Análisis',
        desc: 'Señala movimientos relevantes, seguimientos pendientes y situaciones que necesitan atención del equipo.',
      },
      {
        name: 'Contexto para decidir',
        status: 'Briefing',
        desc: 'Convierte la información acumulada del pipeline en una lectura útil para ventas y dirección.',
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
  pipelineAssistant: {
    eyebrow: 'Interactúa con tu pipeline',
    headline: 'Tu pipeline debe ayudarte a decidir qué atender.',
    context: 'El Agente de Desempeño Comercial interpreta la actividad registrada y la convierte en contexto accionable para ventas y dirección.',
    capabilities: [
      { title: 'Briefing comercial', desc: 'Recibe una nota de voz con oportunidades, seguimientos y movimientos que requieren atención.' },
      { title: 'Consulta tu operación', desc: 'Pregunta por prospectos, cotizaciones o seguimientos sin revisar registro por registro.' },
      { title: 'Recupera contexto', desc: 'Consulta el historial de actividad y los próximos pasos de cada oportunidad.' },
      { title: 'Prioriza acciones', desc: 'Identifica dónde debe intervenir el equipo comercial según la información disponible.' },
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
        a: 'El agente se configura con los parámetros técnicos y económicos que hoy en día utilizas para elaborar tus propias cotizaciones, por lo que la precisión es igual a la de tus propuestas actuales.',
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
        q: '¿Cómo se cobra?',
        a: 'El servicio se divide en **dos etapas: configuración y operación mensual**.\n\nPrimero se realiza un **pago inicial de configuración**, con el que iniciamos el levantamiento de información, la parametrización del agente y una **prueba de valor de 4 semanas** operando sobre tu proceso comercial real.\n\nAl finalizar la prueba, tú decides:\n\n- **Si no continúas**, no pagas nada adicional. El pago inicial cubre los trabajos de configuración y la prueba realizada.\n- **Si continúas**, se liquida el **finiquito del setup** y el servicio pasa a la modalidad **Agent as a Service (AaaS)**.\n\nA partir de ese momento se cobra una **mensualidad correspondiente al plan contratado**, definida por una banda de **Interacciones Exitosas** mensuales. Mientras el volumen de uso permanezca dentro del rango de ese plan, la mensualidad no cambia. Si el volumen crece y supera el rango contratado, el servicio migra a la banda que corresponda.\n\n**En resumen:** pagas un monto inicial para configurar y probar el agente, un finiquito únicamente si decides continuar, y después una mensualidad acorde al volumen de interacciones que procesa el agente.',
      },
      {
        q: '¿Qué se considera una interacción exitosa?',
        a: 'Una **Interacción Exitosa** es aquella en la que el agente aporta valor al proceso comercial y permite avanzar la gestión de un prospecto. Esto incluye cualquiera de los siguientes casos:\n\n- **El prospecto es calificado y escalado** al equipo comercial para su seguimiento.\n- **Se obtiene información suficiente** para elaborar una cotización, realizar un dimensionamiento preliminar o enviarla a revisión humana.\n- **El prospecto se descarta**, pero queda registrada la causa comercial (por ejemplo, fuera de zona, presupuesto insuficiente o proyecto no viable).',
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
