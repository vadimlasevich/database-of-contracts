import React from 'react';
import './Contract.css';

const Contract = ({ contract }) => {
  return (
    <div className="contract-item">
      <div className="contract-col">
        <div className="contract-col-title">№ Договора и дата подписания</div>
        <span>№ {contract.Number}</span>
        <span>{contract.DateConclusion}</span>
      </div>
      <div className="contract-col">
        <div className="contract-col-title">Дата составления</div>
        <span>{contract.DatePreparation}</span>
      </div>
      <div className="contract-col">
        <div className="contract-col-title">Наименование организации</div>
        <span>{contract.Company}</span>
      </div>
      <div className="contract-col">
        <div className="contract-col-title">Предмет договора</div>
        <span>{contract.Subject}</span>
      </div>
      <div className="contract-col">
        <div className="contract-col-title">Страна производитель</div>
        <span>{contract.producingCountry}</span>
      </div>
      <div className="contract-col">
        <div className="contract-col-title">Стоимость доп.соглашения</div>
        <span>{contract.agreementPrice}</span>
      </div>
      <div className="contract-col">
        <div className="contract-col-title">Стоимость</div>
        <span>{contract.Price}</span>
      </div>
    </div>
  );
};

export default Contract;
