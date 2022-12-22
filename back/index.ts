import express from "express"
import e, {Request,Response} from "express"

import mongoose from "mongoose";
import myUser,{User} from "./mongo/Schema"
const app = express()
require('dotenv').config();
import {connectDB} from "./mongo/mongoConnect"
import cors from "cors"
connectDB()
const corsOptions={
    origin:'http://127.0.0.1:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions)) 
app.use(express.json())
app.get("/",(req:Request,res:Response)=>{
    res.send("works")
})
app.post("/addUser",async(req:Request,res:Response)=>{
    try{
        const {login,password} = req.body
        if (!login || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
        const result = await myUser.create({
            "login":login,
            "password":password
        })
        console.log(result)
        res.status(201).json({"success":"success"})
    }catch(err:any){
        res.status(401).json({"message" : err.message})
    }
})
app.post("/CheckUser",async(req:Request,res:Response)=>{
    try{
        const {login,password} = req.body
        if (!login || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
        let exists:any =  await myUser.findOne({login},{password})
        console.log(exists)
        if(exists){
            console.log("user exists")
            res.status(205).send(true)
        }else{
            res.status(405).send(false)
        }
        
    }catch(err:any){
        res.status(401).json({"message" : err.message})
    }
    
})

app.post("/addToCart",async(req:Request,res:Response)=>{
    try{
        const {i,login}= req.body
        console.log(i)
        let myuser:any = await myUser.find(
            {login:login},
        )
        let user:any = await myUser.find(
            {login:login},
            {data:{$elemMatch:{id:i}}}
        )
        
            
            let json_user = JSON.parse(JSON.stringify(user[0]))

            if(json_user.data[0]==undefined){

                 await myUser.updateOne(
                     {login:login},
                     {$push:{data:[{id:i,num:"1"}]}}
                 )
            }
            else{

                let json_user2 = JSON.parse(JSON.stringify(myuser[0]))
                let json_data2 = JSON.parse(JSON.stringify(json_user2.data))
                
                json_data2.map(async(el:any,)=>{

                    if(el.id === i){
                        let current_val = (Number(el.num)+1).toString()
                        console.log("corrent val : "+ current_val)
                        await myUser.updateOne(
                           {login:login ,"data.id":i},
                            {$set:
                                {"data.$.num":current_val}
                            }

                        )
                        console.log("found")
                    }

                })
            }


        console.log(`added item nr ${i} to cart of ${login}`)
        res.status(202).json({"message":`added item nr ${i} to cart of ${login}`})
    }catch(err:any){
        res.status(403).json({"message" : err.message})
    }
})

app.post("/getBasket",async(req:Request,res:Response)=>{
    try{
        const {login} = req.body
        let user = await myUser.findOne({login})
        let out:any = JSON.parse(JSON.stringify(user))
        console.log(out)
        res.status(203).send(out.data)
    }catch(err:any){
        res.status(403).json({"message" : err.message})
    }
})

mongoose.connection.once("open",()=>{
    console.log("db connected")
    app.listen(4000,()=>{console.log("port 4000")})
})

