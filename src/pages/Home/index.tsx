import React,{ lazy,useEffect,useState } from 'react';
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import useGeoLocation from "../../service/location.service";


const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const Service = lazy(() => import("../../components/Service"));
const Stock = lazy(() => import("../../components/Stock"));
const ServiceWithFullImage = lazy(() => import("../../components/ServiceWithFullImage"));

import { loadAvailableCars,loadModels } from "../../API/api";
import { BannerHolder } from '../../components/common/BannerHolder';
import { Button } from 'antd';
import useEnvVarLoader, { EnvVarLoader } from '../../service/environmentvariable.loader';
import { getDeviceInfo } from '../../service/deviceinfo.service';
import { facebookPixelFBQ } from '../../service/facebookpixel.tracer';
import { scrollTo } from '../../service/utility.service';




function Home({ t }: any) {

  const [availableCars,setAvailableCars]= useState<any>([]);

  const [height,setHeight] = useState(416);
  const [width,setwidth] = useState(1200);


  useEffect(() => {  
    scrollTo("HomeMainContainer");
    setAvailableCars(loadAvailableCars());
    facebookPixelFBQ('HomePage_Visit');
  }, []);


  return (
    <Container id={"HomeMainContainer"}>
       {/* <ScrollToTop /> */}
       
       <ContentBlock
        type= "full"
        title={t("Intro_Title")}
        content={t("Intro_Description")}
        button={t("Intro_Button", { returnObjects: true })}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner04.jpg'}
        imageMobile={process.env.PUBLIC_URL + "/img/gallery/banner04-mobile.jpg"}
        id="home"
       />


      {/* <br></br>
      <Button onClick={() => setSize(10) }>+ 10%</Button>
      <Button onClick={() => setSize(-10)}>- 10%</Button>
      <div> width: {width} | height: {height}</div>

      <BannerHolder
        width={ width + "px"}
        height={ height + "px"}
        background={process.env.PUBLIC_URL + '/img/gallery/banner04.jpg'}
      />  */}
      


      <Service
       title={t("Service_Title")}
       content={t("Service_Description")} 
       services={t("Service_List", { returnObjects: true })}
       id="service"
      />
      

      <Stock
      //  title={t("Stock_Title")}
       title={ availableCars.length + "+ vehicles are Available"}
       Stocks={availableCars}
       id="stock"
       exploreButton={true}
      />

      <ServiceWithFullImage
       title={t("ServiceWithImage_Title")}
       services={t("ServiceWithImage_List", { returnObjects: true })}
       id="ServiceWithFullImage"
      /> 

    </Container>
  );
}

export default withTranslation()(Home);
