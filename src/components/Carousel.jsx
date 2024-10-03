import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Importar las imágenes locales
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const imageUrls = [image1, image2, image3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNextSlide]);

  const slideStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${imageUrls[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 6s ease-in-out",
  };

  return (
    <div className="relative">
      <div
        id="carousel-slide"
        className="flex justify-center items-center"
        style={slideStyle}
      >
        {/* Navigation buttons */}
        <button
          id="prev-slide"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-bolder lg:text-2xl md:text-lg sm:text-xs p-2 rounded-full hover:bg-opacity-80 hover:text-[#BBBC4E] focus:outline-none"
          onClick={handlePrevSlide}
        >
          <FiArrowLeft />
        </button>
        <button
          id="next-slide"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white  text-bolder lg:text-2xl md:text-lg sm:text-xs p-2 rounded-full hover:bg-opacity-80 hover:text-[#BBBC4E] focus:outline-none"
          onClick={handleNextSlide}
        >
          <FiArrowRight />
        </button>
      </div>
      {/* Indicators */}
      <div id="indicators" className="flex justify-center mt-2">
        {imageUrls.map((url, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full bg-gray-800 ${
              index === currentIndex ? "bg-lime-600" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
