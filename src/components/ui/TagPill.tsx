interface TagPillProps {
  label: string;
  className?: string;
}

export default function TagPill({ label, className = '' }: TagPillProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2 py-0.5
        text-[11px] font-body
        border border-[var(--discco-accent-dk)] text-[var(--discco-ink)]
        rounded-sm
        ${className}
      `}
    >
      {label}
    </span>
  );
}
