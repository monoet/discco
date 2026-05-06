# DISCCO! — Implementation Plan
> Umbrella brand website: Creativo · Dev · Records

---

## 0. Brand Spelling Lock (NON-NEGOTIABLE)

This is the only correct spelling. Every instance in source, UI, data, docs, comments, and metadata must match exactly.

| Field | Value |
|-------|-------|
| Umbrella brand | **DISCCO!** |
| Slogan | **conexión creativa** (accent required, never "conexion") |
| Design department | **DISCCO! CREATIVO** |
| Web department | **DISCCO.DEV** |
| Music/audio department | **DISCCO! RECORDS** |

Rules:
- Never write DISCO without the second C.
- Never write "conexion" without accent in any visible UI.
- Only use lowercase `discco` in technical paths, classnames, package names, or URLs when required by convention.
- All department names in nav, hero, footer, data arrays, metadata, and SEO must match exactly.

---

## 1. Concept & Vision

DISCCO! is a unified creative ecosystem that bridges three disciplines: visual branding/design, web development, and music production. The site must feel like one coherent brand with three departments — not three separate websites stitched together. The tone is **editorial, underground-but-professional, music-adjacent, and design-forward**: like an independent record label that also runs a creative studio and a dev shop. Every visitor should immediately understand: "DISCCO! does all of this, and it looks like they actually know what they're doing."

---

## 2. Design Language

### 2.1 Aesthetic Direction
Inspired by editorial poster design, independent music studio identity, and Behance/Adobe Portfolio gallery logic. Bold typography, warm paper backgrounds, black ink text, restrained acid-green accents, occasional hot-pink micro details, subtle print-grain texture.

### 2.2 Color Palette — Single Source of Truth

CSS variables in `globals.css` are the **only** source of truth. Tailwind tokens map to these variables — no duplicate hex values anywhere.

```css
:root {
  --discco-ink:        #14110F;   /* primary text, dark surfaces */
  --discco-paper:      #F4EFE5;   /* main background */
  --discco-bone:       #FBF7EF;   /* card surfaces, elevated elements */
  --discco-charcoal:   #201B18;   /* secondary dark */
  --discco-coffee:     #5A3D2B;   /* warm brown accent */
  --discco-taupe:      #8B7C6F;   /* muted body text, metadata */
  --discco-line:       rgba(20, 17, 15, 0.14);  /* dividers, borders */
  --discco-accent:     #B8C46A;   /* primary accent — acid/olive green */
  --discco-accent-dk:  #7E8A3F;   /* accent hover/dark state */
  --discco-acid:       #D6F94A;   /* loud highlight only */
  --discco-pink:       #E85C9B;   /* micro emphasis only: tags, marks */
}
```

Tailwind `tailwind.config.ts` maps to CSS variables:
```ts
colors: {
  ink:        'var(--discco-ink)',
  paper:      'var(--discco-paper)',
  bone:       'var(--discco-bone)',
  charcoal:   'var(--discco-charcoal)',
  coffee:     'var(--discco-coffee)',
  taupe:      'var(--discco-taupe)',
  accent:     'var(--discco-accent)',
  'accent-dk':'var(--discco-accent-dk)',
  acid:       'var(--discco-acid)',
  pink:       'var(--discco-pink)',
}
```
**Rule**: Add new colors to `globals.css :root` first, then reference `var(--discco-*)` in Tailwind config. Never add raw hex values directly to Tailwind config.

### 2.3 Typography Lock

**Two fonts only, loaded via `next/font/google`:**

| Role | Font | Weight(s) | Usage |
|------|------|-----------|-------|
| Display | `Oswald` | 400, 600, 700 | Headlines, section titles, nav brand, department names, poster text |
| Body | `Inter` | 300, 400, 500, 600 | Paragraphs, buttons, labels, metadata, card copy |

Rules:
- All display headings use **uppercase**
- Oswald italic: **do not use** unless the font actually supports italic variants. Use Oswald regular or medium weight for the slogan.
- Body: `font-weight: 300` for descriptions, `400` for general copy, `500/600` for emphasis
- Line-height: `1.1` for display, `1.55–1.7` for body
- Letter-spacing: `0.04–0.08em` for uppercase display labels
- **No serif fonts**
- **No cozy fonts**
- **No additional fonts**
- **No emojis in UI**

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
- **No page transitions** (MPA with Next.js App Router)
- CSS-only animations, no heavy libraries
- `prefers-reduced-motion` must be respected: all animations wrapped in `@media (prefers-reduced-motion: no-preference)`

