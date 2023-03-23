import React,{useState} from 'react'
import { SpeedDial, SpeedDialAction ,Backdrop } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import LogoutIcon from '@mui/icons-material/Logout';
// import ListAltIcon from '@mui/icons-material/ListAlt';
import userImg from '../../images/user.png'
import { logoutUser } from '../../actions/userAction';
import {emptyCart} from '../../actions/cartAction'
import {useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate  } from "react-router-dom";
// import { loadTheUser } from '../../actions/userAction';
import { MdDashboard,MdAccountBox} from "react-icons/md";
import { FiLogOut} from "react-icons/fi";
import { FaRegListAlt} from "react-icons/fa";


const UserOptions = ({user}) => {
// const UserOptions = () => {
    // const dispatch = useDispatch()
  // const {isAuthenticate, newUser} = useSelector((state)=> state.user)


  let history = useNavigate();
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
    history("/account");
  }
  
  function orders(){
    history("/orders");
  }

  function logout(){
    dispatch(logoutUser())
    dispatch(emptyCart())
    toast.success("Logout Successfully")
    history("/auth/loginUser");
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
