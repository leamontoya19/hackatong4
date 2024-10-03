import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    ageRange: "",
    district: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rango de Edad:
        <input type="text" name="ageRange" value={formData.ageRange} onChange={handleChange} />
      </label>
      <br />
      <label>
        Distrito:
        <input type="text" name="district" value={formData.district} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;