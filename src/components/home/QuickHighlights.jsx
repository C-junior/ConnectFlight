import React from 'react';
import { Plane, Building2, Coffee, ShieldCheck } from 'lucide-react';
import './QuickHighlights.css';

const features = [
  {
    icon: Plane,
    title: "Passagens Aéreas",
    description: "Voos nacionais e internacionais com as melhores companhias aéreas do mundo."
  },
  {
    icon: Building2,
    title: "Hotéis & Resorts",
    description: "Hospedagens cuidadosamente avaliadas com excelente localização e conforto."
  },
  {
    icon: Coffee,
    title: "Café da Manhã",
    description: "Comece seus dias de viagem com cafés da manhã completos e deliciosos."
  },
  {
    icon: ShieldCheck,
    title: "Seguro Viagem",
    description: "Assistência médica e suporte integral 24 horas para você viajar com tranquilidade."
  }
];

export default function QuickHighlights() {
  return (
    <section className="quick-highlights-section">
      <div className="container">
        <div className="highlights-grid">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="highlight-card">
                <div className="highlight-icon-box">
                  <Icon size={24} />
                </div>
                <h4 className="highlight-card-title">{item.title}</h4>
                <p className="highlight-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
