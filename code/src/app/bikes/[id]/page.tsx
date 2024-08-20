import Slider from "@/components/layout/Slider";
import { getSingleBike } from "@/services/bike";
import {
  formatToBRL,
  getInstallments,
  percentageDiscount,
} from "@/utils/formatters";
import React from "react";

const BikeDetails = async ({ params }) => {
  const { id } = params;

  const bike = await getSingleBike(id);

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 15) + 1;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-red-200 h-[100dvh]">
      <div className="flex items-center w-[95dvw] m-auto">
        <div className="flex-1">
          <Slider images={bike?.images} width={500} height={380} />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <header>
            <h3>Vendido e entregue por BikeStore</h3>
          </header>
          <h1>Bicicleta {bike?.name}</h1>
          <h2>Por: {formatToBRL(bike?.price)}</h2>
          <h2>
            Em até 8X de {getInstallments(bike?.price)} sem juros no cartão de
            crédito!
          </h2>
          <h2>À vista no pix por apenas: {percentageDiscount(bike?.price)}</h2>

          <h4>Apenas {generateRandomNumber()} restantes no estoque !</h4>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
