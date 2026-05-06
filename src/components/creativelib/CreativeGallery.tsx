import { creativeProjects } from '@/data/discco';
import Badge from '@/components/ui/Badge';
import TagPill from '@/components/ui/TagPill';

function BrandedPlaceholder({ title, category }: { title: string; category: string }) {
  return (
    <div className="discco-dark-grid absolute inset-0 flex flex-col justify-between bg-[var(--discco-charcoal)] p-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-[10px] uppercase tracking-[0.18em] text-[var(--discco-accent)]">
          DISCCO! CREATIVO
        </span>
        <span className="text-[var(--discco-pink)]">✦</span>
      </div>
      <span
        className="font-display uppercase text-[var(--discco-bone)] leading-[0.86]"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}
      >
        {title}
      </span>
      <div>
        <div className="mb-3 h-[3px] w-16 bg-[var(--discco-pink)]" />
        <span className="font-body text-xs uppercase tracking-widest text-[var(--discco-taupe)]">
          {category}
        </span>
      </div>
    </div>
  );
}

export default function CreativeGallery() {
  return (
    <section id="creativo" className="discco-section-grid relative overflow-hidden bg-[var(--discco-paper)] py-[72px] md:py-[112px]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-12">
        {/* Header */}
        <div className="mb-12 grid gap-6 border-y border-[var(--discco-line)] py-7 md:grid-cols-[auto_1fr_auto] md:items-end">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl text-[var(--discco-accent-dk)]">01</span>
            <span className="h-px w-12 bg-[var(--discco-accent-dk)]" />
          </div>
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.22em] text-[var(--discco-taupe)]">
              Branding / editorial / visual systems
            </span>
          <h2
            className="font-display uppercase leading-[0.86] text-[var(--discco-ink)]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            DISCCO! CREATIVO
          </h2>
          </div>
          <p className="max-w-[30ch] font-body text-lg leading-snug text-[var(--discco-taupe)]">
            Branding / diseño / dirección visual
          </p>
        </div>

        {/* 12-col grid */}
        <div className="grid grid-cols-12 gap-6">
          {creativeProjects.map((project, i) => {
            const isFeatured = project.featured;
            const isEven = i % 2 === 0;

            return (
              <article
                key={project.id}
                className={`
                  group relative
                  col-span-12 md:col-span-6
                  ${isFeatured ? 'md:col-span-6' : 'md:col-span-3'}
                  ${isEven ? '' : 'md:col-start-8'}
                  bg-[var(--discco-bone)] border border-[var(--discco-line)]
                  rounded-[5px] overflow-hidden
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-[var(--discco-ink)]
                `}
              >
                {/* Image or branded placeholder */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <BrandedPlaceholder title={project.title} category={project.category} />
                  )}

                  {/* Featured badge */}
                  {isFeatured && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="green">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="border-t border-[var(--discco-line)] p-5">
                  {/* Category */}
                  <p className="font-body text-[11px] uppercase tracking-widest text-[var(--discco-taupe)] mb-2">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="font-display uppercase text-[var(--discco-ink)] mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-[var(--discco-taupe)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <TagPill key={tag} label={tag} />
                    ))}
                  </div>
                </div>

                {/* Hot-pink star on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--discco-pink)">
                    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
                  </svg>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
