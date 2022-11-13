import { AppBar, Box, Button, SxProps, Theme, Toolbar } from "@mui/material";
import React from "react";

export default ({ isSidebarOpen, lgUp, toggleMobileSidebar }: any) => {
  return (
    <AppBar
      sx={{
        paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
        backgroundColor: "#fbfbfb",
        fontFamily: "Jalnan",
      }}
    >
      <Toolbar>
        <Box flexGrow={1} />
        <Button>헤더</Button>
      </Toolbar>
    </AppBar>
  );
};
