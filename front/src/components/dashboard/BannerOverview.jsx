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
import webShoppingSVG from '/public/static/web_shopping.svg';

import Image from 'next/image';

const BannerOverview = () => {
  const router = useRouter();

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          height: 450,
        }}
      >
        {/* <CardMedia
          component={'img'}
          // sx={{ width: '500', objectFit: 'contain' }}
          image={`${webShoppingSVG}`}
          alt={webShoppingSVG}
          // src={require(`/public/static/web_shopping.svg`)}
        /> */}

        <Image
          src={webShoppingSVG}
          alt='web Shopping'
          style={{ objectFit: 'contain' }}
        />

        <Box
          sx={{
            width: '40%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <CardContent>
            <Typography variant='h1'>
              ONLINE <br />
              SHOPPING
            </Typography>
            <Button
              color='secondary'
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
