import React from "react";
import MenuItem from "./MenuItem";
import { FaBook } from "react-icons/fa";

const ParentMenu = () => {
  return (
    <div>
      <MenuItem
        title={"Parent Profile"}
        address={"parent-profile"}
        icon={FaBook}
      />
      <MenuItem
        title={"Student Result"}
        address={"student-result"}
        icon={FaBook}
      />
    </div>
  );
};

export default ParentMenu;
