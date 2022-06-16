import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import webShoppingSVG from '/public/static/dashboard/web_shopping.svg';

import Image from 'next/image';

const BannerOverview = () => {
  const router = useRouter();

  return (
    <>
      {/* TODO: Grid로 줄어들었을 경우 반응형 고려 */}
      {/* 배너는 어떤 것을 넣으면 좋을 지 생각해보자 */}
      <Card
        sx={{
          display: 'flex',
          height: 450,
        }}
      >
        <Image
          src={webShoppingSVG}
          alt='web Shopping'
          style={{ objectFit: 'cover' }}
        />

        <Box
          sx={{
            width: '60%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <CardContent>
            <Typography variant='h1' mb={1}>
              ONLINE SHOPPING
            </Typography>
            <Typography variant='body1'>상품을 등록하세요!</Typography>
            <Button
              color='primary'
              size='large'
              variant='contained'
              sx={{
                padding: '1rem 3rem ',
                mt: 3,
                borderRadius: '16px',
              }}
              onClick={() => {
                router.push(`/product/create`);
              }}
            >
              ADD
            </Button>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default BannerOverview;
