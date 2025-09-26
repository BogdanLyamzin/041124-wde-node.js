import mongoose from "mongoose";

const {MONGODB_URI_CLOUD} = process.env;

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI_CLOUD);
    console.log("Database connection successfully");
  } catch (error) {
    console.log(`Database connection failed ${error}`);
    console.log(error);
  }
};

export default connectDatabase;
