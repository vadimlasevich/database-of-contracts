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

  const dataContractEdit = (data) => console.log(data);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="budget-contracts"
          element={<BudgetContracts contracts={contractsBudget} dataContractEdit={dataContractEdit} />}
        />
        <Route path="own-contracts" element={<OwnContracts contracts={contractsOwn} dataContractEdit={dataContractEdit} />} />
        <Route path="add-budget-contract" element={<AddContractBudget getDataContract={getDataContract} />} />
        <Route path="add-own-contract" element={<AddContractOwn getDataContract={getDataContract} />} />
        <Route path="edit-contract" element={<EditContract />} />
      </Route>
    </Routes>
  );
};

export default App;
