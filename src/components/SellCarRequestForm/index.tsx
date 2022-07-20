import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { Props, ValidationTypeProps } from "./types";
import { useForm } from "../../components/common/utils/useForm";
import {validateSellCarRequestForm} from "../../components/common/utils/validationRules";
import { Button } from "../../components/common/Button";
import Block from "../Block";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { SellCarRequestForContainer, FormGroup, Span, ButtonContainer, Title, Subtitle, FormContainer, VehicleContainer,CarThumbnailImage, VehicleDetailTitle, VehicleDetailValue } from "./styles";
import { CustomYellowButton } from "../../styles/styles";
import Container from "../common/Container";
import {WarningFilled} from '@ant-design/icons';

const SellCarRequestForm = ({ id,title,content,requestValues,submitOnClick,t }: Props) => {

  const { values, errors, handleChange, handleSubmit,setErrors } = useForm(validateSellCarRequestForm) as any;
  const [carImage,setCarImage] = useState(process.env.PUBLIC_URL + `/img/gallery/placeholderCar.png`);
  const [carModel,setCarModel] = useState("Unknown");
  const [carEstimatedValue,setCarEstimatedValue] = useState("Not Available");

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];

    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  const sellCarRequestFormSubmit = (e:any) => {
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

  const WarningItems = t("SellCarRequestForm_WarningList", { returnObjects: true }).map((item:any) => {
    return (
      <Row>
        <Col lg={3} md={3} sm={3} xs={3}>
          <WarningFilled color="#cccccc"/>
        </Col>
        <Col lg={21} md={21} sm={21} xs={21}>
          <Subtitle textAlign="Left">{item.title}</Subtitle>
        </Col>
      </Row>
    )
  })

  return (
    <SellCarRequestForContainer id={id}>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <VehicleContainer>
            <Title>{t("SellCarRequestForm_VehicleTitle")} </Title>
            <Subtitle>{t("SellCarRequestForm_VehicleDesc")} </Subtitle>
            <Container border={true} marginBottom={"15px"} />
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <CarThumbnailImage src={carImage} border={false}  />
                <VehicleDetailValue textAlign="center">{t("SellCarRequestForm_ImageSubTitle")}</VehicleDetailValue>
              </Col>
              <Col lg={18} md={18} sm={18} xs={18}>
                  <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                       <VehicleDetailTitle>{t("SellCarRequestForm_RegoTitle")}</VehicleDetailTitle>
                    </Col>
                    <Col lg={18} md={18} sm={17} xs={18}>
                      <VehicleDetailValue textAlign="left">{requestValues.rego}</VehicleDetailValue>
                    </Col>          
                  </Row>
                  <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                       <VehicleDetailTitle>{t("SellCarRequestForm_ModelTitle")}</VehicleDetailTitle>
                    </Col>
                    <Col lg={18} md={18} sm={17} xs={18}>
                      <VehicleDetailValue textAlign="left">{carModel}</VehicleDetailValue>
                    </Col>          
                  </Row>
                  <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                       <VehicleDetailTitle>{t("SellCarRequestForm_ValueTitle")}</VehicleDetailTitle>
                    </Col>
                    <Col lg={18} md={18} sm={17} xs={18}>
                      <VehicleDetailValue textAlign="left">{carEstimatedValue}</VehicleDetailValue>
                    </Col>          
                  </Row>
              </Col>
            </Row>
            <Container marginBottom={"20px"} />
            <Title>{t("SellCarRequestForm_WarningTitle")} </Title>
            <>
              {WarningItems}
            </>
            
          </VehicleContainer>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <FormContainer>
            <Title>{t("SellCarRequestForm_FormTitle")}</Title>
            <Subtitle>{t("SellCarRequestForm_FormDesc")}</Subtitle>
            <Container border={true} marginBottom={"15px"} />
            <Row>
              <FormGroup onSubmit={sellCarRequestFormSubmit}>
                  <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <Input
                      type="text"
                      name="fullName"
                      placeholder={t("SellCarRequestForm_FormFullName")} 
                      value={values.fullName || ""}
                      onChange={handleChange}
                      />
                      <ValidationType type="fullName" />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
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
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <Input
                      type="text"
                      name="phone"
                      placeholder={t("SellCarRequestForm_FormPhone")} 
                      value={values.phone || ""}
                      onChange={handleChange}
                      />
                      <ValidationType type="phone" />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <Input
                      type="text"
                      name="condition"
                      placeholder={t("SellCarRequestForm_FormCondition")} 
                      value={values.condition || ""}
                      onChange={handleChange}
                      />
                      <ValidationType type="condition" />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <ButtonContainer>
                        <CustomYellowButton width={"auto"} type="submit">
                          {t("SellCarRequestForm_SubmitButton")}
                        </CustomYellowButton>
                      </ButtonContainer>
                    </Col>
                  </Row>
              </FormGroup>
            </Row>
          </FormContainer>
        </Col>
      </Row>

    </SellCarRequestForContainer>
  );
};

export default withTranslation()(SellCarRequestForm);
