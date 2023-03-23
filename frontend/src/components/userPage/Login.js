import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getLoginUser, clearErrors} from '../../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import {emptyCart} from '../../actions/cartAction'

const Login = () => {
  const dispatch = useDispatch()
  // let history = useNavigate()
  // let location = useLocation ()
  const {isAuthenticate, error} = useSelector((state)=> state.user)

    const [login, setLogin] = useState({
        email: '',
        password: '',
    })
    const getLoginData = (e)=>{
        const {name, value} = e.target
        setLogin({...login, [name]:value})
    }
    const loginSubmited = (e)=>{
      e.preventDefault()
      const {email, password} = login
      dispatch(emptyCart())
      dispatch(getLoginUser(email, password))
      // .then(()=> history(`/`))
    }
// let redirect = location.search?location.search.split("=")[1]:"/"
    useEffect(() => {
      if (error) {
        toast.error(error)
        dispatch(clearErrors())
      }
        if(isAuthenticate){
        // else if(isAuthenticate){
          // then(()=> history(`/`))
          // history(`/${redirect}`)
        }
      },[dispatch, error, toast]);

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
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login to your account</h2>
      {/* <p className="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
      </p> */}
    </div>
    <form onSubmit={loginSubmited} className="mt-8 space-y-7" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm ">
        <div className='mb-7'>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" onChange={getLoginData} value={login.email} name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" onChange={getLoginData} value={login.password} name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
         
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg> 
          </span>
          Login
        </button>
      </div>

      <p className="text-center">Not registered yet? 
      
     <Link to={"/auth/newUser"}> <button className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></button></Link>
                  
                  </p>


    </form>
  </div>
</div> 
    </>
  )
}

export default Login
//  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg> 