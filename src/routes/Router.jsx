import React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
