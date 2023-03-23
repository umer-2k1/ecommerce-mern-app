const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
    
    category: 
    { type: String, required: true, trim: true},
    
    title: 
    { type: String, required: true, unique: true, trim: true},

    description: 
    { type: String, required: true,},

    prize: 
    { type: Number, required: true,},

    availableQty: 
    { type: Number, required: true, default: 1},

    rattings: 
    { type: Number, default: 0,},

    images:[{
        public_id:{type: String, required: true,},
        url:{type: String, required: true,},
    }],

    nofReviews: 
    { type: Number, default: 0,},

    reviews:[{
        name:{type: String, required: true,},
        rating:{type: Number, required: true,},
        comment:{type: String},
        user:{type: Schema.Types.ObjectId,  ref: 'User', required: true},
       createdAt:{ type: Date, default: Date.now,} ,
       updatedAt:{ type: Date, default: Date.now,} ,
    } ],

    user:{
        type: Schema.Types.ObjectId,  ref: 'User', required: true
    }


}, {timestamps: true} );

module.exports = mongoose.model('Product', ProductSchema)