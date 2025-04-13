import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '',
  type = 'button',
  onClick
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg transition-all duration-200 font-medium";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800"
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}