### 2.7 Visual Assets

- **Icons**: Inline SVG only, stroke-width 1.8–2, matching ink/taupe color
- **Images**: User-provided URLs only; no stock images committed to repo
- **Placeholder images**: CSS color blocks + strong typography — intentional branded blocks, not "gray boxes" or random stock images
- **Branded placeholder rule**: Use `--discco-charcoal` background + `--discco-accent` typography. Large project title in Oswald uppercase. Category label small in Inter. No gray placeholder boxes.
- **Texture**: Subtle CSS noise/grain via `background-image: url("data:image/svg+xml...")` on hero/paper areas — max 3% opacity
- **No emoji in UI**

---

## 3. Layout & Structure

### 3.1 Global Layout

```
<Header />         — sticky, 64px desktop / 56px mobile
<main>
  <Hero />
  <CreativoSection id="creativo" />
  <DevSection      id="dev" />
  <RecordsSection  id="records" />
  <ContactCTA      id="contacto" />
</main>
<Footer />
```

- **Max content width**: 1120px, centered
- **Mobile horizontal padding**: 20px
- **Desktop horizontal padding**: 48px
- **Section vertical padding**: mobile 72px / desktop 112px
- **Responsive strategy**: Mobile-first; breakpoint at 768px for tablet, 1024px for desktop

### 3.2 Section IDs (exact, locked)

All header nav links scroll to these IDs:
- `#creativo`
- `#dev`
- `#records`
- `#contacto`

### 3.3 Header / Nav

| Element | Mobile | Desktop |
|---------|--------|---------|
| Logo | DISCCO! | DISCCO! |
| Height | 56px | 64px |
| Nav items | Hamburger → dropdown panel | Inline: Creativo · Dev · Records · Contacto |
| Behavior | Sticky top: 0; slide-down panel | Sticky top: 0; border-bottom on scroll |
| Background | `rgba(--discco-paper, 0.95)` + `backdrop-filter: blur(8px)` | Same |
| Mobile menu | Simple dropdown panel, NOT fullscreen | — |
| Hamburger behavior | Closes after clicking any nav item | — |

### 3.4 Hero Layout

**Explicit hierarchy (order matters):**
1. DISCCO! (brand name, largest)
2. conexión creativa (slogan)
3. Diseño, websites y música bajo una misma frecuencia creativa. (headline copy)
4. Three department cards

**Desktop**: Left text block (60%) + stacked 3 department cards (40%), min-height 720px
**Mobile**: Auto min-height (do NOT use 100vh). Vertical stack: brand → slogan → copy → 3 cards. Must not waste vertical space. Department cards should appear in first screen or immediately after intro text.

### 3.5 Responsive Grid

- Mobile: single column, full-width cards
- Tablet (768px+): 2-column grids
- Desktop (1024px+): 3-column or CSS grid with span control

---

## 4. Features & Interactions

### 4.1 Hero Section

**Content:**
- Brand name: `DISCCO!` (52px Oswald uppercase)
- Slogan: `conexión creativa` (accent green, Oswald regular — NOT italic unless font supports it)
- Copy: `Diseño, websites y música bajo una misma frecuencia creativa.`
- Sub-copy: `Creamos identidades, experiencias digitales y producción audiovisual para negocios, artistas y proyectos con personalidad.`

**Layout:**
- Desktop: left text block (60%) + stacked 3 department cards (40%), min-height 720px
- Mobile: DISCCO! → slogan → copy → 3 cards stacked, auto height

**Visual elements:**
- Paper background with subtle grain texture
- Bold acid-green underline under "conexión creativa" (CSS animation on load, 0.6s)
- One hot-pink micro mark (star or dot) as accent
- Department cards with hover lift

**Interactions:**
- Cards lift on hover (`translateY(-3px)`)
- Accent underline on slogan grows on load (CSS animation, 0.6s, `prefers-reduced-motion` respected)
- Hamburger closes mobile menu on nav item click

