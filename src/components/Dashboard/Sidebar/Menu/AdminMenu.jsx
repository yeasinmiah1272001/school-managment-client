import React from "react";
import {
  FaChalkboardTeacher,
  FaUserPlus,
  FaUserFriends,
  FaBook,
  FaBell,
} from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaChalkboardTeacher}
        title="Add Teacher"
        address="add-teacher"
      />
      <MenuItem icon={FaUserPlus} title="Add Student" address="add-student" />
      <MenuItem
        icon={FaUserFriends}
        title="All Teacher List"
        address="all-teacher-list"
      />
      <MenuItem
        icon={FaUserFriends}
        title="All Student List"
        address="all-student-list"
      />
      <MenuItem icon={FaBell} title="Add Notice" address="addnotice" />
      <MenuItem
        icon={FaUserPlus}
        title="Add Student Parent"
        address="add-student-parent"
      />
    </>
  );
};

export default AdminMenu;
