import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
// import Loader from '../../layout/Loader';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'



const UserProfile = () => {
let history = useNavigate();
  const {isAuthenticate, newUser} = useSelector((state)=> state.user)
  useEffect(() => {
    if(isAuthenticate===false){
      history('/auth/loginUser')
    }
    },[isAuthenticate, history]);

  return (
    <>


<div className="profile-main-div flex md:flex-row flex-col my-9 md:mx-12 mx-auto h-full justify-center md:justify-start items-center md:items-start">

<div className="  flex flex-col 1-col-profile mx-16 md:w-1/2 w-full  justify-center items-center ">
  <div className="user-avatar md:h-64 md:w-64 h-48 w-48 rounded-full border border-gray-200 mb-7">
    <img className='h-full w-full object-cover object-center' src={newUser.avatar.url} alt="" />
  </div>

  <div className='text-center'> 
    <button  className='w-38 md:w-36 text-white px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md ' type="submit">Edit Profile</button> </div>
</div>

{/* items-center md:items-start */}
<div className="2-col-profile space-y-7 text-base md:text-lg md:w-1/2 w-full mt-7 md:mt-auto justify-center md:justify-start  flex flex-col items-center md:items-start text-center md:text-start">

<div className="name">
<Typography>Full Name</Typography>
<p className='text-gray-600'>{newUser.name}</p>
</div>

<div className="email">
<Typography>Email</Typography>
<p className='text-gray-600'>{newUser.email}</p>
</div>

<div className="date">
<Typography>Joined on</Typography>
<p className='text-gray-600'>{String(newUser.createdAt).substr(0,10)}</p>
</div>

<div className=''> 
    
   <Link to={"/order/myOrders"}> <button  className='w-38 md:w-36 text-white px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md' type="submit">My Orders</button></Link> 
    
    </div>

    <div className=''> 
    <button  className='w-38 md:w-48 text-white px-1 py-1 md:px-2 md:py-2 bg-blue-800 rounded-md' type="submit">Change Password</button> </div>


</div>



</div>



  
    </>
  )
}

export default UserProfile
