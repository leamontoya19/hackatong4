import React from 'react';

const Card = ({ data }) => {
  // Desestructuramos los datos relevantes que pueden venir de la API
  const {
    title,
    address,
    organization,
    accesibility,
    services,
    schedule,
    location,
  } = data;

  return (
    <div className='border rounded-lg p-4 m-4 shadow-md bg-gray-100 max-w-sm'>
      <h3 className='text-xl font-bold mb-2'>
        {title || 'Sin título disponible'}
      </h3>

      {address && (
        <p className='text-gray-700'>
          <strong>Dirección:</strong>{' '}
          {address['street-address'] || 'No disponible'}
        </p>
      )}

      {organization && (
        <p className='text-gray-700'>
          <strong>Organización:</strong>{' '}
          {organization['organization-name'] || 'No disponible'}
        </p>
      )}

      {accesibility && (
        <p className='text-gray-700'>
          <strong>Accesibilidad:</strong> {accesibility || 'No especificada'}
        </p>
      )}

      {services && (
        <p className='text-gray-700'>
          <strong>Servicios:</strong> {services || 'No especificado'}
        </p>
      )}

      {schedule && (
        <p className='text-gray-700'>
          <strong>Horario:</strong> {schedule || 'No disponible'}
        </p>
      )}

      {location && (
        <p className='text-gray-700'>
          <strong>Coordenadas:</strong> {location.latitude},{' '}
          {location.longitude}
        </p>
      )}
    </div>
  );
};

export default Card;
