import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío de los datos del formulario
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B67BE]">
      <div className="w-full max-w-lg p-6 bg-[#0B67BE] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-left text-orange-500">Contacto</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Escribe tu nombre..."
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu email..."
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-white">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Escribe tu teléfono..."
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Deja tu mensaje aquí..."
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
