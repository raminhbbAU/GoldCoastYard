import React from "react";
import { withTranslation } from "react-i18next";
import { Container, StyledSelect } from "./styles";
import { Label } from "../TextArea/styles";
import { SelectProps } from "../types";

const Select = ({ name,placeholder, onChange,itemList,value,objectField, t }: SelectProps) => (
  <Container>
    <StyledSelect name={name || "select"} value={value} onChange={onChange} required>
        <option value={""} disabled selected hidden>{placeholder}</option>
        {itemList && (
          itemList.map((item: any) => (
            <option value={objectField ? item[objectField] : item}>{objectField ? item[objectField] : item}</option>
          ))
        )}
    </StyledSelect>
  </Container>
);

export default withTranslation()(Select);
