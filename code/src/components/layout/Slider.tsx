"use client";

import { ImageProps } from "@/types/bikeTypes";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  images: ImageProps[];
  height: number;
  width: number;
}

const Slider = ({ images, height, width }: Props) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={false}
        showNavs={true}
        style={{ objectFit: "fill" }}
      />
    </div>
  );
};

export default Slider;
