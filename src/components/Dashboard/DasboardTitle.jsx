import React from "react";
import useRole from "../../hooks/useRole";
import { FaArrowRight } from "react-icons/fa";
import Container from "../Container";

const DasboardTitle = ({ role, action }) => {
  return (
    <div className="bg-blue-300 ">
      <Container className="flex items-center gap-6  text-black font-semibold bg-blue-300 rounded-md">
        <h1 className="uppercase">{role}</h1>
        <FaArrowRight />
        <span>{action}</span>
      </Container>
    </div>
  );
};

export default DasboardTitle;