### 4.2 DISCCO! CREATIVO Section

**Content:**
- Section title: `DISCCO! CREATIVO` (Oswald uppercase, 48px desktop / 36px mobile)
- Section ID: `id="creativo"`
- Subtitle (Inter, muted taupe)
- Gallery of 5 portfolio cards

**Layout:**
- Responsive grid:
  - Mobile: 1 column
  - Tablet (768px+): 2 columns
  - Desktop (1024px+): 12-column CSS grid
  - Featured project: spans 6 columns (half the grid)
  - Standard project: spans 3 or 4 columns

**CreativeProjectCard:**
- **Branded placeholder** (when no image): `--discco-charcoal` background + large project title (Oswald) + category label (Inter small, taupe) + abstract typographic composition. NOT gray box.
- Title (Oswald, bold, uppercase)
- Category label (small, uppercase, taupe)
- Description (Inter, muted)
- Tags as small pills (green border, ink text)
- Featured badge (accent green background) for cards with `featured: true`
- Hover: `translateY(-3px)` + shadow + left green border appears

**Interactions:**
- Card hover: lift + green left-border slide-in
- Tag pills: no interaction (informational only)

### 4.3 DISCCO.DEV Section

**Content:**
- Section title: `DISCCO.DEV` (Oswald uppercase)
- Section ID: `id="dev"`
- Subtitle
- Dark editorial hero panel (charcoal background)
- 4 website showcase blocks

**Layout:**
- Desktop: alternating left/right (mockup ↔ copy) per showcase
- Mobile: mockup image top, copy below

**DeviceMockup — Must Not Be Empty Generic Frames**

The mockup renders specific internal UI based on showcase type:

**Phone frame (CSS, 375px wide) for mobile demos:**
- Shows mini version of the actual layout

**Browser frame (CSS) for desktop demos:**
- Shows mini version of the actual layout

Internal placeholder screens by showcase type:

For **Menú Digital**:
- Mini hero image block
- Five tiny category tabs
- Three menu rows
- Right-aligned prices
- Button area

For **Landing Express**:
- Hero title block
- Service cards (2-col)
- CTA button

For **Catálogo Privado**:
- Product grid (2-col thumbnail)
- Product card thumbnails
- Price labels
- Assisted order CTA

For **Brand Hub / Portfolio**:
- Section cards
- Portfolio grid preview
- Nav/sidebar hint

CSS-only frames — no actual screenshot assets required. Internal content uses CSS color blocks + typography, matching DISCCO! brand palette.

**WebShowcase — Button Logic (corrected):**

```typescript
// Data shape:
interface WebShowcase {
  id: string;
  title: string;
  type: string;
  description: string;
  device: 'mobile' | 'desktop' | 'both';
  status: 'demo' | 'live' | 'template';
  href?: string;        // undefined or string
  isAvailable: boolean;  // true = live/demo accessible
  bullets: string[];
}
```

Button rendering logic:
- `href` exists AND `isAvailable === true`: button shows "Abrir sitio", links to `href`
- `href` missing OR `isAvailable === false`: button shows "Demo próximamente", visually disabled (muted style, `aria-disabled`, no functional href)
- Never use `href="#"` for unavailable demos
- Never use live-looking buttons that go nowhere

**Interactions:**
- Showcase cards: subtle lift on hover
- CTA button: dark → darker on hover, accent underline appears

### 4.4 DISCCO! RECORDS Section

**Content:**
- Section title: `DISCCO! RECORDS` (Oswald uppercase)
- Section ID: `id="records"`
- Subtitle
- Dark editorial hero panel (charcoal/ink background)
- Audio player mock (visual only)
- Services grid
- About/history block
- Testimonials

**Layout:**
- Dark panel: full-width dark background with texture
- Player: dark card, centered, max-width 640px
- Services: **Mobile: 2 columns / Tablet: 3 columns / Desktop: 4 columns** (NOT 7-col)
- About: single column, generous whitespace
- Testimonials: mobile stacked, desktop 3-col grid

**RecordsPlayer — Visual Only, No Real Audio:**

