import React,{useEffect,useRef } from 'react'

export const Demo =()=>{

  return (
    <>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-10 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">Absolue Ecommerce.com</h2>
        <h1 class="text-gray-900 text-2xl title-font font-medium mb-4">Order Id: #{"order._id"}</h1>
        {/* {order.orderStatus==="Delivered"?"greenColor":"redColor"} */}
        <p class="text-gray-900 title-font font-medium mb-4">Order Status: {"order.orderStatus"}</p>
        <p class="text-gray-900 title-font font-medium mb-4">Your Payment Status is: <b>Paid</b></p>
        <div class="flex mb-4">
          <a class="flex-grow text-green-500 border-b-2 border-green-500 py-2 text-lg px-1">Description</a>
        </div>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Item</span>
          <span class="ml-auto text-gray-900">Title dgdg dfgdgd sfdg</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">13</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Item Total</span>
          <span class="ml-auto text-gray-900">4534</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">Sub Total: $58.00</span>
          <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-2/5 h-60 object-cover object-center rounded" src="https://dummyimage.com/200x200"/>
    </div>
  </div>
</section>





    </>
  );
};

export default Demo;
