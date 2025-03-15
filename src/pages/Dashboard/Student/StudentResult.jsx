import React from "react";

import { useEffect, useState } from "react";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import logo from "../../../assets/logo.png";

const StudentResult = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudent, setFilteredStudent] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

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
          student.rollNumber &&
          student.rollNumber.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredStudent(filtered);

      // Auto-select the first student if there's only one match
      if (filtered.length === 1) {
        setSelectedStudent(filtered[0]);
      } else {
        setSelectedStudent(null);
      }
    } else {
      setFilteredStudent([]);
      setSelectedStudent(null);
    }
  }, [searchTerm, students]);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  // Calculate CGPA and overall grade
  const calculateResults = (subjectMarks) => {
    if (!subjectMarks || subjectMarks.length === 0)
      return { cgpa: "N/A", grade: "N/A" };

    const gradePoints = {
      "A+": 5.0,
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      D: 1.0,
      F: 0.0,
    };

    const totalPoints = subjectMarks.reduce((sum, subject) => {
      return sum + (gradePoints[subject.grade] || 0);
    }, 0);

    const cgpa = (totalPoints / subjectMarks.length).toFixed(1);

    // Determine overall grade based on CGPA
    let grade = "F";
    if (cgpa >= 4.5) grade = "A+";
    else if (cgpa >= 3.7) grade = "A";
    else if (cgpa >= 3.3) grade = "A-";
    else if (cgpa >= 3.0) grade = "B+";
    else if (cgpa >= 2.7) grade = "B";
    else if (cgpa >= 2.3) grade = "B-";
    else if (cgpa >= 2.0) grade = "C";
    else if (cgpa >= 1.0) grade = "D";

    return { cgpa, grade };
  };

  return (
    <div>
      <DasboardTitle role={role} action={"Student Result"} />
      <Container className="pb-10">
        {/* Search Input */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by Roll Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 pl-10  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Student List */}
        {filteredStudent.length > 0 && !selectedStudent && (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Search Results:</h3>
            <div className="space-y-2 ">
              {filteredStudent.map((student) => (
                <div
                  key={student._id}
                  className="p-3 bg-[#DDF8A0]/70 border rounded-lg cursor-pointer hover:bg-[#DDF8A0]"
                  onClick={() => handleSelectStudent(student)}
                >
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-500">
                    Roll: {student.rollNumber}, Class: {student.className}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Marksheet */}
        {selectedStudent && selectedStudent.subjectMarks && (
          <div className="max-w-3xl bg-white mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm print:shadow-none">
            {/* Header */}
            <div className="bg-[#ddf8a0] py-4 px-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <img src={logo} alt="School Logo" className="w-10 h-10" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-[#6366f1]">
                    Katkhal High School
                  </h1>
                  <p className="text-sm">Katkhal, Mithamoin, Kishoreganj</p>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="py-4 text-center">
              <h2 className="text-xl font-semibold text-green-700">
                Marksheet
              </h2>
            </div>

            {/* Student Info */}
            <div className="px-6 py-3 space-y-1">
              <div className="flex">
                <span className="w-20 font-medium">Name</span>
                <span>: {selectedStudent.name}</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium">Class</span>
                <span>: {selectedStudent.className}</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium">Roll No</span>
                <span>: {selectedStudent.rollNumber}</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium">Gender</span>
                <span>: {selectedStudent.gender}</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium"> Birthday</span>
                <span>: {selectedStudent.date}</span>
              </div>
            </div>

            {/* Marks Table */}
            <div className="px-6 py-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#f0f9d8]">
                      <th className="border border-gray-300 px-4 py-2 text-left w-12">
                        SL
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Subject
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center">
                        Perfect Marks
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center">
                        Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedStudent.subjectMarks.map((mark, index) => (
                      <tr
                        key={mark.subject}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-blue-700">
                          {mark.subject}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {mark.perfectMarks || 100}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {mark.mark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Result Summary */}
            <div className="px-6 py-3 text-center">
              {(() => {
                const { cgpa, grade } = calculateResults(
                  selectedStudent.subjectsMark
                );
                return (
                  <p className="font-medium">
                    CGPA: {cgpa} &nbsp;&nbsp; GRADE: {grade}
                  </p>
                );
              })()}
            </div>

            {/* Footer */}
            <div className="px-6 py-8 mt-4">
              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <div className="pt-6 border-t border-gray-300">
                    <p>Result published date</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="pt-6 border-t border-gray-300">
                    <p>Class Teacher</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="pt-6 border-t border-gray-300">
                    <p>Principle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Button */}
            <div className="px-6 py-4 flex justify-end print:hidden">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Print Marksheet
              </button>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {searchTerm && filteredStudent.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">
              No students found with the given roll number.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default StudentResult;
