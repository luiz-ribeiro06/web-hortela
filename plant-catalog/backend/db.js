const mongoose = require("mongoose");
console.log(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("MongoDB conectado");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;