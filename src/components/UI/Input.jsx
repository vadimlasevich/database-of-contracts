import React from 'react';
import './Input.css';

const Input = ({ label, register, className = '', titleInput, type, errors }) => {
  return (
    <>
      <label className={className}>
        {titleInput}
        <input
          {...register(label, { required: 'Поле обязательно к заполнению' })}
          className={`input-main ${errors ? 'input-main-error' : ''}`}
          type={type}
        />
        {errors && <span className="error-message">{errors.message}</span>}
      </label>
    </>
  );
};

export default Input;
