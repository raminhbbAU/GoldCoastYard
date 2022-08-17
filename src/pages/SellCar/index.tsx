import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import { SendEmail } from '../../API/api';
import FormSubmitResponse from '../../components/FormSubmitResponse';
import SellCarRequestFormFull from '../../components/SellCarRequestFormFull';
import { Content, InnerBannerContainer, InnerBannerImage, InnerBannerText, MainContainer, Overview, Title, Title2 } from './styles';
import { EnvVarLoader } from '../../service/environmentvariable.loader';
import { getDeviceInfo } from '../../service/deviceinfo.service';
import { facebookPixelFBQ } from '../../service/facebookpixel.tracer';
import { scrollTo } from '../../service/utility.service';
import { Col, Row } from 'antd';


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


function SellCar({ t }: any) {

  const [FormState,SetFormState] = useState(0);
  const [contactRequestValues,setContactRequestValues] = useState();

  useEffect(() => {  
    scrollTo("SellCarMainContainer");
    facebookPixelFBQ('SellCarPage_Visit');
  }, []);



  const onSubmitRequestForm = (data:any) => {
    setContactRequestValues(data);

    facebookPixelFBQ('SellCarPage_SubmitSellCarForm');

    SendEmail("Sell Car Request", data.rego,"",data.odometer,data.fullName,data.email,data.phone,data.comments,data.address,"","","","",data.make,data.model,data.year,"","","enquiry:" + data.enquiry)
    .then ((res) => {
      console.log(res);
      SetFormState(1);
    }).catch ((err) => {
      console.log(err);
      SetFormState(2);
    })
 
  }

  return (
    <Container id={"SellCarMainContainer"}>

       {/* <ScrollToTop /> */}
       
       <ContentBlock
        type= "full"
        title={t("SellCar_Title")}
        content={t("SellCar_SubTitle")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner06.jpg'}
        id="sellcar"
      />     


      <MainContainer>


        <Overview>
          <Title>{t("SellCar_Title2")}</Title>
          <Content>{t("SellCar_Description2")}</Content>   
        </Overview>

        <InnerBannerContainer>
            <Row>
              <Col lg={12} md={12} sm={24} xs={24}>
                <InnerBannerImage src={process.env.PUBLIC_URL + '/img/gallery/Sellmycar.jpg'} />
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <InnerBannerText>{t("SellCar_InnerBannerText")}</InnerBannerText>
              </Col>
            </Row>
        </InnerBannerContainer>


        <Overview>
          <Content>{t("SellCar_Description3")}</Content>   
        </Overview>

        <Overview>
          <Title>{t("SellCar_Title4")}</Title>  
        </Overview>

        { FormState == 0 && (
          <SellCarRequestFormFull id="CarRequestForm" title={""} content={""}  submitOnClick ={ (data:any) => onSubmitRequestForm(data)}/>
        )}

        { (FormState == 1 || FormState == 2) && (
          <FormSubmitResponse id="submitResult" status={FormState ==1 ? true : false} title={t("SellCarRequestForm_ResultTitle")} subtile={t("SellCarRequestForm_ResultDescription")} buttonText={t("SellCarRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
        )}

      </MainContainer>

    </Container>
  );
}

export default withTranslation()(SellCar);
