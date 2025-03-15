import React from "react";
import MenuItem from "./MenuItem";
import { FaBook } from "react-icons/fa";

const StudentMenu = () => {
  return (
    <div>
      {/* <MenuItem title={"Student Home"} address={"studenthome"} icon={FaBook} /> */}
      <MenuItem
        title={"Student Profile"}
        address={"student-profile"}
        icon={FaBook}
      />
      <MenuItem
        title={" Class Routin"}
        address={"student-routin"}
        icon={FaBook}
      />
      <MenuItem
        title={"Student Result"}
        address={"student-result"}
        icon={FaBook}
      />
      <MenuItem
        title={"Admission Fee"}
        address={"admission-fee"}
        icon={FaBook}
      />
    </div>
  );
};

export default StudentMenu;
