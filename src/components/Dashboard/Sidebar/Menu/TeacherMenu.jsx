import React from "react";
import MenuItem from "./MenuItem";
import { FaBook } from "react-icons/fa";

const TeacherMenu = () => {
  return (
    <div>
      <MenuItem
        title={"Teacher Profile"}
        address={"teacher-profile"}
        icon={FaBook}
      />
      <MenuItem
        title={"Class Schedule"}
        address={"teacher-schedule"}
        icon={FaBook}
      />
      <MenuItem
        title={"Student Attendence"}
        address={"attendence"}
        icon={FaBook}
      />
      <MenuItem
        title={"Subject Marks"}
        address={"subject-mark"}
        icon={FaBook}
      />
    </div>
  );
};

export default TeacherMenu;
