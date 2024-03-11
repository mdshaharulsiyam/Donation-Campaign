import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from './Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Details from './Components/Details/Details';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage';
const Routes = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/Donation",
                element:<Donation></Donation>
            },
            {
                path:"/Statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/details",
                element:<Details></Details>
            }
          ]
        },
      ]);
  return <RouterProvider router={router} />
}

export default Routes
