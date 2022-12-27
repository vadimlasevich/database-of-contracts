import React from 'react';
import Titlepage from '../components/UI/Titlepage';
import Form from '../components/Form/Form';

const AddContractOwn = ({ getDataContract }) => {
  return (
    <>
      <Titlepage>Добавление договора за счет собственных средств</Titlepage>
      <Form getDataContract={getDataContract} type={'own'} />
    </>
  );
};

export default AddContractOwn;
