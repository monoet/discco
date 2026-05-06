'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'disabled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isDisabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', isDisabled, className = '', children, ...props }, ref) => {
    const baseStyles = `
      font-display text-xs uppercase tracking-widest
      px-5 py-2.5
      transition-colors duration-150
      cursor-pointer
      disabled:cursor-not-allowed
    `;

    const variantStyles: Record<ButtonVariant, string> = {
      primary: `
        bg-[var(--discco-ink)] text-[var(--discco-bone)]
        hover:bg-[var(--discco-charcoal)]
        disabled:bg-[var(--discco-taupe)]
      `,
      secondary: `
        bg-transparent text-[var(--discco-ink)]
        border border-[var(--discco-ink)]
        hover:bg-[var(--discco-ink)] hover:text-[var(--discco-bone)]
        disabled:border-[var(--discco-taupe)] disabled:text-[var(--discco-taupe)]
      `,
      ghost: `
        bg-transparent text-[var(--discco-ink)]
        hover:bg-[var(--discco-line)]
        disabled:text-[var(--discco-taupe)]
      `,
      disabled: `
        bg-[var(--discco-taupe)] text-[var(--discco-bone)]
        cursor-not-allowed
      `,
    };

    // If isDisabled prop is true, force disabled variant style
    const effectiveVariant = isDisabled ? 'disabled' : variant;

    return (
      <button
        ref={ref}
        disabled={isDisabled || props.disabled}
        className={`${baseStyles} ${variantStyles[effectiveVariant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;