import React, { useContext } from 'react';
import FilterContext from '../../layout/FilterContext';

const NavBar = () => {
  const { handleSelectOption } = useContext(FilterContext);

  return (
    <nav className='bg-blue-600 p-4 text-white flex items-center justify-between'>
      <div className='flex items-center space-x-3'>
        <img
          src='../../../src/assets/icons/logoES-transparente.png'
          alt='Logo'
          className='w-12 h-12'
        />
        <span className='text-2xl font-bold'>EasySpain</span>
      </div>

      
      <ul className='flex space-x-8'>
        <li
          className='cursor-pointer hover:underline font-bold transition-colors duration-300 ease-in-out'
          onClick={() => handleSelectOption('social')}
        >
          Atención Social
        </li>
        <li
          className='cursor-pointer hover:underline font-bold transition-colors duration-300 ease-in-out'
          onClick={() => handleSelectOption('educacion')}
        >
          Centros de Educación
        </li>
        <li
          className='cursor-pointer hover:underline font-bold transition-colors duration-300 ease-in-out'
          onClick={() => handleSelectOption('medica')}
        >
          Centros Médicos
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
