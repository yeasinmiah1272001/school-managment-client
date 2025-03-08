import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";

const AllTeacherList = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"All Teacher List"} />
      <Container className="">
        <h1>All Teacher List</h1>
      </Container>
    </div>
  );
};

export default AllTeacherList;
