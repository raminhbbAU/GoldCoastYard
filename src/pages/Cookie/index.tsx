import { Row } from "antd";
import React, { lazy } from "react";
import { withTranslation } from "react-i18next";
import { Detail, MainFormContainer, Title } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Cookie({ t }: any) {

    return (
      <Container>

        {/* <ScrollToTop /> */}

        <MainFormContainer id={""}>
          
          <Row>
            <Title>
              {t("Cookie_Title")}
            </Title>
          </Row>
          <Row>
            <Detail>
              {t("Cookie_Description").replaceAll("***","\n")}
            </Detail>
          </Row>

        </MainFormContainer>
                  
      </Container>
    );

}

export default withTranslation()(Cookie);
