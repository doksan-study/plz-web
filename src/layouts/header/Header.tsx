import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "gray",
  color: "white",

  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default ({ isSidebarOpen }: { isSidebarOpen: () => void }) => {
  return (
    <HeaderAppBar>
      <HeaderToolbar>
        <div onClick={isSidebarOpen}>사이드바</div>
      </HeaderToolbar>
    </HeaderAppBar>
  );
};
