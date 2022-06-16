import React from "react";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";

import manImg from "/public/static/dashboard/man.svg";
import womanImg from "/public/static/dashboard/woman.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";

const testCategory = [
  {
    id: 1,
    name: "카테고리 1",
  },
  {
    id: 2,
    name: "카테고리 2",
  },
  {
    id: 3,
    name: "카테고리 3",
  },
  {
    id: 4,
    name: "카테고리 4",
  },
  {
    id: 5,
    name: "카테고리 5",
  },
  {
    id: 6,
    name: "카테고리 6",
  },
];

const CategoryOverview = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          // p: 3,
        }}
      >
        {/* <Card>카테고리 넣넣</Card> */}
        <Swiper
          modules={[Pagination]}
          style={{
            height: "100%",
            width: "100%",
          }}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {/* {testCategory.map((data) => {
            return (
              <SwiperSlide
                key={data.id}
                style={{
                  height: "100%",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data.name}
              </SwiperSlide>
            );
          })} */}

          <SwiperSlide
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Card>
              <Image src={manImg} alt="man" width={200} height={150} />
              <CardContent>남성</CardContent>
            </Card>
          </SwiperSlide>

          <SwiperSlide
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Card>
              <Image src={womanImg} alt="man" width={200} height={150} />
              <CardContent>여성</CardContent>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Card>
    </>
  );
};

export default CategoryOverview;
