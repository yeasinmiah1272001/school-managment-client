import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";

const TeacherProfile = () => {
  const [role] = useRole();
  return (
    <div>
      {" "}
      <DasboardTitle role={role} action={"Teacher Profile"} />
      <Container className="">
        <h1>Teacher Profile</h1>
      </Container>
    </div>
  );
};

export default TeacherProfile;
