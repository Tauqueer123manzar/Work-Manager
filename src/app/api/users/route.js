import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import User from "@/models/user";

connectDb();
export function GET(req){
 const user=[
    {
        id:1,
        name:"Tauqueer manzar",
        email:"tauqueer@gmail.com",
        password:'12344'
    
    },
    {
        id:2,
        name:"Md Sarfraz",
        email:"sarfraz@gmail.com",
        password:'12345'
    },
    {
        id:3,
        name:"Zubair Alam",
        email:"zubair@gmail.com",
        password:'12344'
    }
 ];
 return NextResponse.json(user);
}

// ================================== User Create  ========================================
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

export function DELETE(req){
    console.log("deleted users");
    return NextResponse.json(
        {
            message:"deleted users",
            status:200
        }
    )
}

export function PUT(req){

}