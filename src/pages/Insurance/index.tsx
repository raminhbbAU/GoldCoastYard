import React, { lazy, useState } from "react";
import { withTranslation } from "react-i18next";
import FormSubmitResponse from "../../components/FormSubmitResponse";
import InsuranceRquestForm from "../../components/InsuranceRequestForm";
import { MainContainer, Overview } from "./styles";

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

       <ScrollToTop />
       
       <ContentBlock
        type= "full"
        title={t("InsurancePage_BannerTitle")}
        content={t("InsurancePage_BannerDescription")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner02.jpg'}
        button={t("InsurancePage_BannerButton", { returnObjects: true })}
        id="Insurance"
      />    

      <MainContainer>

        <Overview>
          {t("InsurancePage_Overview")}
        </Overview>

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
