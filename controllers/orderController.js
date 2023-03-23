
const Products = require("../models/productModel");
const Order = require("../models/orderModel");
const ApiFeatures = require('../utils/apiFeatures')
const updateStock = require('../utils/quantityUpdate')


// creating new Orders
const newOrder = async(req,res,next)=>{
  const{
      
      shippingInfo,
      orderItem,
      paymentInfo,
      itemPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
  } = req.body
  try {
    // req.body.user = req.newUser.id
    
    if (orderItem && orderItem.length===0) {
      return res.status(400).json({message: "No Item exist"})
    }
else{
    const order = new Order({
      shippingInfo,
      orderItem,
      paymentInfo,
      itemPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.newUser.id,
      });
  
      await order.save();
  
      res.status(200).json({ success: true, order });
    }

    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}


const getSingleOrder = async(req,res,next)=>{
    try {
        let order = await Order.findById(req.params.id).populate("user", "name email");
        if (!order) {
          return res.status(400).json({ success: false, message: "Order not found" });
        }
        
        res.status(200).json({ success: true, order });
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}

// get logged in User orders
const myOrders = async(req,res,next)=>{
    try {
        let orders = await Order.find({user: req.newUser.id});
        if (!orders) {
         return res.status(400).json({ success: false, message: "Order not found" });
        }
        
        res.status(200).json({ success: true, orders });
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}



// get All Orders ---(--Admin)
const allOrders = async(req,res,next)=>{
  try {
      let order = await Order.find();
      if (!order) {
       return res.status(400).json({ success: false, message: "Order not found" });
      }
      // All the User order's total Amount
      let totalAmount =0
      order.forEach((value)=>{
        totalAmount = totalAmount + value.totalPrice
      })
      res.status(200).json({ success: true,totalAmount, order, });
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}


// Update Orders Status---(--Admin)
const updateOrders = async(req,res,next)=>{
  // body
  const {status} = req.body
  try {
      let order = await Order.findById(req.params.id);
      if (!order) {
       return res.status(400).json({ success: false, message: "Order not found" });
      }

      if(order.orderStatus ==="Delivered"){
        return res.status(400).json({ message: "Your Order has been already Delivered" });
      }
      // iterate object

      order.orderItem.forEach(async (value)=>{
        updateStock(value.product,value.quantity)
      })
      order.orderStatus =status
      if (status ==="Delivered"){
        order.deliveredAt= Date.now()
      }
      await order.save()

      res.status(200).json({ success: true,  message: "Order Delivered"});
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}

// delete Order ---(--Admin)
const deleteOrder = async(req,res,next)=>{
  try {
      let order = await Order.findById(req.params.id);
      if (!order) {
       return res.status(400).json({ success: false, message: "Order not found" });
      }
      await Order.deleteOne({id: req.params.id})

      res.status(200).json({ success: true, message: "Order Deleted"});
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}

module.exports = {newOrder,getSingleOrder,myOrders,allOrders,updateOrders,deleteOrder}