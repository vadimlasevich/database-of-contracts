import React from 'react';
import Titlepage from '../components/UI/Titlepage';
import Contract from '../components/Contract/Contract';
import Allprice from '../components/Allprice/Allprice';
import { titlesContracts } from '../vars/Titles';

const Contracts = ({ contracts, dataContractEdit, typeContract }) => {
  return (
    <>
      <Titlepage>{titlesContracts[typeContract]}</Titlepage>
      {contracts &&
        contracts
          .filter((contract) => contract.typeContract === typeContract)
          .map((contract, index) => (
            <div className="contract-block" key={index}>
              <span className="contract-item__count">{index + 1}.</span>
              <Contract
                key={contract.id}
                contract={contract}
                dataContractEdit={dataContractEdit}
                index={index}
                typeContract={typeContract}
              />
            </div>
          ))}
      {contracts.length !== 0 && <Allprice contracts={contracts} typeContract={typeContract} />}
    </>
  );
};

export default Contracts;
