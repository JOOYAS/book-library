const express = require('express')
const dbconnect = require('./dbconnect');
const app = express()
require('dotenv').config()
const port = 3000
const bookRoutes = require('./Routes/bookRoutes.js');
const userRoutes = require('./Routes/userRoutes.js')

app.all('{*splat}', (req, res, next) => {
    console.log(`'Request:', ${req.method}  ${req.path}`);

    next();
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
dbconnect();
// app.use(cors({//for giving access to this backend
//     credentials: true,
//     origin: true,
// }))
// app.use(cookieParser())
app.use(express.json())//to take data/body from request


//routes

app.use('/books', bookRoutes)

app.use('/user', userRoutes)

app.use('/', (res, req) => {
    req.send("API is working\nchoose /user -or- /books")
})