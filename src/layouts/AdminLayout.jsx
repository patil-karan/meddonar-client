import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
// import ProductsTable from "../Admin/components/ProductsTable";
// import OrdersTable from "../Admin/components/OrdersTable";
// import CreateProductForm from "../Admin/components/CreateProductForm";
// import CustomersTable from "../Admin/components/CustomersTable";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";
// import Product from "../customer/components/Product/Product";
// import AddVolunteer from "../customer/components/AddVolunteer/AddVolunteer";
// import BloodCamp from "../customer/components/BloodCamp/BloodCamp";
// import BecomePartner from "../customer/components/BecomePartner/BecomePartner";
// import Donate from "../customer/components/Donate/Donate";
// import DonateMed from "../customer/components/Donate/DonateMed";
// import ProductDetails from "../customer/components/ProductDetails/ProductDetails";

const AdminLayout = ({ setAuthenticated }) => {
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
