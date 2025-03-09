import React from "react";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import TableRow from "../../../components/Form/TableRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherProfile = () => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  // Dummy data for demonstration

  const { data: teachers = [] } = useQuery({
    queryKey: ["teacher"],
    queryFn: async () => {
      const data = await axiosSecure.get("/all-teacher");
      return data.data;
    },
  });
  console.log(teachers);

  return (
    <div>
      <DasboardTitle role={role} action={"Teacher Profile"} />

      <Container className=" lg:mr-6 mt-4 p-4 rounded-lg">
        <div className="border border-white rounded-full">
          <input
            className="bg-[#072F7C]/ 40 w-full outline-none p-1 ml-3"
            type="text"
            placeholder="Enter your name || Subject Name"
          />
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table-auto w-full text-left border-collapse  border-gray-200">
            <thead className=" bg-[#072F7C]/20">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">
                  Subject Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>

            {/* table row */}
            <tbody>
              {teachers.map((teacher) => (
                <TableRow key={teacher._id} teacher={teacher} />
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default TeacherProfile;
