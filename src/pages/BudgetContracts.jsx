import React from 'react';
import Titlepage from '../components/UI/Titlepage';
import Contract from '../components/Contract/Contract';

const BudgetContracts = ({ contracts }) => {
  console.log(contracts);
  return (
    <>
      <Titlepage>Бюджетные договора</Titlepage>
      <div>{contracts && contracts.map((contract) => <Contract key={contract.id} contract={contract} />)}</div>
    </>
  );
};

export default BudgetContracts;
