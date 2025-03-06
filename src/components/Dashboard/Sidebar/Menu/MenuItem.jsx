import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ address, title, icon: Icon }) => {
  return (
    <div>
      <NavLink
        to={address}
        end
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5 transition-colors duration-300 transform ${
            isActive
              ? "bg-indigo-600 text-white"
              : "text-gray-300 hover:bg-indigo-500 hover:text-white"
          } rounded-lg`
        }
      >
        <Icon className="w-5 h-5" />
        <span className="mx-4 font-medium">{title}</span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
