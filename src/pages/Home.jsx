import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/services';
import TitleSection from '../components/Titles';
import Hero from '../components/Hero';
import MessageModal from '../components/MessageModal';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('social');
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageType, setMessageType] = useState('success');

  // Fetch data from the backend for the selected category
  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchData(selectedCategory);
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error al cargar los datos.');
        setMessageType('error');
        setIsMessageModalOpen(true);
      }
    };

    loadData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen w-full m-0">
      <Hero />
      <div className="flex justify-center mt-4">
        {/* Botones para cambiar entre categorías */}
        <button
          onClick={() => handleCategoryChange('social')}
          className={`px-4 py-2 mx-2 border rounded ${selectedCategory === 'social' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Atención Social
        </button>
        <button
          onClick={() => handleCategoryChange('educacion')}
          className={`px-4 py-2 mx-2 border rounded ${selectedCategory === 'educacion' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Centros de Educación
        </button>
        <button
          onClick={() => handleCategoryChange('medica')}
          className={`px-4 py-2 mx-2 border rounded ${selectedCategory === 'medica' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Centros Médicos
        </button>
      </div>

      <div className="mt-8">
        <TitleSection title={selectedCategory} />

        {/* Mostrar los datos de la API en formato de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded p-4">
              <h2 className="font-bold text-lg">{item.title || 'Sin título'}</h2>
              <p>{item?.address?.streetAddress || 'Dirección no disponible'}</p>
              <p>{item?.organization?.organizationDesc || 'Descripción no disponible'}</p>
              <p>{item?.organization?.accesibility || 'No especificado'}</p>
            </div>
          ))}
        </div>
      </div>

      {isMessageModalOpen && (
        <MessageModal
          message={message}
          type={messageType}
          onClose={() => setIsMessageModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
