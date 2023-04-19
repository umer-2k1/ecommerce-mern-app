import React,{useState} from 'react'
import { SpeedDial, SpeedDialAction ,Backdrop } from '@mui/material';

import userImg from '../../images/user.png'
import { logoutUser } from '../../acnavigatetions/userAction';
import {emptyCart} from '../../actions/cartAction'
import {useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate  } from "react-router-dom";
import { MdDashboard,MdAccountBox} from "react-icons/md";
import { FiLogOut} from "react-icons/fi";
import { FaRegListAlt} from "react-icons/fa";


const UserOptions = ({user}) => {


  let navigate = useNavigate();
  const dispatch = useDispatch()
  const actions = [
    {icon: <MdAccountBox className='text-2xl font-bold' /> , name: "Profile", func: profile},
    {icon: <FaRegListAlt className='text-2xl font-bold' /> , name: "Orders", func: orders},
    {icon: <FiLogOut className='text-2xl font-bold' /> , name: "Logout", func: logout},
  ]
  const [open, setOpen] = useState(false)

  if(user.role === "admin"){
    actions.unshift(
      {icon: <MdDashboard className='text-2xl font-bold' /> , name: "Dashboard", func: dashboard},
    )
  }


  function profile(){
    navigate("/account");
  }
  
  function orders(){
    navigate("/orders");
  }

  function logout(){
    dispatch(logoutUser())
    dispatch(emptyCart())
    navigate("/auth/loginUser");
    toast.success("Logout Successfully")
  }

  function dashboard(){
    alert("dashboard")
  }

    // useEffect(() => {
    //   // store.dispatch(loadTheUser())
    //   dispatch(loadTheUser())
    // },[]);


  return (

    <>



    <div>
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
<Backdrop open={open} style={{zIndex:'10', overFlow: "hidden"}} />
      <SpeedDial
  ariaLabel="SpeedDial basic example"
  sx={{ position: 'absolute', top: 60, right: 10 }}
  icon={
    <img src={user.avatar.url?user.avatar.url:userImg} alt="Girl in a jacket" width="100" height="100" />
  }
  direction={'down'}
  onClose = {() => setOpen(false)}
  onOpen = {()=> setOpen(true)}
  style={{zIndex:'20'}}
  open={open}
>
  {actions.map((value) => (
    <SpeedDialAction
      key={value.name}
      icon={value.icon}
      tooltipTitle={value.name}
      onClick={value.func}
    />
 ))}
</SpeedDial>


    </div>

</>

  )
}

export default UserOptions
