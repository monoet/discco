import { creativeProjects } from '@/data/discco';
import Badge from '@/components/ui/Badge';
import TagPill from '@/components/ui/TagPill';

function BrandedPlaceholder({ title, category }: { title: string; category: string }) {
  return (
    <div className="absolute inset-0 bg-[var(--discco-charcoal)] flex flex-col items-center justify-center p-6 text-center">
      {/* Large typographic composition */}
      <span
        className="font-display uppercase text-[var(--discco-bone)] leading-none mb-3"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
      >
        {title}
      </span>
      <span className="font-body text-xs uppercase tracking-widest text-[var(--discco-taupe)]">
        {category}
      </span>
      {/* Decorative accent line */}
      <div className="mt-4 w-12 h-[2px] bg-[var(--discco-accent)]" />
    </div>
  );
}

export default function CreativeGallery() {
  return (
    <section id="creativo" className="bg-[var(--discco-paper)] py-[72px] md:py-[112px]">
      <div className="max-w-content mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-display uppercase text-[var(--discco-ink)] mb-3"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            DISCCO! CREATIVO
          </h2>
          <p className="font-body text-[var(--discco-taupe)] text-lg">
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
                  rounded-lg overflow-hidden
                  transition-all duration-200
                  hover:-translate-y-1 hover:shadow-lg
                  hover:border-l-4 hover:border-l-[var(--discco-accent)]
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
                <div className="p-5">
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
