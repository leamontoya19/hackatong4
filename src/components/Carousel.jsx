import React from 'react';
import Card from './Card';

const Carousel = ({ items }) => {
  return (
    <div className="flex overflow-x-auto p-4">
      {items.map((item, index) => (
        <Card key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Carousel;