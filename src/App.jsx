import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Addcontract from './components/Contracts/Addcontract/Addcontract';
import Allcontracts from './components/Contracts/Allcontracts/Allcontracts';
import Editcontract from './components/Contracts/Editcontract/Editcontract';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="all-contracts" element={<Allcontracts />} />
        <Route path="add-contract" element={<Addcontract />} />
        <Route path="edit-contract" element={<Editcontract />} />
      </Route>
    </Routes>
  );
};

export default App;
