import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";

const AdmissionFee = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"Student Fee"} />
      <Container className="">
        <h1>Student Fee Form</h1>
      </Container>
    </div>
  );
};

export default AdmissionFee;
