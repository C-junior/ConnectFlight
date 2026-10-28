import React from 'react';
import { Search } from 'lucide-react';
import { categories } from '../../data/destinations';
import './DestinationFilter.css';

export default function DestinationFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}) {
  return (
    <div className="destination-filter-wrapper">
      {/* Search Input */}
      <div className="dest-search-box">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Para onde você quer viajar? (ex: Paris, Noronha, Gramado...)"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="dest-search-input"
        />
        {searchQuery && (
          <button
            className="clear-search-btn"
            onClick={() => onSearchChange('')}
            aria-label="Limpar busca"
          >
            ×
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="categories-pill-list">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
