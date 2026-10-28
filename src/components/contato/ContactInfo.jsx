import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactInfo.css';

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp de Vendas",
    value: "(63) 99234-5678",
    subtitle: "Atendimento rápido todos os dias",
    action: "https://wa.me/5563992345678",
    actionLabel: "Conversar no WhatsApp"
  },
  {
    icon: Phone,
    title: "Central 0800",
    value: "0800 700 8090",
    subtitle: "Ligação gratuita para todo o Brasil",
    action: "tel:08007008090",
    actionLabel: "Ligar Agora"
  },
  {
    icon: Mail,
    title: "E-mail de Suporte",
    value: "contato@connectflight.com.br",
    subtitle: "Retorno em até 2 horas úteis",
    action: "mailto:contato@connectflight.com.br",
    actionLabel: "Enviar E-mail"
  },
  {
    icon: MapPin,
    title: "Sede ConnectFlight",
    value: "Palmas, Tocantins",
    subtitle: "Av. Teotônio Segurado, Sala 402 - Plano Diretor",
    action: "#",
    actionLabel: "Ver no Mapa"
  }
];

export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-cards-grid">
        {contactCards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="contact-info-item">
              <div className="contact-info-icon-box">
                <Icon size={22} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-title">{item.title}</span>
                <span className="contact-info-value">{item.value}</span>
                <span className="contact-info-subtitle">{item.subtitle}</span>
                <a
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  {item.actionLabel} →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operating Hours Box */}
      <div className="operating-hours-box">
        <Clock size={20} className="hours-icon" />
        <div>
          <strong>Horário de Atendimento da Agência:</strong>
          <p>Segunda a Sexta: 08h às 20h • Sábados: 09h às 16h (Plantão WhatsApp 24h)</p>
        </div>
      </div>
    </div>
  );
}
