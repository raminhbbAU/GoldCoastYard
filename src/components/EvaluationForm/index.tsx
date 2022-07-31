import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import {validateEvaluationForm} from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { EvaluationFormContainer, FormGroup, Span, ButtonContainer, Title, Detail, FormContainer } from "./styles";
import { CustomYellowButton } from "../../styles/styles";
import Select from "../common/Select";
import { StateList } from "../../constant/constantDataset";

const EvaluationForm = ({ title, content, id, t,submitOnClick }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit,setErrors } = useForm(
    validateEvaluationForm
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];

    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  const evaluationFormSubmit = (e:any) => {
    e.preventDefault();
    
    let error= validateEvaluationForm(values);
    if (Object.keys(error).length == 0)
    {
      submitOnClick(values);
    }
    else
    {
      setErrors(error);
    }
    
    
  }

  return (
    <EvaluationFormContainer id={id}>
      
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

      <FormGroup onSubmit={evaluationFormSubmit}>
        <FormContainer>
          <Row >
            <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    type="text"
                    name="rego"
                    placeholder={t("EvaluationForm_RegoPlaceHolder")} 
                    value={values.rego || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="rego" />
            </Col>
            <Col lg={6} md={8} sm={12} xs={24}>
                  <Select
                    name="state"
                    placeholder={t("EvaluationForm_StatePlaceHolder")} 
                    itemList = {StateList}
                    value={values.state || ""}
                    onChange={handleChange} 
                  />
                  <ValidationType type="state" />
            </Col>
            <Col lg={6} md={8} sm={12} xs={24}>
              <Input
                      type="text"
                      name="odometer"
                      placeholder={t("EvaluationForm_OdometerPlaceHolder")} 
                      value={values.odometer || ""}
                      onChange={handleChange}
                    />
                    <ValidationType type="odometer" />
              </Col>
            <Col lg={6} md={8} sm={12} xs={24}>
                <ButtonContainer>
                    <CustomYellowButton width={"220px"} type="submit">
                      {t("EvaluationForm_EvaluateButton")}
                    </CustomYellowButton>
                </ButtonContainer>
            </Col>       
          </Row>
        </FormContainer>
      </FormGroup>


    </EvaluationFormContainer>
  );
};

export default withTranslation()(EvaluationForm);
