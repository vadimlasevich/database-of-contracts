import { Outlet } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Navbar from '../Navbar/Navbar';

import './Layout.css';

const Layout = ({ getTypeContract }) => {
  return (
    <div className="app">
      <Navbar getTypeContract={getTypeContract} />
      <main>
        <Outlet />
      </main>
      <Filter />
    </div>
  );
};

export default Layout;
