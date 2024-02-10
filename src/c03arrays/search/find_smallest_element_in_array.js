/* Write a program to find the second smallest element in an array.
Test Data :
Input the size of array : 5
Input 5 elements in the array (value must be <9999) :
element - 0 : 0
element - 1 : 9
element - 2 : 4
element - 3 : 6
element - 4 : 5
Expected Output :
The Second smallest element in the array is : 4 */



function findSecondSmallestElement(array) {
    let smallestElement = array[0];
    let secondSmallestElement = array[1];

    for (let i = 2; i < array.length; i++) {
        if (array[i] < smallestElement) {
            secondSmallestElement = smallestElement;
            smallestElement = array[i];
        } else if (array[i] < secondSmallestElement && array[i] !== smallestElement) {
            secondSmallestElement = array[i];
        }
    }
    return secondSmallestElement;
}

module.exports = findSecondSmallestElement