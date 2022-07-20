import { Col, Row } from "antd";
import React, { lazy, useState } from "react";
import { withTranslation } from "react-i18next";
import FormSubmitResponse from "../../components/FormSubmitResponse";
import InsuranceRquestForm from "../../components/InsuranceRequestForm";
import { CardSection, Description, HaedLine, MainContainer, ServiceContainers, Title } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Insurance({ t }: any) {

  const [FormState,SetFormState] = useState(0);
  const [formItems,setFormItems] = useState();

  const onSubmitForm = (data:any) => {
    setFormItems(data);
    SetFormState(1);
  }

  return (
    <Container>

       {/* <ScrollToTop /> */}
       
       <ContentBlock
        type= "full"
        title={t("InsurancePage_BannerTitle")}
        content={t("InsurancePage_BannerDescription")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner06.jpg'}
        button={t("InsurancePage_BannerButton", { returnObjects: true })}
        id="Insurance"
      />    

      <MainContainer>

        <HaedLine>
          {t("InsurancePage_Overview_Headline")}
        </HaedLine>

        <ServiceContainers>

          <Row>

            <Col lg={8} md={8} sm={12} xs={24}>
                <CardSection>
                  <Title>
                    {t("InsurancePage_Overview_Title1")}
                  </Title>
                  <Description>
                    {t("InsurancePage_Overview_Description1")}
                  </Description>
                </CardSection>
            </Col>

            <Col lg={8} md={8} sm={12} xs={24}>
                <CardSection>
                  <Title>
                    {t("InsurancePage_Overview_Title2")}
                  </Title>
                  <Description>
                    {t("InsurancePage_Overview_Description2")}
                  </Description>
                </CardSection>
            </Col>

            <Col lg={8} md={8} sm={12} xs={24}>
                <CardSection>
                  <Title>
                    {t("InsurancePage_Overview_Title3")}
                  </Title>
                  <Description>
                    {t("InsurancePage_Overview_Description3")}
                  </Description>
                </CardSection>
            </Col>  

          </Row>

        </ServiceContainers>


        { FormState == 0 && (
          <InsuranceRquestForm id="InsuranceRequestForm" title={t("InsuranceRequestForm_Title")} content={t("InsuranceRequestForm_Description")} submitOnClick ={ (data:any) => onSubmitForm(data)}/>
        )}

        { FormState == 1 && (
          <FormSubmitResponse id="submitResult" status={true} title={t("InsuranceRequestForm_ResultTitle")} subtile={t("InsuranceRequestForm_ResultDescription")} buttonText={t("InsuranceRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
        )}

      </MainContainer>

    </Container>
  );

}

export default withTranslation()(Insurance);
