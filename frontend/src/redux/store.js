

import { configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';


const reducer = {
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer, 

}

const middleware = [thunk];

const store = configureStore(
  {reducer},
  composeWithDevTools(applyMiddleware(...middleware))
  );



export default store;