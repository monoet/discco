import { recordServices, testimonials } from '@/data/discco';
import RecordsPlayer from './RecordsPlayer';
import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';

export default function RecordsSection() {
  return (
    <section id="records" className="discco-dark-grid relative overflow-hidden bg-[var(--discco-charcoal)]">
      {/* Grain texture overlay — darker */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-20 mx-auto max-w-[1400px] px-5 py-[72px] md:px-12 md:py-[112px]">
        {/* Title + subtitle */}
        <div className="mb-16 grid gap-6 border-y border-[rgba(251,247,239,0.14)] py-7 md:grid-cols-[auto_1fr_auto] md:items-end">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl text-[var(--discco-pink)]">03</span>
            <span className="h-px w-12 bg-[var(--discco-pink)]" />
          </div>
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.22em] text-[var(--discco-taupe)]">
              Audio / canciones / identidad sonora
            </span>
          <h2
            className="font-display uppercase leading-[0.86] text-[var(--discco-bone)]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            DISCCO! RECORDS
          </h2>
          </div>
          <p className="max-w-[30ch] font-body text-lg leading-snug text-[var(--discco-taupe)]">
            Estudio / música / audio / producción
          </p>
        </div>

        {/* Player */}
        <div className="relative mx-auto max-w-[760px]">
          <span aria-hidden="true" className="absolute -right-4 -top-4 hidden h-16 w-8 rotate-[-24deg] bg-[rgba(251,247,239,0.22)] md:block" />
          <RecordsPlayer />
        </div>

        {/* Services grid: 2/3/4 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {recordServices.map((service) => (
            <ServiceCard key={service.id} label={service.label} icon={service.icon} />
          ))}
        </div>

        {/* About block */}
        <div className="mb-16 max-w-2xl border-l border-[var(--discco-pink)] pl-5">
          <h3 className="mb-4 font-display text-xl uppercase text-[var(--discco-bone)]">
            Sobre el estudio
          </h3>
          <p className="font-body text-[var(--discco-bone)] leading-relaxed opacity-80">
            Estudio de producción musical y audio profesional. Grabación, mezcla, mastering y diseño sonoro para artistas, podcasts y proyectos audiovisuales. Trabajamos con artistas independientes, marcas y creadores que buscan un sonido distintivo.
          </p>
        </div>

        {/* Testimonials: 3-col grid */}
        <div>
          <h3 className="mb-6 font-display text-xl uppercase text-[var(--discco-bone)]">
            Lo que dicen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} quote={t.quote} author={t.author} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
