// Write a program in C to find the maximum and minimum elements in an array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 45
// element - 1 : 25
// element - 2 : 21
// Expected Output:
// Maximum element is: 45
// Minimum element is: 21

let array = [];


const numbersOfInput = () => {
    let input = prompt('Input the number of elements to be stored in the array: ')

    for (let i = 0; i < input; i++) {
        let numb = parseInt(prompt(`Input ${i + 1} element in the array:`));
        array.push(numb)
    }
    return console.log(`Input 3 elements in the array: ${array}`)
}

const findMaxMinElement = () => {
    let max = Math.max(...array);
    let min = Math.min(...array);
    return console.log(`Maximum element is: ${max}\nMinimum element is: ${min}`)

}

numbersOfInput()
findMaxMinElement()