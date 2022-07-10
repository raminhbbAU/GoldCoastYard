import { Row } from "antd";
import { Console } from "console";
import React, { lazy, useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Detail, MainFormContainer, Title } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Terms({ t }: any) {

    useEffect( () => {
    },[])
    

    return (
        <Container>

          {/* <ScrollToTop /> */}
    
          <MainFormContainer id={""}>
            
            <Row>
              <Title>
                {t("Terms_Title")}
              </Title>
            </Row>
            <Row>
              <Detail> 
                {/* {t("Terms_Description")} */}
                {t("Terms_Description").replaceAll("***","\n")}
              </Detail>
            </Row>
          </MainFormContainer>
                     
        </Container>
      );

}

export default withTranslation()(Terms);
