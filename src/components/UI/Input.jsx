import React from 'react';
import './Input.css';

const Input = ({ label, register, type, errors, value }) => {
  return (
    <input
      {...register(label, { required: 'Поле обязательно к заполнению' })}
      className={`input-main ${errors ? 'input-main-error' : ''}`}
      type={type}
      value={value}
    />
  );
};

export default Input;
