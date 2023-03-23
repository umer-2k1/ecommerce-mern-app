import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import { API_BASE_URL } from "../config/apiConfig";



// keyword = ""
export const getAllProducts = (keyword = "", currentPage =1, price=[0,25000], category, rating=0) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
  let link = `${API_BASE_URL}/api/product/getproducts?keyword=${keyword}&page=${currentPage}&prize[gte]=${price[0]}&prize[lte]=${price[1]}&rattings[gte]=${rating}`;
  if (category) {
link = `${API_BASE_URL}/api/product/getproducts?keyword=${keyword}&page=${currentPage}&prize[gte]=${price[0]}&prize[lte]=${price[1]}&category=${category}&rattings[gte]=${rating}`;
  }
    const { data } = await axios.get(link);
    
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data
      })



  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getProductDetails = (id)=> async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`${API_BASE_URL}/api/product/getProductDet/${id}`);
    
      dispatch({
        type:  PRODUCT_DETAILS_SUCCESS,
        payload: data
      })



  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// ckearing all errors
export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type: "CLEAR_ERRORS"
    })
}