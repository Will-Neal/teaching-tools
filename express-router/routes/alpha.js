const express = require('express')
const alpha = express.Router()

alpha.get('/', (req, res) => {
    res.send('Hi I am the alpha page')
})

alpha.post('/', (req, res) => {
    const userData = req.body
    console.log(`myusername is ${req.body.username}`)

    res.json(userData)
})



module.exports = alpha