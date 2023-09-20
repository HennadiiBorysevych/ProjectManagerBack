const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.DB);
  console.log(
    `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
