const express = require('express');
const router = express.Router();
let books = require('./booksdb');

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET by ISBN
router.get('/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  console.log(req.params);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = router;
