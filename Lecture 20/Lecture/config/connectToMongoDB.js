const { default: mongoose } = require("mongoose");

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log({ message: "Connected to database successfully" });
  } catch (error) {
    console.log(error, "Error occurred during connected to database");
  }
}

module.exports = connectToMongo;
