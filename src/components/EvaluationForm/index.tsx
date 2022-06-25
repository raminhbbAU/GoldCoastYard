import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import validate from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer, Title, Detail } from "./styles";

const EvaluationForm = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>

      <Row>
        <Title>
          {title}
        </Title>
      </Row>
      <Row>
        <Detail>
          {content}
        </Detail>
      </Row>
      <FormGroup autoComplete="off" onSubmit={handleSubmit}>
        <Row >
          <Col lg={6} md={8} sm={12} xs={24}>
                <Input
                  type="text"
                  name="rego"
                  placeholder="Enter Rego"
                  value={values.rego || ""}
                  onChange={handleChange}
                />
                <ValidationType type="rego" />
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
              <Input
                  type="text"
                  name="state"
                  placeholder="Enter State"
                  value={values.state || ""}
                  onChange={handleChange}
                />
                <ValidationType type="rego" />
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Input
                    type="text"
                    name="odometer"
                    placeholder="Enter Odometer"
                    value={values.odometer || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="rego" />
            </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
          </Col>       
          </Row>
        </FormGroup>

    </ContactContainer>
  );
};

export default withTranslation()(EvaluationForm);
