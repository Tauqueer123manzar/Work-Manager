import mongoose from "mongoose";

const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
},{timestamps:true});

const User=mongoose.model("User",Userschema);

export default User;

