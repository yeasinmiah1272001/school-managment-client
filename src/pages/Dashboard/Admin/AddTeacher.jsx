import React from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";

const AddTeacher = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"Add Teacher"} />
      <Container className="">
        <h1>Add Teacher</h1>
      </Container>
    </div>
  );
};

export default AddTeacher;
