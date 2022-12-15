import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';

const Form = ({ getDataContract, typeContract }) => {
  const [dateConclusion, setDateConclusion] = useState('');

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddNewContract = (data) => {
    data.typeContract = typeContract;
    data.id = uuidv4();
    getDataContract(data);
  };

  useEffect(() => {
    setDateConclusion(watch('DateConclusion'));
  }, [watch('DateConclusion')]);

  useEffect(() => {
    if (typeContract === 'budget') {
      const referenceZoi = document.querySelector('#reference-zoi');
      if (watch('typeProcedure') === 'ZOI') {
        referenceZoi.classList.remove('reference-zoi');
      } else {
        referenceZoi.classList.add('reference-zoi');
      }
    } else {
      return;
    }
  }, [watch('typeProcedure')]);

  return (
    <form onSubmit={handleSubmit(handleAddNewContract)}>
      <Input
        register={register}
        label={'Number'}
        className="w-25"
        titleInput={'Номер'}
        type={'number'}
        errors={errors.Number}
        required
      />
      <Input
        register={register}
        label={'DatePreparation'}
        className="w-25"
        titleInput={'Дата составления'}
        type={'date'}
        errors={errors.DatePreparation}
        required
      />
      <Input
        register={register}
        label={'DateConclusion'}
        className="w-25"
        titleInput={'Дата подписания'}
        type={'date'}
        errors={errors.DateConclusion}
        required
      />
      <label className="w-25">
        Предмет договора
        <div className="label-radio-buttons">
          <label>
            Услуга
            <input {...register('subjectContract', { required: 'Выберите один из пунктов' })} type="radio" value="service" />
          </label>
          <label>
            Товар
            <input {...register('subjectContract', { required: 'Выберите один из пунктов' })} type="radio" value="product" />
          </label>
        </div>
        {errors?.subjectContract && <span className="error-message">{errors?.subjectContract.message}</span>}
      </label>
      <Input
        register={register}
        label={'Company'}
        className="w-50"
        titleInput={'Наименование организации'}
        type={'text'}
        errors={errors.Company}
        required
      />
      <Input
        register={register}
        label={'manufacturingFirm'}
        className="w-50"
        titleInput={'Фирма-производитель'}
        type={'text'}
        errors={errors.manufacturingFirm}
        required
      />
      {typeContract === 'budget' && (
        <>
          <label className="w-33">
            Форма договора
            <div className="label-radio-buttons">
              <label>
                Электронный
                <input {...register('formContract', { required: 'Выберите один из пунктов' })} type="radio" value="electronic" />
              </label>
              <label>
                Бумажный
                <input {...register('formContract', { required: 'Выберите один из пунктов' })} type="radio" value="paper" />
              </label>
            </div>
            {errors?.formContract && <span className="error-message">{errors?.formContract.message}</span>}
          </label>
          <label className="w-33">
            Вид процедуры закупки
            <div className="label-radio-buttons">
              <label>
                ЗОИ
                <input {...register('typeProcedure', { required: 'Выберите один из пунктов' })} type="radio" value="ZOI" />
              </label>
              <label>
                ЗЦП
                <input {...register('typeProcedure', { required: 'Выберите один из пунктов' })} type="radio" value="ZCP" />
              </label>
              <label>
                ЭА
                <input {...register('typeProcedure', { required: 'Выберите один из пунктов' })} type="radio" value="EA" />
              </label>
            </div>
            {errors?.typeProcedure && <span className="error-message">{errors?.typeProcedure.message}</span>}
          </label>
          <label className="w-33 reference-zoi" id="reference-zoi">
            Справка ЗОИ
            <div className="label-radio-buttons">
              <label>
                Есть
                <input {...register('referenceZOI')} type="radio" value="yes" />
              </label>
              <label>
                Нет
                <input {...register('referenceZOI')} type="radio" value="no" />
              </label>
            </div>
            {errors?.referenceZOI && <span className="error-message">{errors?.referenceZOI.message}</span>}
          </label>
        </>
      )}
      <Input
        register={register}
        label={'producingCountry'}
        className="w-33"
        titleInput={'Страна производитель'}
        type={'text'}
        errors={errors.producingCountry}
        required
      />
      <Input
        register={register}
        label={'agreementPrice'}
        className="w-33"
        titleInput={'Стоимость доп.соглашения'}
        type={'number'}
        errors={errors.agreementPrice}
        required
      />
      <Input
        register={register}
        label={'Price'}
        className="w-33"
        titleInput={'Стоимость'}
        type={'number'}
        errors={errors.Price}
        required
      />
      <label className="w-50">
        Срок действия договора
        <div className="label-contract-time">
          <label>
            C
            <input {...register('contractTimeFrom')} className={'input-main'} type="date" value={dateConclusion} />
          </label>
          <label>
            По
            <input
              {...register('contractTimeBy', { required: 'Поле обязательно к заполнению' })}
              className={`input-main ${errors?.contractTimeBy ? 'input-main-error' : ''}`}
              type="date"
            />
          </label>
        </div>
        {errors?.contractTimeBy && <span className="error-message">{errors?.contractTimeBy.message}</span>}
      </label>
      <Button className={'form-btn'} type={'submit'}>
        Добавить договор
      </Button>
    </form>
  );
};

export default Form;
