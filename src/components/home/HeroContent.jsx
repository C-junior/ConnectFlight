import React from 'react';
import './HeroContent.css';

export default function HeroContent() {
  return (
    <div className="hero-content-wrapper">
      {/* Figma Main Heading: "O seu próximo destino pode estar aqui..." */}
      <h1 className="hero-title">
        <span className="title-regular">O seu próximo </span>
        <span className="highlight-destino">destino</span>
        <span className="title-regular"> pode estar aqui...</span>
      </h1>

      {/* Figma Subtext Lines */}
      <div className="hero-text-blocks">
        <p className="hero-lead-text">
          Aqui você encontra uma seleção de <strong className="bold-text">pacotes completos</strong> para as suas férias!
        </p>

        <p className="hero-description-text">
          No <strong className="bold-text">ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais
          que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com{' '}
          <strong className="bold-text">preços arrasadores!</strong>
        </p>

        <p className="hero-cta-hint">
          Se você ainda não tem um destino definido, confira nossa seção de ofertas.
        </p>
      </div>
    </div>
  );
}
