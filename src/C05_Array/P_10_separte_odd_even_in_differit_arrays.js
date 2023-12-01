// Write a program in C to separate odd and even integers into separate arrays.
// Test Data:
// Input the number of elements to be stored in the array: 5
// Input 5 elements in the array:
// element - 0 : 25
// element - 1 : 47
// element - 2 : 42
// element - 3 : 56
// element - 4 : 32
// Expected Output:
// The Even elements are:
// 42 56 32
// The Odd elements are:
// 25 47


let array = [];

const numbersOfInput = () => {
    let input = prompt('Input the number of elements to be stored in the array: ')

    for (let i = 0; i < input; i++) {
        let numb = parseInt(prompt(`Input ${i + 1} element in the array:`));
        array.push(numb)
    }
    return console.log(`Input 3 elements in the array: ${array}`)
}

const filterEvenOrOddElementds = () => {
    const evens = []
    const odds = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(array[i])
        } else {
            odds.push(array[i])
        }
    }
    console.log(`The Evens elements are: ${evens}`)
    console.log(`The Odds elements are: ${odds}`)
}

numbersOfInput()
filterEvenOrOddElementds()
