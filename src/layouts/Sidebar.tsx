import { Box, Button, Drawer, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import SidebarContents from "../components/SidebarContents";
import theme from "../theme/theme";

export default ({
  isSidebarOpen,
  isMobileSidebarOpen,
  onSidebarClose,
}: any) => {
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        <SidebarContents onSidebarClose={onSidebarClose} />
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
    >
      <SidebarContents onSidebarClose={onSidebarClose} />
    </Drawer>
  );
};
