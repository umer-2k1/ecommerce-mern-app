// const { query } = require("express");
const Products = require("../models/productModel");
const ApiFeatures = require('../utils/apiFeatures')
// const ErrorHandler = require('../utils/errorHandling')
// const tryCatchError = require('../middleware/tryCatchError')
// Adding Products by POST request: 'api/addproducts


const addProducts = async(req,res,next)=>{
    try {
      req.body.user = req.newUser.id
        const prod = await Products.create(req.body);
    
        await prod.save();
    
        res.status(200).json({ success: true, product: prod });
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}

const getAllProducts = async(req,res,next)=>{
    try {
        const productCount = await Products.countDocuments()
        const resultPerPage = 4
        const apifeatures = new ApiFeatures(Products.find(), req.query).search().filter()
        let prod = await apifeatures.query
        let filteredProducts = prod.length
        apifeatures.pagination(resultPerPage)
        prod = await apifeatures.query.clone()
        res.status(200).json({ success: true, products: prod, productCount, resultPerPage,filteredProducts});
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}

const updateProducts = async(req,res,next)=>{
    try {
        let prod = await Products.findById(req.params.id);
        if (!prod) {
          res.status(400).json({ success: false, message: "Product not found" });
          
        }
        prod = await Products.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators: true,
        });
  
        res.status(200).json({ success: true, product: prod });
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}

const deleteProducts = async(req,res,next)=>{
    try {
        let prod = await Products.findById(req.params.id);
        if (!prod) {
          res.status(400).json({ success: false, message: "Product not found" });
          
        }
       await Products.deleteOne({id: req.params.id})
  
        res.status(200).json({ success: true, message: "Product Deleted" });
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}

const singleProdDetails = async(req,res,next)=>{
    try {
        let prod = await Products.findById(req.params.id);
        if (!prod) {
          res.status(400).json({ success: false, message: "Product not found" });
        }
        
        res.status(200).json({ success: true, product: prod });
      } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error occured");
      }
}

const creatingReviwes = async(req,res,next)=>{
  const {rating, comment, productId} =req.body
  const review = {
    name: req.newUser.name,
    rating: Number(rating),
    comment,
    user: req.newUser.id,
  }
  try {
      let prod = await Products.findById(productId);
      if (!prod) {
        return res.status(400).json({ success: false, message: "Product not found" });
      }
      // if already reviwed
      const isReviewed = prod.reviews.find((rev)=>{
        rev.user.toString() === req.newUser.id.toString()
      })

      // update the rewies
      if (isReviewed) {
        prod.reviews.forEach((rev)=>{
          if(rev.user.toString() === req.newUser.id.toString()){
            rev.rating = rating 
            rev.comment = comment;
          }}

        )}

        //Add new rewies
      else{
        prod.reviews.push(review)
        prod.nofReviews = prod.reviews.length
      }

      // let sumOfRating =0;
      // const numReviews = prod.reviews.length
      // if (numReviews>0) {
      //   prod.reviews.forEach((rev)=>{
      //     sumOfRating += rev.rating
      // })
      // }

      // prod.rattings = sumOfRating/numReviews

      prod.rattings = prod.reviews.reduce((acc, item)=> item.rating+acc,0 )/prod.reviews.length



      await prod.save({ validateBeforeSave: false});
      res.status(200).json({ success: true , message: `Dear ${req.newUser.name}, your reviews has been added`});
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}


module.exports = {addProducts,getAllProducts,updateProducts,deleteProducts,singleProdDetails, creatingReviwes}