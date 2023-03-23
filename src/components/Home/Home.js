import React, {useEffect} from 'react'
import {getAllProducts} from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import "../../Style/Home.css";
import Banner from '../../images/2.png'
import ProductCard from '../ProductPages/ProductCard';
import Loader from '../../layout/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


  // https://rukminim1.flixcart.com/image/832/832/kqco5u80/shoe/k/d/h/9-1732-shoes-crew-white-original-imag4dhcrwg6xg8p.jpeg?q=70

  // https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70

  // https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/w/r/t/-original-imagcgtgwg5taegn.jpeg?q=70
  

const Home = () => {
  const notify = () => toast.error("Wow so easy!");
    const dispatch = useDispatch()

    const {loading, products, productCount, error} = useSelector((state)=> state.products)


    useEffect(() => {
        dispatch(getAllProducts())
        // console.log(products)
      },[dispatch]);
  return (
    <>
    {loading ? (<Loader/>) : (
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

      <div className='md:m-auto px-[35px]  bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200'>

    
    <div className="banner flex md:flex-row flex-col w-full h-[30rem]  justify-center items-center md:px-5 px-auto">
  
    <div className="flex flex-col md:w-3/5 w-full justify-center md:items-start items-center md:justify-start">
    <h1 className='md:text-4xl text-2xl font-serif font-extrabold text-blue-800' >Every Purchase</h1>
    <h1 className='md:text-4xl text-2xl font-serif font-extrabold text-blue-800' >Will be made</h1>
    <h1 className='my-1 md:text-4xl text-2xl font-serif font-extrabold text-blue-800' >With pleasure</h1>
    <p className='md:text-2xl text-xl' >Discover product for a life well lived</p>
    
    <Link to="/product/getproducts">
    <button onClick={notify} className='md:text-xl text-sm md:py-3 md:px-7 py-1 px-3 md:mt-7 mt-3 rounded-[30px] bg-blue-800 text-white hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800' >Start Shopping &#8594;</button>
    </Link>

    </div>
    <div className="md:w-2/5 w-1/2  mt-8 md:mt-0 ">
      <img className='animatedimg max-w-full' src={Banner} alt="" />
    </div>
    </div>

    </div>

<h2 className='block items-center text-center my-0 mx-auto md:text-4xl text-2xl font-serif font-extrabold border-b-2 border-blue-800'>Our Latest Collection</h2>


<div className="product-div ">

<section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto">
          <div className="flex md:items-center md:justify-start justify-center  flex-wrap -m-4">


{products && products.map((elem, index) => (
   <ProductCard prod = {elem} key={index}/>
))}
  </div>
        </div>
      </section>

 </div>
      
      </>
    ) }
    

  
     
    </>
  )
}

export default Home
