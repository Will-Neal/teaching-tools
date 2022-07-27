require('dotenv').config();

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.static('public'))

const stripe = require('stripe')(process.env.STRIPE_KEY)

const store = new Map([
    [1, {priceInCents: 1000, name: 'Learn React Today'}],
    [2, { priceInCents: 20000, name: 'Learn CSS Today'}] 
])

app.listen(3000)