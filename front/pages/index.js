import { Grid } from '@mui/material';
import SalesOverview from '../src/components/dashboard/SalseOverview';
import DailyActivity from '../src/components/dashboard/DailyActivity';
import ProductPerfomance from '../src/components/dashboard/ProductPerfomance';
import ProductOverview from '../src/components/dashboard/ProductOverview';

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        {/* <SalesOverview /> */}
        <ProductOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        {/* <BlogCard /> */}
      </Grid>
    </Grid>
  );
}
