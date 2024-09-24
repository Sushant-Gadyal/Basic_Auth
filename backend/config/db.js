const mongoose = require("mongoose")
const dotenv = require("dotenv")

// Load environment variables from .env file
dotenv.config();


mongoose.set("strictQuery", true, "useNewUrlParser", true)


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log("MongoDB is Connected...")
    } catch (err) {
      console.error(err.message)
      process.exit(1)
    }
}
module.exports = connectDB;
  