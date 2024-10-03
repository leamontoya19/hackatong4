import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Nav/NavBar'; // Importa el nuevo NavBar
import Footer from '../components/Footer';
import { FilterProvider } from '../layout/FilterContext';

const Layout = () => {
  const [selectedOption, setSelectedOption] = useState('salud'); // Estado para manejar la selección

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    console.log('Opción seleccionada:', option); // Aquí puedes manejar lo que pasa cuando cambias de opción
  };

  return (
    <FilterProvider>
      <NavBar onSelectOption={handleSelectOption} />
      <Outlet context={{ selectedOption }} />{' '}
      {/* Pasar la opción seleccionada como contexto */}
      <Footer />
    </FilterProvider>
  );
};

export default Layout;
