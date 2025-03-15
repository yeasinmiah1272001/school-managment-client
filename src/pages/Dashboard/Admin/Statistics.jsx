import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import AdminHome from "./AdminHome";
import TeacherHome from "../Teacher/TeacherHome";
import StudentHome from "../Student/StudentHome";

const Statistics = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={`${role} home page`} />
      <Container className="">
        {role === "admin" && <AdminHome />}
        {role === "student" && <StudentHome />}
        {role === "teacher" && <TeacherHome />}
      </Container>
    </div>
  );
};

export default Statistics;
