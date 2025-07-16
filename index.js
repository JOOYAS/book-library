const express = require('express')
const app = express()
var cors = require('cors')
var cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken');
const dbconnect = require('./dbconnect');
require('dotenv').config()
const bcrypt = require('bcrypt');

const saltRounds = 10;
const port = 3000
const bookRoutes = require('./Routes/bookRoutes.js');
const userRoutes = require('./Routes/userRoutes.js')

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}))
app.use(express.json())//to take data/body from request
app.use(cookieParser())
app.all('{*splat}', (req, res, next) => {
    console.log(`>Request:, ${req.method}  ${req.path}`);

    next();
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
dbconnect();



//routes

app.use('/books', bookRoutes)

app.use('/user', userRoutes)

app.use('/', (res, req) => {
    req.send(`API is working\n \nchoose /user -or- /books`)
})

