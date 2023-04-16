import React from 'react'
import { ToastContainer } from 'react-toastify';

const ToastAlert = () => {
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
    
    </>
  )
}

export default ToastAlert
