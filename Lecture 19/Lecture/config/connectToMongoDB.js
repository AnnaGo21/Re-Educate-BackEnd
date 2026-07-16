const { default: mongoose } = require("mongoose");

async function connectToMongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.7qvno92.mongodb.net/?appName=Cluster0",
    );
    console.log({ message: "დაკავშირდა წარმატებით" });
  } catch (error) {
    console.log(
      error,
      "ეს ერორი მოდის cofnig-დან კერძოდ მონგოს ქონექთის ფუქნციიდან",
    );
  }
}

module.exports = connectToMongo;
