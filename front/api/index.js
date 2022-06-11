import axios from 'axios';

function createInstance(url) {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
  });
}

export const product = createInstance(`/product`);
