import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const dbName = process.env.DBNAME;
    const uri = process.env.URI;
    await mongoose.connect(uri, { dbName });
    console.log("connected to db");
  } catch (error) {
    console.error("error connecting to db", error.message);
  }
};

export default connectDB;
