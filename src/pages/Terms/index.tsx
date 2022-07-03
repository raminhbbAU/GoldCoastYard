import { Row } from "antd";
import { Console } from "console";
import React, { lazy, useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Detail, MainFormContainer, Title } from "./styles";

const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



function Terms({ t }: any) {

    const [data,setData] = useState<any>("");

    useEffect( () => {
      const realData:String =  t("Terms_Description");
      //console.log(realData);

      //console.log(realData.replaceAll("***","\n")); 

      //setData(realData.replaceAll("***"," <br> "));
      setData(realData);
    },[])
    

    return (
        <Container>

          <ScrollToTop />
    
          <MainFormContainer id={""}>
            
            <Row>
              <Title>
                {t("Terms_Title")}
              </Title>
            </Row>
            <Row>
              <Detail>
                {/* {t("Terms_Description")} */}
                {data}
              </Detail>
            </Row>

          </MainFormContainer>
                     
        </Container>
      );

}

export default withTranslation()(Terms);
