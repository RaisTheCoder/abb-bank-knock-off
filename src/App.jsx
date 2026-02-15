import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

// Layout
import Layout from "./layout/layout";

// Pages
import Home from "./pages/home/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
