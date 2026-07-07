const { Router } = require("express");
const productsRouter = require("./products/routes");

const apiRouter = Router();

apiRouter.use("/products", productsRouter);

module.exports = apiRouter;
