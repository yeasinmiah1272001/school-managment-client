import React from "react";
import { FaChartBar, FaUsers, FaPlusCircle, FaBook } from "react-icons/fa"; // Import related icons
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaChartBar} title="Statistics" address="statistics" />
      <MenuItem icon={FaUsers} title="All Users" address="users" />
      <MenuItem icon={FaPlusCircle} title="Add Teacher" address="add-teacher" />
      <MenuItem icon={FaBook} title="Add Student" address="add-student" />
      <MenuItem
        icon={FaBook}
        title="Add Student Parent"
        address="add-student-parent"
      />
    </>
  );
};

export default AdminMenu;
