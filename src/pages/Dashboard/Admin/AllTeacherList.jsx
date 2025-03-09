import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import TeacherProfile from "../Teacher/TeacherProfile";

const AllTeacherList = () => {
  const [role] = useRole();
  return (
    <div>
      <TeacherProfile />
    </div>
  );
};

export default AllTeacherList;
