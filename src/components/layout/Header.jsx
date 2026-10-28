import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Plane, Menu, X, PhoneCall } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
          <div className="logo-icon-wrap">
            <Plane className="logo-icon" size={22} />
          </div>
          <span className="logo-text">
            Connect<span className="logo-highlight">Flight</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegação principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Início
          </NavLink>
          <NavLink
            to="/destinos"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Destinos
          </NavLink>
          <NavLink
            to="/ofertas"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Ofertas
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contato
          </NavLink>
        </nav>

        {/* Right CTA */}
        <div className="header-actions">
          <Link to="/contato" className="header-cta-btn">
            <PhoneCall size={16} />
            <span>Fale Conosco</span>
          </Link>

          {/* Hamburger toggle for mobile */}
          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Menu móvel">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Início
          </NavLink>
          <NavLink
            to="/destinos"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Destinos
          </NavLink>
          <NavLink
            to="/ofertas"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Ofertas
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contato
          </NavLink>
          <Link
            to="/contato"
            className="mobile-cta-btn"
            onClick={closeMobileMenu}
          >
            Fale Conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}
