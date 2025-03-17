import React, { useEffect, useState } from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import StudentAttendance from "./StudentAttendance";

const Attendence = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedClass, setSelectedClass] = useState(""); // State for selected class
  const [filteredStudent, setFilteredStudent] = useState([]); // State for filtered data

  // Fetch data using React Query
  const { data: students = [], refetch } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const data = await axiosSecure.get("/all-student");
      console.log(data);
      return data.data;
    },
  });

  // Filter students based on the search term and selected class
  useEffect(() => {
    let filtered = students || []; // যদি `students` undefined হয়, তাহলে খালি অ্যারে নেবে।

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (student) =>
          (student.name?.toLowerCase() || "").includes(lowerCaseSearchTerm) ||
          (student.rollNumber?.toLowerCase() || "").includes(
            lowerCaseSearchTerm
          )
      );
    }

    if (selectedClass) {
      filtered = filtered.filter(
        (student) =>
          (student.className?.toLowerCase() || "") ===
          selectedClass.toLowerCase()
      );
    }

    setFilteredStudent(filtered);
  }, [searchTerm, selectedClass, students]);

  return (
    <div>
      <DasboardTitle role={role} action={"All Student Attendence"} />
      <Container className="lg:mr-6 mt-4 p-4 rounded-lg">
        {/* Search Input */}
        <div className="border border-white rounded-full mb-4">
          <input
            className="bg-[#072F7C]/40 w-full outline-none p-2 text-white rounded-full"
            type="text"
            placeholder="Enter student name || Roll Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>

        {/* Class Selection */}
        <div className="mb-4">
          <select
            className="p-2 border border-gray-300 rounded"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Classes</option>
            <option value="Six">Six</option>
            <option value="Seven">Seven</option>
            <option value="Eight">Eight</option>
            <option value="Nine">Nine</option>
            <option value="Ten">Ten</option>
          </select>
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
                    Class Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Roll Number
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Attendance Request
                  </th>
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
                        src={student.image}
                        alt={`${student.name} profile`}
                        className="w-12 h-12 rounded-full mx-auto"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.className}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.rollNumber}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="border border-black bg-transparent text-white px-3 py-1 rounded text-sm hover:bg-blue-600 duration-300">
                        View Profile
                      </button>
                    </td>
                    <StudentAttendance student={student} />
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

export default Attendence;
