import React from 'react';
import Form from '../components/Form/Form';
import Titlepage from '../components/UI/Titlepage';

const EditContract = ({ editContract, contracts }) => {
  const editButton = {
    text: 'Сохранить изменения',
  };

  return (
    <>
      <Titlepage>Редактирование договора № {editContract.Number}</Titlepage>
      <Form editContract={editContract} contracts={contracts} editButton={editButton} />
    </>
  );
};

export default EditContract;
