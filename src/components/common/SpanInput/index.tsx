import React from "react";
import { withTranslation } from "react-i18next";
import { Container, StyledSpanInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const SpanInput = ({ name, placeholder, onChange,withTitle,type, t }: InputProps) => (
  <Container>
    {withTitle && (
      <Label htmlFor={name}>{t(name)}</Label>
    )}   
    <StyledSpanInput
      role={type || "textbox"} 
      placeholder={t(placeholder)}
      id={name}
      onChange={onChange}
      contentEditable={true}
    />
  </Container>
);

export default withTranslation()(SpanInput);
