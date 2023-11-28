// Write a program in C to merge two arrays of the same size sorted in descending order.
// Test Data:
// Input the number of elements to be stored in the first array: 3
// Input 3 elements in the array:
// element - 0 : 1
// element - 1 : 2
// element - 2 : 3
// Input the number of elements to be stored in the second array: 3
// Input 3 elements in the array:
// element - 0 : 1
// element - 1 : 2
// element - 2 : 3
// Expected Output:
// The merged array in decending order is:
// 3 3 2 2 1 1

let firstArray = [];
let secondArray = [];
let input = 0;

const addElementsToFirstArray = () => {
    input = prompt('Input the number of elements to be stored in the first array:')
    for (let i = 0; i < input; i++) {
        let inputFirstElements = parseInt(prompt(`Input ${i + 1} elements in the array:`));
        firstArray.push(inputFirstElements)
    }
    return console.log(`Input 3 elements in the array: ${firstArray}`)
}

const addElementsToSecondArray = () => {
    input = prompt('Input the number of elements to be stored in the second array:')
    for (let i = 0; i < input; i++) {
        let inputSecondElements = parseInt(prompt(`Input ${i + 1} elements in the array:`));
        secondArray.push(inputSecondElements)
    }
    return console.log(`Input 3 elements in the array: ${secondArray}`)
}

const mergeArrays = () => {
    let result = [...firstArray, ...secondArray]
    result.sort((a, b) => b - a);
    // result.reverse()
    return console.log(result)
}


addElementsToFirstArray()
addElementsToSecondArray()
mergeArrays()
