const mongoose = require('mongoose')
const { Schema } = mongoose;
const PaymentSchema = new Schema({
    
    paymentId:
    {type: String, required: true},

    paymentStatus:
    {type: String,  required: true, default: "Succeeded"},


}, {timestamps: true} );



module.exports = mongoose.model('Payment', PaymentSchema)