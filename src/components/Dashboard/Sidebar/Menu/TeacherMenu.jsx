import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaClipboardList,
  FaPen,
  FaGraduationCap,
} from "react-icons/fa";
import MenuItem from "./MenuItem";

const TeacherMenu = () => {
  return (
    <div>
      <MenuItem
        title={"Teacher Profile"}
        address={"teacher-profile"}
        icon={FaUser}
      />
      <MenuItem
        title={"Class Schedule"}
        address={"teacher-schedule"}
        icon={FaCalendarAlt}
      />
      <MenuItem
        title={"Student Attendance"}
        address={"attendence"}
        icon={FaClipboardList}
      />
      <MenuItem title={"Add Assignment"} address={"assingment"} icon={FaPen} />
      <MenuItem
        title={"Subject Marks"}
        address={"subject-mark"}
        icon={FaGraduationCap}
      />
    </div>
  );
};

export default TeacherMenu;
