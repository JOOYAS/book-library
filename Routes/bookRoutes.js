const express = require('express');
const { addBook, allBooks, viewBook, deleteBook } = require('../Controllers/booksController');
const router = express.Router();

router.route('/')
    .get(allBooks)
    .post(addBook)

router.route('/:id')
    .get(viewBook)
    .delete(deleteBook)

module.exports = router;