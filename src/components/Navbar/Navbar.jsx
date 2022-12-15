import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/budget-contracts">
        <Button type={'button'}>
          Показать <br /> бюджетные договора
        </Button>
      </Link>
      <Link to="/own-contracts">
        <Button type={'button'}>
          Показать <br /> договора за счет собственных средств
        </Button>
      </Link>
      <hr />
      <Link to={'/add-budget-contract'}>
        <Button>
          Добавить <br /> бюджетный договор
        </Button>
      </Link>
      <Link to={'/add-own-contract'}>
        <Button>
          Добавить <br /> договор за счет собственных средств
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
