import { useState } from "react";
import { useRouter } from "next/router";

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Tab,
  Box,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import ProductDetailCard from "../../src/components/product/productDetailCard";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.id;

  // TODO: 탭
  const [value, setValue] = useState("1");
  const onChageValue = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ProductDetailCard productId={productId} />
      </Grid>

      <Grid item xs={12}>
        {/* TODO: 탭 컴포넌트로 구분 */}
        <Card sx={{ p: 3 }}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={onChageValue}>
                  <Tab label="상세 설명" value="1" />
                  <Tab label="상품 리뷰" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">111111111111</TabPanel>
              <TabPanel value="2">22222222222</TabPanel>
            </TabContext>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
