const User = require("../models/userModel");
const ApiFeatures = require("../utils/apiFeatures");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const cloudinary = require('cloudinary')

const { body, validationResult } = require("express-validator");

const registerUser =
  ([
    body("name", "Name must be atleat 3 character").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleat 3 character").isLength({
      min: 3,
    }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    // if error occurs ruturn bad request with error msg
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check whether user with this email already exist
      let newUser = await User.findOne({ email: req.body.email });
      if (newUser) {
        return res
          .status(400)
          .json({ error: "Sorry, with this email user already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const securedPassword = await bcrypt.hash(req.body.password, salt);
      // Create new User after valdation else will not create
      const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        upload_preset: "avatars",
        width: 150, 
        crop: "scale"
      })
      newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securedPassword,
        avatar: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      });
      sendToken(newUser, 200, res);
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
  });

  // if login credentia;l doesnot match it will trow error
const loginUser =
  ([
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blanked").exists(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    // if error occurs ruturn bad request with error msg
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check whether user with this email user exist
      let newUser = await User.findOne({ email: req.body.email });
      if (!newUser) {
        return res.status(400).json({ error: "Please, provide correct credentials" });
      }
      // bcrypt.compare() compare intenally all the hash passwords and retun true or false it takes user-provide-passowrd, password-stored-in-Database

      const comparePassword = await bcrypt.compare(
        req.body.password,
        newUser.password
      );

      if (!comparePassword) {
        res.status(400).json({ error: "Please, provide correct credentials" });
      }

      sendToken(newUser, 200, res);

    } catch (error) {
      console.error(error);
      res.status(500).json({error: "Internal Server error occured"});
    }
  });

const logoutUser = async (req, res, next) => {
  try {

    res.cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    // res.clearCookie('token');


    res.status(200).json({ success: true, message: "logout Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Internal Server error occured"});
  }
};

// Get user Details
  const getUserDetails = async(req,res,next)=>{
    try {
        let newUser = await User.findById(req.newUser.id,"-password");
        if (!newUser) {
          res.status(400).json({ success: false, message: "Please, login: This resource is not available" });
        }
        // sendToken(newUser, 200, res);
        res.status(200).json({ success: true, newUser});
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}

// updatePassword
const updatePassword = async(req,res,next)=>{
  try {
      let user = await User.findById(req.newUser.id);
     let iscomparePassword = await bcrypt.compare(req.body.oldPassword,  req.newUser.password)
      if (!iscomparePassword) {
        return res.status(400).json("Old Password is incorrect");
      }
      if (req.body.newPassword !== req.body.confirmPassword) {
        return  res.status(400).json("Password does not match");
      }
      const salt = await bcrypt.genSalt(10);
      const securedPassword = await bcrypt.hash(req.body.newPassword, salt);

      // user.password = req.body.newPassword
      user.password = securedPassword
      await user.save()
      sendToken(user, 200, res);
    
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}


const updateProfile = async(req,res,next)=>{
  try {
      let updateUser = await User.findById(req.newUser.id);
      if (!updateUser) {
        res.status(400).json({ success: false, message: "User not found" });
        
      }
      // cloudinary image update TODO
      updateUser = await User.findByIdAndUpdate(req.newUser.id,{
        name: req.body.name,
        email: req.body.email,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}


// get all registered user Details (---admin)
const allRegisterUser = async(req,res,next)=>{
  try {
      let user = await User.find();
   
        res.status(200).json({ success: true, user });
    
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}

// get Single registered user Details (---admin)
const singleRegisterUser = async(req,res,next)=>{
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
        res.status(400).json({ success: false, message: "User not found" });
      }
      
      res.status(200).json({ success: true, user });
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}



    // Update user Role as Admin Details (---admin)
const updateRole = async(req,res,next)=>{
  try {
      let user = await User.findById(req.params.id);
      if (!user) {
        res.status(400).json({ success: false, message: "User not found" });
        
      }
      user = await User.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
      });

      res.status(200).json({ success: true, message:"User is updated as Admin" });
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}


    // Delete any User (---admin)
    const deleteUser = async(req,res,next)=>{
      try {
          let user = await User.findById(req.params.id);
          if (!user) {
            res.status(400).json({ success: false, message: "User not found" });
            
          }
          user = await User.deleteOne({id: req.params.id});
    
          res.status(200).json({ success: true, message:"Use is Deleted" });
        } catch (error) {
          console.error(error);
          res.status(500).json("Internal Server error occured");
        }
    }
module.exports = { registerUser, loginUser, logoutUser, getUserDetails, updatePassword, updateProfile, allRegisterUser, singleRegisterUser,updateRole, deleteUser };
