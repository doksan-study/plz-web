import { Box, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../theme/theme";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default ({ children }: any) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <MainContainer>
      <Header
        isSidebarOpen={isSidebarOpen}
        lgUp={lgUp}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <PageContainer>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  padding-top: 64px;
`;
