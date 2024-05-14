const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
dotenvExpand.expand(dotenv.config());

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log(`Database connected`);
    })
    .catch((error) => {
      console.log(`Unable to connect with Database. Error : ${error}`);
      process.exit(1);
    });
};

module.exports = { connectDB };