```tsx
// Play button toggles VISUAL STATE ONLY.
// It must not pretend to play real audio.
// Use appropriate aria-label so this is clear.

<button
  aria-label="Vista previa visual del reproductor"
  aria-pressed={isPlaying}
  onClick={() => setIsPlaying(!isPlaying)}
>
// ...
</button>

// Add small label indicating demo state:
// "Player demo" — shown in small text under the player card,
// or visually implied, but NOT misleading about audio capability.
```

**Mock tracks (no real audio):**
```
Track 1 — Mono Mono: Demo Reel        [Producción / Mezcla]
Track 2 — Discco Sessions: Live Room   [Grabación / Sesión]
Track 3 — Podcast Cut: Voice Polish   [Podcast / Postproducción]
```

**Service cards:**
- Icon (inline SVG) + label
- Surface: dark charcoal
- Hover: subtle green border glow

**Testimonials:**
- Quote text (Inter, 16px)
- Attribution (small, taupe)
- Card: warm bone surface, thin border

### 4.5 Contact CTA Section

**Content:**
- Section ID: `id="contacto"`
- Headline: `¿Armamos algo para tu proyecto?`
- Sub-copy
- Two buttons: Primary (WhatsApp) + Secondary (Ver servicios — scrolls to #creativo)

**Layout:**
- Centered, generous vertical padding
- Dark surface card with paper text

**WhatsApp button — Environment Variable Logic:**

```typescript
const waNumber = process.env.NEXT_PUBLIC_WA_NUM;
const waHref =
  waNumber && waNumber !== "TODO_NUMERO"
    ? `https://wa.me/${waNumber}`
    : "#";
```

- Button always visually available
- If `waHref === "#"` (TODO state): button is visually normal but `aria-disabled`, no `href` set, title attribute explains `title="WhatsApp no configurado todavía"`
- Code comment: `// TODO: Replace NEXT_PUBLIC_WA_NUM in .env.local with real WhatsApp number including country code (no + or 00)`
- Label: "Escribir por WhatsApp"
- Icon: WhatsApp SVG

### 4.6 Footer

```
DISCCO!            — logo text
conexión creativa  — slogan (accent green)
Creativo · Dev · Records · Contacto — inline nav links
Diseño, web y música desde Torreón. — location
© 2025 DISCCO! — Todos los derechos reservados.
```

Footer links scroll to same section IDs as header.

---

## 5. Component Inventory

| Component | States | Notes |
|-----------|--------|-------|
| `Header` | default, scrolled (border appears) | Sticky top: 0, 64px desktop / 56px mobile |
| `MobileMenu` | open, closed | Slide-down panel, NOT fullscreen. Hamburger closes on nav click. Keyboard accessible. |
| `Hero` | default | Two layout variants: mobile / desktop |
| `DepartmentCard` | default, hover | One per department, used in Hero |
| `SectionIntro` | — | Title + subtitle wrapper, reusable |
| `CreativeGallery` | — | Grid container for project cards |
| `CreativeProjectCard` | default, hover, featured | Tag pills, optional image OR branded placeholder, featured badge |
| `DevSection` | — | Wrapper for all dev showcase blocks |
| `WebShowcase` | default, hover | Alternating layout, corrected button logic |
| `DeviceMockup` | phone, browser | CSS-only frames with specific internal UI per showcase type. NOT empty. |
| `RecordsPlayer` | default, playing (UI only) | Mock player, no real audio. aria-label explains visual-only. |
| `ServiceCard` | default, hover | Dark surface, icon + label. Services grid: 2/3/4 col responsive. |
| `TestimonialCard` | default | Quote + attribution |
| `ContactCTA` | — | Primary + secondary button |
| `Footer` | — | |
| `Button` | primary, secondary, ghost, disabled | Reusable button component |
| `Badge` | green, pink, neutral | For status/tags |
| `TagPill` | — | Small informational pill |

---

## 6. Data Files

### 6.1 `src/data/discco.ts`

```typescript
// Departments (header nav + hero cards)
export const departments = [
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
]

// Creative portfolio projects
export const creativeProjects = [
  {
    id: 'discco-coffee',
    title: 'Discco Coffee',
    category: 'Branding / Menú digital',
    description: 'Identidad demo para una cafetería ficticia con menú digital mobile-first.',
    tags: ['Branding', 'Menú', 'Café'],
    image: undefined, // Replace with real image URL when available
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
    status: 'template',
    href: undefined,
    isAvailable: false,
    bullets: ['Secciones por rama', 'Galería de trabajo', 'Diseño editorial', 'Contacto claro'],
  },
]

// Records studio services
export const recordServices = [
  { id: 'grabacion',    label: 'Grabación',            icon: 'mic' },
  { id: 'mezcla',       label: 'Mezcla',               icon: 'sliders' },
  { id: 'mastering',    label: 'Mastering',            icon: 'wand' },
  { id: 'produccion',   label: 'Producción musical',   icon: 'music' },
  { id: 'podcast',      label: 'Podcast',               icon: 'mic-2' },
  { id: 'audio-video',  label: 'Audio para video',      icon: 'video' },
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
├── .env.local.example        # NEXT_PUBLIC_WA_NUM=TODO_NUMERO
├── package.json
├── tsconfig.json              # strict: true
├── tailwind.config.ts        # DISCCO! theme, maps to CSS vars
├── postcss.config.mjs
├── next.config.ts
├── docs/
│   └── impl-plan.md           # This document
└── src/
    ├── app/
    │   ├── layout.tsx         # Root layout: fonts, metadata, global styles
    │   ├── page.tsx           # Homepage (all sections composed here)
    │   └── globals.css         # CSS resets, CSS variables (:root), base styles
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

### Tech Stack Lock (exact)

| Layer | Choice |
|-------|--------|
| Next.js | Latest stable (App Router, `src/` directory) |
| TypeScript | Strict mode (`strict: true` in tsconfig) |
| Tailwind CSS | **v3.x** (NOT v4) — classic `tailwind.config.ts` workflow |
| CSS theming | CSS variables in `globals.css :root` as single source of truth |
| Tailwind config | Maps to CSS variables via `var(--discco-*)`, NOT raw hex |
| Fonts | `next/font/google` — Oswald + Inter |
| Animations | CSS-only, no framer-motion, no animation libraries |
| UI components | No shadcn unless explicitly needed |
| Icons | Inline SVG only |

**Tailwind v4 note**: If Tailwind v4 is installed by default, convert to v3 workflow:
- Use `tailwind.config.ts` as theme source of truth
- Do NOT use `@theme` in `globals.css` as the primary token system
- Ensure CSS variables and Tailwind config stay in sync

### Key Technical Decisions

1. **CSS-first theming**: CSS variables in `globals.css :root` are the only source of truth for color/spacing tokens. Tailwind `tailwind.config.ts` references them via `var(--discco-*)`. This prevents palette drift.
2. **No heavy dependencies**: No animation libraries, no masonry, no carousel libraries — all UI is CSS-only
3. **Static data**: All content in `src/data/discco.ts` — replace arrays with real content as needed
4. **Client components**: Only `Header` (scroll state), `MobileMenu`, and `RecordsPlayer` (playing state) are `'use client'`. Everything else is a Server Component.
5. **next/image**: Used when real images are added; `remotePatterns` configured for Unsplash and any CMS domain
6. **SEO**: Metadata API in `layout.tsx`; OpenGraph set

### Tailwind Theme Extensions

```ts
// tailwind.config.ts — DISCCO! palette, maps to CSS variables
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:        'var(--discco-ink)',
        paper:      'var(--discco-paper)',
        bone:       'var(--discco-bone)',
        charcoal:   'var(--discco-charcoal)',
        coffee:     'var(--discco-coffee)',
        taupe:      'var(--discco-taupe)',
        accent:     'var(--discco-accent)',
        'accent-dk':'var(--discco-accent-dk)',
        acid:       'var(--discco-acid)',
        pink:       'var(--discco-pink)',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: { 'content': '1120px' },
      spacing:  { 'section-mobile': '72px', 'section-desktop': '112px' },
    },
  },
  plugins: [],
}

