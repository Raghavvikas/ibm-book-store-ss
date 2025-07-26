const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBooks);
router.get('/isbn/:isbn', booksController.getBookByISBN);
router.get('/author/:author', booksController.getBooksByAuthor);
router.get('/title/:title', booksController.getBooksByTitle);
router.get('/:isbn/review', booksController.getBookReview);

module.exports = router;
