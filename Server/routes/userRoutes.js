const express = require("express");
const router = express.Router();
const {isAuthenticate,authorizeRole} = require('../middleware/authentication')

const {registerUser,loginUser,logoutUser,getUserDetails, updatePassword, updateProfile, allRegisterUser, singleRegisterUser, updateRole, deleteUser} = require('../controllers/userController')

router.post('/newUser',registerUser)
router.post('/loginUser',loginUser)
router.post('/logoutUser',logoutUser)
router.get('/me',isAuthenticate,getUserDetails)
router.put('/updPassword',isAuthenticate,updatePassword)
router.put('/updateProf',isAuthenticate,updateProfile)
router.get('/users',isAuthenticate, authorizeRole("admin"),allRegisterUser)
router.get('/singleUser/:id',isAuthenticate, authorizeRole("admin"),singleRegisterUser)
router.put('/updateRole/:id',isAuthenticate, authorizeRole("admin"),updateRole)
router.delete('/deleteUser/:id',isAuthenticate, authorizeRole("admin"),deleteUser)


module.exports = router