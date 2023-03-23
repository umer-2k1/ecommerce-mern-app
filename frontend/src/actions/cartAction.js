import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  EMPTY_CART,
  SAVE_ORDER_ITEM,
} from '../constants/cartConstant';
import { API_BASE_URL } from "../config/apiConfig";

export const addCartItems = (id, quantity=1)=> async (dispatch, getState) => {
        
        let link =`${API_BASE_URL}/api/product/getProductDet/${id}`
      const { data } = await axios.get(link);
      
        dispatch({
          type:  ADD_TO_CART,
          // payload:data.product
          payload: {
            product: data.product._id,
            title: data.product.title,
            prize: data.product.prize,
            image: data.product.images[0].url,
            availableQty: data.product.availableQty,
            category: data.product.category,
            quantity,
          },
        })
localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems))
  };


  export const removeFromCart = (id)=> async (dispatch,getState) => {
      
        dispatch({
          type:  REMOVE_ITEM,
          payload: id
        })
        localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems))
      }

      export const emptyCart = ()=> async (dispatch,getState) => {
      
        dispatch({
          type:  EMPTY_CART,
        })
        localStorage.removeItem("cartItem")
      }

      export const saveOrderItems = (data)=> async (dispatch) => {
      
        dispatch({
          type:  SAVE_ORDER_ITEM,
          payload: data
        })
        localStorage.setItem("ordersInfo", JSON.stringify(data))
      }