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



const inputArray = () => {
    let array = [];
    let numberOfElements = prompt('Input the number of elements to be stored in the array: ')

    for (let i = 0; i < numberOfElements; i++) {
        let element = parseInt(prompt(`Input ${i + 1} element in the array:`));
        array.push(element)
    }
    console.log(`Input 3 elements in the array: ${array}`)
    return array;
}

const sortElements = (array) => {
    return array.sort((a, b) => {
        return a - b
       
    })
}

const sortElementsInArray = () => {
    let array = inputArray();
    let sortedArray = sortElements(array);

    console.log(`Elements of array in sorted ascending order: ${sortedArray}`)

}


sortElementsInArray();
