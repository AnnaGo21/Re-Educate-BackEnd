const { Router } = require("express");
const {
  pagination,
  getByIdAnimal,
  createAnimal,
  deleteAnimal,
  updateAnimal,
} = require("./animals.service");

const animalsRouter = Router();

animalsRouter.get("/", pagination);
animalsRouter.get("/:id", getByIdAnimal);
animalsRouter.post("/", createAnimal);
animalsRouter.delete("/:id", deleteAnimal);
animalsRouter.put("/:id", updateAnimal);

module.exports = animalsRouter;
