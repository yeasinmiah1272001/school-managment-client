import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaGraduationCap,
  FaMoneyBillAlt,
} from "react-icons/fa";
import MenuItem from "./MenuItem";

const StudentMenu = () => {
  return (
    <div>
      <MenuItem
        title={"Student Profile"}
        address={"student-profile"}
        icon={FaUser}
      />
      <MenuItem
        title={"Class Routine"}
        address={"student-routin"}
        icon={FaCalendarAlt}
      />
      <MenuItem
        title={"Student Result"}
        address={"student-result"}
        icon={FaGraduationCap}
      />
      <MenuItem
        title={"Admission Fee"}
        address={"admission-fee"}
        icon={FaMoneyBillAlt}
      />
    </div>
  );
};

export default StudentMenu;
