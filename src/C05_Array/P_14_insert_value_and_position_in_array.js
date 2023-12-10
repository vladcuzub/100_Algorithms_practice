// Write a program in C to insert values in the array(unsorted list).
// Test Data:
// Input the size of array: 4
// Input 4 elements in the unsorted array :
// element - 0 : 1
// element - 1 : 8
// element - 2 : 7
// element - 3 : 10
// Input the value to be inserted: 5
// Input the Position, where the value to be inserted: 2
// Expected Output:
// The current list of the array:
// 1 8 7 10
// After Insert the element the new list is:
// 1 5 8 7 10





function readArray() {
    let array = [];
    const inputSize = parseInt(prompt("Input the size of array: "));
    for (let i = 0; i < inputSize; i++) {
        let tempElement = parseInt(prompt(`element - ${i} : `));
        array[i] = tempElement;
    }
    return array;
}

const insertNewValueAtPosition = (array, newValue, position) => {
    if (position < 0 || position > array.length) {
        console.log("Invalid position");
        return array;
    }

    let newArray = [];

    for (let i = 0; i < position; i++) {
        newArray[i] = array[i];
    }

    newArray[position] = newValue;

    for (let i = position; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }

    return newArray;
}

function main() {
    let myArray = readArray();
    let newValue = parseInt(prompt("Input the value to be inserted: "));
    let position = parseInt(prompt("Input the Position, where the value to be inserted: "));

    let result = insertNewValueAtPosition(myArray, newValue, position);

    console.log("The current list of the array:");
    console.log(myArray.join(" "));

    console.log("After Insert the element the new list is:");
    console.log(result.join(" "));
}

main();
