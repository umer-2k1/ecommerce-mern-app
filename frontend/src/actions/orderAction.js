import axios from "axios";

import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,

    MY_ORDER_REQUEST,
    MY_ORDER_SUCCESS,
    MY_ORDER_FAIL,

    ORDER_DETAIL_REQUEST,
    ORDER_DETAIL_SUCCESS,
    ORDER_DETAIL_FAIL,

    CLEAR_ERRORS,
} from '../constants/orderConstant';
import { API_BASE_URL } from "../config/apiConfig";

// Creating Orders for the User
export const creatingOrders  = (order) =>async(dispatch, getState)=>{

    try {
        dispatch({type: CREATE_ORDER_REQUEST});

        let link = `${API_BASE_URL}/api/order/new`
        const config = {headers: {'Content-Type': 'application/json'}}
        const {data} = await axios.post(link, order, {  withCredentials: true, credentials: 'include',}, config)

        dispatch({
            type:  CREATE_ORDER_SUCCESS,
            payload: data
          })


    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message,
          });
    }
}

// Getting myOrders 
export const myOrders  = () =>async(dispatch, getState)=>{

    try {
        dispatch({type: MY_ORDER_REQUEST});
// {  withCredentials: true, credentials: 'include',}
        let link = `${API_BASE_URL}/api/order/myOrders`
        const {data} = await axios.get(link,{  withCredentials: true, credentials: 'include',})

        dispatch({
            type:  MY_ORDER_SUCCESS,
            payload: data.orders
          })


    } catch (error) {
        dispatch({
            type: MY_ORDER_FAIL,
            payload: error.response.data.message,
          });
    }
}


// Getting myOrders 
export const orderDetails  = (id) =>async(dispatch, getState)=>{

    try {
        dispatch({type: ORDER_DETAIL_REQUEST});
// {  withCredentials: true, credentials: 'include',}
        let link = `${API_BASE_URL}/api/order/single/${id}`
        const {data} = await axios.get(link,{withCredentials:true})

        dispatch({
            type:  ORDER_DETAIL_SUCCESS,
            payload: data.order
          })


    } catch (error) {
        dispatch({
            type: ORDER_DETAIL_FAIL,
            payload: error.response.data.message,
          });
    }
}

// ckearing all errors
export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
  }