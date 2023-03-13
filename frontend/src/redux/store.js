
import { configureStore } from "@reduxjs/toolkit";
//import { configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
//import { composeWithDevTools } from "@redux-devtools/extension";
//import thunk from "redux-thunk";

//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';
import { getServiceDetailsReducer, getServicesReducer } from './reducers/serviceReducers';


// const reducer = {
//   cart: cartReducer,
//   getProducts: getProductsReducer,
//   getProductDetails: getProductDetailsReducer, 

// }

//const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const INITIAL_STATE = {
  cart: { cartItems: cartFromLocalStorage},
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
  //composeWithDevTools(applyMiddleware(...middleware))
  });



export default store;