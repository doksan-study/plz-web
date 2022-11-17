import { Typography } from "@mui/material";
import React from "react";
import Loading from "../../components/Loading";
import DefaultLayout from "../../layouts/DefaultLayout";
// import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    // <Loading />
    <DefaultLayout>
      <Typography variant="body1">배너</Typography>
      <div>카테고리</div>
    </DefaultLayout>
  );
}
