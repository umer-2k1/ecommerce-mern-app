import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

// import React from "react";
// import { createReducer } from "@reduxjs/toolkit";


export const  productReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productCount: action.payload.productCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProducts: action.payload.filteredProducts,
      };

    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };

    default:
      return state;
  }
};

// export const productReducer = createReducer(initialState = { product: [] } ,{
//   ALL_PRODUCT_REQUEST: (state) =>{
//     return {
//     loading: true,
//     products: [],
// }},

// ALL_PRODUCT_SUCCESS: (state, action) =>{
//   return {
//     loading: false,
//     products: action.payload.products,
//     productCount: action.payload.productCount,
// }},
// ALL_PRODUCT_FAIL: (state,action) =>{
//   return {
//     loading: false,
//     error: action.payload,

// }},

// CLEAR_ERRORS: (state,action) =>{
//   return {
//     ...initialState,
//     error: null,
// }},


// })











export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case  PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.product,
      };

    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };

    default:
      return state;
  }
};

// export {productReducer}



