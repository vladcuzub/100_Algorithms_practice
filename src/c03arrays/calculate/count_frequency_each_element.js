// Write a program to count the frequency of each element of an array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 25
// element - 1 : 12
// element - 2 : 43
// Expected Output:
// The frequency of all elements of an array:
// 25 occurs 1 times
// 12 occurs 1 times
// 43 occurs 1 times

function checkFrequnecyElements(arrayElements) {
    let frequenceElement = [];

    for (let i = 0; i < arrayElements.length; i++) {
        let count = 0;
        for (let j = 0; j < arrayElements.length; j++) {
            if (arrayElements[j] === arrayElements[i]) {
                count++
            }
        }
        frequenceElement[i] = count;
    }
    return frequenceElement
    }


module.exports = checkFrequnecyElements;