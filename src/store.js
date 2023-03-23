import {createStore, applyMiddleware, combineReducers, } from 'redux'
import thunk from 'redux-thunk' 
import { composeWithDevTools } from 'redux-devtools-extension';
import {productReducer,productDetailsReducer} from './reducers/productReducer'
import { userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import { newOrderReducer, myOrdersReducer, orderDetailReducer } from './reducers/orderReducer';
const reducer = combineReducers({
products: productReducer,
productDetails: productDetailsReducer,
user: userReducer,
cart: cartReducer,
newOrder: newOrderReducer,
myOrder: myOrdersReducer,
orderDetail: orderDetailReducer,
})


let initialState = {
    cart:{
        cartItems: localStorage.getItem("cartItem") ? 
        JSON.parse(localStorage.getItem("cartItem")) : [],

        shippingInfo: localStorage.getItem("ordersInfo") ? 
        JSON.parse(localStorage.getItem("ordersInfo")) : []
    }
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// import { configureStore } from '@reduxjs/toolkit'
// import {productReducer} from './reducers/productReducer'

// export const store = configureStore({
//   reducer: {
//     products: productReducer,
//   }
// })

export default store