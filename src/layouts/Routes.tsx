import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Auth
import Login from "../pages/auth/Login";
import RegisterStepOne from "../pages/auth/RegisterStepOne";
import Home from "../pages";
import useUserInfo from "../hooks/useUserInfo";

export default () => {
  const userInfo = useUserInfo();

  return (
    <BrowserRouter>
      <Routes>
        {!userInfo ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
