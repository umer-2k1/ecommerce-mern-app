// const Errorhandler = require('../utils/errorHandling')

// module.exports = (err, req, res, next)=>{
//     err.statusCode = err.statusCode || 500
//     err.message = err.message || "Internal server error occured"
//     res.status(err.status).json({
//         success : false,
//         message: err.message
//     })
// }