import { NextResponse } from "next/server";
import User from "@/models/user";
// ================================= User Delated (DELETE)  ========================================
export async function DELETE(req,{params}){
    const {userId}=params;
    try {
        await User.deleteOne({_id:userId});
        return NextResponse.json({
            message:"Deleted users id successfully",
            success:true,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to delete users id",
            success:false
        });
    }
}

