import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/connection.js";
import { app } from "./app.js";

dotenv.config({
  path: "./",
});
connectDB().then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server running on port ${process.env.PORT || 8000}`);
    
  })
}).catch((err)=>{
  console.log("MONGODB connection FAILED!!!!!",err)
})

// import express from "express"
// const app = express()
// //iffie started
// ;(async () => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB - URL}/${DB_NAME}`);
//        app.on("error",(error)=>{
//         console.log("ERRR: ",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()={
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     }catch(error){
//         console.error("ERROR: ",error);
//     }
// })();
