import mongoose from "mongoose";
import { urlx } from "@/components/url";
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("already connected");
    return;
  }
  try {
    const DB = urlx.DB;
    //const DB = "mongodb://0.0.0.0:27017";
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB, {
      //dbName: "test",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("connected to database");
  } catch (error) {
    throw new Error("connection fail");
  }
};

export default connectDB;
