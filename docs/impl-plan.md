# DISCCO! — Implementation Plan
> Umbrella brand website: Creativo · Dev · Records

---

## 1. Concept & Vision

DISCCO! is a unified creative ecosystem that bridges three disciplines: visual branding/design, web development, and music production. The site must feel like one coherent brand with three departments — not three separate websites stitched together. The tone is **editorial, underground-but-professional, music-adjacent, and design-forward**: like an independent record label that also runs a creative studio and a dev shop. Every visitor should immediately understand: "DISCCO! does all of this, and it looks like they actually know what they're doing."

Slogan: **conexión creativa** (Spanish, exact accent required everywhere in UI).

---

## 2. Design Language

### 2.1 Aesthetic Direction
Inspired by editorial poster design, independent music studio identity, and Behance/Adobe Portfolio gallery logic. Bold typography, warm paper backgrounds, black ink text, restrained acid-green accents, occasional hot-pink micro details, subtle print-grain texture.

### 2.2 Color Palette (CSS Variables)

```css
:root {
  --discco-ink:        #14110F;   /* primary text, dark surfaces */
  --discco-paper:     #F4EFE5;   /* main background */
  --discco-bone:      #FBF7EF;   /* card surfaces, elevated elements */
  --discco-charcoal:  #201B18;   /* secondary dark */
  --discco-coffee:    #5A3D2B;   /* warm brown accent */
  --discco-taupe:     #8B7C6F;   /* muted body text, metadata */
  --discco-line:      rgba(20, 17, 15, 0.14);  /* dividers, borders */
  --discco-accent:    #B8C46A;   /* primary accent — acid/olive green */
  --discco-accent-dk: #7E8A3F;   /* accent hover/dark state */
  --discco-acid:      #D6F94A;   /* loud highlight only */
  --discco-pink:      #E85C9B;   /* micro emphasis only: tags, marks */
}
```

### 2.3 Typography

**Two fonts only, loaded via `next/font/google`:**

| Role        | Font       | Weight(s)  | Usage                                      |
|-------------|------------|------------|--------------------------------------------|
| Display     | `Oswald`   | 400, 600   | Headlines, section titles, nav brand, department names, poster text |
| Body        | `Inter`    | 300, 400, 500, 600 | Paragraphs, buttons, labels, metadata, card copy |

- All display headings use **uppercase**
- Body: `font-weight: 300` for descriptions, `400` for general copy, `500/600` for emphasis
- Line-height: `1.1` for display, `1.55–1.7` for body
- Letter-spacing: `0.04–0.08em` for uppercase display labels

### 2.4 Spacing System (4pt base)

```
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 112px
```

### 2.5 Radii

```
4px  — badges, small pills
8px  — cards, buttons
12px — modals, large cards
16px — hero panels
```

### 2.6 Motion Philosophy

- **Hover lift**: `transform: translateY(-2px)` + shadow deepening on cards
- **Opacity transitions**: `0.18s ease` for links, icons, overlays
- **Underline expand**: accent line grows from 0 → 100% width on nav hover/active
- **No scroll-triggered animations** for now
- **No page transitions** ( MPA with Next.js App Router)
- CSS-only animations, no heavy libraries

### 2.7 Visual Assets

- **Icons**: Inline SVG only, stroke-width 1.8–2, matching ink/taupe color
- **Images**: User-provided URLs only; no stock images committed to repo
- **Placeholder images**: CSS color blocks + strong typography — intentional branded blocks, not "gray boxes"
- **Texture**: Subtle CSS noise/grain via `background-image: url("data:image/svg+xml...")` on hero/paper areas — max 3% opacity
- **No emoji in UI**

---

## 3. Layout & Structure

### 3.1 Global Layout

```
<Header />        — sticky, 64px tall, paper background
<main>
  <Hero />
  <CreativoSection />
  <DevSection />
  <RecordsSection />
  <ContactCTA />
</main>
<Footer />
```

