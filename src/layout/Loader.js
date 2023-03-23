import React from 'react'
import { Vortex } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='flex loading-div justify-center items-center w-screen h-screen bg-white'>


<Vortex
  visible={true}
  height={300}
  width={300}
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  // colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}

  colors={['gray','gray','gray','gray','gray','gray',]}
/>
    </div>
  )
}

export default Loader
