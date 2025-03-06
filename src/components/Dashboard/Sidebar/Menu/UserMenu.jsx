import React from "react";
import MenuItem from "./MenuItem";
import { FaBook } from "react-icons/fa";

const UserMenu = () => {
  return (
    <div>
      <MenuItem title={"My Course"} address={"my-course"} icon={FaBook} />
    </div>
  );
};

export default UserMenu;
