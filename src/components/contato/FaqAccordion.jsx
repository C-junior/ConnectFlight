import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/faq';
import './FaqAccordion.css';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="faq-section-wrapper">
      <div className="faq-header">
        <HelpCircle size={22} className="faq-title-icon" />
        <h3 className="faq-section-title">Dúvidas Frequentes sobre Nossos Pacotes</h3>
      </div>

      <div className="faq-accordion-list">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`faq-chevron-icon ${isOpen ? 'rotate' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="faq-answer-panel">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
