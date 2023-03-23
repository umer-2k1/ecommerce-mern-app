import React, { useState} from "react";
import { BsHandbag } from "react-icons/bs";
import { Badge } from '@mui/material';
import { GrClose } from "react-icons/gr";
import "../Style/Navbar.css";
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux'


const Navbar = () => {
  const [isMenu, setIsmenu] = useState(false);
  const {isAuthenticate} = useSelector((state)=> state.user)
  const {cartItems} = useSelector((state)=> state.cart)
  const toggle = () => {
    isMenu === true ? setIsmenu(false) : setIsmenu(true);
  };

  return (
    <>
      <div className="overflow-x-hidden flex w-full h-14 bg-slate-100 border-b-2 border-b-gray-200  items-center justify-between -z-10 shadow-md">
        {/* icons */}
        <div className="demo inline flex px-6 ">
          <div
            onClick={toggle}
            className=" inline-block cursor-pointer md:hidden"
          >
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
          </div>

          <div className="pl-7 md:font-bold">
            <h2>Absolute E-store</h2>
          </div>
        </div>

        <div className="px-6  ">
          <ul className=" flex flex-row hidden md:inline-flex  items-center justify-end  font-bold space-x-13 md:space-x-7">
            <Link to={'/'}><li className="cursor-pointer hover:text-blue-600">Home</li></Link>
            <Link to={'/product/getproducts'}><li className="cursor-pointer hover:text-blue-600">Products</li></Link>
            <Link to={'/demo'}><li className="cursor-pointer hover:text-blue-600">About</li></Link>
            <li className="cursor-pointer hover:text-blue-600">Contact</li>
            
            {isAuthenticate === false?
            <Link to={'/auth/loginUser'} className="cursor-pointer hover:text-blue-600">
            <button>Login</button></Link>
            : ""}
            

            <div className="cart">
             <Link to={"/cart"}>
             <Badge badgeContent={cartItems.length} color="primary">
               <button>
                <BsHandbag className="text-xl md:text-2xl" />
              </button>
                </Badge>
              </Link>
            </div>
          </ul>
        </div>
      </div>
 
      <div className={`sidebar ${ isMenu == true ? "active" : ""} h-screen w-screen bg-[#fff] block fixed top-0 right-full transition duration-5000 ease-in-out -z-20`}>

        <div className="wrap flex justify-between my-6 mx-6 text-2xl ">
          <div className="menu font-bold">
            <h1 className="">Menu</h1>
          </div>
          <div className="icon">
            <GrClose onClick={toggle} className="cursor-pointer text-2xl font-extrabold" />
          </div>
        </div>

        <hr />

        <div className="list h-screen fixed overflow-hidden">
          <ul className="flex flex-col space-y-7 pl-7 mt-11 text-xl ">
            {/* <Link> */}
{/* <li className="active:bg-[#e5e7eb] font-bold cursor-pointer"><Link to="/product">Home</Link></li> */}

<Link to="/" onClick={()=> setIsmenu(false)} className="active:bg-[#e5e7eb] font-bold cursor-pointer">Home</Link>

            {/* </Link> */}
            <Link to={'/product/getproducts'} onClick={()=> setIsmenu(false)} className="font-bold cursor-pointer hover:text-blue-600">
              Products</Link>

            <Link onClick={()=> setIsmenu(false)} className="font-bold cursor-pointer hover:text-blue-600">About</Link>

            <Link onClick={()=> setIsmenu(false)} className="font-bold cursor-pointer hover:text-blue-600">Contact</Link>

            <Link to={'/auth/loginUser'} onClick={()=> setIsmenu(false)} className="font-bold cursor-pointer hover:text-blue-600">Login</Link>

            <div className="cart">
              <Link to={"/cart"} >
              <Badge badgeContent={cartItems.length} color="primary">
                <button>
                <BsHandbag onClick={()=> setIsmenu(false)} className="font-bold text-2xl" />
              </button>
                </Badge>
              </Link>
            </div>

          </ul>
        </div>

      </div>
    </>
  );
};

export default Navbar;
