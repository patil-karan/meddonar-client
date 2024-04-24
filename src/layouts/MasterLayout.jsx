import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <>
      <div className="min-h-screen max-h-full flex flex-col">
        <Navbar />
        <main className="md-min-h-[80vh]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MasterLayout;
