import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import {validateServiceRequestForm} from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { MainFormContainer, FormGroup, Span, ButtonContainer, Title, Detail, FormContainer } from "./styles";
import { CustomYellowButton } from "../../styles/styles";

const ServiceRquestForm = ({ title, content, id, t,submitOnClick }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit,setErrors } = useForm(
    validateServiceRequestForm
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];

    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  const FormSubmit = (e:any) => 
  {
    e.preventDefault();
    
    let error= validateServiceRequestForm(values);
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
    <MainFormContainer id={id}>
      
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

      <FormGroup autoComplete="off" onSubmit={FormSubmit}>
        <FormContainer>
          
          <Row>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder={t("ServiceRequestForm_FirstNamePlaceHolder")} 
                    value={values.firstName || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="firstName" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="lastName"
                    placeholder={t("ServiceRequestForm_LastNamePlaceHolder")} 
                    value={values.lastName || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="lastName" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="email"
                    placeholder={t("ServiceRequestForm_EmailPlaceHolder")} 
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
            </Col>
          </Row>

          <Row>
            <Col lg={8} md={8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="phoneNumber"
                    placeholder={t("ServiceRequestForm_PhonePlaceHolder")} 
                    value={values.phoneNumber || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="phoneNumber" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="state"
                    placeholder={t("ServiceRequestForm_StatePlaceHolder")} 
                    value={values.state || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="state" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="description"
                    placeholder={t("ServiceRequestForm_DescriptionPlaceHolder")} 
                    value={values.description || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="description" />
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
                  <ButtonContainer>
                      <CustomYellowButton width={"220px"} type="submit">
                        {t("ServiceRequestForm_Button")}
                      </CustomYellowButton>
                  </ButtonContainer>
            </Col>   
          </Row>

        </FormContainer>
        
      </FormGroup>


    </MainFormContainer>
  );
};

export default withTranslation()(ServiceRquestForm);
