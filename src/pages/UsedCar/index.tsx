import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import useGeoLocation from "../../service/location.service";


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

import { loadAvailableCars } from "../../API/api";


function UsedCar({ t }: any) {

  const [availableCars,setAvailableCars]= useState<any>();

  useEffect(() => {  

    setAvailableCars(loadAvailableCars());

    // loadAvailableCars()
    // .then( (res) => {
    //     console.log(res);
    //     setAvailableCars(res);
    // }).catch( (err) => {
    //     console.log(err);
    // })

  }, []);

  return (
    <Container>
       <ScrollToTop />
       
       <ContentBlock
        type= "full"
        title={""}
        content={""}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner03.jpg'}
        id="home"
      />


    </Container>
  );
}

export default withTranslation()(UsedCar);
