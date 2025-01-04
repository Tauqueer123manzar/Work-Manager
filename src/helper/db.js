import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "work_manager",
    });

    console.log("Database connected successfully...");
    console.log("Connected with host:", connection.port);
  } catch (error) {
    console.error("Failed to connect with database");
    console.error(error);
  }
};
