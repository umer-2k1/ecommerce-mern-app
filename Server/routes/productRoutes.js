const express = require("express");
const router = express.Router();
const {isAuthenticate,authorizeRole} = require('../middleware/authentication')

const {addProducts,getAllProducts,updateProducts,deleteProducts,singleProdDetails, creatingReviwes} = require('../controllers/productController')

router.post('/addproducts',isAuthenticate, authorizeRole("admin"), addProducts)
router.get("/getproducts",  getAllProducts)
router.put("/uproducts/:id",isAuthenticate, authorizeRole("admin"), updateProducts)
router.delete("/delproducts/:id",isAuthenticate, authorizeRole("admin"), deleteProducts)
router.get("/getProductDet/:id", singleProdDetails)
router.put("/uproducts/:id",isAuthenticate, authorizeRole("admin"), updateProducts)
router.put("/sendReviews",isAuthenticate, authorizeRole("user"),    creatingReviwes)

module.exports = router