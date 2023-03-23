
const Products = require("../models/productModel");
const updateStock = async(id,quantity)=>{
    const prod = await Products.findById(id)
    prod.availableQty -= quantity
    await prod.save()
}
module.exports = updateStock