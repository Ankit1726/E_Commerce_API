import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DataBase Connected...");
  } catch (e) {
    console.log("DB error : ", e.message);
  }
}

export default connectDB