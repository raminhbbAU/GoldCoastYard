import React from "react";
import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ id,border,marginTop,marginBottom,backgroundColor, children }: ContainerProps) => (
  <StyledContainer id={id} border={border} marginTop={marginTop} marginBottom={marginBottom} backgroundColor={backgroundColor}>{children}</StyledContainer>
);

export default Container;
