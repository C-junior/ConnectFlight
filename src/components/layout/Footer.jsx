import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const CURRENT_YEAR = 2026;

export default function Footer({ hideTopLinks = false }) {
  return (
    <footer className="site-footer">
      {/* Figma Top Footer Links & Divider */}
      {!hideTopLinks && (
        <div className="footer-nav-section">
          <div className="footer-divider-line" />
          <nav className="footer-links-nav" aria-label="Navegação secundária do rodapé">
            <NavLink
              to="/destinos"
              className={({ isActive }) => `footer-nav-link ${isActive ? 'active' : ''}`}
            >
              Destinos
            </NavLink>
            <NavLink
              to="/ofertas"
              className={({ isActive }) => `footer-nav-link ${isActive ? 'active' : ''}`}
            >
              Ofertas
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) => `footer-nav-link ${isActive ? 'active' : ''}`}
            >
              Contato
            </NavLink>
          </nav>
        </div>
      )}

      {/* Faithful Figma Wave Background */}
      <div className="footer-wave-container">
        <svg
          className="footer-wave-svg"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Smooth curved wave matching the Figma artboard */}
          <path
            d="M0,75 C240,65 520,40 760,55 C1020,72 1240,110 1440,30 L1440,220 L0,220 Z"
            fill="#3F3D56"
          />
        </svg>

        {/* Footer bottom content embedded in the dark wave */}
        <div className="footer-wave-content">
          <div className="container footer-content-inner">
            <p className="footer-copy">
              © {CURRENT_YEAR} <strong>ConnectFlight</strong>. Todos os direitos reservados.
            </p>
            <p className="footer-subtext">
              Atividade Avaliativa de Programação para WEB II • Docente: Bruno Bandeira Fernandes • Unitins
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
