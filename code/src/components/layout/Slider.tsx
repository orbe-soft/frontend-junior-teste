"use client"

import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({images, height, width, navs}) => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={navs}
        style={{ objectFit: 'fill' }}
      />
    </div>
  );
}

export default Slider