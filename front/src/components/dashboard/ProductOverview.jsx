import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const ProductOverview = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title='Nike' subheader='Nike Dunk Low SE Seoul' />
          <CardMedia
            component='img'
            height='194'
            image='https://kream-phinf.pstatic.net/MjAyMTA4MDZfMjY0/MDAxNjI4MjM5NTA1MjU1.9FfkTXbxZFWKxDMdPayVFlD0GIyNT-mFVIQ7zZW3SPcg.c03UoCFjKXtP4XtNMgBdrmTOIQlqxrePk4JScV4GUHEg.PNG/p_8001cbaf0db042bda09fea320ee328b4.png'
            alt='Paella dish'
          />
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Typography variant='body2' color='text.secondary'>
                DM7708-100
              </Typography>
              <Typography variant='body1'>Unknown</Typography>
            </div>
            <div>
              <Typography variant='h3'>$129,000</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      {/* ------------------------- Design 2 ------------------------- */}
      <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
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
