import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveOrderItems,} from '../../actions/cartAction'
import { Link, useNavigate } from 'react-router-dom'
import { Country, State, City }  from 'country-state-city';
import CheckoutSteps from './CheckoutSteps';
import {toast } from 'react-toastify';
import ToastAlert from '../../layout/ToastAlert';
import { Helmet } from 'react-helmet';

const Orders = ({activeStep}) => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const {shippingInfo} = useSelector((state)=> state.cart)

    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [state, setState] = useState(shippingInfo.state)
    const [pinCode, setPincode] = useState(shippingInfo.pinCode)
    const [country, setCountry] = useState(shippingInfo.country)
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo)


const submitShippingDetails = (e)=>{
 
  e.preventDefault()
  
  if (phoneNo.length>12 || phoneNo.length<10) {
        toast.error("Phone No must not greater than 12 OR less than 10")
        return;
      }
      else{
        dispatch(saveOrderItems({address, city, state, pinCode, country, phoneNo}))
        navigate("/orders/confirm")
      }

    }


  return (
    <>
<Helmet>
<title>shipping Info | iElectronixTech</title>
</Helmet>


<ToastAlert/>
    
    <CheckoutSteps activeStep={0} />
      <div className="mt-20 ">
        <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
        Shipping Address
        </h1>
      </div>
      <div className="container p-10 mx-auto border-2 border-bg-red-400">
        <div className="flex flex-col md:w-1/2 px-0 mx-auto w-full">
          <div className="flex flex-col md:w-full bg-wite">

            {/* <form className="justify-center w-full mx-auto" method="post" enctype="multipart/form-data"> */}
            <form  onSubmit={submitShippingDetails} className="justify-center w-full mx-auto" >
              <div className="">
  
                <div className="mt-4">






                  <div className="w-full">
                    <label
                      htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="2"
                      style={{"resize":"none"}}
                      placeholder="Address"
                      onChange={(e)=> setAddress(e.target.value)}
                    ></textarea>
                  </div>
                </div>



                <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Country
                    </label>
                    <select
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={country}
                      onChange={(e)=> setCountry(e.target.value)}
                    >
<option value="">Country</option>
{Country&& Country.getAllCountries().map((elem)=>(
    <option key={elem.isoCode} value={elem.isoCode}>{elem.name}</option>
    ))}
                </select>
                  </div>

                 
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      State
                    </label>
                    <select
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={state}
                      onChange={(e)=> setState(e.target.value)}
                      >
<option value="">State</option>
{/* {country&& State&& State.getStatesOfCountry(country).map((elem)=>(
    <option key={elem.isoCode} value={elem.isoCode}>{elem.name}</option>
    ))} */}

{State&& State.getStatesOfCountry(country).map((elem)=>(
    <option key={elem.isoCode} value={elem.isoCode}>{elem.name}</option>
    ))}

</select>
                  </div>

        {/* )} */}
        {/* ) */}

                </div>







                <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
    

                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <select
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        value={city}
                      onChange={(e)=> setCity(e.target.value)}
                    >
{/* <option value="">City</option> */}
<option value="karachi">karachi</option>
<option value="Hyderabad">Hyderabad</option>
<option value="Lahore">Lahore</option>


        </select>
                  </div>


                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      type="number"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={pinCode}
                      onChange={(e)=> setPincode(e.target.value)}
                      
                    />
                  </div>
                </div>



                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Phone No
                    </label>
                    <input
                      name="Phone"
                      type="tel"
                      placeholder="Phone No"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e)=> setPhoneNo(e.target.value)}
                      
                    />
                  </div>
                </div>






                
                <div className="relative pt-3 xl:pt-6">
                  <label
                    htmlFor="note"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Message (Optional)
                  </label>
                  <textarea
                    name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="2"
                    style={{"resize":"none"}}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button disabled={state?false:true} className="w-full px-6 py-2 text-white bg-blue-800 hover:bg-blue-600 disabled:cursor-not-allowed">
                    Process
                    
                  </button>
                </div>
            </form>
              </div>
          </div>
          
        </div>

    </>
  )
}

export default Orders
