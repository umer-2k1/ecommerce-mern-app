import React from 'react'
import {FaShippingFast} from "react-icons/fa"
import {MdLibraryAddCheck, MdPayment} from "react-icons/md"
import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import "../../Style/CheckoutStep.css"



const CheckoutSteps = ({activeStep}) => {
    const steps = [
        {label: <Typography className='md:text-4xl text-sm sm:text-xl'>Shipping Details</Typography>,
        icons: <FaShippingFast/>
        },
        {label: <Typography className='md:text-4xl text-sm sm:text-xl'>Confirm Orders</Typography>,
        icons: <MdLibraryAddCheck/>
        },
        {label: <Typography className='md:text-4xl text-sm sm:text-xl'>Payement Methods</Typography>,
        icons: <MdPayment/>
        },
    ]
  return (
    <div className='mt-7 mb-2 box-border md:text-4xl text-sm sm:text-xl'>
      <Stepper activeStep={activeStep} alternativeLabel >
  {steps.map((val, index) => (
    <Step key={index} 
    active= {activeStep===index ? true : false}
    completed= {activeStep>=index ? true : false}
    
    >
      <StepLabel style={{color: activeStep>=index? "blue" : "rgba(0,0,0,0.2)"}} icon={val.icons} >{val.label}</StepLabel>
    </Step>
  ))}
</Stepper>
    </div>
  )
}

export default CheckoutSteps
