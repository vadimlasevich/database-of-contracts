import React from 'react';
import './ElemForm.css';

const ElemForm = ({ className = '', titleElement, errors, children }) => {
  return (
    <>
      <label className={className}>
        {titleElement}
        {children}
        {errors && <span className="error-message">{errors.message}</span>}
      </label>
    </>
  );
};

export default ElemForm;
