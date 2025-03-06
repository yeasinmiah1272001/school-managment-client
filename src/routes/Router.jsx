import React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import UserList from "../pages/Dashboard/Admin/UserList";
import AddCourse from "../pages/Dashboard/Admin/AddCourse";
import AllCourseList from "../pages/Dashboard/Admin/AllCourseList";
import MyCourse from "../pages/Dashboard/User/MyCourse";

export const Router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "all-course",
        element: <AllCourseList />,
      },
      // user
      {
        path: "my-course",
        element: <MyCourse />,
      },
    ],
  },
]);
