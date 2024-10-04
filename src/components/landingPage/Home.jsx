import React from 'react';  
import Header from '../header/Header';
import NewsAlert from '../newsAlert/NewsAlert';
import MainImg from '../../assets/airport.png';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';

const Home = () => {
  return (
    <div>
      <Header />
      <NewsAlert />
      <Carousel/>


      {/* Contenedor para el texto "Sobre Nosotros" */}
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[108vh]">
        <div className="lg:grid-cols-2 gap-1 items-center mb-5">

          {/* <div data-aos="zoom-in" className="mt-20 flex justify-center">
            <img
              src={MainImg}
              alt="Imagen personas en aeropuerto"
              className="w-full h-[480px] drop-shadow-lg object-cover rounded-lg"
            />
          </div> */}

          <div className="flex flex-col justify-center gap-6 text-center">
            <h1 data-aos="fade-up" className="text-3xl sm:text-3xl font-bold mt-9">
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
                Somos un centro en línea con información y educación disponible para refugiados, solicitantes de asilo e inmigrantes en general.
                Sabemos que el proceso de adaptación puede ser desafiante: desde navegar los trámites legales hasta encontrar servicios esenciales y familiarizarse con una nueva cultura e idioma. 
              </p>
            </div>
          </div>
        </div>

        {/* Sección para clases en línea */}
        <div className="bg-white text-center py-10">
          <h3 className="text-3xl font-bold my-4">Tome una clase gratuita en línea</h3>
          <p className="mx-auto text-lg mt-0 mb-5 max-w-2xl">
            Easy Spain ofrece clases en muchos idiomas. Nuestras clases lo preparan para los exámenes DELE
            <sup className="text-xs">®</sup> y para el examen para la nacionalidad española. 
            <span className="block md:hidden">Aprenda en cualquier lugar, en cualquier momento y estudie a su propio ritmo.</span>
          </p>
          
          <div className="hidden md:flex justify-center gap-10">
            <div className="flex flex-col items-center max-w-xs">
              <div
                className="w-20 h-20 mb-4 bg-no-repeat bg-center"
                style={{ backgroundImage: 'url(https://usahello.org/wp-content/plugins/hello-tools/public/dist/img/icon-laptop.png)' }}
              ></div>
              <h6 className="text-xl font-bold mb-2">Aprenda en cualquier lugar</h6>
              <p className="text-gray-600">Estudie con su teléfono o una computadora. Aprenda en cualquier momento, donde sea que esté.</p>
            </div>
            
            <div className="flex flex-col items-center max-w-xs">
              <div
                className="w-20 h-20 mb-4 bg-no-repeat bg-center"
                style={{ backgroundImage: 'url(https://usahello.org/wp-content/plugins/hello-tools/public/dist/img/icon-calendar.png)' }}
              ></div>
              <h6 className="text-xl font-bold mb-2">Fácil de usar</h6>
              <p className="text-gray-600">Vaya a su propio ritmo. Lea las lecciones y tome pruebas cortas (quizzes) tantas veces como desee.</p>
            </div>

            <div className="flex flex-col items-center max-w-xs">
              <div
                className="w-20 h-20 mb-4 bg-no-repeat bg-center"
                style={{ backgroundImage: 'url(https://usahello.org/wp-content/plugins/hello-tools/public/dist/img/icon-student.png)' }}
              ></div>
              <h6 className="text-xl font-bold mb-2">Creadas para usted</h6>
              <p className="text-gray-600">Nuestras clases fueron creadas para los aprendices de inglés.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
