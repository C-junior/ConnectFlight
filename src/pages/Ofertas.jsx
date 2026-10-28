import React, { useState } from 'react';
import { offersData } from '../data/offers';
import OfferCard from '../components/ofertas/OfferCard';
import OfferBanner from '../components/ofertas/OfferBanner';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { Check, PhoneCall, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Ofertas.css';

export default function Ofertas() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleOpenModal = (offer) => {
    setSelectedOffer(offer);
    setBookingSuccess(false);
  };

  const handleCloseModal = () => {
    setSelectedOffer(null);
    setBookingSuccess(false);
  };

  const handleSimulateReservation = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      handleCloseModal();
    }, 2800);
  };

  return (
    <div className="ofertas-page animate-fade-in">
      <div className="container">
        {/* Page Header */}
        <header className="section-header">
          <span className="section-tag">Preços Arrasadores</span>
          <h1 className="section-title">
            Ofertas <span>Exclusivas</span>
          </h1>
          <p className="section-subtitle">
            Pacotes de viagens completos que reúnem voos, estadia de alto padrão, café da manhã e seguro com as melhores tarifas do mercado.
          </p>
        </header>

        {/* Promotional Banner */}
        <OfferBanner />

        {/* Offers Grid */}
        <div className="offers-grid">
          {offersData.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onSelect={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Offer Detail / Reservation Modal */}
      {selectedOffer && (
        <Modal
          isOpen={!!selectedOffer}
          onClose={handleCloseModal}
          title={`Garantir Oferta: ${selectedOffer.title}`}
        >
          <div className="modal-offer-details">
            <div className="modal-offer-hero">
              <img src={selectedOffer.image} alt={selectedOffer.title} />
              <div className="modal-offer-badge-float">{selectedOffer.discountBadge}</div>
            </div>

            <div className="modal-offer-info">
              <h4 className="modal-offer-name">{selectedOffer.title}</h4>
              <p className="modal-offer-dest">{selectedOffer.destination}</p>
              <p className="modal-offer-desc">{selectedOffer.description}</p>

              <div className="modal-offer-price-highlight">
                <span className="old-price">De {selectedOffer.originalPrice}</span>
                <span className="promotional-price">Por apenas {selectedOffer.promotionalPrice}</span>
                <span className="installments-tag">
                  <CreditCard size={14} /> {selectedOffer.installments}
                </span>
              </div>

              <div className="modal-inclusions-list-box">
                <h5>O que está garantido no seu pacote:</h5>
                <ul>
                  {selectedOffer.inclusions.map((inc, i) => (
                    <li key={i}>
                      <Check size={16} className="modal-check-green" />
                      <span>{inc.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {bookingSuccess ? (
                <div className="booking-success-message">
                  <Check size={24} />
                  <span>Oferta reservada com sucesso! Você receberá os dados por e-mail em instantes.</span>
                </div>
              ) : (
                <div className="modal-actions-row">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={handleSimulateReservation}
                    className="modal-reserve-btn"
                  >
                    Confirmar Reserva Promocional
                  </Button>
                  <Link to="/contato" onClick={handleCloseModal}>
                    <Button variant="ghost" size="lg" icon={PhoneCall}>
                      Falar com Consultor
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
