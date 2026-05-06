import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--discco-charcoal)] border-t border-[rgba(20,17,15,0.3)] px-6 md:px-12 py-12">
      <div className="max-w-content mx-auto">
        {/* Line 1: DISCCO! */}
        <h2 className="font-display text-4xl md:text-5xl text-[var(--discco-bone)] tracking-wide mb-2">
          DISCCO!
        </h2>

        {/* Line 2: conexión creativa */}
        <p className="text-sm text-[var(--discco-accent)] mb-6">
          conexión creativa
        </p>

        {/* Line 3: Nav links */}
        <nav className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          <a href="#creativo" className="text-sm text-[var(--discco-taupe)] hover:text-[var(--discco-bone)] transition-colors duration-200">Creativo</a>
          <span className="text-[var(--discco-taupe)]">·</span>
          <a href="#dev" className="text-sm text-[var(--discco-taupe)] hover:text-[var(--discco-bone)] transition-colors duration-200">Dev</a>
          <span className="text-[var(--discco-taupe)]">·</span>
          <a href="#records" className="text-sm text-[var(--discco-taupe)] hover:text-[var(--discco-bone)] transition-colors duration-200">Records</a>
          <span className="text-[var(--discco-taupe)]">·</span>
          <a href="#contacto" className="text-sm text-[var(--discco-taupe)] hover:text-[var(--discco-bone)] transition-colors duration-200">Contacto</a>
        </nav>

        {/* Line 4: Location description */}
        <p className="text-sm text-[var(--discco-taupe)] mb-4">
          Diseño, web y música desde Torreón.
        </p>

        {/* Line 5: Copyright */}
        <p className="text-xs text-[var(--discco-taupe)]">
          © {year} DISCCO! — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;