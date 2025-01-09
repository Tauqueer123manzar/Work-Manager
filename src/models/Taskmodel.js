import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    addedDate:{
        type:String,
        default:Date.now(),
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending",
    }
},{timestamps:true});

export default mongoose.models.Task || mongoose.model("Task",TaskSchema);