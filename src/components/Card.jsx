import React from 'react';

// El componente Card recibe props y muestra la información
const Card = ({ title, description, address, phone }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      {address && <p><strong>Dirección:</strong> {address}</p>}
      {phone && <p><strong>Teléfono:</strong> {phone}</p>}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9',
  },
};

export default Card;
