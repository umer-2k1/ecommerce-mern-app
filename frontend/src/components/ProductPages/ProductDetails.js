import React, {useEffect, useState} from 'react'
import {getProductDetails, clearErrors} from '../../actions/productAction'
import {addCartItems} from '../../actions/cartAction'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import "../../Style/ProductDetails.css";
import ReactStars from "react-rating-stars-component";
import ReviewCard from './ReviewCard';
import Loader from '../../layout/Loader';
import { ToastContainer, toast } from 'react-toastify';
const ProductDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
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

    
    const buyNowHandler = ()=>{
      dispatch(addCartItems(id, newQty))
      let currentUrl = location.pathname
      console.log(currentUrl)
      let updatedUrl = currentUrl.replace(currentUrl, '/orders')
      navigate(updatedUrl)
      toast.success("Item Added to Cart")
    }
    
    const submitReviewHandler = ()=>{
    toast.info("The Submit Reviews functionality will be implemented in the near future!")
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
            <a href='#' className="text-gray-500 cursor-pointer hover:text-blue-500">
              {/* <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg> */}
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
            </a>
            <a href='#' className="ml-2 text-gray-500 cursor-pointer hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 48 48">
<path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
</svg>
            </a>
            <a href='#' className="ml-2 text-gray-500 cursor-pointer hover:text-green-300">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 48 48">
<path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"></path><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"></path><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"></path><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"></path><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"></path><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"></path><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"></path>
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
{/* <button disabled={product.availableQty<1? true:false} onClick={buyNowHandler} className='px-1 py-1 w-28 md:w-36 text-white md:px-2 md:py-2 bg-[#E86229] rounded-md disabled:cursor-not-allowed disabled:opacity-60' type="submit">Buy Now</button> */}
<button onClick={buyNowHandler} className='px-1 py-1 w-28 md:w-36 text-white md:px-2 md:py-2 bg-[#705246]' type="submit">Buy Now</button>



<button disabled={product.availableQty<1? true:false} onClick={addToCartHandler} className='w-28 md:w-36 text-white mx-1 md:mx-6 px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md disabled:cursor-not-allowed disabled:opacity-60' type="submit">Add to Cart</button>

{/* {
  cartItems ?
  <button disabled className='w-28 md:w-36 text-white mx-1 md:mx-6 px-1 py-1 md:px-2 md:py-2 bg-yellow-800 rounded-md' type="submit">Added To Cart</button>
  :
  <button onClick={addToCartHandler} className='w-28 md:w-36 text-white mx-1 md:mx-6 px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md' type="submit">Add to Cart</button>
} */}


        
        </div>

        <div className="submit-reviews">
        <button onClick={submitReviewHandler} className='w-40 md:w-56 md:text-xl text-sm md:py-3 md:px-7 py-2 px-3 md:mt-7 mt-3 rounded-[30px] bg-green-700 text-white hover:scale-105' type="submit">Submit Rewiews</button>
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
