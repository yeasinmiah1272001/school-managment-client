import React from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";

const TeacherClassSedule = () => {
  const [role] = useRole();
  return (
    <div>
      {" "}
      <DasboardTitle role={role} action={"Class Shedules of Yearly"} />
      <Container className="">
        <h1>Class Shedules</h1>
      </Container>
    </div>
  );
};

export default TeacherClassSedule;
