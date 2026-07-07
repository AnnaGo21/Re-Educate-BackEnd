const { Router } = require("express");
const ordersRouter = require("./orders/routes");

const apiRouter = Router();

apiRouter.use("/orders", ordersRouter);

module.exports = apiRouter;
