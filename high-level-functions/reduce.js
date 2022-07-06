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

//console.log(getValues)

const recipeData = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

const getTopping = recipeData.reduce((toppingArray, recipe) => {   
    //console.log(recipe.topping)
    recipe.topping.forEach(topping => {
        toppingArray.push(topping.type)
    })
    return toppingArray
}, [])

const uniqueToppings = [...new Set(getTopping)]

console.log(uniqueToppings)