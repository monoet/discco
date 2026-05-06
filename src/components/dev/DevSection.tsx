import { webShowcases } from '@/data/discco';
import DeviceMockup from './DeviceMockup';

export default function DevSection() {
  return (
    <section id="dev" className="bg-[var(--discco-charcoal)] py-[72px] md:py-[112px]">
      <div className="max-w-content mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <h2
            className="font-display uppercase text-[var(--discco-bone)] mb-3"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            DISCCO.DEV
          </h2>
          <p className="font-body text-[var(--discco-taupe)] text-lg">
            Websites / menús digitales / experiencias web
          </p>
        </div>

        {/* Showcase blocks */}
        <div className="flex flex-col gap-16">
          {webShowcases.map((showcase, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={showcase.id}
                className={`flex flex-col gap-8 md:gap-12 md:flex-row md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Text content */}
                <div className="flex-1">
                  <div className="space-y-4">
                    {/* Type label + status badge */}
                    <div className="flex items-center gap-3">
                      <span className="font-body text-[11px] uppercase tracking-widest text-[var(--discco-taupe)]">
                        {showcase.type}
                      </span>
                      <StatusBadge status={showcase.status} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display uppercase text-[var(--discco-bone)]">
                      {showcase.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-[var(--discco-taupe)] leading-relaxed">
                      {showcase.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-1.5">
                      {showcase.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="font-body text-xs text-[var(--discco-taupe)] flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-[var(--discco-pink)] rounded-full flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-4">
                      {showcase.isAvailable && showcase.href ? (
                        <a
                          href={showcase.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest bg-[var(--discco-accent)] text-[var(--discco-ink)] px-6 py-3 rounded-lg hover:bg-[var(--discco-accent-dk)] transition-colors"
                        >
                          Abrir sitio
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      ) : (
                        <button
                          disabled
                          title="Demo próximamente"
                          className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest bg-transparent text-[var(--discco-taupe)] border border-[var(--discco-taupe)] px-6 py-3 rounded-lg opacity-50 cursor-not-allowed"
                        >
                          Demo próximos
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Device Mockup */}
                <div className="flex-shrink-0 flex justify-center">
                  <DeviceMockup
                    device={showcase.device}
                    mockupType={showcase.mockupType}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: 'demo' | 'live' | 'template' }) {
  const styles = {
    demo:     'bg-[rgba(255,255,255,0.08)] text-[var(--discco-taupe)]',
    live:     'bg-[var(--discco-accent)] text-[var(--discco-ink)]',
    template: 'bg-[rgba(184,196,106,0.2)] text-[var(--discco-accent)]',
  };

  return (
    <span className={`font-body text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${styles[status]}`}>
      {status}
    </span>
  );
}
