import React from 'react'
import SuccessPng from '../../images/success.png'
import {Link} from 'react-router-dom'

const Success = () => {
  return (
    <>
            <main className="w-full mt-10">
              
<div className="flex flex-col gap-2 items-center justify-center sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white  p-6 pb-12">
    <img draggable="false" className="w-1/2 h-60 object-contain" src={SuccessPng} alt="Transaction Status" />
    <h1 className="text-2xl font-semibold">Your Order has been placed Successfully </h1>
    {/* <p className="mt-4 text-lg text-gray-800">Redirecting to</p> */}
   <Link to = {"/order/myOrders"}> <button className="bg-gray-700 mt-2 py-3 px-12 text-white uppercase shadow hover:bg-gray-800 hover:shadow-lg rounded-sm">View Orders</button></Link>
</div>


</main>
    </>
  )
}

export default Success
