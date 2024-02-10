import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default function connectToDB() {
  //   console.log("url is ", process.env.MONGODB_URI);
  mongoose.connect(process.env.MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully.....");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database connecitvity failed.....");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error in Database connection....", error.message);
  });
}
