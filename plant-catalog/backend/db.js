const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/jardim_verde"
    );

    console.log("MongoDB conectado");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;