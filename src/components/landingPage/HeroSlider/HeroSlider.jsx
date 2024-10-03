// HeroSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css'; // Importa estilos de Swiper
import './HeroSlider.css'; // Importa tu CSS personalizado

const slides = [
  {
    img: "https://usahello.org/wp-content/uploads/2023/05/new-american-citizen.jpg",
    title: "Encontrar. Aprender. Prosperar.",
    text: "Un centro en línea con información y educación disponible para refugiados, solicitantes de asilo, inmigrantes y las comunidades que les han dado la bienvenida. Para más información, por favor vea este video.",
  },
  {
    img: "https://usahello.org/wp-content/uploads/2020/09/man-reading-phone-smiling.jpg",
    title: "Descubre Nuevas Oportunidades",
    text: "Conéctate con recursos valiosos que pueden ayudarte en tu camino hacia el éxito.",
  },
  {
    img: "https://usahello.org/wp-content/uploads/2020/09/older-women-smiling-class.jpg",
    title: "Comunidad y Apoyo",
    text: "Únete a una comunidad que comparte tus desafíos y celebra tus logros.",
  },
  {
    img: "https://usahello.org/wp-content/uploads/2020/09/girl-focusing-on-project.jpg",
    title: "Educación A Tu Alcance",
    text: "Accede a programas educativos que te empoderan y te preparan para el futuro.",
  },
  {
    img: "https://usahello.org/wp-content/uploads/2020/09/woman-showing-man-phone.jpg",
    title: "Tecnología para el Futuro",
    text: "Explora herramientas tecnológicas que facilitan tu vida diaria.",
  },
];

const HeroSlider = () => {
  return (
    <section className="hello-hero hello-block--fullwidth">
      <div className="position-relative">
        <Swiper
          className="hello-hero__carousel h-100"
          loop={true}
          fadeEffect={{ crossFade: true }}
          effect="fade"
          pagination={{ clickable: true }}
          navigation
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="hello-hero__background-image image-cover d-block w-full h-full" style={{ backgroundImage: `url(${slide.img})` }}>
              <span className="hello-hero__gradient hello-gradient d-block w-full h-full position-absolute"></span>
              <div className="hello-hero__content-container hello-flex justify-center items-center position-relative px-3 h-full">
                <div className="hello-text--white py-3 py-md-5 py-lg-7 hello-grid w-full text-center">
                  <h1 className="hello-hero__home-short-title mb-4">{slide.title}</h1>
                  <p className="mb-3">
                    {slide.text} <span className="text-white hello-pointer underline">Para más información, por favor vea este video.</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
