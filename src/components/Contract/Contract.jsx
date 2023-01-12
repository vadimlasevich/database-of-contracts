import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Contract.css';

const Contract = ({ contract, index, type, dataContractEdit }) => {
  const [openContract, setOpenContract] = useState(null);

  const toggle = (index) => {
    if (openContract === index) {
      return setOpenContract(null);
    }

    setOpenContract(index);
  };

  const handleContractEdit = () => dataContractEdit(contract);

  return (
    <div className="contract-item" onClick={() => toggle(index)}>
      <div className={openContract === index ? 'contract-item__content-min' : 'contract-item__content-min show'}>
        <div className="contract-item__col">
          <div className="contract-item__title">№ Договора и дата подписания</div>
          <span>№ {contract.Number}</span>
          <span>{contract.DateConclusion}</span>
        </div>
        <div className="contract-item__col">
          <div className="contract-item__title">Дата составления</div>
          <span>{contract.DatePreparation}</span>
        </div>
        <div className="contract-item__col">
          <div className="contract-item__title">Наименование организации</div>
          <span>{contract.Company}</span>
        </div>
        <div className="contract-item__col">
          <div className="contract-item__title">Фирма-производитель</div>
          <span>{contract.manufacturingFirm}</span>
        </div>
        <div className="contract-item__col">
          <div className="contract-item__title">Предмет договора</div>
          <span>{contract.subjectContract}</span>
        </div>
        <div className="contract-item__col">
          <div className="contract-item__title">Стоимость</div>
          <span>{contract.Price}</span>
        </div>
      </div>

      <div className={openContract === index ? 'contract-item__content-max show' : 'contract-item__content-max'}>
        <div className="contract-item__row">
          <div className="contract-item__title">№ Договора -</div>
          <span>{contract.Number}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Дата составления -</div>
          <span>{contract.DatePreparation}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Дата подписания -</div>
          <span>{contract.DateConclusion}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Срок действия договора -</div>
          <span>с {contract.DateConclusion}</span>
          <span>по {contract.contractTimeBy}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Предмет договора -</div>
          <span>{contract.subjectContract}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Наименование организации -</div>
          <span>{contract.Company}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Фирма-производитель -</div>
          <span>{contract.manufacturingFirm}</span>
        </div>
        {type === 'budget' && (
          <>
            <div className="contract-item__row">
              <div className="contract-item__title">Форма договора -</div>
              <span>{contract.formContract}</span>
            </div>
            <div className="contract-item__row">
              <div className="contract-item__title">Вид процедуры закупки -</div>
              <span>{contract.typeProcedure}</span>
            </div>
            {contract.referenceZOI !== null && (
              <div className="contract-item__row">
                <div className="contract-item__title">Справка ЗОИ -</div>
                <span>{contract.referenceZOI}</span>
              </div>
            )}
          </>
        )}
        <div className="contract-item__row">
          <div className="contract-item__title">Страна производитель -</div>
          <span>{contract.producingCountry}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Стоимость доп.соглашения -</div>
          <span>{contract.agreementPrice}</span>
        </div>
        <div className="contract-item__row">
          <div className="contract-item__title">Стоимость -</div>
          <span>{contract.Price}</span>
        </div>
        <div className="contract-item__btn-edit">
          <Link to={`/edit-contract/${contract.Number}`}>
            <Button type={'button'} onClick={handleContractEdit}>
              Редактировать
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contract;
