const { Router } = require("express");
const {
  getOrders,
  getSecretOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  updateOrder,
  updateOrderStatus,
} = require("./services");
const isAdmin = require("../../middlewares/isAdmin.middleware");
const isEditor = require("../../middlewares/isEditor.middleware");

const ordersRouter = Router();

ordersRouter.get("/", getOrders);
ordersRouter.get("/secret", isAdmin, getSecretOrders);
ordersRouter.get("/:id", getOrderById);
ordersRouter.post("/", createOrder);
ordersRouter.delete("/:id", isAdmin, deleteOrder);
ordersRouter.put("/:id", isAdmin, updateOrder);
ordersRouter.patch("/:id/status", isEditor, updateOrderStatus);

module.exports = ordersRouter;
