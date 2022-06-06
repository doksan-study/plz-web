import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const ProductDetailCard = () => {
  return (
    <Card>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <CardMedia
            component='img'
            image='https://5.imimg.com/data5/HL/HS/ZC/SELLER-17552598/nike-airmax-tube-shoes-1000x1000.jpg'
            alt='https://5.imimg.com/data5/HL/HS/ZC/SELLER-17552598/nike-airmax-tube-shoes-1000x1000.jpg'
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <CardContent>
            <Typography variant='h3' gutterBottom>
              <strong>Nike</strong>
            </Typography>
            <Typography variant='body1' color='text.secondary' gutterBottom>
              Nike Dunk Low SE Seoul
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant='h3' gutterBottom>
              <strong>$546,00</strong>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              borderRadius: '12px',
              p: 2,
              width: '100%',
            }}
            variant='contained'
            color='secondary'
          >
            BUY NOW
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              borderRadius: '12px',
              p: 2,
              width: '100%',
            }}
            variant='contained'
            color='primary'
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductDetailCard;
