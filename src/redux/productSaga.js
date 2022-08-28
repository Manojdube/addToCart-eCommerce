import {
  PRODUCT_LIST,
  SEARCH_PRODUCT_LIST,
  SET_PRODUCT_LIST,
} from "./constant";
import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  let data = yield fetch("http://localhost:3001/product");
  data = yield data.json();
  console.warn(data);
  yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* getSearchProducts(data) {
  let result = yield fetch(`http://localhost:3001/product?q=${data.query}`);
  console.log(data);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT_LIST, getSearchProducts);
}
export default productSaga;
