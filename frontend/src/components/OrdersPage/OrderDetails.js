import React,{useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import { orderDetails, clearErrors} from '../../actions/orderAction'

import Loader from '../../layout/Loader';
import {MdMarkEmailUnread} from 'react-icons/md'
import Typography from '@mui/material/Typography';
const OrderDetails = () => {
    let history = useNavigate();
    let {id} = useParams();

    const dispatch = useDispatch()
    const {newUser} = useSelector((state)=> state.user)
    const {loading,order} = useSelector((state)=> state.orderDetail)
const btnHandler = ()=>{
  alert("New Feaure will be added soon")
}



// useEffect
useEffect(() => {
    // if (error) {
    //   toast.error(error)
    //   dispatch(clearErrors())
    // }
      // else if(isAuthenticate===true){
      //   history("/")
      // }
      dispatch(orderDetails(id))
      console.log(order)
    },[dispatch, id]);


  return (
    <>
{ loading? (<Loader/>):
(
<>

{order&&    <div className="container mx-6 my-8">
      <header>My Orders / Tracking </header>

      <div className="card-body">

        <div className='flex md:flex-row flex-col justify-between'>

        <h1 class="text-gray-900 md:text-xl text-base title-font font-medium mb-4">Order Id: #{order._id}</h1>
        <h1 class="text-gray-900 md:text-xl text-base title-font font-medium mb-4"> Order Place on:  {String(order.createdAt).substr(0,10)}</h1>
        </div>


  <div className="card-body-row flex md:flex-row flex-col md:w-full w-auto justify-between border-2 border-bg-silver px-4 space-y-4 items-center my-4 py-8 ">

<div className="order-time">
<strong>Amount Paid:</strong> 
<br />
<p className='text-gray-500'>{order.totalPrice} </p>
</div>

<div className="shipped-byy ">
<strong>Shipped by:</strong> 
<br/>{ newUser.name} ,  <MdMarkEmailUnread className='inline' /> <p className='text-gray-500'>{newUser.email}</p> 
 </div>

<div className="status">
<strong>Order Status:</strong> 
<br/> 
<p className={order.orderStatus==="Delivered" ? "greenColor": "redColor"}>{order.orderStatus}</p>
 </div>

<div className="payment">
<strong>Payment Status:</strong> 
<br/> 
<p className='text-gray-500'>Paid</p>
 </div>

  </div>




<div className="orders">
  {order.orderItem&& order.orderItem.map((item, index)=>(
    <>
      <div key={index} className="flex flex-row py-8 border-b-2 border-bg-silver">

<div className="img-div md:h-36 md:w-36 h-20 w-20 sm:h-28 sm:w-28 rounded-md border border-gray-200">
  <img className="h-full w-full object-cover object-center" src={item.image} alt="#"  />
</div>

<div className="flex flex-col justify-around px-12">
  <Typography>{item.title}</Typography>
<p  ><strong className='pr-2'>Qty:</strong>{item.quantity}</p>
<p  ><strong className='pr-2'>Item Price:</strong>{item.prize}</p>
</div>

</div>
    </>
  ))}

</div>






      </div>
    

      <div class="flex">
          <button onClick={btnHandler} class="flex my-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Track Order</button>
        </div>

    </div>}


</>
)}
  

    </>
  )
}

export default OrderDetails