- **Max content width**: 1120px, centered
- **Mobile horizontal padding**: 20px
- **Desktop horizontal padding**: 48px
- **Section vertical padding**: mobile 72px / desktop 112px
- **Responsive strategy**: Mobile-first; breakpoint at 768px for tablet, 1024px for desktop

### 3.2 Header / Nav

| Element    | Mobile          | Desktop                     |
|------------|-----------------|----------------------------|
| Logo       | DISCO!          | DISCO!                     |
| Nav items  | Hamburger menu  | Inline: Creativo · Dev · Records · Contacto |
| Behavior   | Slide-down menu | Sticky, border-bottom on scroll |

### 3.3 Responsive Grid

- Mobile: single column, full-width cards
- Tablet (768px+): 2-column grids
- Desktop (1024px+): 3-column or masonry-like with CSS grid spans

---

## 4. Features & Interactions

### 4.1 Hero Section

**Content:**
- Brand name: `DISCO!` (52px Oswald uppercase)
- Slogan: `conexión creativa` (accent green, italic Oswald)
- Copy: `Diseño, websites y música bajo una misma frecuencia creativa.`
- Sub-copy: `Creamos identidades, experiencias digitales y producción audiovisual para negocios, artistas y proyectos con personalidad.`

**Layout:**
- Desktop: left text block (60%) + stacked 3 department cards (40%)
- Mobile: DISCO! headline → slogan → copy → 3 cards stacked

**Visual elements:**
- Paper background with subtle grain texture
- Bold brush-stroke/acid-green underline under "conexión creativa"
- One hot-pink micro mark (star or dot) as accent
- Department cards with hover lift

**Interactions:**
- Cards lift on hover (`translateY(-3px)`)
- Accent underline on slogan grows on load (CSS animation, 0.6s)

### 4.2 DISCO! CREATIVO Section

**Content:**
- Section title: `DISCO! CREATIVO` (Oswald uppercase, 48px desktop / 36px mobile)
- Subtitle (Inter, muted)
- Gallery of 5 portfolio cards

**Layout:**
- Responsive grid: mobile 1 col, tablet 2 col, desktop 3 col with featured card spanning 2 cols

**Cards (`CreativeProjectCard`):**
- CSS gradient placeholder OR `<img>` if `image` provided
- Title (Oswald, bold)
- Category label (small, uppercase, taupe)
- Description (Inter, muted)
- Tags as small pills (green border, ink text)
- Featured badge (accent green background) for cards with `featured: true`
- Hover: `translateY(-3px)` + shadow + left green border appears

**Interactions:**
- Card hover: lift + green left-border slide-in
- Tag pills: no interaction (informational only)

### 4.3 DISCO.DEV Section

**Content:**
- Section title: `DISCO.DEV` (Oswald uppercase)
- Subtitle
- Dark editorial hero panel (coffee/charcoal background)
- 4 website showcase blocks

**Layout:**
- Desktop: alternating left/right (mockup ↔ copy) per showcase
- Mobile: mockup image top, copy below

**DeviceMockup component:**
- Phone frame (CSS, 375px wide for mobile mockups)
- Browser frame (CSS, for desktop mockups)
- No actual screenshot assets required; uses CSS placeholder if no image

**Showcase blocks (`WebShowcase`):**
- DeviceMockup (phone or browser CSS frame)
- Copy: title, type label, description, bullet list
- CTA button: "Ver demo" / "Abrir sitio" / "Demo próximamente" (muted if `#`)
- Status badge: `demo` / `live` / `template`

**Interactions:**
- Showcase cards: subtle lift on hover
- CTA button: dark → darker on hover, accent underline appears

### 4.4 DISCO! RECORDS Section

**Content:**
- Section title: `DISCO! RECORDS` (Oswald uppercase)
- Subtitle
- Dark editorial hero panel (charcoal/ink background)
- Audio player mock
- Services grid
- About/history block
- Testimonials

**Layout:**
- Dark panel: full-width dark background with texture
- Player: dark card, centered, max-width 640px
- Services: 4-col grid mobile / 7-col desktop (icons + labels)
- About: single column, generous whitespace
- Testimonials: 3-col grid mobile stacked

