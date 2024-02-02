// Write a program to merge two arrays of the same size sorted in descending order.
// Test Data:
// Input the number of elements to be stored in the first array: 3
// Input 3 elements in the array:
// element - 0 : 1
// element - 1 : 2
// element - 2 : 3
// Input the number of elements to be stored in the second array: 3
// Input 3 elements in the array:
// element - 0 : 1
// element - 1 : 2
// element - 2 : 3
// Expected Output:
// The merged array in decending order is:
// 3 3 2 2 1 1


function mergeArrays(firstArray, secondArray) {
    let resultArray = [];
    let left = firstArray.length - 1;
    let right = secondArray.length - 1;
    let resultIndex = 0;

    while (left >= 0 && right >= 0) {
        if (firstArray[left] >= secondArray[right]) {
            resultArray[resultIndex] = firstArray[left];
            left--;
        } else {
            resultArray[resultIndex] = secondArray[right];
            right--;
        }
        resultIndex++;
    }

    while (left >= 0) {
        resultArray[resultIndex] = firstArray[left];
        left--;
        resultIndex++;
    }


    while (right >= 0) {
        resultArray[resultIndex] = secondArray[right];
        right--;
        resultIndex++;
    }

    return resultArray;
}




module.exports = mergeArrays;