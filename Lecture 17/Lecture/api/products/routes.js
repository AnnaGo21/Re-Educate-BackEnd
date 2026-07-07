const { Router } = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./services");
const isAdminMiddleware = require("../../middlewares/isAdmin.middleware");

const productsRouter = Router();

productsRouter.get("/", isAdminMiddleware, getProducts);
productsRouter.get("/:id", isAdminMiddleware, getProductById);
productsRouter.post("/", isAdminMiddleware, createProduct);
productsRouter.delete("/:id", deleteProduct);
productsRouter.put("/:id", updateProduct);

module.exports = productsRouter;
