import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
export { connectDB };

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
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