import React from 'react';
import { Star, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import './DestinationCard.css';

export default function DestinationCard({ destination, onSelect }) {
  return (
    <div className="destination-card">
      {/* Image container */}
      <div className="dest-image-wrap">
        <img
          src={destination.image}
          alt={destination.title}
          className="dest-image"
          loading="lazy"
        />
        <div className="dest-badge-days">
          <Calendar size={13} />
          <span>{destination.days}</span>
        </div>
        {destination.featured && (
          <div className="dest-badge-featured">
            Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="dest-content">
        <div className="dest-location-rating">
          <span className="dest-location">
            <MapPin size={14} className="dest-loc-icon" />
            {destination.stateOrCountry}
          </span>
          <span className="dest-rating">
            <Star size={14} className="star-icon" />
            <strong>{destination.rating.toFixed(1)}</strong>
            <span className="reviews">({destination.reviewsCount})</span>
          </span>
        </div>

        <h3 className="dest-title">{destination.title}</h3>
        <p className="dest-desc">{destination.description}</p>

        {/* Perks mini list */}
        <div className="dest-inclusions-preview">
          {destination.inclusions.slice(0, 3).map((inc, i) => (
            <span key={i} className="dest-inc-tag">
              <CheckCircle2 size={12} className="check-icon" />
              {inc}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="dest-footer">
          <div className="dest-price-box">
            <span className="dest-price-label">A partir de</span>
            <div className="dest-price-values">
              <span className="dest-old-price">{destination.oldPrice}</span>
              <span className="dest-current-price">{destination.price}</span>
            </div>
          </div>
          <Button
            variant="outline-accent"
            size="sm"
            onClick={() => onSelect(destination)}
          >
            Ver Pacote
          </Button>
        </div>
      </div>
    </div>
  );
}
