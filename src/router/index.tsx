import React,{ lazy, Suspense } from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'


import routes from "./config";
import { Styles } from "../styles/styles";


import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import UsedCar from "../pages/UsedCar";
import NotFound from "../pages/NotFound";


const Router = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Styles />
        <Header />
        <Switch>   
          <Route exact path="/home" component={Home} />
          <Route exact path="/UsedCar" component={UsedCar} />
          <Route exact path="*" component={NotFound} />
          <Route exact path="" component={Home} />
          <Route exact path="/" component={Home} />
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
