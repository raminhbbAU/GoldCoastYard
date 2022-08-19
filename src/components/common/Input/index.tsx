import React from "react";
import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange,withTitle,type, t }: InputProps) => (
  <Container>
    {withTitle && (
      <Label htmlFor={name}>{t(name)}</Label>
    )}   
    <StyledInput
      type = {type}
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
