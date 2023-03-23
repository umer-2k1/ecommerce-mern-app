const dotnet = require('dotenv')
const connectToDB = require('./connectDB')
const express = require('express')
const cors = require('cors')
const cloudinary = require('cloudinary')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const path = require('path')
// const errorMiddleware = require('./middleware/error')
const BASE_URL = 5000 || process.env.BASE_URL
// const port = 5000 
const app = express()

dotnet.config()
// config
if (process.env.NODE_ENV !== 'production') {
  dotnet.config({ path: 'backend/config/config.env' });
}

connectToDB()

// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})







// app.use(cors({origin: '*', credentials: true}))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))



// to use req.body middleware must use
app.use(express.json({limit: '50mb'}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}))
app.use(fileUpload())



// getting all the provided routes
// app.use('/api/productController',require ('./routes/productController'))
app.use('/api/product',productRoutes)
app.use('/api/auth',userRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/payment',paymentRoutes)
// app.use(errorMiddleware)

// if (process.env.NORD_ENV ==='production') {
//   app.use(express.static(path.join(__dirname, '../ecommerce/build')))
//   app.get("*", (req,res)=>{
//     res.sendFile(path.resolve(__dirname, '../ecommerce/build.index.html'))
//   })
// }


// middle ware for error handling


app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${BASE_URL} 🚀`)
})