import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiActivity,
} from "react-icons/fi";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-states");
      return res.data;
    },
  });

  const chartData = [
    { name: "student", value: stats.student || 0 },
    { name: "teacher", value: stats.teacher || 0 },
    { name: "attendance", value: stats?.attendance || 0 },
    // { name: "Active", value: stats.active || 0 },
  ];

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-[#072F7C]/50 shadow-md rounded-lg p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-500">
            <FiUsers size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Total Student</h2>
            <p className="text-2xl font-bold text-white">
              {stats.student || 0}
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#072F7C]/50 shadow-md rounded-lg p-4 flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full text-green-500">
            <FiShoppingCart size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Total Teacher</h2>
            <p className="text-2xl font-bold text-white">
              {stats.teacher || 0}
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#072F7C]/50 shadow-md rounded-lg p-4 flex items-center gap-4">
          <div className="p-3 bg-yellow-100 rounded-full text-yellow-500">
            <FiDollarSign size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">
              Student Attendance
            </h2>
            <p className="text-2xl font-bold text-white">80 %</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#072F7C]/50 shadow-md rounded-lg p-4 flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-full text-red-500">
            <FiActivity size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">student Absent</h2>
            <p className="text-2xl font-bold">20 %</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-[#072F7C]/50 shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Statistics Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHome;
