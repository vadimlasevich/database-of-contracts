import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddContractBudget from './pages/AddContractBudget';
import AddContractOwn from './pages/AddContractOwn';
import BudgetContracts from './pages/BudgetContracts';
import EditContract from './pages/EditContract';
import OwnContracts from './pages/OwnContracts';

const App = () => {
  const [contractsBudget, setContractsBudget] = useState([]);
  const [contractsOwn, setContractsOwn] = useState([]);

  const getDataContract = (data) => {
    if (data.typeContract === 'budget') {
      setContractsBudget((prevDataContract) => [...prevDataContract, data]);
    } else if (data.typeContract === 'own') {
      setContractsOwn((prevDataContract) => [...prevDataContract, data]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="budget-contracts" element={<BudgetContracts contracts={contractsBudget} />} />
        <Route path="own-contracts" element={<OwnContracts contracts={contractsOwn} />} />
        <Route path="add-budget-contract" element={<AddContractBudget getDataContract={getDataContract} />} />
        <Route path="add-own-contract" element={<AddContractOwn getDataContract={getDataContract} />} />
        <Route path=":typeContract/:id/edit" element={<EditContract />} />
      </Route>
    </Routes>
  );
};

export default App;
