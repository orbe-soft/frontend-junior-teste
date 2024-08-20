"use client"

import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({images, height, width}) => {
  return (
    <div className="m-auto">
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Slider