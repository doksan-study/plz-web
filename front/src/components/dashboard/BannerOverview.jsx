import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const BannerOverview = () => {
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          height: 450,
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <CardContent>
            <Typography variant='h1'>SHOES</Typography>
            <Button
              color='secondary'
              size='large'
              variant='contained'
              sx={{
                mt: 3,
                borderRadius: '16px',
              }}
            >
              Shop by Category
            </Button>
          </CardContent>
        </Box>
        <CardMedia
          component={'img'}
          sx={{ width: '50%', objectFit: 'contain' }}
          image='https://www.street.co.kr/wp-content/uploads/2021/04/https___kr.hypebeast.com_files_2020_12_air-jordan-1-ko-chicago-da9089-100-release-info-3.jpg'
          alt='https://www.street.co.kr/wp-content/uploads/2021/04/https___kr.hypebeast.com_files_2020_12_air-jordan-1-ko-chicago-da9089-100-release-info-3.jpg'
        />
      </Card>
    </>
  );
};

export default BannerOverview;
