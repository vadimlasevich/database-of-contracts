import React from 'react';
import Titlepage from '../components/UI/Titlepage';
import Contract from '../components/Contract/Contract';

const OwnContracts = ({ contracts }) => {
  console.log(contracts);
  return (
    <>
      <Titlepage>Договора за счет собственных средств</Titlepage>
      <div>{contracts && contracts.map((contract) => <Contract key={contract.id} contract={contract} />)}</div>
    </>
  );
};

export default OwnContracts;
