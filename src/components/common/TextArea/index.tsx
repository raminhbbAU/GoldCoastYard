import React from "react";
import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange,withTitle, t }: InputProps) => (
  <StyledContainer>
    {withTitle && (
      <Label htmlFor={name}>{t(name)}</Label>
    )}   
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default withTranslation()(TextArea);
