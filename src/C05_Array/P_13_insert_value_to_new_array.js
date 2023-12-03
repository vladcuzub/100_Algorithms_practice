//  Write a program in C to insert the values in the array(sorted list).
// Test Data:
// Insert New value in the sorted array:
// -----------------------------------------
//     Input the size of array: 5
// Input 5 elements in the array in ascending order:
// element - 0 : 2
// element - 1 : 5
// element - 2 : 7
// element - 3 : 9
// element - 4 : 11
// Input the value to be inserted: 8
// The exist array list is:
// 2 5 7 9 11
// After Insert the list is:
// 2 5 7 8 9 11


const addElementsInArray = () => {

    let array = []
    let numberElements = prompt('Input the size of array:');

    for (let i = 0; i < numberElements; i++) {
        let inputValue = parseInt(prompt(`Input ${i + 1} elements in the array in ascending order:`));
        array.push(inputValue);
    }
    console.log(`The array are: ${array}`)
    return array
}

const sortArray = (array) => {
    return array.sort((a, b) => {
        return a - b
    })
}


const sortedArray = () => {
    const array = addElementsInArray()
    const sorted = sortArray(array)

    console.log(`Elements of the array in sorted asccendent order: ${sorted}`)

}



sortedArray()