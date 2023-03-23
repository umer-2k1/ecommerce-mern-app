// let getJWTToken = function () {
//     return jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: process.env.JWT_EXPIRE,
//     });
//   };

const jwt = require('jsonwebtoken');

// const getJWTToken =  (id) =>{
//         return jwt.sign({ id: id }, process.env.JWT_SECRET, {
//           expiresIn: process.env.JWT_EXPIRE,
//         });
//       };

const sendToken = (newUser, statusCode, res) => {

// const jwtToken = getJWTToken(newUser._id)
const jwtToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });


//   cookies features
const options = {
    expires: new Date(Date.now() + 2*24*60*60*1000),
    // expires: new Date(Date.now() + 30*1000),
    httpOnly: true,
    // optional
    // sameSite:"lax",
}
res.cookie()
res.status(statusCode).cookie("token", jwtToken, options)
.json({
    success: true,
    newUser,
    jwtToken,

})
};
module.exports = sendToken