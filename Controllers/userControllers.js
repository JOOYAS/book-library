const User = require("../Models/userModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const saltRounds = 10;

const allUsers = async (req, res) => {
    const users = await User.find({})

    res.json(users)
}

const newUser = async (req, res) => {
    const userData = req.body

    const isUser = await User.findOne({ email: userData.email })

    if (isUser) {
        return res.send("this user already exist")
    }
    const hash = bcrypt.hashSync(userData?.password, saltRounds);
    const user = new User({
        ...userData,
        password: hash
    })

    await user.save()
    res.json({
        name: user.name,
        email: user.email
    })

}

const viewUser = async (req, res) => {
    const { id } = await req.params
    const user = await User.findById(id)

    res.json(user)
}

const removeUser = async (req, res) => {
    const { id } = await req.params
    const user = await User.findByIdAndDelete(id)

    res.send(`${user.name}'s account deleted`)
}

const loginVerify = async (req, res) => {
    let reqUser = req.body
    let account = await User.findOne({ email: reqUser?.email })
    // console.log(req.body, reqUser, account);

    if (account) {
        const result = await bcrypt.compare(reqUser.password, account.password);
        // console.log(account, "reqUsr:", reqUser.password, "account :", account.password, )
        if (result) {
            // var token = jwt.sign({
            //     ...account,
            //     password: null
            // }, process.env.JWT_SECRET);

            return res
                // .cookie('token', token, {
                //     httpOnly: true, // Helps prevent XSS attacks
                //     secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                //     maxAge: 3600000, // Cookie expiration time in milliseconds (1 hour)
                //     sameSite: 'Strict' // Helps prevent CSRF attacks
                // })
                .json({
                    name: account.name,
                    email: account.email,
                })

        }
        return res.send('Incorrect Password')
    }
    res.send('Enter correct Email and Password')
}

module.exports = {
    allUsers,
    newUser,
    viewUser,
    removeUser,
    loginVerify
}