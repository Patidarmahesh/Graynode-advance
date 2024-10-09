const mongoose = require("mongoose");

const connectDataBase = async () => {
  try {
    const connectdb = await mongoose.connect("mongodb://0.0.0.0:27017/graynod");
    console.log(`CONNECTED TO MONGODB DATABASE ${connectdb.connection.host}`);
  } catch (error) {
    console.log(`ERROR IN MONGODB ${error}`);
  }
};

module.exports = connectDataBase;
