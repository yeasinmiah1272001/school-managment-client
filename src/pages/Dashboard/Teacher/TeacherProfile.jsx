import React, { useEffect, useState } from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import TableRow from "../../../components/Form/TableRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherProfile = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredTeachers, setFilteredTeachers] = useState([]); // State for filtered data

  // Fetch data using React Query
  const { data: teachers = [], refetch } = useQuery({
    queryKey: ["teacher"],
    queryFn: async () => {
      const data = await axiosSecure.get("/all-teacher");
      return data.data;
    },
  });

  // Filter teachers based on the search term
  useEffect(() => {
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = teachers.filter(
        (teacher) =>
          teacher.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          teacher.subject.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredTeachers(filtered);
    } else {
      setFilteredTeachers(teachers);
    }
  }, [searchTerm, teachers]);

  return (
    <div>
      <DasboardTitle role={role} action={"Teacher Profile"} />
      <Container className="lg:mr-6 mt-4 p-4 rounded-lg">
        {/* Search Input */}
        <div className="border border-white rounded-full">
          <input
            className="bg-[#072F7C]/40 w-full outline-none p-2 text-white rounded-full"
            type="text"
            placeholder="Enter your name || Subject Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>

        {/* Table or No Data Message */}
        <div className="overflow-x-auto mt-5">
          {filteredTeachers.length > 0 ? (
            <table className="table-auto w-full text-left border-collapse border-gray-200">
              <thead className="bg-[#072F7C]/20">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Subject Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                  {role === "admin" && (
                    <>
                      <th className="border border-gray-300 px-4 py-2">Edit</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Delete
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              {/* Table Rows */}
              <tbody>
                {filteredTeachers.map((teacher) => (
                  <TableRow
                    key={teacher._id}
                    teacher={teacher}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-white text-3xl mt-4">
              No teacher available for the given search.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TeacherProfile;
