import type { Translations } from './es'

export const en: Translations = {
  nav: {
    platform: 'Platform',
    agents: 'Agents',
    security: 'Security',
    faq: 'FAQ',
    careers: 'Careers',
    contactUs: 'Contact us',
    activateAccount: 'Activate my account',
  },
  trustBadge: {
    text: 'Backed by [Investor] · as seen in [Press]',
  },
  hero: {
    headline: 'Quote faster than your competition can answer the phone.',
    subheadline: 'The AI agent built for solar installers. Responds in seconds, quotes in minutes.',
    cta1: 'Contact us',
    cta2: 'Activate my account',
    dashboardLabel: 'Leads Pipeline',
    dashboardFilters: ['All', 'New', 'Quoting', 'Closed'],
    dashboardStats: ['47 Active', '23 Quoting', '18 Closed'],
    leads: [
      { company: 'Monterrey Industries', type: 'Commercial', msg: 'We need a quote for 500 panels...', time: '2 min ago', status: 'New', statusColor: 'primary' },
      { company: 'García Residence', type: 'Residential', msg: 'Interested in a rooftop installation...', time: '15 min ago', status: 'Quoting', statusColor: 'success' },
      { company: 'Northern Agro', type: 'Agrivoltaic', msg: 'Need assessment for 10 hectares...', time: '1 h ago', status: 'Follow-up', statusColor: 'muted' },
    ],
    clientsLabel: 'Solar companies trust our platform',
  },
  press: {
    asSeenIn: 'As seen in',
  },
  problem: {
    headline: 'Solar sales and service still run on WhatsApp threads, scattered spreadsheets, and manual follow-up.',
    narrative:
      'A mid-size solar company receives 80 leads this month. Each needs a site evaluation, a custom quote panels, inverter, financing options, ROI projection and 3–5 follow-up touches before the client decides. The sales team is overwhelmed. Half the leads get a response after 48 hours. A third never get a second follow-up. The deals that close do so despite the process, not because of it.',
    cards: [
      {
        title: 'Slow quotes lose installs',
        desc: 'Custom quotes take days. By the time you respond, the client already signed with a competitor who answered in hours.',
      },
      {
        title: 'Leads go cold with no follow-up',
        desc: 'After the first contact, most leads get 1 or 2 touches. Automated, consistent follow-up is impossible without a dedicated person.',
      },
      {
        title: 'No single view of the client',
        desc: 'Conversations scattered across WhatsApp, email, and calls. No one knows the full history of a lead or customer relationship.',
      },
      {
        title: 'Post-sale bottleneck',
        desc: 'Maintenance requests, warranty claims, and monitoring alerts arrive without structure. The same person handling sales handles service complaints.',
      },
    ],
  },
  metrics: {
    eyebrow: 'Measurable impact',
    headline: 'What changes when the agents start working',
    stats: [
      { value: 100, suffix: '%', label: 'Of inbound leads responded to in under 5 minutes' },
      { value: 35, suffix: '%', label: 'Increase in quote-to-close conversion rate', prefix: '+' },
      { value: 10, suffix: ' h', label: 'Hours returned to each sales rep per week', prefix: '+' },
      { value: 80, suffix: '%', label: 'Reduction in time from lead to delivered quote' },
    ],
  },
  platformPreview: {
    eyebrow: 'Platform preview',
    headline: 'Welcome to the future of solar operations',
    panel1: {
      label: 'Centralize every lead and client',
      desc: 'All your inbound channels, WhatsApp, web form, email, flow into a single real-time dashboard. Every lead is captured, classified, and assigned automatically.',
    },
    panel2: {
      label: 'Interact with your pipeline',
      desc: 'Ask about any lead, quote, or installation status through an AI trained on your operation. No manual searching across tools.',
    },
    chatMessages: [
      { role: 'user', text: 'How many leads are waiting for a quote?' },
      { role: 'ai', text: 'You have 23 leads in the quoting stage. The 3 most urgent are: Monterrey Industries (3 days without response), Sonora Solar Park (budget >$2M) and García Residence (requested urgent). Want me to generate the quotes now?' },
      { role: 'user', text: 'Generate the one for Monterrey Industries' },
      { role: 'ai', text: 'Quote generated for Monterrey Industries: 500 JA Solar 580W panels, 2 Huawei 100kW inverters, estimated production 850 MWh/year, projected ROI 4.2 years. Sending by email now...' },
    ],
    audioCta: 'Listen to Spanish demo',
    quotingCta: 'Try our Quoting Agent',
  },
  architecture: {
    eyebrow: 'Architecture',
    headline: 'Two layers that build on each other',
    layer1: {
      label: 'Control tower for leadership',
      number: '01',
      title: 'System of Record (SOR)',
      desc: 'The central database for your operation. Connects to every channel and system your company already uses, no manual integrations, no depending on a CRM someone forgot to update.',
      integrations: ['WhatsApp', 'Email', 'Calls', 'Web Form', 'CRM', 'Excel/Sheets', 'Salesforce', 'HubSpot', 'Google Sheets', 'SAP', 'NetSuite', 'Odoo'],
    },
    layer2: {
      label: 'Autonomous execution layer',
      number: '02',
      title: 'Vertical Agents',
      desc: 'AI agents that execute complete workflows end to end. They operate like full-time team members, qualifying leads, generating quotes, following up, coordinating service, with 99% accuracy.',
      agents: ['Quoting Agent', 'Follow-up Agent', 'Service Agent', 'Customer Success Agent', 'Custom Agents'],
    },
  },
  differentiator: {
    eyebrow: 'Key differentiator',
    headline: 'AI that works the way your team works',
    subheadline:
      'Our agents don\'t just send notifications, they execute complete workflows, across every channel, without human intervention.',
    context:
      'Solar sales is relationship-driven, multi-touch, and technically complex. Our agents understand that. They read inbound messages, extract the right data, generate personalized quotes, follow up at the right moment, and escalate to your team only when a human decision is needed.',
    features: [
      {
        title: 'Responds instantly, 24/7',
        desc: 'Inbound WhatsApp or email at 9pm? The agent responds with qualification questions and next steps within seconds.',
      },
      {
        title: 'Executes workflows end to end',
        desc: 'From receiving a lead to delivering a complete quote with ROI projections, zero manual steps in between.',
      },
      {
        title: 'Escalates when it needs your judgment',
        desc: 'The agent knows its limits. It notifies your team in real time when a client needs a human conversation.',
      },
      {
        title: 'Full activity logging',
        desc: 'Every interaction recorded. You know exactly what the agent said, when, and what the client replied.',
      },
    ],
  },
  quotingAgent: {
    eyebrow: 'Agent 01',
    name: 'Quoting Agent',
    subtitle:
      'Handles inbound requests for solar installation quotes, residential, commercial, industrial. Manages data collection, technical sizing, supplier pricing lookup, and ROI calculation automatically.',
    channels: 'Channels: WhatsApp, Email, Web Form',
    timeReduction: '3–7 business days → under 4 hours',
    beforeTitle: 'Manual Today',
    afterTitle: 'With AI Agent',
    comparison: [
      ['Lead arrives via WhatsApp and sits in queue', 'Agent responds within 60 seconds with qualification questions'],
      ['Engineer reviews manually and schedules a call', 'Agent extracts all technical data automatically from conversation'],
      ['Quote built in Excel, sent 3–7 days later', 'Quote generated with real pricing and ROI projections'],
      ['Client gets one generic PDF', 'Client receives personalized comparison of 2–3 system options'],
      ['Team follows up if they remember', 'Agent follows up automatically at 24h, 48h, and 7-day intervals'],
    ],
    steps: [
      { title: 'Lead capture', desc: 'Receives request via WhatsApp or email automatically' },
      { title: 'Qualification', desc: 'Asks structured questions to extract technical requirements' },
      { title: 'Technical sizing', desc: 'Calculates system size based on consumption and location' },
      { title: 'Pricing lookup', desc: 'Pulls current panel, inverter, and BOS pricing' },
      { title: 'Quote generation', desc: 'Builds personalized proposal with ROI and payback period' },
      { title: 'Client delivery', desc: 'Sends quote summary with recommended options and next steps' },
    ],
  },
  followUpAgent: {
    eyebrow: 'Agent 02',
    name: 'Follow-up Agent',
    subtitle:
      'Systematic, personalized follow-up with every prospect in the pipeline. Navigates CRM and conversation history to send the right message at the right moment. Zero leads fall through the cracks.',
    promise: 'Every lead gets at least 5 follow-up touches. Automatically. Without a single manual reminder.',
    steps: [
      { title: 'Pipeline scan', desc: 'Identifies leads with no activity in defined window' },
      { title: 'Context retrieval', desc: 'Reads conversation history and quote status' },
      { title: 'Message personalization', desc: 'Crafts follow-up based on lead profile and stage' },
      { title: 'Message delivery', desc: 'Sends via WhatsApp or email, matching client\'s preferred channel' },
      { title: 'Response capture', desc: 'Logs reply and updates CRM automatically' },
      { title: 'Escalation trigger', desc: 'Flags hot leads for immediate human follow-up' },
    ],
  },
  moreAgents: {
    eyebrow: 'More agents',
    headline: 'The platform grows with you',
    agents: [
      {
        name: 'Service Agent',
        status: 'Beta',
        desc: 'Handles post-installation requests: maintenance scheduling, monitoring alerts, warranty claims, and technical support tickets, automatically triaged and routed.',
      },
      {
        name: 'Customer Success Agent',
        status: 'Beta',
        desc: 'Manages the ongoing client relationship: annual performance reviews, upsell opportunities (battery storage, expansion), referral requests.',
      },
      {
        name: 'Custom Agents',
        status: 'Enterprise',
        desc: 'Workflow unique to your operation? We build custom agents tailored to your business and integrated with your existing systems.',
      },
    ],
    cta1: 'Contact us',
    cta2: 'Activate my account',
  },
  videoDemo: {
    eyebrow: 'Demo',
    headline: 'See the agents in action',
    subheadline:
      'Watch how the platform handles quoting, follow-up, and service coordination, end to end, in real time.',
    playLabel: 'Play demo',
  },
  caseStudy: {
    eyebrow: 'Success story',
    client: '[Solar Company]',
    result: '[X hours of manual follow-up eliminated / Y% increase in close rate] in [N weeks]',
    cta: 'View full case study',
  },
  security: {
    eyebrow: 'Security',
    headline: 'Your data, protected by design',
    context:
      'Solar companies manage sensitive client information, addresses, energy bills, financing data. Every layer of our infrastructure is designed to keep it safe.',
    pillars: [
      {
        number: '01',
        title: 'End-to-end encryption',
        desc: 'All data in transit and at rest encrypted with AES-256 and TLS 1.3. No plain-text storage, ever.',
      },
      {
        number: '02',
        title: 'RAG on Demand',
        desc: 'Your client data and documents are retrieved only when needed, never stored in shared model memory or exposed to other tenants.',
      },
      {
        number: '03',
        title: 'API abuse protection',
        desc: 'Rate limiting, anomaly detection, and automatic token rotation prevent unauthorized access.',
      },
      {
        number: '04',
        title: 'Tenant isolation',
        desc: 'Every company runs in a fully isolated environment. Your data is never co-mingled with another client\'s.',
      },
    ],
  },
  useCases: {
    eyebrow: 'Use cases',
    headline: 'AI agents that work across every type of solar project',
    intro: 'From a rooftop residential install to a commercial park, the agent adapts to the profile and runs the right process.',
    cases: [
      { type: 'Residential rooftop', detail: 'Lead to quote in under 4 hours, via WhatsApp' },
      { type: 'Commercial SME', detail: 'Multi-option proposal in one business day, via email' },
      { type: 'Industrial / large-scale', detail: 'Technical pre-assessment with supplier outreach, 48h turnaround' },
      { type: 'Government / municipal', detail: 'Formal proposal with ROI report and regulatory notes' },
      { type: 'Agricultural (agrivoltaic)', detail: 'Specialized sizing for dual land use, via field engineer integration' },
      { type: 'Off-grid / rural', detail: 'Remote location assessment, quote with battery storage options' },
      { type: 'EPC projects', detail: 'Multi-phase project breakdown with milestone-based follow-up' },
      { type: 'Hybrid systems (solar + battery)', detail: 'Comparative quote across storage configurations' },
      { type: 'Financing-led leads', detail: 'Agent qualifies credit profile and routes to financing partner' },
      { type: 'Lease / PPA model', detail: 'Contract-type selection and terms explained automatically' },
      { type: 'Maintenance service request', detail: 'Ticket opened, triaged, and scheduled within the hour' },
      { type: 'Warranty / claims', detail: 'Auto-documented and escalated to the right internal team' },
    ],
  },
  integrations: {
    eyebrow: 'Integrations',
    headline: 'Works with what you already use',
    tagline: 'No migrations. No stack changes. Just plug in.',
    bottomCta: 'Using a different tool? Let\'s talk, we integrate with it.',
    categories: [
      { name: 'CRM', tools: ['Salesforce', 'HubSpot', 'Dynamics', 'Pipedrive'] },
      { name: 'Email', tools: ['Gmail', 'Outlook'] },
      { name: 'Messaging', tools: ['WhatsApp Business API'] },
      { name: 'Management', tools: ['Monday.com', 'Asana', 'Jira'] },
      { name: 'Solar design', tools: ['Aurora Solar', 'Helioscope'] },
      { name: 'ERP systems', tools: ['SAP', 'NetSuite', 'Odoo'] },
      { name: 'Import', tools: ['Excel / CSV'] },
      { name: 'Portals', tools: ['Any portal with login access'] },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Everything you need to know',
    questions: [
      {
        q: 'How long does implementation take?',
        a: 'Most companies are fully live within 5–7 business days. No IT team required on your side.',
      },
      {
        q: 'Does this replace my sales team?',
        a: 'No. The agents take over repetitive, manual tasks so your team can focus on closing and building relationships.',
      },
      {
        q: 'What channels does the agent work on?',
        a: 'WhatsApp, email, and web forms natively. Phone integration available on request.',
      },
      {
        q: 'How accurate are the quotes the agent generates?',
        a: '99% accuracy on technical sizing and pricing, with human-in-the-loop checkpoints your team controls before delivery.',
      },
      {
        q: 'Can it handle leads in different states or regions?',
        a: 'Yes. The agent adapts to local utility rates, solar irradiance data, and regional incentives.',
      },
      {
        q: 'What ROI can I expect?',
        a: 'Companies typically see 5–8x ROI within the first 90 days, driven by faster quotes and systematic follow-up recovering leads that would otherwise go cold.',
      },
      {
        q: 'Is my client data secure?',
        a: 'Yes. Enterprise-grade security purpose-built for companies handling sensitive client information. Encrypted at rest and in transit.',
      },
      {
        q: 'Can the agent learn our pricing and product catalog?',
        a: 'Yes. We train the agent on your specific product lines, pricing tiers, and business rules before going live.',
      },
      {
        q: 'Does it work with our current CRM?',
        a: 'Yes. We integrate with Salesforce, HubSpot, Dynamics, Pipedrive, and most others. If you use it, we can connect it.',
      },
      {
        q: 'Can I customize the agent\'s tone and messaging?',
        a: 'Yes. The agent speaks in your company\'s voice, with your branding, and follows your communication guidelines.',
      },
    ],
  },
  contact: {
    meta: 'Contact: Close Energy',
    subtitle: 'Takes 30 seconds. With this info we prepare your activation proposal.',
    sectionCompany: 'YOUR COMPANY',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Business email',
    phone: 'Phone',
    company: 'Company name',
    sectionOperation: 'YOUR OPERATION',
    installTitle: 'What type of installations do you do?',
    installOptions: ['Residential', 'Commercial', 'Industrial'],
    volumeTitle: 'How many projects do you close per month?',
    volumeOptions: ['1 – 5 projects', '6 – 15 projects', '16 – 50 projects', 'More than 50'],
    bottleneckTitle: 'What is your biggest bottleneck today?',
    bottleneckPlaceholder: 'Select an option',
    bottleneckOptions: ['Slow quotes', 'Lead follow-up', 'Service coordination', 'No single customer view'],
    sectionLast: 'ONE LAST THING',
    referralTitle: 'How did you find Close Energy?',
    referralOptions: ['Social media ad', 'Organic content', 'Recommendation', 'AI (ChatGPT, Claude...)', 'Google', 'Other'],
    submit: 'Activate my account',
    successTitle: "You're on the list.",
    successBody: 'We\'ll reach out via email or WhatsApp within 24 hours with your activation proposal.',
  },
  team: {
    eyebrow: 'Our team',
    headline: 'The people and agents behind Close Energy',
    subheadline: 'A human team with product vision and an autonomous AI agent team that operates 24/7.',
    founders: [
      {
        name: 'Iker Viramontes',
        initials: 'IV',
        role: 'Founder & CEO',
        desc: 'Leads the vision and strategy of Close Energy. Building the platform that turns AI adoption into a real commercial advantage for solar companies.',
      },
      {
        name: 'Frida Ruh',
        initials: 'FR',
        role: 'Founder & CTO',
        desc: 'Architect of the AI agent infrastructure. Designs and builds the systems that give solar operations end-to-end autonomy.',
      },
    ],
    autonomousEyebrow: 'Autonomous Team',
    autonomousDesc: 'AI agents operating without pause, no manual instructions, no days off.',
    agents: [
      { name: 'Stanley', role: 'AI Head of Content', desc: 'Creates and distributes product content, updates, and brand messaging across every channel.' },
      { name: 'Elliot', role: 'Scope & Task Agent', desc: 'Manages and prioritizes project tasks, coordinates dependencies, and keeps the team aligned.' },
      { name: 'Nova', role: 'AI Quoting Agent', desc: 'Processes inbound quote requests and generates personalized proposals in minutes.' },
      { name: 'Rex', role: 'AI Follow-up Agent', desc: 'Executes personalized follow-up sequences for every prospect in the pipeline.' },
    ],
  },
  cta: {
    headline: 'Ready to stop losing leads to slow follow-up?',
    subheadline: 'Start today.',
    cta1: 'Contact us',
    cta2: 'Activate my account',
  },
  footer: {
    tagline: 'AI agents for solar sales and operations.',
    product: { title: 'Product', links: ['Platform', 'Agents', 'Security', 'Integrations'] },
    company: { title: 'Company', links: ['Team', 'ROI', 'FAQ', 'Careers'] },
    resources: { title: 'Resources', links: ['Blog', 'Success Stories'] },
    contact: { title: 'Contact', links: ['Get in touch'] },
    legal: '© 2026 Close Energy. All rights reserved.',
  },
}
