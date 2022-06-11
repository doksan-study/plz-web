import { product } from './index';

// 상품 목록
function productListAPI() {
  console.log('요청하는 api========', `/list?page=1&limit=10`);
  return product.get(`/list?page=1&limit=10`);
}

// 상품 상세 정보
function productDetailAPI(id) {
  console.log('요청하는 api=======', `/product/${id}`);
  return product.get(`/${id}`);
}

// 상품 등록
function productCreateAPI(data) {
  console.log('요청하는 api=======', `/product`);
  return product.post(``, data);
}

// 상품 수정
function productModifyAPI(data) {
  console.log('요청하는 api=======', `/product`);
  return product.put(``, data);
}

// 상품 삭제
function productDeleteAPI(id) {
  console.log('요청하는 api=======', `/product/${id}`);
  return product.get(`/list/${id}`);
}

export {
  productListAPI, // 상품 목록
  productDetailAPI, // 상품 상세 정보
  productCreateAPI, // 상품 등록
  productModifyAPI, // 상품 수정
  productDeleteAPI, // 상품 삭제
};
