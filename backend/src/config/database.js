const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/developer-community");

        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed");
        console.error(error);

        process.exit(1);
    }
}

module.exports = connectDB;
