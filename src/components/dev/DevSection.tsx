import { webShowcases } from '@/data/discco';
import DeviceMockup from './DeviceMockup';

export default function DevSection() {
  return (
    <section id="dev" className="discco-dark-grid relative overflow-hidden bg-[var(--discco-charcoal)] py-[72px] md:py-[112px]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-12">
        {/* Header */}
        <div className="mb-16 grid gap-6 border-y border-[rgba(251,247,239,0.14)] py-7 md:grid-cols-[auto_1fr_auto] md:items-end">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl text-[var(--discco-accent)]">02</span>
            <span className="h-px w-12 bg-[var(--discco-accent)]" />
          </div>
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.22em] text-[var(--discco-taupe)]">
              Interfaces / sistemas / código
            </span>
          <h2
            className="font-display uppercase leading-[0.86] text-[var(--discco-bone)]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            DISCCO.DEV
          </h2>
          </div>
          <p className="max-w-[30ch] font-body text-lg leading-snug text-[var(--discco-taupe)]">
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
                className={`relative grid gap-8 rounded-[5px] border border-[rgba(251,247,239,0.13)] bg-[rgba(251,247,239,0.035)] p-5 md:grid-cols-[minmax(0,0.9fr)_auto] md:items-center md:gap-12 md:p-7 ${isEven ? 'md:grid-cols-[auto_minmax(0,0.9fr)]' : ''}`}
              >
                {/* Text content */}
                <div className={`${isEven ? 'md:order-2' : ''}`}>
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
                    <span className="block h-[3px] w-16 bg-[var(--discco-accent)]" />

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
                          className="inline-flex items-center gap-2 border border-[var(--discco-accent)] bg-[var(--discco-accent)] px-6 py-3 font-display text-xs uppercase tracking-[0.16em] text-[var(--discco-ink)] transition-colors hover:bg-[var(--discco-accent-dk)]"
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
                          className="inline-flex cursor-not-allowed items-center gap-2 border border-[var(--discco-taupe)] bg-transparent px-6 py-3 font-display text-xs uppercase tracking-[0.16em] text-[var(--discco-taupe)] opacity-50"
                        >
                          Demo próximos
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Device Mockup */}
                <div className={`flex flex-shrink-0 justify-center ${isEven ? 'md:order-1' : ''}`}>
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
