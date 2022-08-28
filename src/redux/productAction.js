import { PRODUCT_LIST, SEARCH_PRODUCT_LIST } from "./constant";

export const ProductList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const ProductSearch = (query) => {
  return {
    type: SEARCH_PRODUCT_LIST,
    query,
  };
};
