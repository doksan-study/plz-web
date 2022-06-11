import { useQuery } from 'react-query';
import { productListAPI, productDetailAPI } from '../api/product';

// 상품 목록
export const useProductListData = () => {
  return useQuery('product-list', productListAPI);
};

// 상품 상세
export const useProductDetail = (productId) => {
  return useQuery(['product-detail', productId], () =>
    productDetailAPI(productId)
  );
};
