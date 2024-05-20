import React, { useState } from 'react';
import './AddPet.css';
import { createPet } from '../api/petsApi';
import FormGroup from '../components/FormGroup';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    color: '#fffff',
    age: 0,
    type: 'Dog',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddPet = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await createPet(formData);
    setFormData({
      name: '',
      color: '',
      age: 0,
      type: 'Dog',
    });
    setIsLoading(false);
    navigate("/")
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="add-pet-page">
    <div className="add-pet-container">
      <h1>Add a New Pet</h1>
      <form onSubmit={handleAddPet} className="add-pet-form">
        <FormGroup
          label="Name"
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          maxLength={25}
        />
        <FormGroup
          label="Color"
          id="color"
          type="color"
          value={formData.color}
          onChange={handleChange}
        />
        <FormGroup
          label="Age"
          id="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          max={20}
        />
        <FormGroup
          label="Type"
          id="type"
          type="select"
          value={formData.type}
          onChange={handleChange}
          options={['Dog', 'Cat', 'Horse', 'Other']}
        />
        <button type="submit" className="btn">Add Pet</button>
      </form>
      </div>
    </div>
  );
};

export default AddPet;
