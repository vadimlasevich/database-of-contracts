import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddContract from './pages/AddContract';
import Contracts from './pages/Contracts';
import EditContract from './pages/EditContract';

const App = () => {
  // const [contractsBudget, setContractsBudget] = useState([]);
  // const [contractsOwn, setContractsOwn] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [typeContract, setTypeContract] = useState('');

  const getDataContract = (data) => setContracts((prevContracts) => [...prevContracts, data]);

  console.log(contracts);
  // if (data.typeContract === 'budget') {
  //   setContractsBudget((prevDataContract) => [...prevDataContract, data]);
  // } else if (data.typeContract === 'own') {
  //   setContractsOwn((prevDataContract) => [...prevDataContract, data]);
  // }

  // const dataContractEdit = (data) => console.log(data);
  const getTypeContract = (type) => setTypeContract(type);

  return (
    <Routes>
      <Route path="/" element={<Layout getTypeContract={getTypeContract} />}>
        <Route path="contracts/:type" element={<Contracts contracts={contracts} typeContract={typeContract} />} />
        <Route
          path="add-contract/:type"
          element={<AddContract getDataContract={getDataContract} typeContract={typeContract} />}
        />
        <Route path="edit-contract" element={<EditContract />} />
      </Route>
    </Routes>
  );
};

export default App;
