const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {      
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    shippingInfo: {
      address: { type: String, required: true },

      city: { type: String, required: true , default: "Karachi"},

      state: { type: String, required: true },

      country: { type: String, required: true, default: "Pakistan" },

      pinCode: { type: String, required: true },
      phoneNo: { type: String, required: true },
    },

    orderItem: [{
        title: { type: String, required: true },
  
        prize: { type: Number, required: true },
  
        quantity: { type: Number, required: true },
  
        image: { type: String, required: true },
  
        product: {type: Schema.Types.ObjectId, ref: "Product", required: true },
      }],



      paymentInfo: {
        id: { type: String, required: true },
        status: { type: String, required: true },
    },
    paidAt: { type: Date, required: true },

    itemPrice: { type: Number, required: true, default:0 },
    taxPrice: { type: Number, required: true, default:0 },
    shippingPrice: { type: Number, required: true, default:0 },
    totalPrice: { type: Number, required: true, default:0 },

    orderStatus: { type: String, required: true, default:"Processing" },
    
    createdAt: { type: Date, default:Date.now },
    deliveredAt:  Date

    


  },{ timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
