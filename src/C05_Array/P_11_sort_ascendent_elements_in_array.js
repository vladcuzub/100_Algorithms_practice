// Write a program in C to sort elements of an array in ascending order.
// Test Data:
// Input the size of array: 5
// Input 5 elements in the array:
// element - 0 : 2
// element - 1 : 7
// element - 2 : 4
// element - 3 : 5
// element - 4 : 9
// Expected Output:
// Elements of array in sorted ascending order:
// 2 4 5 7 9


let array = [];

const numbersOfInput = () => {
    let input = prompt('Input the number of elements to be stored in the array: ')

    for (let i = 0; i < input; i++) {
        let numb = parseInt(prompt(`Input ${i + 1} element in the array:`));
        array.push(numb)
    }
    return console.log(`Input 3 elements in the array: ${array}`)
}

const sortAscendentElements = () => {
    const ascendent = array.sort((a, b) => {
        return a - b
    })
    console.log(`Elements of array in sorted ascending order: ${ascendent}`)
}

numbersOfInput();
sortAscendentElements()