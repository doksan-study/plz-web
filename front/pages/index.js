import { Card, Grid } from "@mui/material";
import SalesOverview from "../src/components/dashboard/SalseOverview";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import ProductOverview from "../src/components/dashboard/ProductOverview";
import BannerOverview from "../src/components/dashboard/BannerOverview";
import Footer from "../src/layouts/footer/Footer";
import CategoryOverview from "../src/components/dashboard/CategoryOverview";

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        {/* <SalesOverview /> */}
        <BannerOverview />
      </Grid>

      <Grid item xs={12} lg={12}>
        <CategoryOverview />
      </Grid>

      <Grid item xs={12} lg={12}>
        <ProductOverview />
      </Grid>

      {/* <Grid item xs={12} lg={12}>
        <Footer />
      </Grid> */}
    </Grid>
  );
}
