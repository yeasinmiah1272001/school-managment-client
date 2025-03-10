import React, { useContext } from "react";
import useRole from "../../hooks/useRole";
import { FaArrowRight } from "react-icons/fa";
import Container from "../Container";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const DasboardTitle = ({ role, action }) => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="bg-blue-300 ">
      <Container className="flex items-center gap-6  text-black font-semibold bg-blue-300 rounded-md">
        <h1 className="uppercase">{role}</h1>
        <FaArrowRight />
        <span>{action}</span>
        <FaArrowRight />
        <h1 onClick={handleLogout} className="cursor-pointer">
          Logout
        </h1>
      </Container>
    </div>
  );
};

export default DasboardTitle;
