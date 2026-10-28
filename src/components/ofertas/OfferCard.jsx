import React from 'react';
import { Plane, Building2, Coffee, ShieldCheck, Clock, Tag } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import './OfferCard.css';

const iconMap = {
  Plane: Plane,
  Building2: Building2,
  Coffee: Coffee,
  ShieldCheck: ShieldCheck
};

export default function OfferCard({ offer, onSelect }) {
  return (
    <div className="offer-card">
      {/* Top Banner Image with Badges */}
      <div className="offer-image-wrap">
        <img src={offer.image} alt={offer.title} className="offer-image" loading="lazy" />
        
        {/* Floating Discount Tag */}
        <div className="offer-discount-badge">
          {offer.discountBadge}
        </div>

        {/* Valid until badge */}
        <div className="offer-valid-badge">
          <Clock size={13} />
          <span>{offer.validUntil}</span>
        </div>
      </div>

      {/* Offer Body */}
      <div className="offer-body">
        <div className="offer-tags-row">
          {offer.tags.map((tag, i) => (
            <Badge key={i} variant={i === 0 ? 'hot' : 'neutral'}>
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="offer-title">{offer.title}</h3>
        <p className="offer-destination">{offer.destination}</p>
        <p className="offer-desc">{offer.description}</p>

        {/* Complete Package Inclusions */}
        <div className="offer-inclusions-list">
          <span className="offer-inc-heading">
            <Tag size={13} /> Pacote Completo Incluso:
          </span>
          <div className="offer-inc-grid">
            {offer.inclusions.map((inc, idx) => {
              const IconComponent = iconMap[inc.icon] || Plane;
              return (
                <div key={idx} className="offer-inc-item">
                  <div className="offer-inc-icon-box">
                    <IconComponent size={14} />
                  </div>
                  <span className="offer-inc-label">{inc.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Box & CTA */}
        <div className="offer-footer">
          <div className="offer-pricing">
            <span className="offer-price-from">De {offer.originalPrice} por:</span>
            <div className="offer-main-price">{offer.promotionalPrice}</div>
            <span className="offer-installments">{offer.installments}</span>
          </div>

          <Button
            variant="accent"
            size="md"
            onClick={() => onSelect(offer)}
            className="offer-cta-btn"
          >
            Aproveitar Oferta
          </Button>
        </div>
      </div>
    </div>
  );
}
