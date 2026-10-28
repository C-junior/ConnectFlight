import React, { useState, useEffect } from 'react';
import { Flame, Timer } from 'lucide-react';
import './OfferBanner.css';

export default function OfferBanner() {
  // Simple countdown simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="offer-banner-box">
      <div className="offer-banner-content">
        <div className="offer-banner-tag">
          <Flame size={16} /> Promoção por Tempo Limitado!
        </div>
        <h2 className="offer-banner-title">
          Pacotes Completos com até <span>40% de Desconto</span>
        </h2>
        <p className="offer-banner-desc">
          Passagens aéreas + Hotel + Café da manhã + Seguro viagem com condições imperdíveis de pagamento em até 10x sem juros!
        </p>
      </div>

      <div className="offer-countdown-wrap">
        <div className="countdown-header">
          <Timer size={16} />
          <span>A oferta encerra em:</span>
        </div>
        <div className="countdown-blocks">
          <div className="time-block">
            <span className="time-val">{formatNumber(timeLeft.hours)}</span>
            <span className="time-label">Horas</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-block">
            <span className="time-val">{formatNumber(timeLeft.minutes)}</span>
            <span className="time-label">Min</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-block">
            <span className="time-val">{formatNumber(timeLeft.seconds)}</span>
            <span className="time-label">Seg</span>
          </div>
        </div>
      </div>
    </div>
  );
}
