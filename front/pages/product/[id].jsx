import { Card, CardMedia, Grid } from '@mui/material';

const ProductDetail = () => {
  return (
    <Grid container spacing={0}>
      <Card>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardMedia
              component='img'
              // height="140"
              image='https://www.street.co.kr/wp-content/uploads/2021/04/https___kr.hypebeast.com_files_2020_12_air-jordan-1-ko-chicago-da9089-100-release-info-3.jpg'
              alt='https://www.street.co.kr/wp-content/uploads/2021/04/https___kr.hypebeast.com_files_2020_12_air-jordan-1-ko-chicago-da9089-100-release-info-3.jpg'
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          skdhk
        </Grid>
      </Card>
    </Grid>
  );
};

export default ProductDetail;
