import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 h-screen">
        <div className="w-full h-full bg-[#4396D9]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
