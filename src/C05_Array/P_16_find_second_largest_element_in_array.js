/* Write a program in C to find the second largest element in an array.
Test Data:
Input the size of array: 5
Input 5 elements in the array:
element - 0 : 2
element - 1 : 9
element - 2 : 1
element - 3 : 4
element - 4 : 6
Expected Output:
The Second largest element in the array is: 6 */


const readArray = () => {
    let array = [];
    let arraySize = parseInt(prompt('Input the size of array: '))

    for (let i = 0; i < arraySize; i++) {
        let elements = parseInt(prompt(`Input ${i} elements in the array: `))
        array[i] = elements
    }
    return array
}


const findSecondLargestElementInArray = () => {
    let largestElement = array[0];
    let secondLargestElement = array[1];

    for (let i = 2; i < array.length; i++) {
        if (array[i] > largestElement) {
            secondLargestElement = largestElement;
            largestElement = array[i];
        } else if (array[i] > secondLargestElement && array[i] !== largestElement) {
            secondLargestElement = array[i];
        }
    }
    console.log(`The Second largest element in the array is: ${secondLargestElement}`);
}

const array = readArray()
findSecondLargestElementInArray(array)



