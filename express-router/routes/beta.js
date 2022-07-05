const express = require('express');
const beta = express.Router();

beta.get('/', (req,res) => {
    res.send('Hi there, I am the B page')
})

beta.post('/', (req, res) => {
    console.log(req.body);
    const { input1, input2 } = req.body
    res.send(`you sent ${input1} & ${input2} to the beta route!!
    
    <a href="/beta">back to the B page</a>`)
})

module.exports = beta