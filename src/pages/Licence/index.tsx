import { Row } from "antd";
import React, { lazy } from "react";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../components/common/SvgIcon";
import { Detail, MainFormContainer, Title } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Licence() {

    return (
      <Container>

        <ScrollToTop />

        <MainFormContainer id={""}>
          
          <Row>
            <Title>
              <SvgIcon src="logo-image.svg" width="96px" height="96px" />
            </Title>
          </Row>  
          <Row>
            <Title>
              {"Technical issue"}
            </Title>
          </Row>
          <Row>
            <Detail>
              {"Something wrong was happend, please feel free to contact the site administrator."}
            </Detail>
          </Row>
          <Row>
            <Title>
              {"Email Address"}
            </Title>
          </Row>
          <Row>
            <a href="mailto:Raminhbb.au@gmail.com">
              <Detail>
                {"RaminHbb.au@gmail.com"}
              </Detail>
            </a>
          </Row>

        </MainFormContainer>
                  
      </Container>
    );

}

export default Licence;
