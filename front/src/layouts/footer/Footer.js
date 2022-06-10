import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    // <Box sx={{ p: 3, textAlign: "center" }}>
    //   <Typography>
    //     © 2022 All rights reserved by{" "}
    //     <Link href="https://www.wrappixel.com">
    //       <a>Wrappixel.com</a>
    //     </Link>{" "}
    //   </Typography>
    // </Box>
    <Card sx={{ p: 3 }}>
      <Grid container>
        <Grid item xs={12} md={4} lg={3}>
          <Typography>Plz-web</Typography>
          <Link href="https://github.com/doksan-study/plz-web">
            <a>깃허브</a>
          </Link>
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
          <div>나와</div>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div>이메일 넣넣</div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Footer;
