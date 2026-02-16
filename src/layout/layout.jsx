import React from "react";
import { Outlet } from "react-router";
import "./layout.css";

// Components
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const layout = () => {
  return (
    <div id="layout">
      <Header />
      <main className="flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default layout;
