'use client';

import { useEffect, useRef } from 'react';
import { departments } from '@/data/discco';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
        hamburgerRef.current?.focus();
      }
    };

    // Delay to avoid closing immediately when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Focus first menu item when opened
  useEffect(() => {
    if (isOpen) {
      const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]');
      firstLink?.focus();
    }
  }, [isOpen]);

  const handleNavClick = () => {
    onClose();
    hamburgerRef.current?.focus();
  };

  return (
    <div
      ref={menuRef}
      aria-hidden={!isOpen}
      className={`
        absolute top-full inset-x-0 z-50
        bg-[var(--discco-bone)]
        border border-[var(--discco-line)]
        shadow-[0_4px_24px_rgba(20,17,15,0.08)]
        transition-all duration-200 ease-out
        ${isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
        }
      `}
    >
      <nav
        role="navigation"
        aria-label="Menú de navegación"
        className="px-4 py-5"
      >
        <ul className="space-y-1">
          {departments.map((dept) => (
            <li key={dept.id}>
              <a
                href={dept.href}
                onClick={handleNavClick}
                className="block py-3 px-3 rounded-sm hover:bg-[var(--discco-paper)] transition-colors"
              >
                <span
                  className="font-display text-xs uppercase tracking-[0.15em] text-[var(--discco-ink)] block"
                  style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
                >
                  {dept.name}
                </span>
                <span
                  className="font-sans text-[11px] text-[var(--discco-taupe)] mt-0.5 block"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                >
                  {dept.tagline}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="block py-3 px-3 rounded-sm hover:bg-[var(--discco-paper)] transition-colors"
            >
              <span
                className="font-display text-xs uppercase tracking-[0.15em] text-[var(--discco-ink)] block"
                style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}
              >
                Contacto
              </span>
              <span
                className="font-sans text-[11px] text-[var(--discco-taupe)] mt-0.5 block"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              >
                Hablemos de tu proyecto
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}