import React from 'react';
import Titlepage from '../components/UI/Titlepage';
import Contract from '../components/Contract/Contract';
import Allprice from '../components/Allprice/Allprice';

const BudgetContracts = ({ contracts, dataContractEdit }) => {
  return (
    <>
      <Titlepage>Бюджетные договора</Titlepage>
      {contracts &&
        contracts.map((contract, index) => (
          <div className="contract-block" key={index}>
            <span className="contract-item__count">{index + 1}.</span>
            <Contract key={contract.id} contract={contract} dataContractEdit={dataContractEdit} index={index} type={'budget'} />
          </div>
        ))}
      {contracts.length !== 0 && <Allprice contracts={contracts} />}
    </>
  );
};

export default BudgetContracts;
