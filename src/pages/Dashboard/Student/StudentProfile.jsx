import React, { useEffect, useState } from "react";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import StudentAttendance from "../Teacher/StudentAttendance";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const StudentProfile = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredStudent, setFilteredStudent] = useState([]); // State for filtered data

  // Fetch data using React Query
  const { data: students = [], refetch } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const data = await axiosSecure.get("/all-student");
      return data.data;
    },
  });

  // Filter students based on the search term
  useEffect(() => {
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = students.filter(
        (student) =>
          student.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          student.rollNumber.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredStudent(filtered);
    } else {
      setFilteredStudent(students);
    }
  }, [searchTerm, students]);

  return (
    <div>
      <DasboardTitle role={role} action={"All Student List"} />
      <Container className="lg:mr-6 mt-4 p-4 rounded-lg">
        {/* Search Input */}
        <div className="border border-white rounded-full">
          <input
            className="bg-[#072F7C]/40 w-full outline-none p-2 text-white rounded-full"
            type="text"
            placeholder="Enter student name || Roll Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>

        {/* Table or No Data Message */}
        <div className="overflow-x-auto mt-5">
          {filteredStudent.length > 0 ? (
            <table className="table-auto w-full text-left border-collapse border-gray-200">
              <thead className="bg-[#072F7C]/20">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Student Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Roll Number
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Assignment
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Attendence Request
                  </th>
                  <th className="border border-gray-300 px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {filteredStudent.map((student) => (
                  <tr
                    key={student._id}
                    className="hover:bg-indigo-300 duration-500"
                  >
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <img
                        src={student.image} // Assuming student has a 'image' field
                        alt={`${student.name} profile`}
                        className="w-12 h-12 rounded-full mx-auto"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.rollNumber}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <Link
                        to={`/dashboard/viewStudentProfile/${student._id}`}
                        className="border border-black bg-transparent text-white px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300"
                      >
                        View Profile
                      </Link>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.assignmentName ? (
                        <Link
                          to={`/dashboard/viewassignment/${student._id}`}
                          className="border border-black bg-transparent text-white px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300"
                        >
                          View Assignment
                        </Link>
                      ) : (
                        <p className="border border-black bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300">
                          No Assignment
                        </p>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.attendance === true ? (
                        <button className="border flex gap-2 items-center bg-green-400 border-black  text-black px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300">
                          Present{" "}
                          <span>
                            <IoMdCheckmark size={25} />
                          </span>
                        </button>
                      ) : (
                        <button className="border flex gap-2 items-center border-black bg-rose-700 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300">
                          Absent{" "}
                          <span>
                            <RxCross2 size={25} />
                          </span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-white text-3xl mt-4">
              No student available for the given search.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default StudentProfile;
