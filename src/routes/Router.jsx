import React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import Register from "../pages/Register";

export const Router = createBrowserRouter([
  {
    element: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
