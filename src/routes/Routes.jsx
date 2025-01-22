import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Coffees from "../pages/Coffees.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Home from "../pages/Home.jsx";

const routes = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/coffees',
          element:<Coffees></Coffees>
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default routes;