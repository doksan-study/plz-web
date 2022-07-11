import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";

const HomeBanner = () => {
  const router = useRouter();

  return (
    <Box>
      <>
        <Swiper
          modules={[Pagination, Autoplay]}
          style={{
            height: "100%",
            width: "100%",
            // marginTop: '5px',
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={true}
        >
          <SwiperSlide
            onClick={() => {
              console.log("상품 등록 form 페이지 이동");
              router.push("/product/create");
            }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://i.pinimg.com/564x/82/83/b9/8283b933eb2a4070c41fadca19316a1d.jpg"
                />
                {/* <CardContent sx={{ height: "50px" }}>
                
                </CardContent> */}
              </CardActionArea>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://i.pinimg.com/564x/82/83/b9/8283b933eb2a4070c41fadca19316a1d.jpg"
                />
              </CardActionArea>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://i.pinimg.com/564x/82/83/b9/8283b933eb2a4070c41fadca19316a1d.jpg"
                />
              </CardActionArea>
            </Card>
          </SwiperSlide>
        </Swiper>
      </>
    </Box>
  );
};

export default HomeBanner;
