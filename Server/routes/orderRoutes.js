const express = require("express");
const router = express.Router();
const {isAuthenticate,authorizeRole} = require('../middleware/authentication')

const {newOrder,getSingleOrder,myOrders,allOrders,updateOrders,deleteOrder} = require('../controllers/orderController')

router.post('/new',isAuthenticate,newOrder)
router.get("/single/:id",isAuthenticate,getSingleOrder)
router.get('/myOrders',isAuthenticate,myOrders)
router.get('/admin/orders',isAuthenticate, authorizeRole("admin"), allOrders)
router.put("/admin/upOrders/:id",isAuthenticate, authorizeRole("admin"),updateOrders)
router.delete("/admin/delOrders/:id",isAuthenticate, authorizeRole("admin"),deleteOrder)



module.exports = router