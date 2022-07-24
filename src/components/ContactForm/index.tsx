import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import {validateContactForm} from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { MainFormContainer, FormGroup, Span, ButtonContainer, Title, Detail, FormContainer } from "./styles";
import { CustomYellowButton } from "../../styles/styles";

const ContactForm = ({ title, content, id, t,submitOnClick,specificColumnSize }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit,setErrors } = useForm(
    validateContactForm
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];

    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  const FormSubmit = (e:any) => {
    e.preventDefault();
    
    let error= validateContactForm(values);
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
      
      {title != "" && (
        <Row>
          <Title>
            {title}
          </Title>
        </Row>
      )}
      {content != "" && (
        <Row>
          <Detail>
            {content}
          </Detail>
        </Row>
      )}
      <FormGroup onSubmit={FormSubmit}>
        <FormContainer>
          
          <Row>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="title"
                    placeholder={t("ContactForm_TitlePlaceHolder")} 
                    value={values.title || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="title" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder={t("ContactForm_FirstNamePlaceHolder")} 
                    value={values.firstName || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="firstName" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="lastName"
                    placeholder={t("ContactForm_LastNamePlaceHolder")} 
                    value={values.lastName || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="lastName" />
            </Col>
          </Row>

          <Row>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="email"
                    placeholder={t("ContactForm_EmailPlaceHolder")} 
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="phoneNumber"
                    placeholder={t("ContactForm_PhonePlaceHolder")} 
                    value={values.phoneNumber || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="phoneNumber" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <TextArea
                    name="message"
                    placeholder={t("ContactForm_MessagePlaceHolder")} 
                    value={values.message || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="message" />
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
                  <ButtonContainer>
                      <CustomYellowButton width={"220px"} type="submit">
                        {t("ContactForm_Button")}
                      </CustomYellowButton>
                  </ButtonContainer>
            </Col>   
          </Row>

        </FormContainer>
        
      </FormGroup>


    </MainFormContainer>
  );
};

export default withTranslation()(ContactForm);
