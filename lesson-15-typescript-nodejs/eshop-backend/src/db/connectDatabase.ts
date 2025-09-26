import mongoose from "mongoose";

const {MONGODB_URI_CLOUD} = process.env;

export const connectDatabase = async (): Promise<void> => {
  try {
    if(typeof MONGODB_URI_CLOUD !== "string") throw Error("Database URI not found");
    await mongoose.connect(MONGODB_URI_CLOUD);
    console.log("Database connection successfully");
  } catch (error) {
    console.log(`Database connection failed ${error}`);
    console.log(error);
  }
};

export default connectDatabase;
