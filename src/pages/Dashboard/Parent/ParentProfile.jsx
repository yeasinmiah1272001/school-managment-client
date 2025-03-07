import React from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";

const ParentProfile = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"Parent Profile"} />
      <Container className="">
        <h1>Parent Profile</h1>
      </Container>
    </div>
  );
};

export default ParentProfile;
