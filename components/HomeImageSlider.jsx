"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://i.ibb.co/FLprgySw/14.webp",
  "https://i.ibb.co/TMmBc7Wn/43.webp",
  "https://i.ibb.co/Y4Xy0SNB/41.webp",
  "https://i.ibb.co/whFC7Gk3/49.webp" // Add as many as you want
];

const HomeImageSlider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-70" : "opacity-0"
          } brightness-75`}
        />
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>

      {/* Optional Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImageSlider;
