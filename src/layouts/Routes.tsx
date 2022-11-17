import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Auth
import Login from "../pages/auth/Login";
import RegisterStepOne from "../pages/auth/RegisterStepOne";
import Dashboard from "../pages/main/Dashboard";
import useUserInfo from "../hooks/useUserInfo";
import Special from "../pages/main/Special";
import New from "../pages/main/New";
import Best from "../pages/main/Best";
import Appliance from "../pages/main/Appliance";
import Fashion from "../pages/main/Fashion";
import Food from "../pages/main/Food";
import api from "../api";
import { useDispatch } from "react-redux";
import { clearPrincipal, setPrincipal } from "../redux/authReducer";
import Loading from "../components/Loading";

export default () => {
  const dispatch = useDispatch<any>();

  const [loading, setLoading] = useState(true);

  // 세션에 토큰이 있으면 자동 로그인
  useEffect(() => {
    const loadPrincipal = async () => {
      try {
        const token = await sessionStorage.getItem("token");

        if (!token) return;

        const { data } = await api.get(`/user/me`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        await dispatch(setPrincipal(data));
      } catch (error) {
        dispatch(clearPrincipal());
      }
    };

    loadPrincipal();

    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [dispatch]);

  const userInfo = useUserInfo();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {!userInfo ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register/one" element={<RegisterStepOne />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appliance" element={<Appliance />} />
            <Route path="/best" element={<Best />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/food" element={<Food />} />
            <Route path="/new" element={<New />} />
            <Route path="/special" element={<Special />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
