const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB with Mongoose");
    } catch (err) {
        console.error("❌ mongoDB👎 :", err);
        process.exit(1); // exit app if DB fails
    }
};

module.exports = connectDB;
