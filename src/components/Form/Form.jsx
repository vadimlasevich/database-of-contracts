import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { typeContractModal } from '../../vars/Titles';

import './Form.css';
import ElemForm from './ElemForm';
import InputRadio from '../UI/InputRadio';

const Form = ({ getDataContract, typeContract }) => {
  const [dateConclusion, setDateConclusion] = useState('');
  const [isReferenceZOI, setIsReferenceZOI] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleAddNewContract = (data) => {
    data.typeContract = typeContract;
    data.id = uuidv4();
    getDataContract(data);
    setModalOpen(true);

    reset();
  };

  useEffect(() => {
    setDateConclusion(watch('DateConclusion'));
  }, [watch('DateConclusion')]);

  useEffect(() => {
    if (typeContract === 'budget') {
      watch('typeProcedure') === 'ЗОИ' ? setIsReferenceZOI(true) : setIsReferenceZOI(false);
    } else return;
  }, [watch('typeProcedure')]);

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <form onSubmit={handleSubmit(handleAddNewContract)}>
        <ElemForm className="w-25" titleElement={'Номер'} errors={errors.Number}>
          <Input register={register} label={'Number'} type={'number'} required />
        </ElemForm>
        <ElemForm className="w-25" titleElement={'Дата составления'} errors={errors.DatePreparation}>
          <Input register={register} label={'DatePreparation'} type={'date'} required />
        </ElemForm>
        <ElemForm className="w-25" titleElement={'Дата подписания'} errors={errors.DateConclusion}>
          <Input register={register} label={'DateConclusion'} type={'date'} required />
        </ElemForm>
        <ElemForm className="w-25" titleElement={'Предмет договора'} errors={errors.subjectContract}>
          <div className="radio-buttons">
            <InputRadio register={register} label={'subjectContract'} type={'radio'} value="Услуга" />
            <InputRadio register={register} label={'subjectContract'} type={'radio'} value="Товар" />
          </div>
        </ElemForm>
        <ElemForm className="w-50" titleElement={'Наименование организации'} errors={errors.Company}>
          <Input register={register} label={'Company'} type={'text'} required />
        </ElemForm>
        <ElemForm className="w-50" titleElement={'Фирма-производитель'} errors={errors.manufacturingFirm}>
          <Input register={register} label={'manufacturingFirm'} type={'text'} required />
        </ElemForm>

        {typeContract === 'budget' && (
          <>
            <ElemForm className="w-33" titleElement={'Форма договора'} errors={errors.formContract}>
              <div className="radio-buttons">
                <InputRadio register={register} label={'formContract'} type={'radio'} value="Электронный" />
                <InputRadio register={register} label={'formContract'} type={'radio'} value="Бумажный" />
              </div>
            </ElemForm>
            <ElemForm className="w-33" titleElement={'Вид процедуры закупки'} errors={errors.typeProcedure}>
              <div className="radio-buttons">
                <InputRadio register={register} label={'typeProcedure'} type={'radio'} value="ЗОИ" />
                <InputRadio register={register} label={'typeProcedure'} type={'radio'} value="ЗЦП" />
                <InputRadio register={register} label={'typeProcedure'} type={'radio'} value="ЭА" />
              </div>
            </ElemForm>
            {!isReferenceZOI && <ElemForm className="w-33" />}
            {isReferenceZOI && (
              <ElemForm className="w-33" titleElement={'Справка ЗОИ'} errors={errors.referenceZOI}>
                <div className="radio-buttons">
                  <InputRadio register={register} label={'referenceZOI'} type={'radio'} value="Есть" />
                  <InputRadio register={register} label={'referenceZOI'} type={'radio'} value="Нет" />
                </div>
              </ElemForm>
            )}
          </>
        )}

        <ElemForm className="w-33" titleElement={'Страна производитель'} errors={errors.producingCountry}>
          <Input register={register} label={'producingCountry'} type={'text'} required />
        </ElemForm>
        <ElemForm className="w-33" titleElement={'Стоимость доп.соглашения'} errors={errors.agreementPrice}>
          <Input register={register} label={'agreementPrice'} type={'number'} required />
        </ElemForm>
        <ElemForm className="w-33" titleElement={'Стоимость'} errors={errors.Price}>
          <Input register={register} label={'Price'} type={'number'} required />
        </ElemForm>
        <ElemForm className="w-50" titleElement={'Срок действия договора'} errors={errors.contractTimeBy}>
          <div className="label-contract-time">
            <label>
              C
              <Input register={register} label={'contractTimeFrom'} type={'date'} value={dateConclusion} />
            </label>
            <label>
              По
              <Input register={register} label={'contractTimeBy'} type={'date'} required />
            </label>
          </div>
        </ElemForm>
        <Button className={'form-btn'} type={'submit'}>
          Добавить договор
        </Button>
      </form>
      <Modal className={modalOpen ? 'show' : ''} typeContract={typeContractModal[typeContract]} closeModal={closeModal} />
    </>
  );
};

export default Form;
