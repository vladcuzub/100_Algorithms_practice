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
    let newArray = [];
    let head = firstArray.length - 1;
    let tail = secondArray.length - 1;
    let resultIndex = 0;

    while (head >= 0 && tail >= 0) {
        if (firstArray[head] >= secondArray[tail]) {
            newArray[resultIndex] = firstArray[head];
            head--;
        } else {
            newArray[resultIndex] = secondArray[tail];
            tail--;
        }
        resultIndex++;
    }

    while (head >= 0) {
        newArray[resultIndex] = firstArray[head];
        head--;
        resultIndex++;
    }


    while (tail >= 0) {
        newArray[resultIndex] = secondArray[tail];
        tail--;
        resultIndex++;
    }

    return newArray;
}




module.exports = mergeArrays;