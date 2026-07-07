const books = require("../data/books");

// GET all books
const getAllBooks = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All books fetched successfully",
    data: books
  });
};

// GET single book by ID
const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "Book fetched successfully",
    data: book
  });
};

// POST add a new book
const addBook = (req, res) => {
  const { title, author, price } = req.body;

  if (!title || !author || !price) {
    return res.status(400).json({
      success: false,
      message: "Please provide title, author, and price"
    });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    price
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: "Book added successfully",
    data: newBook
  });
};

// PUT update a book by ID
const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, price } = req.body;

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  if (title) book.title = title;
  if (author) book.author = author;
  if (price) book.price = price;

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: book
  });
};

// DELETE a book by ID
const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found"
    });
  }

  const deletedBook = books.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
    data: deletedBook[0]
  });
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};