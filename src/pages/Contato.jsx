import React from 'react';
import ContactForm from '../components/contato/ContactForm';
import ContactInfo from '../components/contato/ContactInfo';
import FaqAccordion from '../components/contato/FaqAccordion';
import './Contato.css';

export default function Contato() {
  return (
    <div className="contato-page animate-fade-in">
      <div className="container">
        {/* Header */}
        <header className="section-header">
          <span className="section-tag">Canais de Atendimento</span>
          <h1 className="section-title">
            Fale com a <span>ConnectFlight</span>
          </h1>
          <p className="section-subtitle">
            Estamos prontos para transformar sua viagem dos sonhos em realidade. Escolha um de nossos canais ou envie sua mensagem abaixo.
          </p>
        </header>

        {/* 2-Columns Grid */}
        <div className="contato-grid">
          <div className="contato-col-info">
            <ContactInfo />
          </div>
          <div className="contato-col-form">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <FaqAccordion />
      </div>
    </div>
  );
}
