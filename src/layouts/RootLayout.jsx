import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="">
      <div className="w-dvw fixed z-50">
        <Navbar />
      </div>
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
