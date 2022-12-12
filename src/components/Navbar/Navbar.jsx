import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Navbar.css';

const Navbar = ({ getAllContracts, addNewContracts }) => {
  return (
    <nav className="nav">
      <Link to="/all-contracts">
        <Button type={'button'} onClick={getAllContracts}>
          Показать договора
        </Button>
      </Link>
      <Link to="/add-contract">
        <Button type={'button'} onClick={addNewContracts}>
          Добавить договор
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
