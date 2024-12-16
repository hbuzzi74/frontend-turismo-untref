import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageDescriptions = [
    "Disfruta de nuestro Balneario Municipal",
    "Las mejores Actividades y Deportes",
    "También contamos con los mejores hospedajes",
    "Y por supuesto una excelente gastronomía"
  ];

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[680px] border-4 border-green-900 rounded-lg overflow-hidden">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          onChange={handleChange}
          showStatus={false}
        >
          <div className="flex items-center justify-center bg-gray-100 h-[400px]">
            <img src="images/balneario.jpg" alt="Balneario Municipal" className="object-cover h-full w-full" />
          </div>
          <div className="flex items-center justify-center bg-gray-100 h-[400px]">
            <img src="images/deportes.jpg" alt="Actividades y Deportes" className="object-cover h-full w-full" />
          </div>
          <div className="flex items-center justify-center bg-gray-100 h-[400px]">
            <img src="images/hospedajes.jpg" alt="Hospedajes" className="object-cover h-full w-full" />
          </div>
          <div className="flex items-center justify-center bg-gray-100 h-[400px]">
            <img src="images/Gastronomia.jpg" alt="Gastronomía" className="object-cover h-full w-full" />
          </div>
        </Carousel>
      </div>
      <div className="w-1/3 flex items-center justify-center ml-4">
        <p className="text-4xl font-bold text-white text-center leading-tight drop-shadow-lg font-sans">
          {imageDescriptions[currentSlide]}
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
