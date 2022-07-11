import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 버튼 및 아이콘 */}
        <IconButton
          size="large"
          color="inherit"
          onClick={() => {
            // TODO: 눌렀을 때 Sidebar 나오도록
            console.log("나와");
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* 카테고리 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <div style={{ padding: "10px" }}>카테고리1</div>
          <div style={{ padding: "10px" }}>카테고리2</div>
          <div style={{ padding: "10px" }}>카테고리3</div> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
