import React from 'react'
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
  import '../../Style/Payment.css'
const Test = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e)=>{
e.preventDefault()

if (elements == null) {
    return;
  }

  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card: elements.getElement(CardElement),
  });

    }
  return (
    <div className='my-16 w-1/2  mx-auto '>
<form id='payment-form' onSubmit={handleSubmit}>
      <CardElement className='StripeElement'/>

<div className="pay-btn">
      <button type="submit">
        Pay
      </button>
</div>

    </form>
 
    </div>
  )
}

export default Test
