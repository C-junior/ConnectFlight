import React from 'react';
import './Badge.css';

/**
 * Reusable Badge Component
 * @param {'accent' | 'hot' | 'success' | 'neutral' | 'outline'} variant
 */
export default function Badge({ children, variant = 'accent', className = '', icon: Icon = null }) {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {Icon && <Icon size={13} className="badge-icon" />}
      <span>{children}</span>
    </span>
  );
}
