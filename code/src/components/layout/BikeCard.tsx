"use client";

import Image from "next/image";
import { useState } from "react";

interface Bike {
  id: number;
  name: string;
  description: string;
}

const BikeCard = ({ bike }: { bike: Bike }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bike.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bike.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-gray-300 flex flex-col items-center justify-center w-[350px]">
      <h1>{bike.name}</h1>
      <p>{bike.description}</p>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <Image
        src={bike.images[currentIndex].url}
        width={250}
        height={250}
        alt={`Imagem da bicicleta ${bike.name}`}
      />
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default BikeCard;
