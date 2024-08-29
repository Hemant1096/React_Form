// src/App.js
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import DataTableComponent from './GridComponent';

const App = () => {
  const [data, setData] = useState([]);

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div>
      <h1>Form and Data Table</h1>
      <FormComponent onAddData={handleAddData} />
      <DataTableComponent data={data} />
    </div>
  );
};

export default App;
