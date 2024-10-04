import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import imagen1 from '../../assets/slider/airport2.png';
import imagen2 from '../../assets/airport.png';
import imagen3 from '../../assets/slider/learning1.png';

const imageUrls = [imagen1, imagen2, imagen3];

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
    height: "500px",
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
            className={`style={{ width: '0.01px', height: '0.01px' }} mx-1 rounded-full bg-[#0B67BE] ${
              index === currentIndex ? "bg-gray-300" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
export { imageUrls };
