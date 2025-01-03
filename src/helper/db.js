import mongoose from "mongoose";
import {UserSchema} from "../models/user";
export const connectDb=async()=>{
    try {
     const {connection}= await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"work_manager"
        });

        //Testing for user
        
        console.log("database connected successfully.....");
        console.log("connected with host:",connection.port);
        console.log(connection);
    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
}