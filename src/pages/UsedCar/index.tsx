import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import useGeoLocation from "../../service/location.service";


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

import { loadAvailableCars } from "../../API/api";
import CarSearchBox from '../../components/CarSearchBox';
import { EnvVarLoader } from '../../service/environmentvariable.loader';
import { getDeviceInfo } from '../../service/deviceinfo.service';
import { facebookPixelFBQ } from '../../service/facebookpixel.tracer';
import { scrollTo } from '../../service/utility.service';


function UsedCar({ t }: any) {

  const [availableCars,setAvailableCars]= useState<any>();

  useEffect(() => {  
    scrollTo("UsedCarMainContainer");
    setAvailableCars(loadAvailableCars());
    facebookPixelFBQ('UsedCarPage_Visit');

    // loadAvailableCars()
    // .then( (res) => {
    //     console.log(res);
    //     setAvailableCars(res);
    // }).catch( (err) => {
    //     console.log(err);
    // })

  }, []);


  return (
    <Container id={"UsedCarMainContainer"}>
       {/* <ScrollToTop /> */}
       
       <ContentBlock
        type= "full"
        title={t("Intro_Title")}
        content={t("Intro_Description")}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner07.jpg'}
        id="home"
      />

      <CarSearchBox
        id="searchbox"
        title={t("SearchBoxTitle")}
      />

      <ContentBlock
        type= "full"
        title={t("SearchBoxFinanceTitle")}
        content={t("SearchBoxFinanceDescription")}
        picture={process.env.PUBLIC_URL + '/img/gallery/INSURANCE-banner.jpg'}
        button={t("SearchBoxFinanceButton", { returnObjects: true })}
        leftToRight={"left"}
        id="home"
      />

    </Container>
  );
}

export default withTranslation()(UsedCar);
