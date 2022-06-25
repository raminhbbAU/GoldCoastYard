import React from "react";
import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  //<img src={`./img/svg/${src}`} alt={src} width={width} height={height} />
  <img src={process.env.PUBLIC_URL + `/img/svg/${src}`} alt={src} width={width} height={height} />
);
