import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importar ícones

const videos = [
  'https://www.youtube.com/embed/b8d-qucZ3yg',
  'https://www.youtube.com/embed/JwBTERHMFXc',
  'https://www.youtube.com/embed/Ds6D5jpTalI',
  'https://www.youtube.com/embed/p-z6_EUNV6g',
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, videos.length - 3) : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= videos.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div id="videos" className="relative max-w-6xl mx-auto mt-10">
    <div className="flex overflow-hidden relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 hover:bg-gray-500"
      >
        <FaChevronLeft />
      </button>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {videos.map((video, index) => (
          <div key={index} className="w-1/3 p-4 mb-16"> {/* Adicionando a classe `mb-6` aqui */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <iframe
                className="w-full h-64"
                src={video}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 hover:bg-gray-500"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>  
  );
};

export default VideoCarousel;
