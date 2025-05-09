"use client";

import React from "react";
import Lottie from "react-lottie";

import animationData from "./../../../public/bike.json";

export default function Load() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Lottie options={defaultOptions} width={300} isClickToPauseDisabled />
    </div>
  );
}
