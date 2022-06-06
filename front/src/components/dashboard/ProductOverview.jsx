import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

const ProductOverview = () => {
  const router = useRouter();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} md={4}>
        <Card
          sx={{
            cursor: 'pointer',
          }}
          onClick={() => {
            router.push({
              pathname: `/product/[id]`,
              query: { id: 1 },
            });
          }}
        >
          {/* <CardHeader title='Nike' subheader='Nike Dunk Low SE Seoul' /> */}
          <CardMedia
            component='img'
            height='194'
            image='https://kream-phinf.pstatic.net/MjAyMTA4MDZfMjY0/MDAxNjI4MjM5NTA1MjU1.9FfkTXbxZFWKxDMdPayVFlD0GIyNT-mFVIQ7zZW3SPcg.c03UoCFjKXtP4XtNMgBdrmTOIQlqxrePk4JScV4GUHEg.PNG/p_8001cbaf0db042bda09fea320ee328b4.png'
            alt='Paella dish'
          />
          <CardContent>
            <Typography variant='h4'>Nike</Typography>
            <Typography variant='body1'>Nike Dunk Low SE Seoul</Typography>
          </CardContent>
          <CardContent
            sx={{
              textAlign: 'center',
              mt: 2,
            }}
          >
            <div>
              <Typography variant='h4'>DM7708-100</Typography>
              <Typography variant='body1' color='text.secondary'>
                $129,000
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      {/* ------------------------- Design 2 ------------------------- */}
      <Grid item xs={6} md={4}>
        <Card
          sx={{
            cursor: 'pointer',
          }}
        >
          <CardHeader title='Nike' subheader='Nike Dunk Low SE Seoul' />
          <CardMedia
            component='img'
            height='194'
            image='https://kream-phinf.pstatic.net/MjAyMTA4MDZfMjY0/MDAxNjI4MjM5NTA1MjU1.9FfkTXbxZFWKxDMdPayVFlD0GIyNT-mFVIQ7zZW3SPcg.c03UoCFjKXtP4XtNMgBdrmTOIQlqxrePk4JScV4GUHEg.PNG/p_8001cbaf0db042bda09fea320ee328b4.png'
            alt='Paella dish'
          />
          <CardContent
            sx={{
              textAlign: 'center',
              mt: 2,
            }}
          >
            <Typography variant='h4'>DM7708-100</Typography>
            <Typography variant='body1' color='text.secondary'>
              $129,000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card
          sx={{
            cursor: 'pointer',
          }}
        >
          <CardHeader title='Nike' subheader='Nike Dunk Low SE Seoul' />
          <CardMedia
            component='img'
            height='194'
            image='https://kream-phinf.pstatic.net/MjAyMTA4MDZfMjY0/MDAxNjI4MjM5NTA1MjU1.9FfkTXbxZFWKxDMdPayVFlD0GIyNT-mFVIQ7zZW3SPcg.c03UoCFjKXtP4XtNMgBdrmTOIQlqxrePk4JScV4GUHEg.PNG/p_8001cbaf0db042bda09fea320ee328b4.png'
            alt='Paella dish'
          />
          <CardContent
            sx={{
              // display: 'flex',
              // justifyContent: 'center',
              textAlign: 'center',
              mt: 2,
            }}
          >
            <Typography variant='h4'>DM7708-100</Typography>
            <Typography variant='body1' color='text.secondary'>
              $129,000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductOverview;
