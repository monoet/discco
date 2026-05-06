// DISCCO! — All content arrays
// Single source of truth for all copy, labels, and project data.
// No hard-coded strings in components — reference from here.

export type DepartmentId = 'creativo' | 'dev' | 'records';

export interface Department {
  id: DepartmentId;
  name: string;
  tagline: string;
  href: string;
}

export const departments: Department[] = [
  {
    id: 'creativo',
    name: 'DISCCO! CREATIVO',
    tagline: 'Branding / diseño / dirección visual',
    href: '#creativo',
  },
  {
    id: 'dev',
    name: 'DISCCO.DEV',
    tagline: 'Websites / menús digitales / experiencias web',
    href: '#dev',
  },
  {
    id: 'records',
    name: 'DISCCO! RECORDS',
    tagline: 'Estudio / música / audio / producción',
    href: '#records',
  },
];

export interface CreativeProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string; // Replace with real image URL when available
  featured: boolean;
}

export const creativeProjects: CreativeProject[] = [
  {
    id: 'discco-coffee',
    title: 'Discco Coffee',
    category: 'Branding / Menú digital',
    description: 'Identidad demo para una cafetería ficticia con menú digital mobile-first.',
    tags: ['Branding', 'Menú', 'Café'],
    image: undefined,
    featured: true,
  },
  {
    id: 'menu-digital',
    title: 'Menú Digital',
    category: 'Diseño comercial',
    description: 'Sistema visual para presentar cartas digitales de restaurantes y cafeterías.',
    tags: ['Restaurantes', 'QR', 'Web'],
    image: undefined,
    featured: false,
  },
  {
    id: 'discco-records-ads',
    title: 'Discco Records Ads',
    category: 'Campaña social',
    description: 'Piezas editoriales para promocionar servicios creativos y de audio.',
    tags: ['Social', 'Ads', 'Editorial'],
    image: undefined,
    featured: false,
  },
  {
    id: 'landing-express',
    title: 'Landing Express',
    category: 'Identidad web',
    description: 'Dirección visual para sitios rápidos de negocios locales.',
    tags: ['Pymes', 'Landing', 'Brand'],
    image: undefined,
    featured: false,
  },
  {
    id: 'artist-press-kit',
    title: 'Artist Press Kit',
    category: 'Música / identidad',
    description: 'Diseño de press kits, portadas y materiales para artistas.',
    tags: ['Música', 'EPK', 'Artistas'],
    image: undefined,
    featured: false,
  },
];

export type MockupType = 'menu-digital' | 'landing' | 'catalogo' | 'brand-hub';
export type DeviceType = 'mobile' | 'desktop' | 'both';
export type ShowcaseStatus = 'demo' | 'live' | 'template';

export interface WebShowcase {
  id: string;
  title: string;
  type: string;
  description: string;
  device: DeviceType;
  mockupType: MockupType;
  status: ShowcaseStatus;
  href?: string;
  isAvailable: boolean;
  bullets: string[];
}

export const webShowcases: WebShowcase[] = [
  {
    id: 'menu-digital',
    title: 'Menú Digital para Restaurantes',
    type: 'Mobile-first menu',
    description: 'Una carta digital clara para cafés, restaurantes y food trucks. Optimizada para celular.',
    device: 'mobile',
    mockupType: 'menu-digital',
    status: 'demo',
    href: undefined,
    isAvailable: false,
    bullets: ['Categorías visibles', 'Fotos de productos', 'Precios claros', 'Experiencia mobile-first'],
  },
  {
    id: 'landing-express',
    title: 'Landing Express',
    type: 'Website para negocio local',
    description: 'Página rápida para explicar qué haces, mostrar servicios y mandar clientes a WhatsApp.',
    device: 'both',
    mockupType: 'landing',
    status: 'template',
    href: undefined,
    isAvailable: false,
    bullets: ['Hero claro', 'Servicios', 'Testimonios', 'CTA directo'],
  },
  {
    id: 'catalogo-privado',
    title: 'Catálogo Privado',
    type: 'Storefront simple',
    description: 'Catálogo privado para enseñar productos, tomar pedidos y validar ventas sin complicar el sistema.',
    device: 'both',
    mockupType: 'catalogo',
    status: 'demo',
    href: undefined,
    isAvailable: false,
    bullets: ['Productos', 'Galería', 'Pedido asistido', 'Preparado para crecer'],
  },
  {
    id: 'portfolio-brand-hub',
    title: 'Portfolio / Brand Hub',
    type: 'Sitio de marca',
    description: 'Sitio principal para organizar proyectos, mostrar trabajo y construir presencia digital.',
    device: 'desktop',
    mockupType: 'brand-hub',
    status: 'template',
    href: undefined,
    isAvailable: false,
    bullets: ['Secciones por rama', 'Galería de trabajo', 'Diseño editorial', 'Contacto claro'],
  },
];

export interface RecordService {
  id: string;
  label: string;
  icon: 'mic' | 'sliders' | 'wand' | 'music' | 'mic-2' | 'video' | 'pen';
}

export const recordServices: RecordService[] = [
  { id: 'grabacion',    label: 'Grabación',           icon: 'mic' },
  { id: 'mezcla',       label: 'Mezcla',               icon: 'sliders' },
  { id: 'mastering',    label: 'Mastering',            icon: 'wand' },
  { id: 'produccion',   label: 'Producción musical',  icon: 'music' },
  { id: 'podcast',      label: 'Podcast',              icon: 'mic-2' },
  { id: 'audio-video',  label: 'Audio para video',    icon: 'video' },
  { id: 'diseno',       label: 'Diseño para artistas', icon: 'pen' },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'El proceso fue claro desde el inicio y el resultado sonó mucho más profesional.',
    author: 'Cliente — Proyecto musical',
  },
  {
    id: 't2',
    quote: 'Nos ayudaron a aterrizar la idea visual y sonora del proyecto.',
    author: 'Artista independiente',
  },
  {
    id: 't3',
    quote: 'La sesión fue rápida, cómoda y el material quedó listo para publicar.',
    author: 'Productor / Podcaster',
  },
];

export interface Track {
  id: string;
  title: string;
  type: string;
  duration: string;
}

export const tracks: Track[] = [
  {
    id: 't1',
    title: 'Mono Mono — Demo Reel',
    type: 'Producción / Mezcla',
    duration: '3:42',
  },
  {
    id: 't2',
    title: 'Discco Sessions — Live Room',
    type: 'Grabación / Sesión',
    duration: '4:17',
  },
  {
    id: 't3',
    title: 'Podcast Cut — Voice Polish',
    type: 'Podcast / Postproducción',
    duration: '1:58',
  },
];
