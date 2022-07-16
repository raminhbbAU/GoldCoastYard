import React, { lazy } from "react";
import { withTranslation } from "react-i18next";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Contact({ t }: any) {

    return (
        <Container>
    
           {/* <ScrollToTop /> */}
           
           <ContentBlock
            type= "full"
            title={t("SellCar_Title")}
            content={t("SellCar_SubTitle")}
            picture={process.env.PUBLIC_URL + '/img/gallery/banner07.jpg'}
            id="contact"
          />    
        </Container>
      );

}

export default withTranslation()(Contact);
