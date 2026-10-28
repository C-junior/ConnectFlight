import React from 'react';
import travelSvg from '../../assets/travel-illustration.svg';
import './HeroIllustration.css';

export default function HeroIllustration() {
  return (
    <div className="hero-illustration-container">
      <img
        src={travelSvg}
        alt="ConnectFlight - O seu próximo destino pode estar aqui"
        className="hero-illustration-svg"
      />
    </div>
  );
}
