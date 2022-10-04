import { Col, Modal, Row } from "antd";
import React, { lazy, useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { SendEmail } from "../../API/api";
import Map from "../../components/common/Map";
import ContactForm from "../../components/ContactForm";
import FormSubmitResponse from "../../components/FormSubmitResponse";
import { AlternativeWayTitle, ContactFormContainer, EnquirePhone, EnquireTitle, LocationTitle, MainTitle, MapContainer, SaleDepartmentTitle, SalePhone, SalePhoneContainer, SubTitle, TitleContainer } from "./styles";
import parse from 'html-react-parser'
import useEnvVarLoader, { EnvVarLoader } from "../../service/environmentvariable.loader";
import { facebookPixelFBQ } from "../../service/facebookpixel.tracer";
import { scrollTo } from "../../service/utility.service";
import {WarningFilled } from '@ant-design/icons';
import { IllegalWarningLine1, IllegalWarningLine2, IllegalWarningLine3 } from "../Home/styles";


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

interface FormProps {
  visible: boolean;
  onSubmit: (values: any) => void;
  onCancel: () => void;
}


function Contact({ t }: any) {

    const [loading,setLoading] = useState(true);
    const [FormState,SetFormState] = useState(0);
    const [formItems,setFormItems] = useState();
    const [validLicence,setValidLicence] = useState(true);
    // const [pixelID] = useEnvVarLoader("FACEBOOK_PIXEL_ID");

    useEffect(() => {  
      scrollTo("ContactMainContainer");
      facebookPixelFBQ('ContactPage_Visit');

      const date1:any = new Date();
      const date2:any = new Date('2022/10/05');
      const diffTime:any = date2 - date1;
      if (diffTime <=0) {
        setValidLicence(false);
      }

    }, []);


    const onSubmitForm = (data:any) => {
      setFormItems(data);

      facebookPixelFBQ('ContactPage_SubmitContactForm');

      SendEmail("Contact Form","","","",data.title + ' ' + data.firstName + ' ' + data.lastName,data.email,data.phoneNumber,"",data.message,"","","","","","","","","","")
      .then ((res) => {
        console.log(res);
        SetFormState(1);
      }).catch ((err) => {
        console.log(err);
        SetFormState(2);
      })

    }


    const IllegalUsedialog: React.FC<FormProps> = ({visible,onSubmit,onCancel}) => {

      return (
          <Modal
              visible={visible}
              onCancel={onCancel}
              cancelButtonProps={{ style: { display: 'none' } }}
              okText={"I got it"}
              onOk= {onSubmit}
          >
             
             <div>
                <WarningFilled style={{ fontSize: '24px', color: 'red' }} />
                <IllegalWarningLine1></IllegalWarningLine1>
                <IllegalWarningLine2>{t("IllegalWarningLine4")}</IllegalWarningLine2>
                <IllegalWarningLine3>{t("IllegalWarningLine5")}</IllegalWarningLine3>
              </div> 
  
          </Modal>
      )
    }

    return (
        <Container id={"ContactMainContainer"}>
    
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
                    <MapContainer>
                      <Map/>
                    </MapContainer>
                </Col>
              </Row>
            </>

         )}


        <IllegalUsedialog
          visible={!validLicence}
          onSubmit={() => setValidLicence(true)}
          onCancel={() => setValidLicence(true)}
        />

        </Container>
      );

}

export default withTranslation()(Contact);
