import React from "react";
import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border,marginTop,marginBottom,backgroundColor, children }: ContainerProps) => (
  <StyledContainer border={border} marginTop={marginTop} marginBottom={marginBottom} backgroundColor={backgroundColor}>{children}</StyledContainer>
);

export default Container;
