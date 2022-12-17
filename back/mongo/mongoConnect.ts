import mongoose from "mongoose"
require("dotenv").config()
const nodeEnv: string = (process.env.URI as string);
const options = {
    useUnifiedTopology: true,
    useNewUrlParser:true
}
const connectDB = async()=>{
    try{
        await mongoose.connect(nodeEnv)
    }catch(err){
        console.log(err)
    }
}
export { connectDB } 