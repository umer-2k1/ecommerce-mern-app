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
const BASE_URL = process.env.BASE_URL
const PORT = 5000
const path = require('path');

dotnet.config()
connectToDB()

// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express()
app.use(cors({ origin: "*", credentials: true }))


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

app.use(express.static(path.join(__dirname, './frontend/build')));

// static files

app.use(express.static(path.join(__dirname, './frontend/build')))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './frontend/build/index.html'));
});

// if (process.env.NODE_ENV !== 'production') {
//   app.get('*', (req,res)=>{
//   res.sendFile(path.resolve(__dirname, 'frontend','build', 'index.html'))
// })
// }



app.listen(PORT, () => {
  console.log(`Example app listening at ${BASE_URL}`)
})