multipleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const singleValue = multipleValues.reduce((a, b) => a += b);
//console.log(singleValue)

//basic sum with reduce
//Arrow function syntax: reduce((previousValue, currentValue) => { /* ... */ } )
const itemPrices = [29.99, 19.95, 54.95, 99.99, 16.35, 10.00]
const cartTotal = itemPrices.reduce((total, itemPrice) => total += itemPrice);
const itemAverage = itemPrices.reduce((total, itemPrice, itemIndex, itemArray) => {
    total += itemPrice
    if (itemIndex === itemArray.length-1) {
        return total/itemArray.length;
    } else {
        return total
    }
});
const mostExpensive = itemPrices.reduce((bigMoney, itemPrice) => {
    if (itemPrice < bigMoney) {
        return bigMoney
    } else {
        bigMoney = itemPrice
        return bigMoney
    }
})


console.log(mostExpensive)