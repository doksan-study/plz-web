import { useQuery } from 'react-query';
import { productListAPI } from '../api/product';

export const productListData = () => {
  return useQuery('product-list', productListAPI);
};
