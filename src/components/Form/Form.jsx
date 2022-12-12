import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Input from '../UI/Input';
import './Form.css';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddNewContract = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleAddNewContract)}>
      <Input
        register={register}
        label={'Number'}
        className="w-33"
        titleInput={'Номер'}
        type={'number'}
        errors={errors.Number}
        required
      />
      <Input
        register={register}
        label={'DatePreparation'}
        className="w-33"
        titleInput={'Дата составления'}
        type={'date'}
        errors={errors.DatePreparation}
        required
      />
      <Input
        register={register}
        label={'DateConclusion'}
        className="w-33"
        titleInput={'Дата заключения'}
        type={'date'}
        errors={errors.DateConclusion}
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
        label={'producingCountry'}
        className="w-33"
        titleInput={'Страна производитель'}
        type={'text'}
        errors={errors.producingCountry}
        required
      />
      <Input
        register={register}
        label={'typeOfProcedure'}
        className="w-50"
        titleInput={'Вид процедуры закупки'}
        type={'text'}
        errors={errors.typeOfProcedure}
        required
      />
      <Button className={'form-btn'} type={'submit'}>
        Добавить договор
      </Button>
    </form>
  );
};

export default Form;
