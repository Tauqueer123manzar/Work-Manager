import { NextResponse } from "next/server";

export function GET(req,{params}){
    const userId=params.userId;
    const postId=params.postId;
    console.log("User id is",userId,"and post id is",postId);
    return NextResponse.json({
        message:`User id is ${userId} and post id is ${postId}`,
        status:200
    })
}