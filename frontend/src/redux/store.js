import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cartReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducers";
import {
  getServiceDetailsReducer,
  getServicesReducer,
} from "./reducers/serviceReducers";

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: { cartItems: cartFromLocalStorage },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    getServices: getServicesReducer,
    getServiceDetails: getServiceDetailsReducer,
  },
  preloadedState: INITIAL_STATE,
});

export default store;
