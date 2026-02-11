import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Outlet></Outlet>
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
    </div>
  );
};

export default Root;
