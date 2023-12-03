// Write a program in C to sort the elements of the array in descending order.
// Test Data:
// Input the size of array: 3
// Input 3 elements in the array:
// element - 0 : 5
// element - 1 : 9
// element - 2 : 1
// Expected Output:
// Elements of the array in sorted descending order:
// 9 5 1


const elements = () => {
    let array = [];
    let numberOfElements = prompt('Input the size of array: ');

    for (let i = 0; i < numberOfElements; i++) {
        let element = prompt(`Input ${i + 1} elements in the array: `)
        array.push(element)
    }
    console.log(`Elements of the array in array are: ${array}`)
    return array

}

const sortElements = (ceva) => {
    return ceva.sort((a, b) => {
        return b - a
    })
}

const sortElementsInArray = () => {
    const array = elements();
    const sortedArray = sortElements(array)

    console.log(`Elements of the array in sorted descending order: ${sortedArray}`)

}

sortElementsInArray()



