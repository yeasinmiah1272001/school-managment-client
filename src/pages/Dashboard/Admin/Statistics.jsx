import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";

const Statistics = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"Admin Statistics"} />
      <Container className="">
        <h1>Statistics Page</h1>
      </Container>
    </div>
  );
};

export default Statistics;
