import { NextResponse } from "next/server";

export function GET(req){
    return NextResponse.json({
        message:"Api is working for Users Id",
        status:200
    })
}

export  function DELETE(req,{params}){
    const userId=params.userId;
    console.log("Deleted users id successfully",userId);
    return NextResponse.json({
        message:"Deleted users id successfully",
        status:200
    });
}