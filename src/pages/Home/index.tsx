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
const Course = lazy(() => import("../../components/Course"));

import { loadAvailableCars } from "../../API/api";


function Home({ t }: any) {

  const [ipLocationLoading,setIpLocationLoading]= useState(true);
  const [availableCars,setAvailableCars]= useState([]);
  const location = useGeoLocation();

  useEffect(() => {  

    loadAvailableCars()
    .then( (res) => {
        console.log(res);
        console.log(res.data);
        setAvailableCars(res.data);
    }).catch( (err) => {
        console.log(err);
    })

    // if (ipLocationLoading)
    // {
    //   if (!location.isLoading)
    //   {
    //     setIpLocationLoading(false);  
    //     if (location.country === 'IR'){
    //       languageChange("fa")
    //     }
    //     else{
    //       languageChange("en")
    //     }
       
    //   }
    // }

  }, []);

  const languageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container>
       <ScrollToTop />
       
       <ContentBlock
        type= "full"
        title={t("Intro_Title")}
        content={t("Intro_Description")}
        button={t("Intro_Button", { returnObjects: true })}
        picture={process.env.PUBLIC_URL + '/img/gallery/banner01.jpg'}
        id="home"
      />
      
      <Service
       title={t("Service_Title")}
       content={t("Service_Description")} 
       services={t("Service_List", { returnObjects: true })}
       id="service"
      />
      
      <Stock
       title={t("Stock_Title")}
       Stocks={availableCars}
       id="stock"
      />

    </Container>
  );
}

export default withTranslation()(Home);
