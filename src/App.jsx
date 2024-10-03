import React, { useState } from 'react';
import NavBar from './components/NavBar';
import DataDisplay from './components/DataDisplay';
import { fetchData } from './services/apiService';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOptionSelect = async (category) => {
    setSelectedCategory(category);
    const fetchedData = await fetchData(category);
    setData(fetchedData);
  };

  return (
    <div>
      <NavBar onSelectOption={handleOptionSelect} />
      <DataDisplay data={data} />
    </div>
  );
};

export default App;
