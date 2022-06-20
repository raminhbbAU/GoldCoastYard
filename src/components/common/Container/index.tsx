import React from "react";
import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border,marginTop,marginBottom, children }: ContainerProps) => (
  <StyledContainer border={border} marginTop={marginTop} marginBottom={marginBottom}>{children}</StyledContainer>
);

export default Container;
