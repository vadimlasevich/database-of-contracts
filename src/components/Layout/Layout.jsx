import { Outlet } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Navbar from '../Navbar/Navbar';

import './Layout.css';

const getAllContracts = () => {
  console.log(8888);
};

const addNewContracts = () => {
  console.log(885555);
};

const Layout = () => {
  return (
    <div className="app">
      <Navbar getAllContracts={getAllContracts} addNewContracts={addNewContracts} />
      <main>
        <Outlet />
      </main>
      <Filter />
    </div>
  );
};

export default Layout;