export default config
```

### Environment Variables

```bash
# .env.local.example
NEXT_PUBLIC_WA_NUM=TODO_NUMERO   # Replace with real WhatsApp number including country code, no + or 00
```

---

## 9. Accessibility Acceptance Criteria

- [ ] All buttons and links have visible `:focus-visible` styles
- [ ] Mobile menu traps focus within menu when open, or at minimum preserves keyboard access (Escape closes)
- [ ] Decorative SVGs have `aria-hidden="true"`
- [ ] Icon-only buttons have `aria-label`
- [ ] RecordsPlayer has `aria-label="Vista previa visual del reproductor"` and does not claim to play real audio
- [ ] Color contrast verified: accent green (`#B8C46A`) on paper (`#F4EFE5`) passes WCAG AA for large text; verify for small text
- [ ] All CSS animations respect `prefers-reduced-motion: reduce` via `@media (prefers-reduced-motion: no-preference)` wrapper

---

## 10. Not in Scope (Yet)

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

## 11. Milestones

| # | Milestone | Deliverable |
|---|-----------|-------------|
| 1 | Project scaffold + data file | Next.js running, data file in src |
| 2 | Global layout: Header + Footer | Nav working mobile/desktop, section IDs correct |
| 3 | Hero section | Department cards with hover, correct brand spelling throughout |
| 4 | DISCCO! CREATIVO section | Gallery with project cards, branded placeholders, correct column spans |
| 5 | DISCCO.DEV section | Showcase blocks + device mockups with correct internal UI, corrected button logic |
| 6 | DISCCO! RECORDS section | Player mock (visual-only), services 2/3/4-col grid, testimonials |
| 7 | Contact CTA + Footer polish | WhatsApp env var logic, final section |
| 8 | SEO metadata + OG | OpenGraph, favicon, meta, correct brand spelling in metadata |
| 9 | QA verify + Vercel deploy | Production URL live |

