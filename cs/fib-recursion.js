//prints the given number of iterations of the fibonacci sequence
start = 0
add = 1
const printFib = (steps) => {
  add += start
  if (steps > 0) {
    console.log(start)
    start = add - start
    printFib(steps-1)
  }
  return
}

printFib(5)