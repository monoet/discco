interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[5px] border border-[rgba(251,247,239,0.16)] bg-[rgba(251,247,239,0.92)] p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, var(--discco-ink) 1px, transparent 1px), linear-gradient(0deg, var(--discco-ink) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />
      {/* Quote mark */}
      <div className="relative z-10 mb-3 text-[var(--discco-pink)]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 7H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l-1 4h4l1-4V9a2 2 0 0 0-2-2zm8 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l-1 4h4l1-4V9a2 2 0 0 0-2-2z" />
        </svg>
      </div>
      <blockquote className="relative z-10">
        <p className="font-body text-[var(--discco-ink)] text-base leading-relaxed">
          {quote}
        </p>
        <footer className="mt-4 border-t border-[var(--discco-line)] pt-3 font-display text-xs uppercase tracking-[0.16em] text-[var(--discco-taupe)]">
          {author}
        </footer>
      </blockquote>
    </div>
  );
}
