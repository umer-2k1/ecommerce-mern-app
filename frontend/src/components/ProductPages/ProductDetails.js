import React, {useEffect, useState} from 'react'
import {getProductDetails, clearErrors} from '../../actions/productAction'
import {addCartItems} from '../../actions/cartAction'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import "../../Style/ProductDetails.css";
import ReactStars from "react-rating-stars-component";
import ReviewCard from './ReviewCard';
import Loader from '../../layout/Loader';
import { ToastContainer, toast } from 'react-toastify';
const ProductDetails = () => {
 
    const dispatch = useDispatch()
    let {id} = useParams()
    const {loading, product, error} = useSelector((state)=> state.productDetails)
    const {cartItems} = useSelector((state)=> state.cart)

    // Quantity state
    const [newQty, setNewQty] = useState(1)

    const increaseQty = () =>{
      if(product.availableQty<=newQty) return
      const qty= newQty+1
      setNewQty(qty)
    }

    const decreaseQty = () =>{
      if(newQty<=1) return
      const qty= newQty-1
      setNewQty(qty)
    }




    const options = {
      edit: false,
      activeColor: "tomato",
      color: "rgba(20,20,20,0.2)",
      value: product.rattings,
      isHalf: true,
      size: window.innerWidth < 600 ? 15 : 30,
    };

    const addToCartHandler = ()=>{
      dispatch(addCartItems(id, newQty))
      toast.success("Item Added to Cart")
    }

    useEffect(() => {
      if (error) {
        toast.error(error)
        dispatch(clearErrors())
      }
        dispatch(getProductDetails(id))
        console.log(product)
      },[dispatch,id, error, toast]);

   
   
  return (
    <>
    
    {loading===true ? (<Loader/>):

    (
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

      <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-16 mx-auto">
    <div className="lg:w-[75%]  w-full flex flex-wrap  px-5">
      {product.images&& product.images.map((imgs)=>(
  <img alt="ecommerce" className="lg:w-2/5  h-[60%] w-5/6  object-cover object-center rounded border border-gray-200" src={imgs.url} />
      )
      )}
    
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Product# {product._id}</h2>
        <h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1 font-roboto mb-2">{product.title}</h1>
        <div className="flex mb-4 items-center">
          <span className="flex flex-col md:flex-row items-start  md:items-center">
          <ReactStars {...options} /> 

            <span className="text-gray-600 ml-3">{product.nofReviews} Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 my-2 border-l-2 border-gray-200">
            <a className="text-gray-500 cursor-pointer hover:text-blue-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500 cursor-pointer hover:text-blue-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500 cursor-pointer hover:text-green-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed my-3 font-lg md:font-2xl border-b-2 mb-5 pb-4">{product.description}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex in nulla.</p>

<div className=" flex category md:my-3.5 my-2">

<h3 className='pr-6'>Category:</h3>
<h3> <b>{product.category}</b> </h3>
</div>
        <div className="mydiv flex flex-col">

        <div className="prize md:my-4 my-3">
        <h1 className='font-roboto md:text-3xl text-xl'>Rs. {product.prize}</h1>
        </div>

        <div className="details flex flex-col md:flex-row md:my-3 my-2 md:items-center items-start space-y-4 md:space-y-0">
                <p>Status: 
<b className= {product.availableQty < 1 ? "redColor" :"greenColor"}>{product.availableQty < 1 ? "OutOfStock" :"InStock"}</b>
                  </p>
            <div className="qty md:ml-12 ml-6 border-2 border-gray-400">
            <button onClick={decreaseQty} className=' p-1 md:p-2 text-blue-400 md:rounded'>-</button>


            <input readOnly className='special border-none p-1 md:p-2 w-[7vw] md:w-[4vw] text-center outline-0 font-roboto text-black ' type="number" value={newQty} />


            {/* {cartItems.map((val)=>
            (
              val.quantity>1?
              <input readOnly className='special border-none p-1 md:p-2 w-[7vw] md:w-[4vw] text-center outline-0 font-roboto text-black ' type="number" value={val.quantity} /> :
          ''
              
            )
            )} */}

            {/* <input readOnly className='special border-none p-1 md:p-2 w-[7vw] md:w-[4vw] text-center outline-0 font-roboto text-black ' type="number" value={cartItems.quantity>1? cartItems.quantity: newQty} /> */}
            <button onClick={increaseQty} className='p-1 md:p-2 text-blue-400  md:rounded'>+</button>
        </div>
        <span className='px-4'> <strong>{product.availableQty}</strong>  items left</span>
        </div>
<hr />
        <div className=" button my-5 ">
            <button className='px-1 py-1 w-28 md:w-36 text-white md:px-2 md:py-2 bg-[#E86229] rounded-md ' type="submit">Buy Now</button>



<button disabled={product.availableQty<1? true:false} onClick={addToCartHandler} className='w-28 md:w-36 text-white mx-1 md:mx-6 px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md disabled:cursor-not-allowed disabled:opacity-60' type="submit">Add to Cart</button>

{/* {
  cartItems ?
  <button disabled className='w-28 md:w-36 text-white mx-1 md:mx-6 px-1 py-1 md:px-2 md:py-2 bg-yellow-800 rounded-md' type="submit">Added To Cart</button>
  :
  <button onClick={addToCartHandler} className='w-28 md:w-36 text-white mx-1 md:mx-6 px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md' type="submit">Add to Cart</button>
} */}


        
        </div>

        <div className="submit-reviews">
        <button className='w-40 md:w-56 md:text-xl text-sm md:py-3 md:px-7 py-2 px-3 md:mt-7 mt-3 rounded-[30px] bg-green-700 text-white hover:scale-105' type="submit">Submit Rewiews</button>
        </div>

        </div>

      </div>
    </div>
  </div>
</section>

{/* rewiews card */}
<h2 className='text-center font-roboto md:text-3xl text-xl  '>REVIEWS</h2>
{product.reviews && product.reviews.length >=1 ? 
(
<div className='reviews md:my-4 md:mx-4 my-4 mx-2 flex flex-wrap md:justify-center justify-start lg:justify-start'>
  {product.reviews.map((val) => <ReviewCard reviews = {val} />  )}
</div>
)
:
( <p className='no-reviews text-center  text-xl my-6 text-gray-500'>No Rewies Yet</p> )
}

      
      </>
    )

  }









    </>
  )
}

export default ProductDetails
