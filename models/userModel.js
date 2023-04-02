const mongoose = require('mongoose')
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');
const UserSchema = new Schema({
    
    name:
    {type: String, required: true, trim: true},

    email:
    {type: String,  required: true, unique: true},

    password:
    // another field select:false --optional 
    {type: String,  required: true,},

    avatar:{
        public_id:{type: String, required: true,},
        url:{type: String, required: true,},
    },

    role:
    {type: String,  default: "user"},

// resetPasswordToken: String,
// resetPasswordExpire: Date,


}, {timestamps: true} );
// JWT TOKEN
// UserSchema.methods.getJWTToken =  function () {
//     return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//       expiresIn: process.env.JWT_EXPIRE,
//     });
//   };


module.exports = mongoose.model('User', UserSchema)