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

// ======================================== User Updated (PUT) ==============================================
export async function PUT(req,{params}){
    const {userId}=params;
    const{name,password}=await req.json();
    try {
        const UpdatedUser=await User.findById(userId);
        UpdatedUser.name=name;
        UpdatedUser.password=password;
        await UpdatedUser.save();
        return NextResponse.json(UpdatedUser);
    } catch (error) {
        return NextResponse.json({
            message:"Failed to update user !!",
            success:false,
        });
    }
}
