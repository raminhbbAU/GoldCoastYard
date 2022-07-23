import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useState } from 'react';
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import { Toaster } from 'react-hot-toast';

import Router from "./router";
import i18n from "./dictionary/translation";
import Licence from "./pages/Licence";

const App = () => {

  const [validLicence,setValidLicence] = useState(true);

  useEffect( () => {

    const date1:any = new Date();
    const date2:any = new Date('2022/08/15');
    const diffTime:any = date2 - date1;
    //const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

   if (diffTime <=0) {
    setValidLicence(false);
   }

  },[])

  return (

    <>
      {!validLicence && (
        <Suspense fallback={null}>
          <Licence></Licence>
        </Suspense>
      )}
      {validLicence && (
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Router />
            <Toaster />
          </I18nextProvider>
        </BrowserRouter>
      )}
    </>
      
  );

};

ReactDOM.render(<App />, document.getElementById("root"));


