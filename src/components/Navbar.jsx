import React, { useContext } from "react";
import {
  FaHome,
  FaBook,
  FaChalkboardTeacher,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const navItems = [
  { id: 1, name: "Home", icon: <FaHome />, path: "/" },
  { id: 2, name: "Courses", icon: <FaBook />, path: "/courses" },
  {
    id: 3,
    name: "Instructors",
    icon: <FaChalkboardTeacher />,
    path: "/instructors",
  },
  { id: 4, name: "Profile", icon: <FaUserCircle />, path: "/register" },
  { id: 5, name: "Cart", icon: <FaShoppingCart />, path: "/cart" },
];

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">OnlineCourses</div>

        {/* Navigation Items */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition ${
                    isActive ? "text-indigo-400" : "hover:text-indigo-400"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* User Image */}
        <div className="flex items-center gap-4">
          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400"
            />
          ) : (
            <FaUserCircle className="text-3xl" />
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
