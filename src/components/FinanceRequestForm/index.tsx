import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import {validateFinanceRequestForm} from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { MainFormContainer, FormGroup, Span, ButtonContainer, Title, Detail, FormContainer } from "./styles";
import { CustomYellowButton } from "../../styles/styles";
import Select from "../common/Select";
import { EmploymentTypeList, StateList } from "../../constant/constantDataset";

const FinanceRquestForm = ({ title, content, id, t,submitOnClick,specificColumnSize }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit,setErrors } = useForm(
    validateFinanceRequestForm
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
    
    let error= validateFinanceRequestForm(values);
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
      {content && (
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
                    name="firstName"
                    placeholder={t("FinanceRequestForm_FirstNamePlaceHolder")} 
                    value={values.firstName || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="firstName" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="lastName"
                    placeholder={t("FinanceRequestForm_LastNamePlaceHolder")} 
                    value={values.lastName || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="lastName" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="email"
                    placeholder={t("FinanceRequestForm_EmailPlaceHolder")} 
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
            </Col>
          </Row>

          <Row>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="phoneNumber"
                    placeholder={t("FinanceRequestForm_PhonePlaceHolder")} 
                    value={values.phoneNumber || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="phoneNumber" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <Select
                    name="state"
                    placeholder={t("FinanceRequestForm_StatePlaceHolder")} 
                    itemList = {StateList}
                    value={values.state || ""}
                    onChange={handleChange} 
                  />
                  <ValidationType type="state" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <Select
                    name="employment"
                    placeholder={t("FinanceRequestForm_EmploymentStatusPlaceHolder")} 
                    itemList = {EmploymentTypeList}
                    value={values.employment || ""}
                    onChange={handleChange} 
                  />
                  <ValidationType type="employment" />
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}> 
                  <ButtonContainer>
                      <CustomYellowButton width={"220px"} type="submit">
                        {t("FinanceRequestForm_Button")}
                      </CustomYellowButton>
                  </ButtonContainer>
            </Col>   
          </Row>


        </FormContainer>
        
      </FormGroup>


    </MainFormContainer>
  );
};

export default withTranslation()(FinanceRquestForm);
