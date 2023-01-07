import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../UI/Button';
import './Navbar.css';

const Navbar = ({ getTypeContract }) => {
  const { type } = useParams();
  useEffect(() => getTypeContract(type), [type]);

  return (
    <nav className="nav">
      <Link to={`/contracts/budget`}>
        <Button type={'button'}>
          Показать <br /> бюджетные договора
        </Button>
      </Link>
      <Link to={`/contracts/own`}>
        <Button type={'button'}>
          Показать <br /> договора за счет собственных средств
        </Button>
      </Link>
      <hr />
      <Link to={'/add-contract/budget'}>
        <Button>
          Добавить <br /> бюджетный договор
        </Button>
      </Link>
      <Link to={'/add-contract/own'}>
        <Button>
          Добавить <br /> договор за счет собственных средств
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
