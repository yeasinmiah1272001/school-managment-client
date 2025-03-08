import React from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";

const AllStudentList = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"All Student List"} />
      <Container className="">
        <h1>All Student List</h1>
      </Container>
    </div>
  );
};

export default AllStudentList;
