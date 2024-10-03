import React, { useState, useEffect, useContext } from 'react';
import { fetchData } from '../services/services';
import TitleSection from '../components/Titles';
import Hero from '../components/Hero';
import MessageModal from '../components/MessageModal';
import Card from '../components/Card'; // Importamos el componente Card
import FilterContext from '../layout/FilterContext';

// Función para calcular la distancia entre dos puntos geográficos
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Retorna la distancia en km
};

const Home = () => {
  const { selectedCategory } = useContext(FilterContext); // Obtener la categoría seleccionada desde el contexto
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageType, setMessageType] = useState('success');
  const [userLocation, setUserLocation] = useState(null); // Estado para almacenar la ubicación del usuario

  // Mapeo de categorías a títulos para el componente TitleSection
  const categoryTitles = {
    social: 'Atención Social',
    educacion: 'Centros de Educación',
    medica: 'Centros Médicos',
  };

  // Obtener la ubicación del usuario al cargar el componente
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }, (error) => {
        console.error('Error obteniendo ubicación:', error);
      });
    }
  }, []);

  // Cargar los datos desde la API según la categoría seleccionada
  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchData(selectedCategory);

        if (Array.isArray(fetchedData)) {
          if (userLocation) {
            const filteredData = fetchedData.filter((item) => {
              if (item.location && item.location.latitude && item.location.longitude) {
                const distance = calculateDistance(
                  userLocation.latitude,
                  userLocation.longitude,
                  item.location.latitude,
                  item.location.longitude
                );
                return distance <= 10; // Filtrar solo los que están dentro de 5 km
              }
              return false; // Si no hay coordenadas, excluir del filtrado
            });
            setData(filteredData);
          } else {
            setData(fetchedData); // Si no hay ubicación, mostrar todos los datos
          }
        } else {
          console.error('Error: La API no devolvió un array.');
          setMessage('Error al cargar los datos.');
          setMessageType('error');
          setIsMessageModalOpen(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error al cargar los datos.');
        setMessageType('error');
        setIsMessageModalOpen(true);
      }
    };

    loadData();
  }, [selectedCategory, userLocation]); // Escuchar cambios en la categoría seleccionada o en la ubicación

  return (
    <div className="min-h-screen w-full m-0">
      <Hero />

      <div className="mt-8">
        
        <TitleSection title={categoryTitles[selectedCategory]} />

        {/* Mostrar los datos de la API en formato de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Card
              key={index}
              data={{
                title: item.title, // Título del lugar
                address: item.address, // Dirección
                organization: item.organization, // Organización
                accesibility: item.accesibility, // Accesibilidad
                services: item.services, // Servicios
                schedule: item.schedule, // Horario
                location: item.location, // Localización
                district: item.address?.district, // Distrito (extraído del address)
              }}
            />
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