**RecordsPlayer component:**
- Dark surface card
- CSS waveform (animated bars, muted taupe)
- Play/pause button (SVG)
- Track list: 3 mock tracks with title, type, duration placeholder
- Service tags per track

**Mock tracks (no real audio):**
```
Track 1 — Mono Mono: Demo Reel        [Producción / Mezcla]
Track 2 — Discco Sessions: Live Room [Grabación / Sesión]
Track 3 — Podcast Cut: Voice Polish   [Podcast / Postproducción]
```

**Service cards:**
- Icon (inline SVG) + label
- Surface: dark charcoal
- Hover: subtle green border glow

**Testimonials:**
- Quote text (Inter italic, 16px)
- Attribution (small, taupe)
- Card: warm bone surface, thin border

### 4.5 Contact CTA Section

**Content:**
- Headline: `¿Armamos algo para tu proyecto?`
- Sub-copy
- Two buttons: Primary (WhatsApp) + Secondary (Ver servicios)

**Layout:**
- Centered, generous vertical padding
- Dark surface card with paper text

**WhatsApp button:**
- `href="https://wa.me/TODO_NUMERO"`
- Label: "Escribir por WhatsApp"
- Icon: WhatsApp SVG
- NOTE in code: `// TODO: Replace TODO_NUMERO with real WhatsApp number`

### 4.6 Footer

- DISCO! logo + slogan
- Inline nav links: Creativo · Dev · Records · Contacto
- Location tag: `Diseño, web y música desde Torreón.`
- Copyright: `© 2025 DISCO! — Todos los derechos reservados.`

---

## 5. Component Inventory

| Component          | States                                   | Notes |
|--------------------|------------------------------------------|-------|
| `Header`           | default, scrolled (border appears)       | Sticky, mobile hamburger |
| `MobileMenu`        | open, closed                             | Slide-down, full overlay |
| `Hero`              | default                                  | Two layout variants: mobile / desktop |
| `DepartmentCard`    | default, hover                           | One per department, used in Hero |
| `SectionIntro`      | —                                        | Title + subtitle wrapper, reusable |
| `CreativeGallery`   | —                                        | Grid container for project cards |
| `CreativeProjectCard` | default, hover, featured               | Tag pills, optional image, featured badge |
| `WebShowcase`       | default, hover                           | Alternating layout |
| `DeviceMockup`      | phone, browser                           | CSS-only frames, no assets |
| `RecordsPlayer`     | default, playing (UI only)                | Mock player, no real audio |
| `ServiceCard`       | default, hover                           | Dark surface, icon + label |
| `TestimonialCard`   | default                                  | Quote + attribution |
| `ContactCTA`        | —                                        | Primary + secondary button |
| `Footer`            | —                                        | |
| `Button`            | primary, secondary, ghost, disabled      | Reusable button component |
| `Badge`             | green, pink, neutral                     | For status/tags |
| `TagPill`           | —                                        | Small informational pill |

---

## 6. Data Files

### 6.1 `src/data/discco.ts`

