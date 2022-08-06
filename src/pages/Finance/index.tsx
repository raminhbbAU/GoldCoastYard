import React, { lazy, useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { SendEmail } from "../../API/api";
import { facebookPixelFBQ } from "../../service/facebookpixel.tracer";
import { scrollTo } from "../../service/utility.service";
import { MainContainer, Overview } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FinanceRquestForm = lazy(() => import("../../components/FinanceRequestForm"));
const FormSubmitResponse = lazy(() => import("../../components/FormSubmitResponse"));


function Finance({ t }: any) {

    const [FormState,SetFormState] = useState(0);
    const [formItems,setFormItems] = useState();


    useEffect(() => {  
      scrollTo("FinanceMainContainer");
      facebookPixelFBQ('FinancePage_Visit');
    }, []);


    const onSubmitForm = (data:any) => {
      setFormItems(data);
      
      facebookPixelFBQ('FinancePage_SubmitFinanceForm');

      SendEmail("Finance Request","",data.state,"",data.firstName + ' ' + data.lastName,data.email,data.phoneNumber,"",data.employment,"","","","","","","","","","")
      .then ((res) => {
        console.log(res);
        SetFormState(1);
      }).catch ((err) => {
        console.log(err);
        SetFormState(2);
      })

    }

    return (
        <Container id={"FinanceMainContainer"}>
    
           {/* <ScrollToTop /> */}
           
           <ContentBlock
            type= "full"
            title={t("FinancePage_BannerTitle")}
            content={t("FinancePage_BannerDescription")}
            picture={process.env.PUBLIC_URL + '/img/gallery/banner06.jpg'}
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

            { (FormState == 1 || FormState == 2) && (
              <FormSubmitResponse id="submitResult" status={FormState ==1 ? true : false} title={t("FinanceRequestForm_ResultTitle")} subtile={t("FinanceRequestForm_ResultDescription")} buttonText={t("FinanceRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
            )}

          </MainContainer>


        </Container>
      );

}

export default withTranslation()(Finance);
