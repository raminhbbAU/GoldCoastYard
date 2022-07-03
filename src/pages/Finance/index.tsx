import React, { lazy, useState } from "react";
import { withTranslation } from "react-i18next";
import { MainContainer, Overview } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FinanceRquestForm = lazy(() => import("../../components/FinanceRequestForm"));
const FormSubmitResponse = lazy(() => import("../../components/FormSubmitResponse"));


function Finance({ t }: any) {

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
            title={t("FinancePage_BannerTitle")}
            content={t("FinancePage_BannerDescription")}
            picture={process.env.PUBLIC_URL + '/img/gallery/banner02.jpg'}
            button={t("FinancePage_BannerButton", { returnObjects: true })}
            id="finance"
          />    

          <MainContainer>


            <Overview>
              {t("FinancePage_Overview")}
            </Overview>
            
            { FormState == 0 && (
              <FinanceRquestForm id="FinanceRequestForm" title={t("FinanceRequestForm_Title")} content={t("FinanceRequestForm_Description")} submitOnClick ={ (data:any) => onSubmitForm(data)}/>
            )}

            { FormState == 1 && (
              <FormSubmitResponse id="submitResult" status={true} title={t("FinanceRequestForm_ResultTitle")} subtile={t("FinanceRequestForm_ResultDescription")} buttonText={t("FinanceRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
            )}

          </MainContainer>


        </Container>
      );

}

export default withTranslation()(Finance);
