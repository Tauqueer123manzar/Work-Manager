import mongoose from "mongoose";
import User from "../models/user";
export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "work_manager"
        });

        console.log("database connected successfully.....");

           //Testing for user
           const user = new User({
            name: "Md Tauqueer Manzar",
            email: "tauqueer@gmail",
            password: "12345"
        });
        user.save();

        const user2 = new User({
            name: "Md Sarfraz",
            email: "sarfraz@gmail",
            password: "12345"
        });
        user2.save();

        console.log("User Cerated Successfully");
        console.log(user);
        console.log(user2);
        console.log("connected with host:", connection.port);
    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
}