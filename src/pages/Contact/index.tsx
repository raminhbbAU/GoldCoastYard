import { Col, Row } from "antd";
import React, { lazy, useState } from "react";
import { withTranslation } from "react-i18next";
import { SendEmail } from "../../API/api";
import Map from "../../components/common/Map";
import ContactForm from "../../components/ContactForm";
import FormSubmitResponse from "../../components/FormSubmitResponse";
import { AlternativeWayTitle, ContactFormContainer, EnquirePhone, EnquireTitle, LocationTitle, MainTitle, SaleDepartmentTitle, SalePhone, SalePhoneContainer, SubTitle, TitleContainer } from "./styles";
import parse from 'html-react-parser'

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Contact({ t }: any) {

    const [loading,setLoading] = useState(true);
    const [FormState,SetFormState] = useState(0);
    const [formItems,setFormItems] = useState();

    const onSubmitForm = (data:any) => {
      setFormItems(data);
      console.log(data);

      SendEmail("Contact Form","","","",data.title + ' ' + data.firstName + ' ' + data.lastName,data.email,data.phoneNumber,"",data.message,"","","","","","","","")
      .then ((res) => {
        console.log(res);
        SetFormState(1);
      }).catch ((err) => {
        console.log(err);
        SetFormState(2);
      })

    }


    return (
        <Container>
    
         {loading && (

            <>
              <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                  <TitleContainer>
                    <MainTitle>{t("ContactPage_MainTitle")}</MainTitle>
                    <SubTitle> {parse(t("ContactPage_SubTitle"))}</SubTitle>
                  </TitleContainer>
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={24} xs={24}>
                    
                    <LocationTitle>{t("ContactPage_LocationTitle")}</LocationTitle>
                    <SaleDepartmentTitle>{t("ContactPage_SaleDepartmentTitle")}</SaleDepartmentTitle>
                    <SalePhoneContainer>
                      <SalePhone>{t("ContactPage_SalePhone1")}</SalePhone>
                      <SalePhone>{t("ContactPage_SalePhone2")}</SalePhone>
                    </SalePhoneContainer>
                    <EnquireTitle>{t("ContactPage_EnquireTitle")}</EnquireTitle>
                    <EnquirePhone>{t("ContactPage_EnquirePhone")}</EnquirePhone>
                    <AlternativeWayTitle>{t("ContactPage_AlternativeWayTitle")}</AlternativeWayTitle>
                    <ContactFormContainer>

                      {FormState == 0 && (
                        <ContactForm id="ContactForm" title={""} content={""} specificColumnSize={24} submitOnClick = {(data:any) => onSubmitForm(data)} />
                      )}

                      {(FormState == 1 || FormState == 2) && (
                        <FormSubmitResponse id="submitResult" status={FormState == 1 ? true : false} title={t("ContactForm_ResultTitle")} subtile={t("ContactForm_ResultDescription")} buttonText={t("ContactForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
                      )}
                      
                    </ContactFormContainer>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Map></Map>
                </Col>
              </Row>
            </>

         )}

        </Container>
      );

}

export default withTranslation()(Contact);
