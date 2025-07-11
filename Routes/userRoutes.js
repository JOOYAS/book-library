const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send('Get all users')
    })
    .post((req, res) => {
        res.send('Added a user')
    })

router.route('/:id')
    .get((req, res) => {
        res.send('a user')
    })
    .delete((req, res) => {
        res.send('deleted user')
    })

module.exports = router;