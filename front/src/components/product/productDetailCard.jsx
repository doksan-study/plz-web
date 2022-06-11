import React from 'react';
import Image from 'next/image';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import Slider from 'react-slick';

import { useProductDetail } from '../../../hooks/product';

const ProductDetailCard = ({ productId }) => {
  const { isLoading, data } = useProductDetail(productId);

  console.log('나와===============', data);

  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <>
            <div>테스트 slider</div>
            {/* <Slider {...settings}> */}
            <div></div>
            {/* </Slider> */}
          </>

          {/* <CardMedia
            component="img"
            image="https://5.imimg.com/data5/HL/HS/ZC/SELLER-17552598/nike-airmax-tube-shoes-1000x1000.jpg"
            alt="https://5.imimg.com/data5/HL/HS/ZC/SELLER-17552598/nike-airmax-tube-shoes-1000x1000.jpg"
          /> */}
        </Grid>
        <Grid item xs={12} lg={7}>
          <CardContent>
            <Typography variant='h3' gutterBottom>
              <strong>Nike</strong>
            </Typography>
            <Typography variant='body1' color='text.secondary' gutterBottom>
              Nike Dunk Low SE Seoul
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant='h3' gutterBottom>
              <strong>$546,00</strong>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              borderRadius: '12px',
              p: 2,
              width: '100%',
            }}
            variant='contained'
            color='secondary'
          >
            BUY NOW
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              borderRadius: '12px',
              p: 2,
              width: '100%',
            }}
            variant='contained'
            color='primary'
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductDetailCard;
