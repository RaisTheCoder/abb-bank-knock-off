import React from "react";
import { Outlet } from "react-router";
import "./layout.css";

// Components
import Header from "../components/header/header";

const layout = () => {
  return (
    <div id="layout">
      <Header />
      <main className="flex flex-col">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
