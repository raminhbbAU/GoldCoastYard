import React from "react";
import { Row, Col,DatePicker,TimePicker } from "antd";
import moment from 'moment'
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import {validateTestDriveRequestForm} from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { MainFormContainer, FormGroup, Span, ButtonContainer, Title, Detail, FormContainer } from "./styles";
import { CustomYellowButton } from "../../styles/styles";
import { setConstantValue } from "typescript";
import SpanInput from "../common/SpanInput";

const TestDriveRequestForm = ({ title, content, id, t,submitOnClick,specificColumnSize }: ContactProps) => {

  const today = new Date().toISOString().split('T')[0];

  const { values, errors, handleChange, handleSubmit,setErrors,setValues } = useForm(
    validateTestDriveRequestForm
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
    
    let error= validateTestDriveRequestForm(values);
    if (Object.keys(error).length == 0)
    {
      submitOnClick(values);
    }
    else
    {
      setErrors(error);
    }
    
    
  }

  const onChangeTime = (e: any) => {
    console.log(typeof e);
    console.log(e);
    //let selectedTime = e.format('HH:mm:ss')
    //console.log(selectedTime);

    // let customEvent: HTMLInputElement;
    // e.target.name = "time";

    //console.log(values);
    //console.log(typeof selectedTime);
    //console.log(selectedTime.toString());
    // console.log(e.target.name);

    //setValues({...values,time:selectedTime.toString()})

    console.log(values);

  };

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
                  <Input 
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={values.date || today}
                    onChange={handleChange}
                  />
                  <ValidationType type="date" />
            </Col>
            <Col lg={specificColumnSize || 8} md={specificColumnSize || 8} sm={24} xs={24}>
                  <Input
                    type="time"
                    name="time"
                    placeholder="Time"
                    value={values.time || "09:00"}
                    onChange={handleChange}
                  />
                  <ValidationType type="time" />
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

export default withTranslation()(TestDriveRequestForm);
