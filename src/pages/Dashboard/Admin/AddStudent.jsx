import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import useRole from "../../../hooks/useRole";
import Container from "../../../components/Container";

const AddStudent = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"Add Student"} />
      <Container className="">
        <h1>Add Student</h1>
      </Container>
    </div>
  );
};

export default AddStudent;
