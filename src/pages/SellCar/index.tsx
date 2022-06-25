import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import EvaluationForm from '../../components/EvaluationForm';


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

function SellCar({ t }: any) {

  useEffect(() => {  

  }, []);

  return (
    <Container>

       <ScrollToTop />
       
       <ContentBlock
        type= "full"
        title={t("SellCar_Title")}
        content={t("SellCar_SubTitle")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner02.jpg'}
        id="sellcar"
      />

      <EvaluationForm id="evaluationForm" title='Buy Your Car in two Simple Steps' content='Simply give your vehicle registration and mileage along with a way to receive your valuation.'>

      </EvaluationForm>

    </Container>
  );
}

export default withTranslation()(SellCar);
