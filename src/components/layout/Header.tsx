'use client';

import { useState, useEffect, useRef } from 'react';
import { departments } from '@/data/discco';
import MobileMenu from './MobileMenu';

const navLabels = {
  creativo: 'CREATIVO',
  dev: 'DEV',
  records: 'RECORDS',
} as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 border-b border-[var(--discco-line)] transition-colors duration-200
          h-14 md:h-16
          bg-[color-mix(in_srgb,var(--discco-paper)_96%,transparent)]
          backdrop-blur-[8px]
          ${isScrolled ? 'shadow-[0_1px_0_rgba(20,17,15,0.05)]' : ''}
        `}
      >
        <div className="max-w-content mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl md:text-2xl tracking-[0.02em] text-[var(--discco-ink)]"
          >
            DISCCO!
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {departments.map((dept) => (
              <a
                key={dept.id}
                href={dept.href}
                className="group relative font-display text-xs uppercase tracking-[0.18em] text-[var(--discco-ink)] transition-colors hover:text-[var(--discco-accent-dk)]"
              >
                {navLabels[dept.id]}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--discco-pink)] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contacto"
              className="group relative font-display text-xs uppercase tracking-[0.18em] text-[var(--discco-ink)] transition-colors hover:text-[var(--discco-accent-dk)]"
            >
              CONTACTO
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--discco-pink)] transition-all duration-200 group-hover:w-full" />
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
            className="md:hidden p-2 -mr-2 text-[var(--discco-ink)]"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </div>
    </>
  );
}
