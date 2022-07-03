import React, { lazy, useState } from "react";
import { withTranslation } from "react-i18next";
import FormSubmitResponse from "../../components/FormSubmitResponse";
import ServiceRequestForm from "../../components/ServiceRequestForm";
import { MainContainer, Overview } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Service({ t }: any) {

  const [FormState,SetFormState] = useState(0);
  const [formItems,setFormItems] = useState();

  const onSubmitForm = (data:any) => {
    setFormItems(data);
    SetFormState(1);
  }

  return (
    <Container>

       <ScrollToTop />
       
       <ContentBlock
        type= "full"
        title={t("ServicePage_BannerTitle")}
        content={t("ServicePage_BannerDescription")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner02.jpg'}
        button={t("ServicePage_BannerButton", { returnObjects: true })}
        id="service"
      />    

      <MainContainer>

        <Overview>
          {t("ServicePage_Overview")}
        </Overview>

        { FormState == 0 && (
          <ServiceRequestForm id="ServiceRequestForm" title={t("ServiceRequestForm_Title")} content={t("ServiceRequestForm_Description")} submitOnClick ={ (data:any) => onSubmitForm(data)}/>
        )}

        { FormState == 1 && (
          <FormSubmitResponse id="submitResult" status={true} title={t("ServiceRequestForm_ResultTitle")} subtile={t("ServiceRequestForm_ResultDescription")} buttonText={t("ServiceRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
        )}

      </MainContainer>

    </Container>
  );

}

export default withTranslation()(Service);
