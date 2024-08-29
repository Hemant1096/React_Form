// src/FormComponent.js
import React, { useState } from 'react';

const FormComponent = ({ onAddData }) => {
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData(formData);
    setFormData({ name: '', age: '' }); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Add Data</button>
    </form>
  );
};

export default FormComponent;