---

## 12. Final Verification Commands

Run these after build, before considering the project done:

```bash
# 1. Lint
npm run lint

# 2. TypeScript check
npm run typecheck

# 3. Production build
npm run build

# 4. Brand spelling checks (should return ZERO matches for the wrong spellings)
grep -r "DISCO!" . --exclude-dir=node_modules --exclude-dir=.next
grep -r "DISCO\." . --exclude-dir=node_modules --exclude-dir=.next
grep -r "disco\!" . --exclude-dir=node_modules --exclude-dir=.next
grep -r "conexion creativa" . --exclude-dir=node_modules --exclude-dir=.next

# 5. Positive brand check (should find correct instances in src and docs)
grep -r "DISCCO!" src/ docs/
grep -r "conexión creativa" src/ docs/
grep -r "DISCCO.DEV" src/ docs/
grep -r "DISCCO! CREATIVO" src/ docs/
grep -r "DISCCO! RECORDS" src/ docs/
```

All checks must pass. Zero tolerance for DISCO!/DISCO. typos in visible or source code.

---

## 13. Acceptance Criteria — Complete List

- [ ] No visible or source copy says DISCO! instead of DISCCO!
- [ ] No visible UI says "conexion" without accent
- [ ] Department names exactly match: DISCCO! CREATIVO / DISCCO.DEV / DISCCO! RECORDS
- [ ] Section IDs exactly: #creativo, #dev, #records, #contacto
- [ ] Header: 64px desktop / 56px mobile, sticky top: 0
- [ ] Hero mobile: auto min-height, NOT 100vh
- [ ] Hero desktop: min-height ~720px
- [ ] CSS variable system in globals.css is the single source of truth
- [ ] Tailwind config maps to CSS variables, not raw hex
- [ ] Device mockups are NOT empty generic frames — each renders specific internal UI per showcase type
- [ ] WebShowcase buttons: unavailable demos are disabled with correct label, not `href="#"`
- [ ] RecordsPlayer is clearly visual-only (aria-label states this), does not claim to play real audio
- [ ] Services grid: mobile 2 columns, tablet 3, desktop 4 (NOT 7-col)
- [ ] Oswald 400/600/700 for display (no italic unless font supports it)
- [ ] Inter 300/400/500/600 for body
- [ ] No serif fonts, no cozy fonts, no extra fonts, no emojis in UI
- [ ] Mobile menu closes after clicking a nav item
- [ ] `prefers-reduced-motion` respected in all animations
- [ ] All interactive elements have visible focus states
- [ ] Build (`npm run build`) passes without errors
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] Grep checks for DISCO!/DISCO. typos return zero results
- [ ] Grep checks for "conexion creativa" (missing accent) return zero results
- [ ] Correct brand spelling confirmed in: visible UI, data arrays, component comments, SEO metadata, footer
