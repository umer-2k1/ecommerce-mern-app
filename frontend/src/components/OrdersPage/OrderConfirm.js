import React from 'react'
// import { saveOrderItems} from '../../actions/cartAction'
import { useSelector } from 'react-redux'
import "../../Style/ProductDetails.css";
import { ToastContainer } from 'react-toastify';
import Typography from '@mui/material/Typography';
import CheckoutSteps from './CheckoutSteps';
import {useNavigate } from 'react-router-dom'
// import { elementAcceptingRef } from '@mui/utils';



const OrderConfirm = () => {
  let history = useNavigate();
const {shippingInfo,cartItems} = useSelector((state)=> state.cart)
const {newUser} = useSelector((state)=> state.user)

const subTotal = parseInt(cartItems.reduce((acc, currValue)=> acc+(currValue.prize*currValue.quantity),0))

// 100 shipping charges
const shippingCharge = parseInt(cartItems.map((ele)=> subTotal>1000? ele.quantity*100: 0))
// 10% tax
const tax = parseInt(subTotal*0.10)
const total = (subTotal+shippingCharge+tax);

// Proper complete address
const completeAddress = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pincode}, ${shippingInfo.country}`

const proceedToPaymentHandler = ()=>{
  let amountdata = {
    subTotal,
    shippingCharge,
    tax,
    total,
  }
  sessionStorage.setItem("amountInfo", JSON.stringify(amountdata))
  history("/payment/process")
}



  return (
    <>

<ToastContainer 
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="dark"
    />

<CheckoutSteps activeStep={1} />
   
   <div className="main-container flex flex-col md:flex-row">

   
<div className='right-containter w-4/6 border-2 border-red-300'>

<div className="info mb-7 border-b-2 border-silver">
  <Typography>Shipping Info</Typography>
  <Typography>Name: {newUser.name}</Typography>
  <Typography>Phone: {shippingInfo.phoneNo}</Typography>
  <Typography>Address: {completeAddress}</Typography>
</div>

<Typography>Order Items</Typography>
{cartItems.map((element)=> (
<>
<div className="cart-items flex flex-col md:flex-row space-x-7">


<div className="img-div md:h-24 md:w-24 h-10 w-10 sm:h-20 sm:w-20 rounded-md border border-gray-200">
    <img className="h-full w-full object-cover object-center" src={element.image} alt="#"  />
</div>
{/* </Link> */}

<div className="title-category">
  <p>{element.title}</p>
  <p>{element.category}</p>
</div>

<div className="sub-prize flex flex-inline justify-between">
<p>{element.quantity}x{element.prize}</p>
<span> = </span>
<Typography>Rs: {element.quantity*element.prize}</Typography>
</div>


</div>
</>)
)}




</div>

{/* <div className='left-containter border-2 border-blue-500'>
  
</div> */}





<div className="order-summary md:w-2/6 w-3/4 h-full border-2 border-blue-200 md:p-6 p-2 bg-slate-50 text-xs md:text-base lg:text-lg md:mt-auto m-7">
<Typography className='mb-6 font-bold md:text-2xl text-base border-b-2 border-gray-200'>Order Summary</Typography>

<div className="sub-total flex flex-inline justify-between py-4 ">
<p>Subtotal</p>
<span>{subTotal}</span>
</div>

<div className="sub-total flex flex-inline justify-between py-4 ">
<p>Shipping Estimate</p>
<span>${shippingCharge}</span>
</div>

<div className="sub-total flex flex-inline justify-between py-4 border-b-2 border-gray-200">
<p>GST Estimate</p>
<span>${tax}</span>
</div>

<div className="sub-total flex flex-inline justify-between py-4 ">
<h2 className='font-bold'>Total</h2>
<span>${total}</span>
</div>

<div className="checkout">
<button onClick={proceedToPaymentHandler} type="submit" className="font-medium mx-auto w-full py-2 text-white bg-blue-800 rounded-md">Proceed to Payment</button>
</div>

   </div>









   </div>
    

    </>
  
  )
}

export default OrderConfirm
