import React from 'react';
import './Button.css';

const Button = ({ className = '', children, type, onClick }) => {
  return (
    <button className={`${className} main-button btn-reset`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
