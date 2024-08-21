import { SpacerProps } from "@/types/Components/customTypes";
import React from "react";

const Spacer = ({ w, h }: SpacerProps) => {
  return <div className={`w-${w} h-${h}`}></div>;
};

export default Spacer;
