//QUEUE
const queue = []

function getInLine(person) {
    queue.push(person)
}

getInLine("Rich")
getInLine("Will")
getInLine("Rudie")
getInLine("Sal")


console.log(queue)

//who is next and last
const nextInLine = () => queue[0]
const lastInLine = () => queue[queue.length-1]

// console.log(nextInLine() + " is first in line")
// console.log(lastInLine() + " is last in line")

//Call nextUp To move the line forward
const nextUp = () => queue.shift()
// nextUp()

// console.log(queue)

const cutTheLine = (person) => queue.unshift(person)
// cutTheLine("Ben")

// console.log(queue)

const tiredOfWaiting = () => queue.pop()
// tiredOfWaiting()

// console.log(queue)