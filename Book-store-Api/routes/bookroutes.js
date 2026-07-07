const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

// GET all books
router.get("/", getAllBooks);

// GET single book by ID
router.get("/:id", getBookById);

// POST add a new book
router.post("/", addBook);

// PUT update a book by ID
router.put("/:id", updateBook);

// DELETE a book by ID
router.delete("/:id", deleteBook);

module.exports = router;