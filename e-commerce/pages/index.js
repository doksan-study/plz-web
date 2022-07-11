import { Grid } from "@mui/material";
import Head from "next/head";
import HomeBanner from "../components/Home/HomeBanner";
import ProductOverview from "../components/Home/ProductOverview";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | plz-web</title>
      </Head>

      <Grid container spacing={10}>
        {/* 등록 및 배너 */}
        <Grid item xs={12} lg={12}>
          <HomeBanner />
        </Grid>

        {/* 아이템들 */}
        <Grid item xs={12} lg={12}>
          <ProductOverview />
        </Grid>
      </Grid>
    </>
  );
}
