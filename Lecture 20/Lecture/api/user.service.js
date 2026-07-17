const { isValidObjectId } = require("mongoose");
const userModel = require("../models/user.model");

const findAllUser = async (req, res) => {
  const findAllInfo = await userModel.find();
  res.json({ message: "ვიპოვე ყველა ჩანაწერი წარმატებით", data: findAllInfo });
};

const createUser = async (req, res) => {
  const { name, age, email } = req.body;

  if (
    !name ||
    typeof name !== "string" ||
    !age ||
    typeof age !== "number" ||
    !email ||
    typeof email !== "string"
  ) {
    return res.json({
      message:
        "name and email must be  a string. also age myst be a number and all of this field are required",
    });
  }

  const findUserByEmail = await userModel.findOne({ email: email });
  console.log(findUserByEmail);

  if (findUserByEmail) {
    return res.json({ message: "user already exsisits" });
  }

  const createUser = await userModel.create({ name, age, email });

  res.json({ message: "შეიქმნა ახალი იუზერი წარმატებით", data: createUser });
};

const getByIdUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "არასწორი Id-ა", data: null });
  }
  const findUserById = await userModel.findById(id);

  if (!findUserById) {
    return res.json({ message: "ასეთი ჩნაწერი ვერ მოიძებნა" });
  }
  res.json({
    message: "წარამტებით ვიპოვეთ ჩანაწერი id-ის მეშვეობით",
    data: findUserById,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "არასწორი Id-ა", data: null });
  }

  const deletedUser = await userModel.findByIdAndDelete(id);

  res.json({ message: "წაიშალა წარმატებით", data: deletedUser });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  if (!isValidObjectId(id)) {
    return res.json({ message: "არასწორი Id-ა", data: null });
  }

  const findUserAndUpdate = await userModel.findByIdAndUpdate(
    id,
    { name, age, email },
    { new: true },
  );

  res.json({
    message: "გილოცავ დააფდეითდა წარმატებით...",
    data: findUserAndUpdate,
  });
};

module.exports = {
  findAllUser,
  createUser,
  getByIdUser,
  deleteUser,
  updateUser,
};
