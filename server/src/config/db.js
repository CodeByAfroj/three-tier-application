import mongoose from "mongoose";

const connectDB = async () => {
  try {
if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI environment variable is not defined');
      console.warn("⚠️ MONGO_URI not found, skipping DB connection");
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);

    if (process.env.NODE_ENV !== "test") {
      process.exit(1);
    }
  }
};

export default connectDB;