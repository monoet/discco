'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'pink' | 'neutral';
  className?: string;
}

export default function Badge({
  children,
  variant = 'neutral',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center border px-2 py-0.5 text-xs font-body rounded-sm';

  const variantStyles = {
    green:  'bg-[var(--discco-accent)] text-[var(--discco-ink)] border-[var(--discco-accent)]',
    pink:   'bg-[var(--discco-pink)] text-white border-[var(--discco-pink)]',
    neutral:'bg-[var(--discco-line)] text-[var(--discco-ink)] border-transparent',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
