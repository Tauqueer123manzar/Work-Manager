import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import User from "@/models/user";

await connectDb();

// ================================= User GET All User (GET) ===========================================
export async function GET(req){
  let users=[];
  try {
    users=await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"failed to get users!!",
        success:false,
    });
  }
  return NextResponse.json(users);
}

// ================================== User Created (POST)  ========================================
export async function POST(req){
   const{name,email,password}=await req.json();
   console.log(name,email,password);

   const user=await User.create({
    name,
    email,
    password
   });

   try {
    const createdUser=await user.save();
    const response=NextResponse.json(user,{
        status:201,
    });
    console.log(response);
    return response;
    
   } catch (error) {
      console.log(error);
      return NextResponse.json({
         message:"failed to create user!!",
         status:404,
      });
   }
}

export function PUT(req){

}