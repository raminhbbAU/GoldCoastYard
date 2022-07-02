import React,{ lazy, Suspense } from "react";
import {Route, BrowserRouter, Switch,Redirect} from 'react-router-dom'


import routes from "./config";
import { Styles } from "../styles/styles";


import Footer from "../components/Footer";
import Header from "../components/Header";

import Home from "../pages/Home";
import UsedCar from "../pages/UsedCar";
import Finance from "../pages/Finance";
import Service from "../pages/Service";
import News from "../pages/News";
import Contact from "../pages/Contact";
import SellCar from "../pages/SellCar";
import Insurance from "../pages/Insurance";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Cookie from "../pages/Cookie";




const Router = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Styles />
        <Header />
        <Switch>   
          <Route exact path="/home" component={Home} />
          <Route exact path="/UsedCar" component={UsedCar} />
          <Route exact path="/Finance" component={Finance} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/News" component={News} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/SellCar" component={SellCar} />
          <Route exact path="/Insurance" component={Insurance} />
          <Route exact path="/CarDetails/:id" component={CarDetails} />
          <Route exact path="/Terms" component={Terms} />
          <Route exact path="/Privacy" component={Privacy} />
          <Route exact path="/Cookie" component={Cookie} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect from='*' to='/404' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};


// const Router = () => {
//   return (
//     <Suspense fallback={null}>
//       <Styles />
//       <Header />
//       <Switch>
//         {routes.map((routeItem) => {
//           return (
//             <Route
//               key={routeItem.component}
//               path={routeItem.path}
//               exact={routeItem.exact}
//               component={lazy(() => import(`../pages/${routeItem.component}`))}
//             />
//           );
//         })}
//       </Switch>
//       <Footer />
//     </Suspense>
//   );
// };


export default Router;
