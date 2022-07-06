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