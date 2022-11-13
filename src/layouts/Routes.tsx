import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Auth
import Login from "../pages/auth/Login";
import RegisterStepOne from "../pages/auth/RegisterStepOne";
import Home from "../pages/Home";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/RegisterStepOne" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
