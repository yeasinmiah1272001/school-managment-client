import React, { useContext, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

import AdminMenu from "./Menu/AdminMenu";
import UserMenu from "./Menu/UserMenu";
import { AuthContext } from "../../../provider/AuthProvider";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  console.log("role", role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="text-white flex justify-between items-center md:hidden bg-indigo-600 p-4 shadow-md">
        <Link to="/">
          <h1 className="text-lg font-bold">E-Learning</h1>
        </Link>
        <button
          onClick={handleToggle}
          className="focus:outline-none hover:bg-indigo-700 p-2 rounded-lg"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between bg-indigo-700 text-white w-64 h-full px-6 py-8 shadow-lg transition-transform transform duration-300 ease-in-out ${
          isActive ? "-translate-x-full" : "translate-x-0"
        } md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-wide">E-Learning</h1>
          </Link>
          <h2 className="text-lg font-semibold mt-2">Dashboard (user)</h2>
        </div>

        {/* Navigation Links */}
        <nav className=" space-y-4">
          {role === "admin" && <AdminMenu />}
          {role === "user" && <UserMenu />}
        </nav>

        {/* Profile and Logout */}
        <div className="mt-8 border-t border-indigo-500 pt-6 space-y-4">
          {/* Profile */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "hover:bg-indigo-600 hover:shadow-md"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />
            <span className="ml-3">Profile</span>
          </NavLink>

          {/* Logout */}
          <button
            onClick={logOut}
            className="flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200 bg-red-500 hover:bg-red-600 shadow-md"
          >
            <GrLogout className="w-5 h-5" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
