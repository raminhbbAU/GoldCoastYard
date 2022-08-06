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
import Select from "../common/Select";
import { CylinderTypeList, FuelTypeList, StateList } from "../../constant/constantDataset";

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
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{t("InsuranceRequestForm_Category1Title")} </Title>
            </Col>
          </Row>

          <Row>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t("ServiceRequestForm_NamePlaceHolder")} 
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
            </Col>
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
                    name="email"
                    placeholder={t("ServiceRequestForm_EmailPlaceHolder")} 
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
            </Col>
          </Row>

          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{t("InsuranceRequestForm_Category2Title")} </Title>
            </Col>
          </Row>

          <Row>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="make"
                    placeholder={t("ServiceRequestForm_MakePlaceHolder")} 
                    value={values.make || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="make" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="model"
                    placeholder={t("ServiceRequestForm_ModelPlaceHolder")} 
                    value={values.model || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="model" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="year"
                    placeholder={t("ServiceRequestForm_YearPlaceHolder")} 
                    value={values.year || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="year" />
            </Col>
          </Row>

          <Row>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Select
                    name="cylinders"
                    placeholder={t("InsuranceRequestForm_CylindersPlaceHolder")} 
                    itemList = {CylinderTypeList}
                    value={values.cylinders || ""}
                    onChange={handleChange} 
                  />
                  <ValidationType type="cylinders" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Select
                    name="fuel"
                    placeholder={t("InsuranceRequestForm_FuelPlaceHolder")} 
                    itemList = {FuelTypeList}
                    value={values.fuel || ""}
                    onChange={handleChange} 
                  />
                  <ValidationType type="fuel" />
            </Col>
            {/* <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="odometer"
                    placeholder={t("ServiceRequestForm_odometerPlaceHolder")} 
                    value={values.odometer || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="odometer" />
            </Col> */}
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
