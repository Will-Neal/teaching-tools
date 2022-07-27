console.log('linked')
const button = document.querySelector(".button")

button.addEventListener('click', () => {
    fetch('/checkout')
})