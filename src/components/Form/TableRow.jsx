import React, { useState } from "react";
import TeacherProfileModal from "../Modal/TeacherProfileModal";

const TableRow = ({ teacher }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <tr className="hover:bg-indigo-300 duration-500">
      <td className="border border-gray-300 px-4 py-2 text-center">
        <img
          src={teacher?.image}
          alt={teacher?.name}
          className="w-12 h-12 rounded-full mx-auto"
        />
      </td>
      <td className="border border-gray-300 px-4 py-2">{teacher?.subject}</td>
      <td className="border border-gray-300 px-4 py-2">{teacher?.name}</td>
      <td className="border border-gray-300 px-4 py-2">{teacher?.email}</td>
      <td className="border border-gray-300 px-4 py-2 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className=" border border-[#00000] duration-300 bg-transparent text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
        >
          View Profile
        </button>
      </td>
      <TeacherProfileModal
        closeModal={closeModal}
        isOpen={isOpen}
        teacher={teacher}
      />
    </tr>
  );
};

export default TableRow;
