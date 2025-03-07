import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";

const StudentClassRotin = () => {
  const [role] = useRole();
  return (
    <div>
      {" "}
      <DasboardTitle role={role} action={"Class Routin"} />
      <Container className="">
        <h1>All Class Routin</h1>
      </Container>
    </div>
  );
};

export default StudentClassRotin;
