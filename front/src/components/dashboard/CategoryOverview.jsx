import React from "react";
import { Card, IconButton } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

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
          height: "200px",
        }}
      >
        {/* <Card>카테고리 넣넣</Card> */}
        <Swiper
          modules={[Pagination]}
          style={{
            height: "100%",
          }}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {testCategory.map((data) => {
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
          })}
        </Swiper>
      </Card>
    </>
  );
};

export default CategoryOverview;
