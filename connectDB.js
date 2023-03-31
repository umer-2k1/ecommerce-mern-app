const mongoose = require('mongoose')
const dotnet = require('dotenv')
dotnet.config()

const mongoUrl = process.env.MONGODB_URI
// console.log("MogoDB URL: ",mongoUrl)

const connectToDB = async() =>{

    try {
        const con = await mongoose.connect(mongoUrl,
            {
                // useNewUrlParser: true,
                // useCreateIndex: true,
                useUnifiedTopology: true 
            }
            
            )

            console.log("MongoDb Connection Successfully created")
        
    } catch (error) {
        console.log(`Error: ${error.message}`)       
    }
}


// const connectToDB = () =>{
//     mongoose.connect(process.env.MONGODB_URI,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true

//     }).then(()=>{

//         console.log("COnnected to Mongoose successfully")
//     })
// }

module.exports = connectToDB