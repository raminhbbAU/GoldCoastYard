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

        {/* <ScrollToTop /> */}

        <MainFormContainer id={""}>
          
          <Row>
            <Title>
              <SvgIcon src="logo-image.svg" width="96px" height="96px" />
            </Title>
          </Row>  
          <Row>
            <Title>
              {"www.gccy.com.au trial version has expired !!!"}
            </Title>
          </Row>
          <Row>
            <Detail>
              {"The bill amount for the design and development of www.gccy.com.au hasn't been paid yet by the website owner and because of that, access to the website has been restricted."}
            </Detail>
          </Row>
          <Row>
            <Title>
              {"Email Address"}
            </Title>
          </Row>
          <Row>
            <a href="mailto:ramindev1990@gmail.com">
              <Detail>
                {"ramindev1990@gmail.com"}
              </Detail>
            </a>
          </Row>

        </MainFormContainer>
                  
      </Container>
    );

}

export default Licence;
