import mongoose from "mongoose"
require("dotenv").config()
const uri ="mongodb+srv://myUsername:haslo@cluster0.bw5vfgs.mongodb.net/?retryWrites=true&w=majority"

const options = {
    useUnifiedTopology: true,
    useNewUrlParser:true
}
const connectDB = async()=>{
    try{
        await mongoose.connect(uri)
    }catch(err){
        console.log(err)
    }
}
export { connectDB } 