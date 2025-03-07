import React from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";

const UserList = () => {
  const [role] = useRole();
  return (
    <div>
      <DasboardTitle role={role} action={"All Users"} />
      <Container className="">
        <h1>Add All Users</h1>
      </Container>
    </div>
  );
};

export default UserList;
