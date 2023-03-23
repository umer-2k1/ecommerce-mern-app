import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

const Cart_Item = ({addedItems,deleteItem,increaseQuantity,decreaseQuantity}) => {
  return (
    <>
        <div className="items-cart md:m-5 m-2 border-b-2 border-gray-200 pb-6">

<div className="item-flex flex flex-row">

<Link to={`/product/getProductDet/${addedItems.product}`}> <div className="img-div md:h-36 md:w-36 h-20 w-20 sm:h-28 sm:w-28 rounded-md border border-gray-200">
    <img className="h-full w-full object-cover object-center" src={addedItems.image} alt="#"  />
</div></Link>

<div className="title-catg-qty flex flex-col w-1/2 ml-2 md:ml-4 space-y-6">

<div className="title-catg">
<Link to={`/product/getProductDet/${addedItems.product}`}><Typography className="cursor-pointer hover:underline" >{addedItems.title}</Typography></Link>
    <p className='mt-1'>{addedItems.category}</p>
</div>

<div className="qty-stock">
    <div className="qty-div flex">
    <button onClick={()=> decreaseQuantity(addedItems.product, addedItems.quantity)} className='px-2 text-blue-700 hover:bg-gray-200 text-2xl hover:rounded-full'>-</button>
<input readOnly className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block md:w-16 md:px-4 w-8 px-2' value={addedItems.quantity}  type="number" id="quantity" name="quantity" min={1} max="50"/>
<button onClick={()=> increaseQuantity(addedItems.product, addedItems.quantity, addedItems.availableQty)}  className='px-2 text-blue-700 hover:bg-gray-200 text-2xl hover:rounded-full'>+</button>
    </div>
    <div className="instock-div inline-flex justify-center items-center mt-3">
<MdOutlineDone className='text-green-700 md:text-3xl text-base md:font-extrabold'/> 
<p>InStock</p>
    </div>


</div>

</div>

<div className="prize-remove space-y-9 ">
<div className="prize">
    <Typography><b>Rs: {addedItems.prize}</b></Typography>
</div>

<div className="">
<button onClick={()=> deleteItem(addedItems.product)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
</div>
</div>

</div>

</div>



    </>
    

      // <h1>Quantiyty: {addedItems.quantity}</h1>
  )
}

export default Cart_Item
