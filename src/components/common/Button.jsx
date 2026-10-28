import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * @param {'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon = null,
  iconPosition = 'left',
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="btn-icon btn-icon-left" size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon btn-icon-right" size={18} />}
    </button>
  );
}
