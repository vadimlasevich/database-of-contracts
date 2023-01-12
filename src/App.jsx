import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddContract from './pages/AddContract';
import Contracts from './pages/Contracts';
import EditContract from './pages/EditContract';

const App = () => {
  const [contracts, setContracts] = useState([]);
  const [typeContract, setTypeContract] = useState('');
  const [editContract, setEditContract] = useState({});

  const getDataContract = (data) => setContracts((prevContracts) => [...prevContracts, data]);
  const getTypeContract = (type) => setTypeContract(type);

  const handleContractEdit = (data) => setEditContract(data);

  console.log(contracts);

  return (
    <Routes>
      <Route path="/" element={<Layout getTypeContract={getTypeContract} />}>
        <Route
          path="contracts/:type"
          element={<Contracts contracts={contracts} typeContract={typeContract} dataContractEdit={handleContractEdit} />}
        />
        <Route
          path="add-contract/:type"
          element={<AddContract getDataContract={getDataContract} typeContract={typeContract} />}
        />
        <Route path="edit-contract/:number" element={<EditContract editContract={editContract} contracts={contracts} />} />
      </Route>
    </Routes>
  );
};

export default App;
