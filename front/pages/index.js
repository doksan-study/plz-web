import { Grid } from '@mui/material';

import Footer from '../src/layouts/footer/Footer';
import BannerOverview from '../components/dashboard/BannerOverview';
import CategoryOverview from '../components/dashboard/CategoryOverview';
import ProductOverview from '../components/dashboard/ProductOverview';

export default function Index() {
  return (
    <Grid container spacing={3}>
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

      <Grid item xs={12} lg={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
