import { request } from "express";
import { NextResponse } from "next/server";

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

export function POST(request){
console.log("Post users");
const body=request.body;
console.log(body);
console.log(request.method);
console.log(request.cookies);
console.log(request.headers);
return NextResponse.json({
    message:"Post user data sucessfully",
    status:200
})
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