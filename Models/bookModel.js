const { default: mongoose } = require("mongoose")

const bookModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    }
})


const Book = mongoose.model('Book', bookModel)

module.exports = Book