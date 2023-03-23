
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SAVE_ORDER_ITEM,
    EMPTY_CART,
  } from "../constants/cartConstant"

export const cartReducer = (state ={cartItems:[], shippingInfo:{}}, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload
            const isItemExist = state.cartItems.find((i)=> i.product === item.product)

            if (isItemExist) {
                return {
                    ...state,
                cartItems: state.cartItems.map((i)=> 
                i.product===isItemExist.product ? item : i)
            }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, item]
                }
            }
          
            case  REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter((i)=> 
                i.product !== action.payload)
                };

                case EMPTY_CART:
                    return {
                        ...state,
                        cartItems: [],
                    }
                
                case  SAVE_ORDER_ITEM:
                    return {
                        ...state,
                        shippingInfo: action.payload, 
                    };
            
    
        default:
            return state;
    }
} 