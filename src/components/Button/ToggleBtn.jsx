import React from "react";
import useRole from "../../hooks/useRole";
const ToggleBtn = ({ toggleHandler, toggle }) => {
  const [role] = useRole();
  return (
    <>
      {role === "parent" && (
        <label
          htmlFor="Toggle3"
          className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
        >
          <input
            onChange={toggleHandler}
            id="Toggle3"
            type="checkbox"
            className="hidden peer"
            checked={toggle}
          />
          <span className="px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300">
            Student
          </span>
          <span className="px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-blue-400">
            Parent
          </span>
        </label>
      )}
      {role === "admin" && (
        <label
          htmlFor="Toggle3"
          className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
        >
          <input
            onChange={toggleHandler}
            id="Toggle3"
            type="checkbox"
            className="hidden peer"
            checked={toggle}
          />
          <span className="px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300">
            Teacher
          </span>
          <span className="px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-blue-400">
            Admin
          </span>
        </label>
      )}
    </>
  );
};

export default ToggleBtn;
