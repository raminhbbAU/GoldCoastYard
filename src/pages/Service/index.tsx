import React, { lazy, useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { SendEmail } from "../../API/api";
import FormSubmitResponse from "../../components/FormSubmitResponse";
import ServiceRequestForm from "../../components/ServiceRequestForm";
import { facebookPixelFBQ } from "../../service/facebookpixel.tracer";
import { scrollTo } from "../../service/utility.service";
import { Content, MainContainer, Overview, Title, Title2 } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Service({ t }: any) {

  const [FormState,SetFormState] = useState(0);
  const [formItems,setFormItems] = useState();

  useEffect(() => {  
    scrollTo("UsedCarMainContainer");
    facebookPixelFBQ('ServicePage_Visit');

  }, []);


  const onSubmitForm = (data:any) => {
    setFormItems(data);

    facebookPixelFBQ('ServicePage_SubmitServiceForm');

    SendEmail("Service Request","","","",data.name,data.email,data.phoneNumber,"","","","","","",data.make,data.model,data.year,data.cylinders,data.fuel,"")
    .then ((res) => {
      console.log(res);
      SetFormState(1);
    }).catch ((err) => {
      console.log(err);
      SetFormState(2);
    })

  }

  return (
    <Container id={"UsedCarMainContainer"}>

       {/* <ScrollToTop /> */}
       
       <ContentBlock
        type= "full"
        title={t("ServicePage_BannerTitle")}
        content={t("ServicePage_BannerDescription")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner05.jpg'}
        button={t("ServicePage_BannerButton", { returnObjects: true })}
        id="service"
      />    

      <MainContainer>

        <Overview>
          <Title>{t("ServicePage_OverviewTitle1")}</Title>
          <Content>{t("ServicePage_OverviewContent1")}</Content>
          <Title2>{t("ServicePage_OverviewTitle2")}</Title2> 
          <Title>{t("ServicePage_OverviewTitle3")}</Title>      
        </Overview>

        { FormState == 0 && (
          <ServiceRequestForm id="ServiceRequestForm" title={t("ServiceRequestForm_Title")} content={t("ServiceRequestForm_Description")} submitOnClick ={ (data:any) => onSubmitForm(data)}/>
        )}

        { (FormState == 1 || FormState == 2) && (
          <FormSubmitResponse id="submitResult" status={FormState ==1 ? true : false} title={t("ServiceRequestForm_ResultTitle")} subtile={t("ServiceRequestForm_ResultDescription")} buttonText={t("ServiceRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
        )}

      </MainContainer>

    </Container>
  );

}

export default withTranslation()(Service);
