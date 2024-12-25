import { NextResponse } from "next/server";

export function GET(req){
    return NextResponse.json({
        message:"Api is working for Works"
    });
}

export function POST(req){
    console.log("Post works");
    return NextResponse.json({
        message:"Post sent successfully",
        status:200
    })
}

export function DELETE(req){
    console.log("Message delete succesfully");
    return NextResponse.json({
       message:"Message delete successfully",
       status:200
    })
}

export function PUT(req){
    console.log("Message updated successfully");
    return NextResponse.json(
        {
            message:"Message updated successfully",
            status:200
        }
    )
}
