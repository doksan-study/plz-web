import { useState } from 'react';
import ProductDetailCard from '../../src/components/product/productDetailCard';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Tab,
  Box,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const ProductDetail = () => {
  // TODO: 탭
  const [value, setValue] = useState('1');
  const onChageValue = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ProductDetailCard />
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={onChageValue}>
                  <Tab label='상세 설명' value='1' />
                  <Tab label='상품 리뷰' value='2' />
                </TabList>
              </Box>
              <TabPanel value='1'>
                111111111111111111111111111111111111111111111111 aut! Iste qui,
                aliquid provident nostrum consectetur ea praesentium nulla,
                officiis libero tempore accusantium.
              </TabPanel>
              <TabPanel value='2'>
                222222222222222222222222222222222222 elit. Molestias
                necessitatibus quisquam dolores exercitationem vel ea odio
                ipsam, quia atque quae voluptate ad modi cumque natus? Delectus
                corrupti non optio corporis.
              </TabPanel>
            </TabContext>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
