import React from 'react';
import Card from './Card';

const DataDisplay = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No hay resultados para mostrar.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Resultados:</h2>
      <div style={styles.cardContainer}>
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title || item.name} // Algunas APIs usan 'title' o 'name'
            description={item.description || 'Sin descripción disponible'}
            address={item.address?.streetAddress}
            phone={item.phone}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
};

export default DataDisplay;
