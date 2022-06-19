import React from "react";
import { SvgIconProps } from "../types";

export const PngImage = ({ src, width, height }: SvgIconProps) => (
  <img src={`./img/gallery/${src}`} alt={src} width={width} height={height} />
);
