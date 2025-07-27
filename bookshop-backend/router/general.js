const express = require("express");
let books = require("./booksdb.js");
let general = express.Router();

// Task 1: Get all books
general.get("/", (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
general.get("/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Task 3: Get books by author
general.get("/author/:author", (req, res) => {
  const result = Object.values(books).filter(b => b.author === req.params.author);
  res.json(result);
});

// Task 4: Get books by title
general.get("/title/:title", (req, res) => {
  const result = Object.values(books).filter(b => b.title === req.params.title);
  res.json(result);
});

// Task 5: Get book review
general.get("/review/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports.general = general;
