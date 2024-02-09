/* Write a program to find the second largest element in an array.
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


function findSecondLargestElementInArray (array){
    let largestElement = array[0];
    let secondLargestElement = array[1];

    for (let i = 2; i < array.length; i++) {
        if (array[i] < largestElement) {
            secondLargestElement = largestElement;
            largestElement = array[i];
        } else if (array[i] > secondLargestElement && array[i] !== largestElement) {
            secondLargestElement = array[i];
        }
    }
    return secondLargestElement

}

module.exports = findSecondLargestElementInArray