```typescript
// Departments (header nav + hero cards)
export const departments = [
  {
    id: 'creativo',
    name: 'DISCO! CREATIVO',
    tagline: 'Branding / diseño / dirección visual',
    href: '#creativo',
  },
  {
    id: 'dev',
    name: 'DISCO.DEV',
    tagline: 'Websites / menús digitales / experiencias web',
    href: '#dev',
  },
  {
    id: 'records',
    name: 'DISCO! RECORDS',
    tagline: 'Estudio / música / audio / producción',
    href: '#records',
  },
]

// Creative portfolio projects
export const creativeProjects = [
  {
    id: 'discco-coffee',
    title: 'Discco Coffee',
    category: 'Branding / Menú digital',
    description: 'Identidad demo para una cafetería ficticia con menú digital mobile-first.',
    tags: ['Branding', 'Menú', 'Café'],
    image: undefined, // Replace with real image URL
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
]

// Web showcase / demo items
export const webShowcases = [
  {
    id: 'menu-digital',
    title: 'Menú Digital para Restaurantes',
    type: 'Mobile-first menu',
    description: 'Una carta digital clara para cafés, restaurantes y food trucks. Optimizada para celular.',
    device: 'mobile',
    status: 'demo',
    href: '#',
    bullets: ['Categorías visibles', 'Fotos de productos', 'Precios claros', 'Experiencia mobile-first'],
  },
  {
    id: 'landing-express',
    title: 'Landing Express',
    type: 'Website para negocio local',
    description: 'Página rápida para explicar qué haces, mostrar servicios y mandar clientes a WhatsApp.',
    device: 'both',
    status: 'template',
    href: '#',
    bullets: ['Hero claro', 'Servicios', 'Testimonios', 'CTA directo'],
  },
  {
    id: 'catalogo-privado',
    title: 'Catálogo Privado',
    type: 'Storefront simple',
    description: 'Catálogo privado para enseñar productos, tomar pedidos y validar ventas sin complicar el sistema.',
    device: 'both',
    status: 'demo',
    href: '#',
    bullets: ['Productos', 'Galería', 'Pedido asistido', 'Preparado para crecer'],
  },
  {
    id: 'portfolio-brand-hub',
    title: 'Portfolio / Brand Hub',
    type: 'Sitio de marca',
    description: 'Sitio principal para organizar proyectos, mostrar trabajo y construir presencia digital.',
    device: 'desktop',
    status: 'template',
    href: '#',
    bullets: ['Secciones por rama', 'Galería de trabajo', 'Diseño editorial', 'Contacto claro'],
  },
]

// Records studio services
export const recordServices = [
  { id: 'grabacion',    label: 'Grabación',        icon: 'mic' },
  { id: 'mezcla',       label: 'Mezcla',            icon: 'sliders' },
  { id: 'mastering',    label: 'Mastering',         icon: 'wand' },
  { id: 'produccion',   label: 'Producción musical',icon: 'music' },
  { id: 'podcast',      label: 'Podcast',           icon: 'mic-2' },
  { id: 'audio-video',  label: 'Audio para video',  icon: 'video' },
  { id: 'diseno',       label: 'Diseño para artistas', icon: 'pen' },
]

// Testimonials
export const testimonials = [
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
]

// Mock audio tracks (no real audio files)
export const tracks = [
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
]
```

---

## 7. File Structure

```
discco/
├── .gitignore
├── .env.local.example        # Vercel env vars template
├── package.json
├── tsconfig.json
├── tailwind.config.ts        # Full DISCO! theme with custom colors/fonts
├── postcss.config.mjs
├── next.config.ts
├── docs/
│   └── impl-plan.md           # This document
└── src/
    ├── app/
    │   ├── layout.tsx        # Root layout: fonts, metadata, global styles
    │   ├── page.tsx          # Homepage (all sections composed here)
    │   └── globals.css        # CSS resets, CSS variables, base styles
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── MobileMenu.tsx
    │   │   └── Footer.tsx
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Badge.tsx
    │   │   └── TagPill.tsx
    │   ├── home/
    │   │   ├── Hero.tsx
    │   │   ├── DepartmentCard.tsx
    │   │   └── SectionIntro.tsx
    │   ├── creativelib/
    │   │   ├── CreativeGallery.tsx
    │   │   └── CreativeProjectCard.tsx
    │   ├── dev/
    │   │   ├── DevSection.tsx
    │   │   ├── WebShowcase.tsx
    │   │   └── DeviceMockup.tsx
    │   ├── records/
    │   │   ├── RecordsSection.tsx
    │   │   ├── RecordsPlayer.tsx
    │   │   ├── ServiceCard.tsx
    │   │   └── TestimonialCard.tsx
    │   └── contact/
    │       └── ContactCTA.tsx
    └── data/
        └── discco.ts          # All local content arrays
```

---

## 8. Technical Approach

