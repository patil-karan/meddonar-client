import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";

const AdminLayout = () => {
  const location = useLocation();
  // Get the path of the current route
  const currentPath = location.pathname;

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="flex-1 overflow-y-scroll relative">
        <Header />
        <div className="md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
