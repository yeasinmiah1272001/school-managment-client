import React, { useState } from "react";
import TeacherProfileModal from "../Modal/TeacherProfileModal";
import useRole from "../../hooks/useRole";
import TeacherUpdateModal from "../Modal/TeacherUpdateModal";

const TableRow = ({ teacher }) => {
  const [role] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const [updateIsOpen, setUpdateIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const updateCloseModal = () => {
    setUpdateIsOpen(false);
  };
  return (
    <tr className="hover:bg-indigo-300 duration-500">
      <td className="border border-gray-300 px-4 py-2 text-center">
        <img
          src={teacher?.image}
          alt={teacher?.name || "Teacher profile"}
          className="w-12 h-12 rounded-full mx-auto"
        />
      </td>
      <td className="border border-gray-300 px-4 py-2">{teacher?.subject}</td>
      <td className="border border-gray-300 px-4 py-2">{teacher?.name}</td>
      <td className="border border-gray-300 px-4 py-2">{teacher?.email}</td>
      <td className="border border-gray-300 px-4 py-2 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="border border-black bg-transparent text-white px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300"
        >
          View Profile
        </button>
      </td>
      {role === "admin" && (
        <td className="border border-gray-300 px-4 py-2 text-center">
          <button
            onClick={() => setUpdateIsOpen(true)}
            className="border border-black bg-transparent text-white px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300"
          >
            Edit Profile
          </button>
        </td>
      )}
      {/* Profile Modal */}
      <TeacherProfileModal
        closeModal={closeModal}
        isOpen={isOpen}
        teacher={teacher}
      />
      <TeacherUpdateModal
        updateCloseModal={updateCloseModal}
        updateIsOpen={updateIsOpen}
        teacher={teacher}
      />
    </tr>
  );
};

export default TableRow;
