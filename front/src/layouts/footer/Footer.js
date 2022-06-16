import React from 'react';
import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
const Footer = () => {
  return (
    <Card sx={{ p: 3, pt: 20, pb: 10 }}>
      {/* <Box sx={{ p: 3, mt: 20 }}> */}
      <Grid container>
        <Grid item xs={12} md={4} sx={{ mb: 4 }}>
          <Typography variant='h5' mb={2}>
            PLZ-WEB
          </Typography>
          <Typography variant='body1'>Doksan-Study</Typography>
          <Typography variant='body1'>대표: 나</Typography>
          <Typography variant='body1'>
            이메일: onlyhappiness96@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          {/* TODO: 이동하는 메뉴 */}
          <Typography variant='h5' mb={2}>
            Navigation
          </Typography>
          <Typography variant='body1'>Dashboard</Typography>
          <Typography variant='body1'>Product</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant='h5' mb={2}>
            LEGAL
          </Typography>
          <Typography variant='body1'>이용약관</Typography>
          <Typography variant='body1'>개인 정보 취급 방침</Typography>
          <Typography variant='body1'>취소 및 환불정책</Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ mt: 3, mb: 3 }}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={12}>
          2022 PLZ-WEB
          {/* TODO: 링크 아이콘 넣기 */}
        </Grid>
      </Grid>
      {/* </Box> */}
    </Card>
  );
};

export default Footer;
