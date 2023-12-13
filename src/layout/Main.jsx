import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import MyFooter from "../components/MyFooter";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <MyFooter />
    </div>
  );
};

export default Main;