### Stack
- **Next.js 15** with App Router (`src/` directory)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** with custom theme
- **next/font/google** for Oswald + Inter
- **No backend, no CMS, no DB, no auth, no payments**
- **Vercel-ready**: zero config, just push to GitHub and connect

### Key Technical Decisions

1. **CSS-first styling**: Tailwind for utility classes; custom CSS variables for the color palette (mapped to Tailwind theme tokens)
2. **No heavy dependencies**: No animation libraries, no masonry, no carousel libraries — all UI is CSS-only
3. **Static data**: All content in `src/data/discco.ts` — Mono replaces arrays with real content
4. **No client components unless needed**: Most sections are Server Components; only `Header` (scroll state), `MobileMenu`, and `RecordsPlayer` (playing state) are `'use client'`
5. **next/image**: Used when real images are added; `remotePatterns` configured for Unsplash and any CMS domain
6. **SEO**: Metadata API in `layout.tsx`; OpenGraph set
7. **Accessibility**: Semantic HTML throughout; `aria-label` on icon-only buttons; keyboard nav for mobile menu; focus-visible styles

### Tailwind Theme Extensions

```ts
// tailwind.config.ts — extend theme with DISCO! palette
theme: {
  extend: {
    colors: {
      ink:        '#14110F',
      paper:      '#F4EFE5',
      bone:       '#FBF7EF',
      charcoal:   '#201B18',
      coffee:     '#5A3D2B',
      taupe:      '#8B7C6F',
      accent:     '#B8C46A',
      'accent-dk':'#7E8A3F',
      acid:       '#D6F94A',
      pink:       '#E85C9B',
    },
    fontFamily: {
      display: ['var(--font-oswald)', 'sans-serif'],
      body:    ['var(--font-inter)', 'sans-serif'],
    },
    maxWidth: { 'content': '1120px' },
    spacing:  { 'section-mobile': '72px', 'section-desktop': '112px' },
  }
}
```

### Environment Variables

```
# .env.local.example
NEXT_PUBLIC_WA_NUM=TODO_NUMERO   # Replace before deploy
```

---

## 9. Not in Scope (Yet)

- Pricing tables
- Booking / reservation system
- CMS integration
- Blog / news section
- Multilingual support
- Email signup / newsletter
- Shopping cart / checkout
- Admin panel
- Real audio streaming
- User accounts / auth

---

## 10. Milestones

| # | Milestone                          | Deliverable                        |
|---|------------------------------------|------------------------------------|
| 1 | Project scaffold + data file       | Next.js running, data file in src  |
| 2 | Global layout: Header + Footer      | Nav working mobile/desktop         |
| 3 | Hero section                       | Department cards with hover        |
| 4 | DISCO! CREATIVO section            | Gallery with project cards         |
| 5 | DISCO.DEV section                  | Showcase blocks + device mockups   |
| 6 | DISCO! RECORDS section             | Player mock, services, testimonials|
| 7 | Contact CTA + Footer polish         | Final section + footer            |
| 8 | SEO metadata + OG                  | OpenGraph, favicon, meta           |
| 9 | Build verify + Vercel deploy       | Production URL live                |

---

## 11. Acceptance Criteria

- [ ] `conexión creativa` visible and correctly accented everywhere
- [ ] Three departments clearly presented: CREATIVO / DEV / RECORDS
- [ ] Oswald for display, Inter for body — no other fonts
- [ ] Palette matches `--discco-*` CSS variable system
- [ ] DISCO! CREATIVO gallery renders 5 project cards from data
- [ ] DISCO.DEV showcases render with CSS device mockups
- [ ] DISCO! RECORDS player mock renders 3 tracks (no real audio required)
- [ ] Contact CTA WhatsApp button has `TODO_NUMERO` placeholder with visible code comment
- [ ] Mobile: hamburger menu works, all sections stacked correctly
- [ ] Desktop: editorial multi-column layout preserved
- [ ] No generic blue gradients, no bubbly illustrations, no emoji in UI
- [ ] All content driven by `src/data/discco.ts` arrays
- [ ] Builds with `npm run build` without errors
- [ ] Deploys cleanly on Vercel
