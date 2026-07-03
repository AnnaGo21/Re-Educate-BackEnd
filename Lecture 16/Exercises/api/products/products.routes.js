const { Router } = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  getSecretProducts,
} = require("./products.service");
const isAdmin = require("../../middleware/isAdmin.middleware");
const isEditor = require("../../middleware/isEditor.middleware");

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/secret", isAdmin, getSecretProducts);
productsRouter.get("/:id", getProductById);
productsRouter.post("/", createProduct);
productsRouter.delete("/:id", isAdmin, deleteProduct);
productsRouter.put("/:id", isEditor, updateProduct);

module.exports = productsRouter;
