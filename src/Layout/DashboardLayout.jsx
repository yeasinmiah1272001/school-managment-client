import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import useRole from "../hooks/useRole";
import Container from "../components/Container";

const DashboardLayout = () => {
  const [role] = useRole();
  return (
    <div className="relative min-h-screen flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64 h-screen">
        <div className="w-full h-full bg-[#4396D9]">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
