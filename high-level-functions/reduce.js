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


//console.log(mostExpensive)

//REDUCE WITH DATA 

const colorData = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

const getColors = colorData.reduce((total, sample) => {
    total.push(sample.color)
    return total
}, [])

const getValues = colorData.reduce((total, sample) => {
    total.push(sample.value)
    return total
}, [])

console.log(getValues)