import React from 'react';

const InputRadio = ({ label, register, type, value }) => {
  return (
    <label>
      {value}
      <input {...register(label, { required: 'Выберите один из пунктов' })} type={type} value={value} />
    </label>
  );
};

export default InputRadio;
