import React from "react";
import Image from "next/image";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { shoes } from "../../../data/shoesData";
import { useProductDetail } from "../../../hooks/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const ProductDetailCard = ({ productId }) => {
  // FIXME: 잠시 주석
  // const { isLoading, data } = useProductDetail(productId);
  // console.log('나와===============', data);

  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <>
            <Swiper
              modules={[Pagination]}
              style={{
                height: "100%",
                width: "100%",
              }}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {shoes.map((data) => {
                return (
                  <SwiperSlide
                    style={{
                      width: "100%",
                      height: "500px",
                      backgroundColor: "#B9B9B9",
                    }}
                  >
                    {/* <Image
                      src={data.thumbnail}
                      alt={data.thumbnail}
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="contain"
                    /> */}
                    <CardMedia
                      component="img"
                      src={data.thumbnail}
                      alt={data.thumbnail}
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        </Grid>
        <Grid item xs={12} lg={7}>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              <strong>Nike</strong>
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Nike Dunk Low SE Seoul
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              <strong>$546,00</strong>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              borderRadius: "12px",
              p: 2,
              width: "100%",
            }}
            variant="contained"
            color="secondary"
          >
            BUY NOW
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              borderRadius: "12px",
              p: 2,
              width: "100%",
            }}
            variant="contained"
            color="primary"
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductDetailCard;
