//STACKS

//Reverse a word using stacks

const letters = []

const word = "racecar";

let reverseWord = ""

for (i=0; i<word.length; i++) {
    letters.push(word[i])
}



for (j=0; j<word.length; j++) {
    reverseWord += letters.pop();
    console.log(reverseWord)
}

if (reverseWord === word) {
    console.log(`${word} is a palindrome`)
} else {
    console.log(`${word} is not a palindrome` )
}