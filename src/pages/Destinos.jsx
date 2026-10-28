import React, { useState, useMemo } from 'react';
import { destinationsData } from '../data/destinations';
import DestinationCard from '../components/destinos/DestinationCard';
import DestinationFilter from '../components/destinos/DestinationFilter';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { Check, Calendar, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Destinos.css';

export default function Destinos() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDest, setActiveModalDest] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Filter destinations
  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((dest) => {
      const matchesCategory =
        selectedCategory === 'todos' || dest.category === selectedCategory;
      const matchesSearch =
        dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.stateOrCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenModal = (destination) => {
    setActiveModalDest(destination);
    setBookingSuccess(false);
  };

  const handleCloseModal = () => {
    setActiveModalDest(null);
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
    <div className="destinos-page animate-fade-in">
      <div className="container">
        {/* Header */}
        <header className="section-header">
          <span className="section-tag">Explore o Mundo</span>
          <h1 className="section-title">
            Destinos <span>Incríveis</span>
          </h1>
          <p className="section-subtitle">
            Selecione entre os melhores destinos nacionais e internacionais com roteiros completos preparados para você relaxar.
          </p>
        </header>

        {/* Filter & Search */}
        <DestinationFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Results Count */}
        <div className="results-count-bar">
          <span>
            Exibindo <strong>{filteredDestinations.length}</strong> {filteredDestinations.length === 1 ? 'destino encontrado' : 'destinos encontrados'}
          </span>
          {(selectedCategory !== 'todos' || searchQuery) && (
            <button
              className="reset-filters-btn"
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="destinations-grid">
            {filteredDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={handleOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="empty-destinations">
            <p className="empty-title">Nenhum destino encontrado para sua busca.</p>
            <p className="empty-subtitle">
              Tente pesquisar com outros termos ou selecione a categoria "Todos os Destinos".
            </p>
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
            >
              Ver todos os destinos
            </Button>
          </div>
        )}
      </div>

      {/* Package Detail Modal */}
      {activeModalDest && (
        <Modal
          isOpen={!!activeModalDest}
          onClose={handleCloseModal}
          title={`Detalhes do Pacote: ${activeModalDest.title}`}
        >
          <div className="modal-dest-details">
            <div className="modal-dest-img-wrap">
              <img src={activeModalDest.image} alt={activeModalDest.title} />
              <div className="modal-dest-floating-price">
                <span>Por apenas</span>
                <strong>{activeModalDest.price}</strong>
              </div>
            </div>

            <div className="modal-dest-info">
              <div className="modal-meta-row">
                <span className="modal-meta-item">
                  <MapPin size={16} /> {activeModalDest.stateOrCountry}
                </span>
                <span className="modal-meta-item">
                  <Calendar size={16} /> {activeModalDest.days}
                </span>
              </div>

              <p className="modal-dest-desc">{activeModalDest.description}</p>

              <div className="modal-inclusions-box">
                <h4 className="modal-inclusions-title">
                  <Sparkles size={16} /> O que este pacote inclui:
                </h4>
                <ul className="modal-inclusions-list">
                  {activeModalDest.inclusions.map((inc, i) => (
                    <li key={i}>
                      <Check size={16} className="modal-check-icon" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {bookingSuccess ? (
                <div className="booking-success-message">
                  <Check size={24} />
                  <span>Solicitação enviada com sucesso! Nossa equipe entrará em contato.</span>
                </div>
              ) : (
                <div className="modal-actions-row">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={handleSimulateReservation}
                    className="modal-reserve-btn"
                  >
                    Quero Reservar Este Pacote
                  </Button>
                  <Link to="/contato" onClick={handleCloseModal}>
                    <Button variant="ghost" size="lg" icon={PhoneCall}>
                      Tirar Dúvidas
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
