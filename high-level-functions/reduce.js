multipleValues = [1,2,3,4,5,6,7,8,9,10]
const singleValue = multipleValues.reduce((a, b) => a += b)
console.log(singleValue)

//basic sum with reduce
//Arrow function syntax: reduce((previousValue, currentValue) => { /* ... */ } )
const itemPrices = [29.99, 19.95, 54.95, 99.99, 16.35, 10.00]
const cartTotal = itemPrices.reduce((total, itemPrice) => total += itemPrice)

//console.log(cartTotal)