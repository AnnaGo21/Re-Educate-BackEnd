const express = require("express");
const connectToMongoDB = require("./config/connectToMongoDB");
const userModel = require("./models/user.model");
const { isValidObjectId } = require("mongoose");
const app = express();
const PORT = 3030;
app.use(express.json());
connectToMongoDB();

app.get("/", (req, res) => {
  res.json("ერორი გაიჰენდლა");
});

app.get("/users", async (req, res) => {
  const findAllInfo = await userModel.find();
  res.json({ message: "finded all info successfully", data: findAllInfo });
});

app.post("/users", async (req, res) => {
  // console.log(req.body)
  // console.log(name)
  // console.log(age)
  // console.log(email)
  const { name, age, email } = req.body;

  if (!name || typeof name !== "string" || !age || !email) {
    return res.json({
      message: "name,name must be a string,age and email is required field",
    });
  }

  const exsistingEmail = await userModel.findOne({ email: email });

  if (exsistingEmail) {
    return res.json({ message: "email already exsists", data: null });
  }

  const createUser = await userModel.create({ name, age, email });
  res.json({ message: "created succesffuly", data: createUser });
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid mongo Id" });
  }
  const deletedUser = await userModel.findByIdAndDelete(id);
  res.json({ message: "deleted successfully", data: deletedUser });
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "imvalid id" });
  }

  const findUserByID = await userModel.findById(id);

  res.json({ message: "finded successfully", data: findUserByID });
});

app.put("/users/:id", async (req, res) => {
  console.log(req.body);
  // console.log(id)
  // console.log(name,age,email)
  const { id } = req.params;
  const { name, age, email } = req.body;
  if (!isValidObjectId(id)) {
    return res.json({ message: "imvalid id" });
  }
  const findUserByIdAndUpdate = await userModel.findByIdAndUpdate(
    id,
    { name, age, email },
    { new: true },
  );
  res.json({ message: "udpated successfully", data: findUserByIdAndUpdate });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
