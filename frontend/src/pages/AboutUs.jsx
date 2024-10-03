import React from 'react';

function AboutUs() {
  return (
    <div
      className='min-h-screen flex flex-col justify-between'
      style={{
        background: 'linear-gradient(180deg, #F5F5F5 0%, #E3D5D5 100%)',
      }}
    >
      <section className='flex-grow py-12 flex items-center justify-center'>
        <div className='text-center p-14'>
          <h1 className='text-6xl font-bold text-purple-600'>EasySpain</h1>
          <h2 className='text-4xl font-semibold text-purple-600 mt-6'>
            Conéctate con Nosotros
          </h2>
          <p className='text-lg mt-12'>
            Estamos aquí para ayudarte. ¿Tienes alguna pregunta? ¡Contáctanos!
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
