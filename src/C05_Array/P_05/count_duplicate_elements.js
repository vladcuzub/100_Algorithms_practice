// Write a program in C to count the total number of duplicate elements in an array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 5
// element - 1 : 1
// element - 2 : 1
// Expected Output:
// Total number of duplicate elements found in the array is: 1

let array = [];
let input

const inputElements = () => {
    input = prompt(`Input the number of elements to be stored in the array:`)
    return parseInt(input)
}

const addElementsInArray = () => {
    for (let i = 0; i < input; i++) {
        let element = prompt(`Input ${i} elements in the array`)
        array.push(element)
    }
}

const countDuplicate = () => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++)
            if (array[i] === array[j]) {
                count++
            }
    }
    console.log(`Total number of duplicate elements found in the array is: ${count}`)
}

const main = () => {
    inputElements()
    addElementsInArray()
    countDuplicate()
}
main()
