const express = require('express');
const { allUsers, newUser, viewUser, removeUser, loginVerify } = require('../Controllers/userControllers');
const router = express.Router();

router.route('/')
    .get(allUsers)


// router.route('/login')
//     .post(null)

router.route('/signup')
    .post(newUser)

router.route('/login')
    .post(loginVerify)

router.route('/:id')
    .get(viewUser)
    .delete(removeUser)

module.exports = router;