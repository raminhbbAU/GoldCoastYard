import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import { SendEmail } from '../../API/api';
import EvaluationForm from '../../components/EvaluationForm';
import FormSubmitResponse from '../../components/FormSubmitResponse';
import SellCarRequestForm from '../../components/SellCarRequestForm';
import { MainContainer } from './styles';
import ReactPixel from 'react-facebook-pixel';
import { EnvVarLoader } from '../../service/environmentvariable.loader';
import { getDeviceInfo } from '../../service/deviceinfo.service';


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: true, // enable logs
};


function SellCar({ t }: any) {

  const [FormState,SetFormState] = useState(0);
  const [requestValues,setRequestValues] = useState<any>({});
  const [contactRequestValues,setContactRequestValues] = useState();

  useEffect(() => {  
    scrollTo("SellCarMainContainer");
    ReactPixel.init(EnvVarLoader("FACEBOOK_PIXEL_ID"),undefined, options);
    ReactPixel.fbq('trackCustom', 'SellCar_Visit');
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element){
        element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const onSubmitEvaluation = (data:any) => {
    setRequestValues(data);
    SetFormState(1);
  }

  const onSubmitRequestForm = (data:any) => {
    setContactRequestValues(data);

    SendEmail("Sell Car Request", requestValues.rego,requestValues.state,requestValues.odometer,data.fullName,data.email,data.phone,data.condition,"","","","","","","","","")
    .then ((res) => {
      console.log(res);
      SetFormState(2);
    }).catch ((err) => {
      console.log(err);
      SetFormState(3);
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

        { FormState == 0 && (
          <EvaluationForm id="evaluationForm" title={t("EvaluationForm_Title")} content={t("EvaluationForm_Detail")} submitOnClick ={ (data:any) => onSubmitEvaluation(data)}/>
        )}

        { FormState == 1 && (
          <SellCarRequestForm id="CarRequestForm" title={""} content={""} requestValues= {requestValues} submitOnClick ={ (data:any) => onSubmitRequestForm(data)}/>
        )}

        { (FormState == 2 || FormState == 3) && (
          <FormSubmitResponse id="submitResult" status={FormState ==2 ? true : false} title={t("SellCarRequestForm_ResultTitle")} subtile={t("SellCarRequestForm_ResultDescription")} buttonText={t("SellCarRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
        )}

      </MainContainer>

    </Container>
  );
}

export default withTranslation()(SellCar);
