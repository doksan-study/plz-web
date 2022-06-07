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

const ProductDetailCard = () => {
  const slides = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/564x/81/60/03/8160038f95c8c4b09949246aac5a14a6.jpg',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/d5/3b/ef/d53bef6aae2bad1eb1746a0edd70de14.jpg',
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/71/61/b6/7161b6140c5cf22284d9613750ca2650.jpg',
    },
  ];

  // TODO: Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <>
            <div>테스트 slider</div>
            <Slider {...settings}>
              <div></div>
            </Slider>
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
