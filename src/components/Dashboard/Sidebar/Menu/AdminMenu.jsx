import React from "react";
import { FaChartBar, FaUsers, FaPlusCircle, FaBook } from "react-icons/fa"; // Import related icons
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      {/* <MenuItem icon={FaChartBar} title="Statistics" address="statistics" /> */}
      <MenuItem icon={FaPlusCircle} title="Add Teacher" address="add-teacher" />
      <MenuItem icon={FaBook} title="Add Student" address="add-student" />
      <MenuItem
        icon={FaUsers}
        title="All Teacher List"
        address="all-teacher-list"
      />
      <MenuItem
        icon={FaUsers}
        title="All Student List"
        address="all-student-list"
      />
      <MenuItem icon={FaUsers} title="Add Notice" address="addnotice" />
      {/* <MenuItem icon={FaUsers} title="Add Shedules" address={"add-shudels"} /> */}
      {/* <MenuItem
        icon={FaUsers}
        title="Class Shedules"
        address={"teacher-schedule"}
      /> */}
      <MenuItem
        icon={FaBook}
        title="Add Student Parent"
        address="add-student-parent"
      />
    </>
  );
};

export default AdminMenu;
