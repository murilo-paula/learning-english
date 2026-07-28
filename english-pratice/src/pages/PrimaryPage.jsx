import React from "react";
import Sidebar from "../assets/components/Sidebar";
import { Outlet } from "react-router-dom";

const PrimaryPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-screen h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default PrimaryPage;
