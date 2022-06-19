const routes = [
    {
      path: "/",
      exact: true,
      component: "Home",
    },
    {
      path: "*",
      exact: true,
      component: "Home",
    },
    {
      path: "/Home",
      exact: true,
      component: "Home",
    },
    {
      path: "/UsedCar",
      exact: true,
      component: "UsedCar",
    },
  ];
  
  export default routes;
