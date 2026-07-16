const express = require("express");
const connectToMongoDB = require("./config/connectToMongoDB");
const productModel = require("./models/product.model");
const { isValidObjectId } = require("mongoose");
const app = express();
const PORT = 3030;
app.use(express.json());
connectToMongoDB();

/**
 * შექმენი პროდუქტის CRUD სისტემა MongoDB-ის დახმარებით (npm i mongoose). უნდა არსებობდეს შემდეგი endpoint-ები:
 * GET (ყველა პროდუქტი), GET/:id (ID-ით პოვნა), POST (შექმნა), PUT (განახლება), DELETE (წაშლა) + pagination (/products?page=1&limit=5).
 * მოდელის ველები უნდა იყოს: name, price, category, description - მხოლოდ description უნდა იყოს optional.
 * დაამატე check - minprice(2) და maxprice(4000).
 * Update-ის დროს (PUT) body ველები უნდა იყოს სავალდებულო.
 * პროექტის root დონის დირექტორიაში შექმენი .env ფაილი, სადაც განთავსებული იქნება MONGO_URI=<შენი MongoDB ბმული>.
 * შემდეგ გამოიყენე mongoose.connect(process.env.MONGO_URI) მონაცემთა ბაზასთან დასაკავშირებლად.
 * თუ კავშირისას პრობლემა შეგექმნება, მოძებნე გადაჭრა (მინიშნება: CLI tool-ის მეშვეობით)
 */

app.get("/products", async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  const findAllProducts = await productModel.find();

  res.json({
    message: "found all info successfully",
    data: findAllProducts.slice((page - 1) * limit, page * limit),
  });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid id" });
  }

  const findProductByID = await productModel.findById(id);

  res.json({ message: "found successfully", data: findProductByID });
});

app.post("/products", async (req, res) => {
  const { name, price, category, description } = req.body;

  if (
    !name ||
    typeof name !== "string" ||
    !price ||
    typeof price !== "number" ||
    !category ||
    typeof category !== "string"
  ) {
    return res.json({
      message:
        "name and category must be a string, price must be a number. name, price and category are required fields",
    });
  }

  if (price < 2 || price > 4000) {
    return res.json({ message: "price must be between 2 and 4000" });
  }

  const createProduct = await productModel.create({
    name,
    price,
    category,
    description,
  });
  res.json({ message: "created succesffuly", data: createProduct });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description } = req.body;
  if (!isValidObjectId(id)) {
    return res.json({ message: "imvalid id" });
  }

  if (
    !name ||
    typeof name !== "string" ||
    !price ||
    typeof price !== "number" ||
    !category ||
    typeof category !== "string" ||
    !description ||
    typeof description !== "string"
  ) {
    return res.json({
      message:
        "name, category and description must be a string. price must be a number. name, price, category and description are required fields",
    });
  }

  if (price < 2 || price > 4000) {
    return res.json({ message: "price must be between 2 and 4000" });
  }

  const findProductByIdAndUpdate = await productModel.findByIdAndUpdate(
    id,
    { name, price, category, description },
    { new: true },
  );
  res.json({
    message: "udpated successfully",
    data: findProductByIdAndUpdate,
  });
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid mongo Id" });
  }
  const deletedProduct = await productModel.findByIdAndDelete(id);
  res.json({ message: "deleted successfully", data: deletedProduct });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
