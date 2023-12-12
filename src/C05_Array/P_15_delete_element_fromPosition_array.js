// Write a program in C to delete an element at a desired position from an array.
// Test Data:
// Input the size of array: 5
// Input 5 elements in the array in ascending order:
// element - 0 : 1
// element - 1 : 2
// element - 2 : 3
// element - 3 : 4
// element - 4 : 5
// Input the position where to delete: 3
// Expected Output:
// The new list is: 1 2 4 5

const readElementsInArray = () => {
    let array = [];
    let arraySize = parseInt(prompt('Input the size of array: '))

    for (let i = 0; i < arraySize; i++) {
        let elements = parseInt(prompt(`Input ${i} elements in the array in ascending order: `))
        array[i] = elements;
    }

    return array;
}

const removeElementFromArray = (array, position) => {
    let newArray = [];

    for (let i = 0, j = 0; i < array.length; i++) {
        if (i + 1 !== position) {
            newArray[j] = array[i]
            j++
        }
    }
    return newArray

}
const main = () => {
    let myArray = readElementsInArray()
    let pos = parseInt(prompt("Input the position where to delete: "));
    
    let deleteElement = removeElementFromArray(myArray, pos)

    console.log(`The new list is: ${deleteElement}`)
}
main();