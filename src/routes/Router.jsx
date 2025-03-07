import React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import UserList from "../pages/Dashboard/Admin/UserList";

import StudentProfile from "../pages/Dashboard/Student/StudentProfile";
import StudentClassRotin from "../pages/Dashboard/Student/StudentClassRotin";
import StudentResult from "../pages/Dashboard/Student/StudentResult";
import TeacherProfile from "../pages/Dashboard/Teacher/TeacherProfile";
import TeacherClassSedule from "../pages/Dashboard/Teacher/TeacherClassSedule";
import AddStudentMark from "../pages/Dashboard/Teacher/AddStudentMark";
import ParentProfile from "../pages/Dashboard/Parent/ParentProfile";
import AddStudent from "../pages/Dashboard/Admin/AddStudent";
import AddTeacher from "../pages/Dashboard/Admin/AddTeacher";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // admin
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "add-student",
        element: <AddStudent />,
      },
      {
        path: "add-teacher",
        element: <AddTeacher />,
      },

      // teacher related
      {
        path: "teacher-profile",
        element: <TeacherProfile />,
      },
      {
        path: "teacher-schedule",
        element: <TeacherClassSedule />,
      },
      {
        path: "subject-mark",
        element: <AddStudentMark />,
      },

      // student releted
      {
        path: "student-profile",
        element: <StudentProfile />,
      },
      {
        path: "student-routin",
        element: <StudentClassRotin />,
      },
      {
        path: "student-result",
        element: <StudentResult />,
      },
      // parent
      {
        path: "parent-profile",
        element: <ParentProfile />,
      },
    ],
  },
]);
