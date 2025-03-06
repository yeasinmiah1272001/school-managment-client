import React from "react";
import { FaChartBar, FaUsers, FaPlusCircle, FaBook } from "react-icons/fa"; // Import related icons
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaChartBar} title="Statistics" address="statistics" />
      <MenuItem icon={FaUsers} title="All Users" address="users" />
      <MenuItem icon={FaPlusCircle} title="Add Course" address="add-course" />
      <MenuItem icon={FaBook} title="All Courses" address="all-course" />
    </>
  );
};

export default AdminMenu;
