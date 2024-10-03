// NavBar.jsx
import React from 'react';

const NavBar = ({ onSelectOption }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => onSelectOption('salud')}>Salud</li>
        <li onClick={() => onSelectOption('educacion')}>Educación</li>
        <li onClick={() => onSelectOption('otros')}>Otros Recursos</li>
      </ul>
    </nav>
  );
};

export default NavBar;
