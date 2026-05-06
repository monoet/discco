import { recordServices, testimonials } from '@/data/discco';
import RecordsPlayer from './RecordsPlayer';
import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';

export default function RecordsSection() {
  return (
    <section id="records" className="relative bg-[var(--discco-charcoal)] overflow-hidden">
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

      <div className="relative z-20 max-w-content mx-auto px-5 md:px-12 py-[72px] md:py-[112px]">
        {/* Title + subtitle */}
        <div className="mb-16">
          <h2
            className="font-display uppercase text-[var(--discco-bone)] mb-3"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            DISCCO! RECORDS
          </h2>
          <p className="font-body text-[var(--discco-taupe)] text-lg">
            Estudio / música / audio / producción
          </p>
        </div>

        {/* Player */}
        <RecordsPlayer />

        {/* Services grid: 2/3/4 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {recordServices.map((service) => (
            <ServiceCard key={service.id} label={service.label} icon={service.icon} />
          ))}
        </div>

        {/* About block */}
        <div className="mb-16 max-w-2xl">
          <h3 className="font-display uppercase text-[var(--discco-bone)] text-xl mb-4">
            Sobre el estudio
          </h3>
          <p className="font-body text-[var(--discco-bone)] leading-relaxed opacity-80">
            Estudio de producción musical y audio profesional. Grabación, mezcla, mastering y diseño sonoro para artistas, podcasts y proyectos audiovisuales. Trabajamos con artistas independientes, marcas y creadores que buscan un sonido distintivo.
          </p>
        </div>

        {/* Testimonials: 3-col grid */}
        <div>
          <h3 className="font-display uppercase text-[var(--discco-bone)] text-xl mb-6">
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
