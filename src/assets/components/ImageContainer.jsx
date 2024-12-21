import { useState, useEffect } from "react";

// Import Images
import animal1 from "./../animals (1).jpg";
import animal2 from "./../animals (2).jpg";
import animal3 from "./../animals (3).jpg";
import animal4 from "./../animals (4).jpg";
import animal5 from "./../animals (5).jpg";
import animal6 from "./../animals (6).jpg";
import animal7 from "./../animals (7).jpg";
import animal8 from "./../animals (8).jpg";
import animal9 from "./../animals (9).jpg";
import animal10 from "./../animals (10).jpg";
import animal11 from "./../animals (11).jpg";
import animal12 from "./../animals (12).jpg";
import animal13 from "./../animals (13).jpg";
import animal14 from "./../animals (14).jpg";
import animal15 from "./../animals (15).jpg";
import animal16 from "./../animals (16).jpg";
import animal17 from "./../animals (17).jpg";

const images = [
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6,
  animal7,
  animal8,
  animal9,
  animal10,
  animal11,
  animal12,
  animal13,
  animal14,
  animal15,
  animal16,
  animal17
];

const ImageContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-64 md:h-96 overflow-hidden relative bg-gradient-to-r from-[#7c3aed] to-[#facc15] rounded-xl shadow-lg">
      {/* Images */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        />
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white p-2 rounded-full shadow-md transition-all"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white p-2 rounded-full shadow-md transition-all"
      >
        &#8594;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white shadow-md scale-125 border-2 border-[#7c3aed]"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
