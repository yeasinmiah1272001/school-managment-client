import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";

const StudentProfile = () => {
  const [role] = useRole();
  return (
    <div>
      {" "}
      <DasboardTitle role={role} action={"Student Profile"} />
      <Container className="">
        <h1>student Profile</h1>
      </Container>
    </div>
  );
};

export default StudentProfile;
