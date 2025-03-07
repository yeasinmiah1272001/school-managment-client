import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";

const AddStudentMark = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"Add Student Mark"} />
      <Container className="">
        <h1>Add Studen Mark</h1>
      </Container>
    </div>
  );
};

export default AddStudentMark;
