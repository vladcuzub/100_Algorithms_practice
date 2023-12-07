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

function readArray(elements) {
    let array = [];
  
    for (let i = 0; i < elements; i++) {
        let tempElement = parseInt(prompt(`element - ${i} : `));
        array.push(tempElement);
    }
    return array;
}

const insertNewValueAtPosition = (array, newValue, position) => {

    let newArray = array
    let firstValue = array[0]
    newArray[1] = firstValue
    newArray[0] = newValue
    return newArray;

}


function main() {
    //input
    let inputSize = parseInt(prompt("Input the size of array: "));
    let myArray = readArray(inputSize);
    let newValue = parseInt(prompt("Input the value to be inserted: "));
    let position = parseInt(prompt("Input the Position, where the value to be inserted: "))

    //call algorithm
    let result = insertNewValueAtPosition(myArray, newValue, position)

    console.log(myArray)
    console.log(result)
    // let updatedArray = insertNewValueAtPosition(myArray,newValue,position);
    // console.log(updatedArray)
}

main()




// function readArray() {
//     let array = [];
//     const inputSize = parseInt(prompt("Input the size of array: "));
//     for (let i = 0; i < inputSize; i++) {
//         let tempElement = parseInt(prompt(`element - ${i} : `));
//         array[i] = tempElement;
//     }
//     return array;
// }

// const insertNewValueAtPosition = (array, newValue, position) => {
//     if (position < 0 || position > array.length) {
//         console.log("Invalid position");
//         return array;
//     }

//     // Create a new array to store the result
//     let newArray = [];

//     // Copy elements before the specified position
//     for (let i = 0; i < position; i++) {
//         newArray[i] = array[i];
//     }

//     // Insert the new value
//     newArray[position] = newValue;

//     // Copy elements after the specified position
//     for (let i = position; i < array.length; i++) {
//         newArray[i + 1] = array[i];
//     }

//     return newArray;
// }

// function main() {
//     // Input
//     let myArray = readArray();
//     let newValue = parseInt(prompt("Input the value to be inserted: "));
//     let position = parseInt(prompt("Input the Position, where the value to be inserted: "));

//     // Call the algorithm
//     let result = insertNewValueAtPosition(myArray, newValue, position);

//     // Output
//     console.log("The current list of the array:");
//     console.log(myArray.join(" "));

//     console.log("After Insert the element the new list is:");
//     console.log(result.join(" "));
// }

// main();
