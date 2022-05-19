import mongoose from "mongoose";
import "dotenv/config";
//Function for datatabase connection
async function connectDB() {
  const db = await mongoose.connect(`${process.env.DATABASE}`);
  console.log(`Server connect to: `, db.connection.db.databaseName);
}

export default connectDB;
