import React from 'react';
import Button from './Button';
import './Modal.css';

const Modal = ({ children, className, closeModal }) => {
  return (
    <div className={`modal animated ${className}`}>
      <div className="modal__overlay" onClick={closeModal}></div>
      <div className="modal__content">
        <div className="modal__text">{children}</div>
        <Button className="modal__btn-close" onClick={closeModal}>
          Хорошо
        </Button>
      </div>
    </div>
  );
};

export default Modal;
