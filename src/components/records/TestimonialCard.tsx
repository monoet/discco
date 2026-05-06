interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-[var(--discco-bone)] border border-[var(--discco-line)] rounded-lg p-6">
      {/* Quote mark */}
      <div className="text-[var(--discco-accent)] mb-3" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 7H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l-1 4h4l1-4V9a2 2 0 0 0-2-2zm8 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2l-1 4h4l1-4V9a2 2 0 0 0-2-2z" />
        </svg>
      </div>
      <blockquote>
        <p className="font-body text-[var(--discco-ink)] text-base leading-relaxed">
          {quote}
        </p>
        <footer className="mt-3 font-body text-xs text-[var(--discco-taupe)]">
          {author}
        </footer>
      </blockquote>
    </div>
  );
}
