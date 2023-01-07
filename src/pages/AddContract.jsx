import Form from '../components/Form/Form';
import Titlepage from '../components/UI/Titlepage';
import { titlesAddContract } from '../vars/Titles';

const AddContract = ({ getDataContract, typeContract }) => {
  return (
    <>
      <Titlepage>{`Добавление ${titlesAddContract[typeContract]}`}</Titlepage>
      <Form getDataContract={getDataContract} typeContract={typeContract} />
    </>
  );
};

export default AddContract;
