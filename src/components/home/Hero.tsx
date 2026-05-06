import { departments } from '@/data/discco';

export default function Hero() {
  return (
    <section className="relative bg-[var(--discco-paper)] overflow-hidden">
      {/* Grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-20 max-w-content mx-auto px-5 md:px-12 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: Text block */}
          <div className="col-span-12 md:col-span-7">
            {/* Brand name */}
            <h1
              className="font-display uppercase leading-[0.9] text-[var(--discco-ink)] mb-6"
              style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
            >
              DISCCO!
            </h1>

            {/* Slogan + animated underline */}
            <div className="mb-6">
              <span
                className="font-display uppercase text-[var(--discco-accent)] relative inline-block"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                conexión creativa
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-6px] left-0 h-[3px] w-full bg-[var(--discco-acid)] origin-left"
                />
              </span>
            </div>

            {/* Headline copy */}
            <p
              className="font-body text-[var(--discco-ink)] mb-4 leading-relaxed"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', maxWidth: '36ch' }}
            >
              Diseño, websites y música bajo una misma frecuencia creativa.
            </p>

            {/* Sub-copy */}
            <p
              className="font-body text-[var(--discco-taupe)] leading-relaxed"
              style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)', maxWidth: '44ch' }}
            >
              Creamos identidades, experiencias digitales y producción audiovisual para negocios, artistas y proyectos con personalidad.
            </p>

            {/* Hot-pink micro accent — small star SVG */}
            <div className="mt-8" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--discco-pink)">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
              </svg>
            </div>
          </div>

          {/* Right: Department cards */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            {departments.map((dept) => (
              <a
                key={dept.id}
                href={dept.href}
                className="group block bg-[var(--discco-bone)] border border-[var(--discco-line)] rounded-lg p-5 transition-all duration-200 hover:translate-y-[-3px] hover:shadow-lg hover:border-l-4 hover:border-l-[var(--discco-accent)]"
              >
                <h2
                  className="font-display uppercase text-[var(--discco-ink)] mb-1 transition-colors duration-200"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                >
                  {dept.name}
                </h2>
                <p className="font-body text-xs text-[var(--discco-taupe)]">
                  {dept.tagline}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
