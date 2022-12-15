import React from 'react';
import Form from '../components/Form/Form';
import Titlepage from '../components/UI/Titlepage';

const AddContractBudget = ({ getDataContract }) => {
  return (
    <>
      <Titlepage>Добавление бюджетного договора</Titlepage>
      <Form getDataContract={getDataContract} typeContract={'budget'} />
    </>
  );
};

export default AddContractBudget;
