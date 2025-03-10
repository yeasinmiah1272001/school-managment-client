import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const StudentAttendance = ({ student }) => {
  const [attendance, setAttendance] = useState(null); // Default value is null
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (student?.attendance !== undefined) {
      setAttendance(student.attendance);
    }
  }, [student]);

  const handleAttendance = async (e) => {
    const isPresent = e.target.value === "Yes";
    setAttendance(isPresent);

    try {
      // Update the attendance status in the database
      await axiosSecure.patch(`/all-student/${student?._id}`, {
        attendance: isPresent,
      });

      toast.success("Attendacne successfully!");
    } catch (error) {
      console.error("Failed to update attendance", error);
    }
  };

  return (
    <td className="border border-gray-300 px-4 py-2">
      <form className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span>Yes</span>
          <input
            className="h-5 w-5"
            type="radio"
            name="attendance"
            value="Yes"
            checked={attendance === true}
            onChange={handleAttendance}
          />
        </div>
        <span>Or</span>
        <div className="flex items-center gap-1">
          <span>No</span>
          <input
            className="h-5 w-5"
            type="radio"
            name="attendance"
            value="No"
            checked={attendance === false}
            onChange={handleAttendance}
          />
        </div>
      </form>
    </td>
  );
};

export default StudentAttendance;
