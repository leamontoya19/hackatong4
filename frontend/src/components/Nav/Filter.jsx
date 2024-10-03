import React, { useContext } from 'react';
import Select from 'react-select';
import FilterContext from '../../layout/FilterContext.jsx';

const Filter = ({ isFilterOpen, toggleFilter, selectedOption }) => {
  const { handleSelectChange } = useContext(FilterContext);

  // Opciones de categorías dinámicas basadas en la opción seleccionada
  const categories = selectedOption === 'salud' 
    ? [{ label: 'Hospitales', value: 'hospitales' }, { label: 'Centros de Salud', value: 'centros_salud' }]
    : selectedOption === 'educacion' 
    ? [{ label: 'Escuelas', value: 'escuelas' }, { label: 'Universidades', value: 'universidades' }]
    : [{ label: 'Recursos Sociales', value: 'recursos_sociales' }];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#FFFFFF',
      borderColor: '#e5e7eb',
      borderRadius: '0.375rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#A8A8A8',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#e2e8f0' : 'white',
      color: state.isSelected ? '#334155' : '#4b5563',
      '&:hover': {
        backgroundColor: '#cbd5e1',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#4b5563',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      borderRadius: '0.375rem',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    }),
  };

  return (
    <div
      className={`fixed top-[72px] left-0 right-0 bg-slate-40 bg-opacity-70 backdrop-blur-sm z-20 transition-all duration-500 ease-in-out transform ${
        isFilterOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="w-full bg-slate-50 bg-opacity-70 backdrop-blur-sm shadow-md z-10 p-4 flex flex-col transition-all duration-300 ease-in-out">
        <div className="w-[92%] mb-[30px] flex items-center justify-between mx-auto">
          <img
            src="/src/assets/icons/filter.svg"
            alt="Filter"
            className="w-6 h-6"
          />
          <img
            src="/src/assets/icons/close.svg"
            alt="Cerrar filtros"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleFilter}
          />
        </div>

        <div className="w-[92%] flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mx-auto">
          <div className="flex flex-col w-full sm:w-1/3">
            <Select
              name="category"
              defaultValue={{
                label: 'Categoría',
                value: 'empty',
              }}
              options={categories} // Opciones dinámicas
              onChange={handleSelectChange}
              styles={customStyles}
            />
          </div>

          {/* Aquí puedes agregar más opciones de filtro, si es necesario */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
