import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection failed ", error);

    //👉  process.exit() method is used to terminate a running process. The method takes an optional exit code as an argument.

    // 1. process.exit(0): This indicates that the process ended successfully. The exit code 0 is conventionally used to signal success.

    // 2. process.exit(1): This indicates that the process ended with an error. The exit code 1 is commonly used to signal that an error occurred.

    process.exit(1);
  }
};

export default connectDB;
