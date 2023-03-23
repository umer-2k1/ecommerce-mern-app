import React from 'react'
import Cart_Item from './Cart_Item'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,addCartItems } from '../../actions/cartAction'
import EmptyCart from './EmptyCart'
import { FcRight } from "react-icons/fc";
import Typography from '@mui/material/Typography';




// import { useParams } from 'react-router-dom';

// quantity function TODO


const Cart = () => {
  let history = useNavigate();
    const dispatch = useDispatch()
    // let {id} = useParams()
    const {cartItems} = useSelector((state)=> state.cart)

    const deleteCartItem = (id)=>{
      dispatch(removeFromCart(id))
    }

    const increaseQty = (id, qty, availableQty) =>{
      if(qty>=availableQty) return
      const newQty= qty+1
      dispatch(addCartItems(id, newQty))
    }

    const decreaseQty = (id, qty) =>{
      if(qty<=1) return
      const newQty= qty-1
      dispatch(addCartItems(id, newQty))
    }

    const checkOutHandler = ()=>{
      history("/orders");
      // <Redirect to="/login?redirect=orders" />
    }

  return (
    <>
     
    {cartItems.length===0 ?
  (<EmptyCart/>) :
  
  (
    <>
<h3  className='border-b-2 px-3 pb-5 border-gray-100 md:text-4xl text-2xl m-6'>Shopping Cart</h3>
    
     <div  className="bg-gray-50 shadow-lg cart-div flex md:flex-row flex-col w-full h-full  md:space-x-11 md:m-7 my-7 space-x-auto justify-center md:justify-start items-center md:items-start">

{/* Cart item div */}
<div className="items-div md:w-1/2 w-3/4 h-full border-2 border-red-200 text-xs md:text-base lg:text-lg ">


{cartItems&& cartItems.map((val)=> 
(  <Cart_Item  addedItems = {val}  deleteItem = {deleteCartItem} increaseQuantity = {increaseQty} decreaseQuantity = {decreaseQty}/>)
)}

</div>
{/* CLosed here Cart item div */}


{/* Order summary  div */}
<div className="order-summary md:w-2/6 w-3/4 h-full md:p-6 p-2 bg-slate-200 rounded-lg	 text-xs md:text-base lg:text-lg md:mt-auto m-7">
<Typography className='mb-6 font-bold md:text-2xl text-base text-center'>Cart Summary</Typography>


<div className="sub-total flex flex-inline justify-between py-4 border-t-2 border-gray-200">
<h2 className='font-bold'>Order Total</h2>
<span>{cartItems.reduce((acc, currValue)=> acc+ (currValue.quantity*currValue.prize),0)}</span>
</div>

<div className="checkout">
<button onClick={checkOutHandler} type="submit" className="font-medium mx-auto w-full py-2 text-white bg-blue-800 rounded-md">Check Out</button>
</div>

<div className="font-medium mt-5 justify-center items-center text-center flex">
<span>or</span>
<Link to={'/product/getproducts'}><button type="button" className="text-sm md:text-base ml-2  text-indigo-600 hover:text-indigo-900"> Continue Shopping </button></Link>
<FcRight className='text-indigo-600' />
</div>


</div>
{/* Order summary Closed  div */}






</div>

    </>
  )
  
  } 






















  




    </>
  )
}

export default Cart
