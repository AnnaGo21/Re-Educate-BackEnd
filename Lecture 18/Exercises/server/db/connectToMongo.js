const { default: mongoose } = require("mongoose");

module.exports = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.7qvno92.mongodb.net/?appName=Cluster0",
  );
  console.log("Connected to db successfully");
};
