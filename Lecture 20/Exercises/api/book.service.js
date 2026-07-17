const { isValidObjectId } = require("mongoose");
const bookModel = require("../models/book.model");

const findAllBook = async (req, res) => {
  const { page = 1, take = 5, sort, search } = req.query;

  let findAllInfo = await bookModel.find();

  if (search) {
    findAllInfo = findAllInfo.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (sort === "asc") {
    findAllInfo.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    findAllInfo.sort((a, b) => b.price - a.price);
  }

  const totalValue = findAllInfo.reduce((acc, cur) => acc + cur.price, 0);

  res.json({
    message: "Found all books successfully",
    data: findAllInfo.slice((page - 1) * take, page * take),
    totalValue,
  });
};

const getMostExpensiveBook = async (req, res) => {
  const findAllInfo = await bookModel.find();

  if (!findAllInfo.length) {
    return res.json({ message: "no books found", data: null });
  }

  const mostExpensiveBook = findAllInfo.reduce((acc, cur) =>
    cur.price > acc.price ? cur : acc,
  );

  res.json({
    message: "Found the most expensive book",
    data: mostExpensiveBook,
  });
};

const getBooksByGenre = async (req, res) => {
  const findAllInfo = await bookModel.find();

  const groupedByGenre = findAllInfo.reduce((acc, cur) => {
    acc[cur.genre] = acc[cur.genre] || [];
    acc[cur.genre].push(cur);
    return acc;
  }, {});

  res.json({
    message: "Grouped books by genre successfully",
    data: groupedByGenre,
  });
};

const createBook = async (req, res) => {
  const { title, author, price, genre, description } = req.body;

  if (
    !title ||
    typeof title !== "string" ||
    !author ||
    typeof author !== "string" ||
    !price ||
    typeof price !== "number" ||
    !genre ||
    typeof genre !== "string"
  ) {
    return res.json({
      message:
        "title, author and genre must be a string. Also price must be a number and all of these fields are required",
    });
  }

  if (price < 5 || price > 300) {
    return res.json({ message: "Price must be between 5 and 300" });
  }

  const findBookByTitle = await bookModel.findOne({ title: title });

  if (findBookByTitle) {
    return res.json({ message: "Book already exists" });
  }

  const createBook = await bookModel.create({
    title,
    author,
    price,
    genre,
    description,
  });

  res.json({ message: "Created new book successfully", data: createBook });
};

const getByIdBook = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid id", data: null });
  }
  const findBookById = await bookModel.findById(id);

  if (!findBookById) {
    return res.json({ message: "no such book found" });
  }
  res.json({
    message: "Found book by id successfully",
    data: findBookById,
  });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid id", data: null });
  }

  const deletedBook = await bookModel.findByIdAndDelete(id);

  res.json({ message: "Deleted successfully", data: deletedBook });
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, price, genre, description } = req.body;

  if (!isValidObjectId(id)) {
    return res.json({ message: "invalid id", data: null });
  }

  const findBookAndUpdate = await bookModel.findByIdAndUpdate(
    id,
    { title, author, price, genre, description },
    { new: true },
  );

  res.json({
    message: "Updated successfully.",
    data: findBookAndUpdate,
  });
};

module.exports = {
  findAllBook,
  getMostExpensiveBook,
  getBooksByGenre,
  createBook,
  getByIdBook,
  deleteBook,
  updateBook,
};
