import React from "react";
import MenuItem from "./MenuItem";
import { FaBook } from "react-icons/fa";

const StudentMenu = () => {
  return (
    <div>
      <MenuItem
        title={"Studen Profile"}
        address={"student-profile"}
        icon={FaBook}
      />
      <MenuItem
        title={"Studen Class Routin"}
        address={"student-routin"}
        icon={FaBook}
      />
      <MenuItem
        title={"Studen Result"}
        address={"student-result"}
        icon={FaBook}
      />
    </div>
  );
};

export default StudentMenu;
