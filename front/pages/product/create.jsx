import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const ProductCreate = () => {
  // TODO: name, description, cost, thumbnail
  const [name, setName] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const [description, setDescription] = useState('');
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const [cost, setCost] = useState('');
  const onChangeCost = (e) => {
    setCost(e.target.value);
  };

  return (
    <>
      <Card>
        {/* <CardHeader> */}
        <Typography variant='h4' p={2}>
          상품 등록
        </Typography>
        {/* </CardHeader> */}
        <Divider />
        <CardContent sx={{ p: 3 }}>
          <Typography variant='h6' mb={1}>
            상품명
          </Typography>
          <FormControl variant='outlined' fullWidth sx={{ mb: 4 }}>
            <OutlinedInput fullWidth value={name} onChange={onChangeName} />
            <FormHelperText>상품명을 입력해주세요</FormHelperText>
          </FormControl>

          <Typography variant='h6' mb={1}>
            상세설명
          </Typography>
          <FormControl variant='outlined' fullWidth sx={{ mb: 4 }}>
            <OutlinedInput
              fullWidth
              value={description}
              onChange={onChangeDescription}
              multiline
              rows={4}
            />
            <FormHelperText>상품의 상세 설명을 입력해주세요</FormHelperText>
          </FormControl>

          <Typography variant='h6' mb={1}>
            가격
          </Typography>
          <FormControl variant='outlined' fullWidth sx={{ mb: 4 }}>
            <OutlinedInput fullWidth value={cost} onChange={onChangeCost} />
            <FormHelperText>상품의 가격을 입력해주세요</FormHelperText>
          </FormControl>

          <Button color='primary' size='large' variant='contained'>
            <b>상품 등록</b>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCreate;
