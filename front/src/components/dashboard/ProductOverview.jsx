import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

import { shoes } from '../../../data/shoesData';
import { productListData } from '../../../hooks/product';

const ProductOverview = () => {
  const router = useRouter();

  const { isLoading, data: productList } = productListData();
  console.log('불러오는 데이터 목록======================', data);

  return (
    <Grid container spacing={2}>
      {shoes.map((data, i) => {
        return (
          <Grid item xs={6} md={4} key={data.id}>
            <Card
              sx={{
                cursor: 'pointer',
                height: '450px',
              }}
              onClick={() => {
                router.push({
                  pathname: '/product/[id]',
                  query: {
                    id: data.id,
                  },
                });
              }}
            >
              <CardHeader title={data.name} subheader={data.description} />
              <CardMedia
                component='img'
                height='194'
                image={data.thumbnail}
                alt={data.thumbnail}
              />
              <CardContent
                sx={{
                  textAlign: 'center',
                  mt: 2,
                }}
              >
                <Typography variant='h4' mb={1}>
                  {data.description}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  {data.cost?.toLocaleString('ko-KR')}원
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductOverview;
