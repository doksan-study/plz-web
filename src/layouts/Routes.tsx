import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Auth
import Login from "../pages/auth/Login";
import RegisterStepOne from "../pages/auth/RegisterStepOne";
import Home from "../pages";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
