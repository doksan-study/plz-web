import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ProductDetailCard from '../../src/components/product/productDetailCard';

const ProductDetail = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ProductDetailCard />
      </Grid>

      <Grid item xs={12}>
        <Card>
          <Grid container spacing={4}>
            <Grid item sx={12}>
              skdhkskdhskdhshdl
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
