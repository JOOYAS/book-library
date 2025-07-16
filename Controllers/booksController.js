const Book = require("../Models/bookModel");

const allBooks = async (req, res) => {
    const books = await Book.find({})
    res.json(books)
}

const addBook = async (req, res) => {
    const data = await req.body;
    const book = new Book(data)
    await book.save()
    res.json(book)
}

const viewBook = async (req, res) => {
    const { id } = await req.params
    const book = await Book.findById(id)

    res.json(book)
}

const deleteBook = async (req, res) => {
    const { id } = await req.params
    const book = await Book.findByIdAndDelete(id)

    res.send(`book ${book.title} deleted`)
}

module.exports = {
    allBooks,
    addBook,
    viewBook,
    deleteBook
}