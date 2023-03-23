import React from 'react'
import {MdOutlineRemoveShoppingCart} from "react-icons/md"
import Typography from '@mui/material/Typography';
import { Link} from 'react-router-dom'


const EmptyCart = () => {
  return (
    <>
    <div className="empty flex flex-col justify-center items-center text-center my-16 items-center space-y-5">
      <MdOutlineRemoveShoppingCart className='text-7xl text-blue-700'/>

       <Typography>No Item in your Cart</Typography>
       <Link to={'/product/getproducts'}> <button  className='w-38 md:w-36 text-white px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md' type="submit">View Products</button> </Link>

       </div>
    </>
  )
}

export default EmptyCart
