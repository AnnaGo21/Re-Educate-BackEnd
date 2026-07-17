const { Router } = require("express");
const {
  findAllBook,
  getMostExpensiveBook,
  getBooksByGenre,
  getByIdBook,
  createBook,
  deleteBook,
  updateBook,
} = require("./book.service");

const bookRouter = Router();

bookRouter.get("/", findAllBook);

bookRouter.get("/exp", getMostExpensiveBook);

bookRouter.get("/by-genre", getBooksByGenre);

bookRouter.get("/:id", getByIdBook);

bookRouter.post("/", createBook);

bookRouter.delete("/:id", deleteBook);

bookRouter.put("/:id", updateBook);

module.exports = bookRouter;
