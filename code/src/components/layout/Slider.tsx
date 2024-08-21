"use client";

import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  images: string[];
  height: number;
  width: number;
  navs: boolean;
}

const Slider = ({ images, height, width, navs }: Props) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={navs}
        style={{ objectFit: "fill" }}
      />
    </div>
  );
};

export default Slider;
