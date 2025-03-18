import React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import Register from "../pages/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import StudentProfile from "../pages/Dashboard/Student/StudentProfile";
import StudentClassRotin from "../pages/Dashboard/Student/StudentClassRotin";
import StudentResult from "../pages/Dashboard/Student/StudentResult";
import TeacherProfile from "../pages/Dashboard/Teacher/TeacherProfile";
import TeacherClassSedule from "../pages/Dashboard/Teacher/TeacherClassSedule";
import AddStudentMark from "../pages/Dashboard/Teacher/AddStudentMark";
import ParentProfile from "../pages/Dashboard/Parent/ParentProfile";
import AddStudent from "../pages/Dashboard/Admin/AddStudent";
import AddTeacher from "../pages/Dashboard/Admin/AddTeacher";
import PrivateRoute from "./PrivateRoute";
import AddStudentParent from "../pages/Dashboard/Admin/AddStudentParent";
import AllStudentList from "../pages/Dashboard/Admin/AllStudentList";
import AllTeacherList from "../pages/Dashboard/Admin/AllTeacherList";
import Statistics from "../pages/Dashboard/Admin/Statistics";
import AdmissionFee from "../pages/Dashboard/Student/AdmissionFee";
import Attendence from "../pages/Dashboard/Teacher/Attendence";
import ViewStudentProfile from "../pages/Dashboard/Student/ViewStudentProfile";
import StudentUpdate from "../pages/Dashboard/Admin/StudentUpdate";
import AssingnMent from "../pages/Dashboard/Teacher/AssingnMent";
import ViewAssignment from "../pages/Dashboard/Student/ViewAssignment";
import StudentHome from "../pages/Dashboard/Student/StudentHome";
import TeacherHome from "../pages/Dashboard/Teacher/TeacherHome";
import AddAllNotice from "../pages/Dashboard/Admin/AddAllNotice";
import AllNotice from "../components/Dashboard/AllNotice";

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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Statistics />,
      },
      // admin

      {
        path: "all-student-list",
        element: <AllStudentList />,
      },
      {
        path: "add-student",
        element: <AddStudent />,
      },
      {
        path: "add-teacher",
        element: <AddTeacher />,
      },
      {
        path: "add-student-parent",
        element: <AddStudentParent />,
      },
      {
        path: "all-teacher-list",
        element: <AllTeacherList />,
      },

      {
        path: "studentUpdate/:id",
        element: <StudentUpdate />,
        loader: ({ params }) =>
          fetch(
            `https://school-managment-server.vercel.app/all-student/${params.id}`
          ),
      },
      {
        path: "addnotice",
        element: <AddAllNotice />,
      },

      // teacher related
      {
        path: "teacherHome",
        element: <TeacherHome />,
      },
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
      {
        path: "attendence",
        element: <Attendence />,
      },
      {
        path: "assingment",
        element: <AssingnMent />,
      },

      // student releted
      {
        path: "studenthome",
        element: <StudentHome />,
      },
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
      {
        path: "admission-fee",
        element: <AdmissionFee />,
      },
      {
        path: "viewStudentProfile/:id",
        element: <ViewStudentProfile />,
        loader: ({ params }) =>
          fetch(
            `https://school-managment-server.vercel.app/all-student/${params.id}`
          ),
      },
      {
        path: "viewassignment/:id",
        element: <ViewAssignment />,
        loader: ({ params }) =>
          fetch(
            `https://school-managment-server.vercel.app/all-student/${params.id}`
          ),
      },
      // shared
      {
        path: "noticedetails/:id",
        element: <AllNotice />,
        loader: ({ params }) =>
          fetch(
            `https://school-managment-server.vercel.app/all-notice/${params.id}`
          ),
      },
    ],
  },
]);
