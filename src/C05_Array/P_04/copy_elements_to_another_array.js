// Write a program in C to copy the elements of one array into another array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 15
// element - 1 : 10
// element - 2 : 12
// Expected Output:
// The elements stored in the first array are:
// 15 10 12
// The elements copied into the second array are:
// 15 10 12

let firstArray = [];
let secondArray = [];
let inputs 

const determineElementsArray = () => {
    inputs = prompt(`Input the number of elements to be stored in the array: `)
    inputs = parseInt(inputs)
}

const addElementsFirstArray = () => {
    for(let i = 0; i < inputs; i++) {
        let element = prompt(`Enter the elements: ${i}`)
        firstArray.push(element)
    }
}

const addElementsSecondArray = () => {
    secondArray = [...firstArray]
}

const displayAllArrays = () => {
    console.log(`The elements stored in the first array are: ${firstArray.join(' ')}`)
    console.log(`The elements copied into the second array are: ${secondArray.join(' ') }`)
}

const main = () => {
    const inputsArrays = determineElementsArray()
    const addToFirstArray = addElementsFirstArray()
    const addToSecondArray = addElementsSecondArray()
    const displayArrays = displayAllArrays()
}

main()
