import React, { useContext, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";

import AdminMenu from "./Menu/AdminMenu";

import { AuthContext } from "../../../provider/AuthProvider";
import useRole from "../../../hooks/useRole";
import StudentMenu from "./Menu/StudentMenu";
import TeacherMenu from "./Menu/TeacherMenu";
import ParentMenu from "./Menu/ParentMenu";
import logo from "../../../assets/logo.png";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const [role] = useRole();
  console.log("role", role);
  // const handleLogout = () => {
  //   logOut();
  //   navigate("/");
  // };

  // Sidebar Responsive Handler
  // const handleToggle = () => {
  //   setActive(!isActive);
  // };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col  bg-[#072F7C] text-white w-64 h-full px-6 py-8 shadow-lg transition-transform transform duration-300 ease-in-out ${
          isActive ? "-translate-x-full" : "translate-x-0"
        } md:translate-x-0`}
      >
        {/* Logo Section */}
        <Link to={"/"} className="flex flex-col items-center">
          <img className="w-10" src={logo} alt="" />
          <h2 className="text-lg font-semibold mt-2">Dashboard ({role})</h2>
        </Link>

        {/* Navigation Links */}
        <nav className="">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-4  transition-colors duration-300 transform ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-indigo-500 hover:text-white"
              } rounded-lg`
            }
          >
            <BsGraphUp className="w-5 h-5" />

            <span className="mx-4 font-medium">
              {" "}
              {role ? role[0].toUpperCase() + role.substring(1) : ""} Home
            </span>
          </NavLink>

          {role === "admin" && <AdminMenu />}
          {role === "student" && <StudentMenu />}
          {role === "teacher" && <TeacherMenu />}
          {role === "parent" && <ParentMenu />}
        </nav>

        {/* Profile and Logout */}
        {/* <div className="mt-2 border-t border-indigo-500 pt-6 space-y-4">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200 bg-red-500 hover:bg-red-600 shadow-md"
          >
            <GrLogout className="w-5 h-5" />
            <span className="ml-3">Logout</span>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
