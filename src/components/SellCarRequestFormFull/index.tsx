import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import {validateSellCarRequestForm} from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { MainFormContainer, FormGroup, Span, ButtonContainer, Title, Detail, FormContainer } from "./styles";
import { CustomYellowButton } from "../../styles/styles";
import Select from "../common/Select";
import { CylinderTypeList, EnquiryTypeList, FuelTypeList, StateList } from "../../constant/constantDataset";

const SellCarRequestFormFull = ({ title, content, id, t,submitOnClick }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit,setErrors } = useForm(
    validateSellCarRequestForm
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
    
    let error= validateSellCarRequestForm(values);
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
                    name="fullName"
                    placeholder={t("SellCarRequestForm_FormFullName")} 
                    value={values.fullName || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="fullName" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                <Input
                    type="text"
                    name="phone"
                    placeholder={t("SellCarRequestForm_FormPhone")} 
                    value={values.phone || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="phone" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="email"
                    placeholder={t("SellCarRequestForm_FormEmail")} 
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
                    name="address"
                    placeholder={t("SellCarRequestForm_FormAddress")} 
                    value={values.address || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="address" />
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
                  <Input
                    type="text"
                    name="odometer"
                    placeholder={t("EvaluationForm_OdometerPlaceHolder")} 
                    value={values.odometer || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="odometer" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Input
                    type="text"
                    name="rego"
                    placeholder={t("SellCarRequestForm_RegoTitle")} 
                    value={values.rego || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="rego" />
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                  <Select
                    name="enquiry"
                    placeholder={t("SellCarRequestForm_FormEnquiry")} 
                    itemList = {EnquiryTypeList}
                    value={values.enquiry || ""}
                    onChange={handleChange} 
                  />
                  <ValidationType type="enquiry" />
            </Col>
          </Row>

          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <TextArea
                name="comments"
                placeholder={t("SellCarRequestForm_FormComments")} 
                value={values.comments || ""}
                onChange={handleChange}
              />
              <ValidationType type="comments" />
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

export default withTranslation()(SellCarRequestFormFull);
