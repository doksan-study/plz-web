import React, { useCallback, useState } from "react";
import Head from "next/head";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const ProductCreate = () => {
  const [name, setName] = useState("");
  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>상품 등록</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
          <Card>
            <CardHeader title="상품 등록" />
            {/* <Divider /> */}
            <CardContent>
              <Grid container spacing={3}>
                {/* TODO: 상품 이름, 설명, 비용, 이미지 */}
                <Grid item md={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    label="제품명"
                    name="name"
                    type="text"
                    helperText="제품명을 입력하세요"
                    placeholder={`제품명을 입력해주세요`}
                    value={name}
                    onChange={onChangeName}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ProductCreate;
