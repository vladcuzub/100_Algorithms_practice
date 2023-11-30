// Write a program in C to count the frequency of each element of an array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 25
// element - 1 : 12
// element - 2 : 43
// Expected Output:
// The frequency of all elements of an array:
// 25 occurs 1 times
// 12 occurs 1 times
// 43 occurs 1 times

let array = [];


const numbersOfInput = () => {
    let input = prompt('Input the number of elements to be stored in the array: ')

    for (let i = 0; i < input; i++) {
        let numb = parseInt(prompt(`Input ${i + 1} element in the array:`));
        array.push(numb)
    }
    return console.log(`Input 3 elements in the array: ${array}`)
}

const checkFrequnecyElements = () => {
    for (let i = 0; i < array.length; i++) {
        let count = 1;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === array[i]) {
                count++
            }
        }
        console.log(`${array[i]} occurs ${count} times`);
    }
}

numbersOfInput()
checkFrequnecyElements()