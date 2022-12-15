import { Outlet } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Navbar from '../Navbar/Navbar';

import './Layout.css';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Filter />
    </div>
  );
};

export default Layout;
