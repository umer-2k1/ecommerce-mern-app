import React,{useState, useEffect} from 'react'
import userImg from '../../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {registerNewUser, clearErrors} from '../../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import {emptyCart} from '../../actions/cartAction'


const RegisterUser = () => {
const dispatch = useDispatch()
let history = useNavigate()
const {isAuthenticate, error} = useSelector((state)=> state.user)

const [signUp, setSignUp] = useState({
  name: "",
  email: "",
  password: "",
  // check: false,
})
const [avatar, setAvatar] = useState()
const [previewAvatar, setPreviewAvatar] = useState(userImg)

const getSignUpData = (e)=>{

  const {name,value} =e.target
  if (name==='avatar') {
    const reader = new FileReader()
    reader.onload = ()=> {
     if(reader.readyState ===2){
      setPreviewAvatar(reader.result)
      setAvatar(reader.result)
     }
    }
    reader.readAsDataURL(e.target.files[0])

  }
  else{
    setSignUp({...signUp, [name]:value})
  }
}

const registrationSubmit = (e)=>{
  const {name, email, password} = signUp
  e.preventDefault()
  const myform =  new FormData()
  myform.set("name", name)
  myform.set("email", email)
  myform.set("password", password)
  myform.set("avatar", avatar)
  console.log("Signup Successfully")
  dispatch(emptyCart())
  dispatch(registerNewUser(myform)).then(()=> history(`/auth/loginUser`))
}

useEffect(() => {
  if (error) {
    toast.error(error)
    dispatch(clearErrors())
  }
    if(isAuthenticate){
      history(`/auth/loginUser`)
    }
  },[dispatch, error, history, isAuthenticate]);

  return (
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

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">SignUp for an account</h2>
      {/* <p className="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
      </p> */}
    </div>
    <form onSubmit={registrationSubmit} className="mt-8 space-y-7"  method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="space-y-7 rounded-md shadow-sm ">

      <div className=''>
          <label htmlFor="name" className="sr-only">Name</label>
          <input id="password" onChange={getSignUpData} value={signUp.name} name="name" type="type" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Name"/>
        </div>

        <div className=''>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" onChange={getSignUpData} value={signUp.email} name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        
        <div className=''>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" onChange={getSignUpData} value={signUp.password} name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>
      </div>


<div className="avatar-div flex flex-row">
    {/* <img src={userImg} width={30} height ={30} alt="" srcSet="" /> */}
    <img src={previewAvatar} width={30} height ={30} alt="" srcSet="" />
    <input onChange={getSignUpData} type="file" name="avatar"  accept='image/*'/>
</div>


      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
         
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          SignUp
        </button>
      </div>

      <p className="text-center">Already a member? 
      
    <Link to={"/auth/loginUser"}> <button className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></button></Link> 

                  </p>


    </form>
  </div>
</div>
    </>
  )
}

export default RegisterUser
