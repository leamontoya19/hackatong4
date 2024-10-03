import React from 'react'; 
import Header from '../header/Header';
import NewsAlert from '../newsAlert/NewsAlert';
import MainImg from '../../assets/airport.png';

const Home = () => {
  return (
    <div>
      <Header />
      <NewsAlert />
      
      {/* Sección de imagen directamente después de NewsAlert */}
      

      {/* Contenedor para el texto "Sobre Nosotros" */}
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className=" lg:grid-cols-2 gap-1 items-center mb-5">

        <div data-aos="zoom-in" className="mt-20 flex justify-center">
        <img
          src={MainImg}
          alt="Imagen personas en aeropuerto"
          className="w-full max-w-screen-lg h-[480px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg"
        />
      </div>
          
          {/* Sección de texto centrada */}
          <div className="flex flex-col justify-center gap-6 text-center">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-3xl font-bold mt-9"
            >
              Encontrar. Aprender. Prosperar.
            </h1>
            <hr className="border-t-4 border-[#f05a40] mt-2 mb-3 mx-auto w-3/4" />

            <div
              data-aos="fade-up"
              className="text-sm tracking-wide leading-5"
            >
              <p
                className="mt-1 mx-12 text-gray-700 text-lg text-justify mb-6"
                style={{ textIndent: '2rem' }}
              >
                EASY SPAIN es una aplicación diseñada para facilitar la integración 
                de personas que acaban de llegar a un nuevo país. 
                Sabemos que el proceso de adaptación puede ser desafiante: desde navegar los trámites legales
                hasta encontrar servicios esenciales y familiarizarse con una nueva cultura e idioma. 
                Nuestra misión es acompañarte en cada paso del camino, 
                proporcionando una guía clara y recursos útiles para que tu transición sea lo más sencilla posible.
              </p>
            </div>
          </div>
          
          {/* Sección para agregar otra imagen o contenido si es necesario */}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
