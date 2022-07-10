import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import EvaluationForm from '../../components/EvaluationForm';
import FormSubmitResponse from '../../components/FormSubmitResponse';
import SellCarRequestForm from '../../components/SellCarRequestForm';


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

function SellCar({ t }: any) {

  const [FormState,SetFormState] = useState(0);
  const [requestValues,setRequestValues] = useState();
  const [contactRequestValues,setContactRequestValues] = useState();

  useEffect(() => {  
 
  }, []);


  const onSubmitEvaluation = (data:any) => {
    setRequestValues(data);
    SetFormState(1);
  }

  const onSubmitRequestForm = (data:any) => {
    setContactRequestValues(data);
    SetFormState(2);
  }

  return (
    <Container>

       {/* <ScrollToTop /> */}
       
       <ContentBlock
        type= "full"
        title={t("SellCar_Title")}
        content={t("SellCar_SubTitle")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner02.jpg'}
        id="sellcar"
      />     

      { FormState == 0 && (
        <EvaluationForm id="evaluationForm" title={t("EvaluationForm_Title")} content={t("EvaluationForm_Detail")} submitOnClick ={ (data:any) => onSubmitEvaluation(data)}/>
      )}

      { FormState == 1 && (
        <SellCarRequestForm id="CarRequestForm" title={""} content={""} requestValues= {requestValues} submitOnClick ={ (data:any) => onSubmitRequestForm(data)}/>
      )}

      { FormState == 2 && (
        <FormSubmitResponse id="submitResult" status={true} title={t("SellCarRequestForm_ResultTitle")} subtile={t("SellCarRequestForm_ResultDescription")} buttonText={t("SellCarRequestForm_ButtonText")} buttonLink={"home"}></FormSubmitResponse>
      )}

    </Container>
  );
}

export default withTranslation()(SellCar);
