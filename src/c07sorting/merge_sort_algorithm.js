/* 4. Write a program to sort a list of elements using the merge sort algorithm. >
Merge sort is an O(n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.*/

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let middle = (array.length / 2) | 0;
    let left = [];
    let right = [];

    for (let i = 0; i < middle; i++) {
        left[i] = array[i];
    }

    for (let i = middle; i < array.length; i++) {
        right[i - middle] = array[i];
    }

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let sortedArrayIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray[sortedArrayIndex] = left[leftIndex];
            leftIndex++;
        } else {
            sortedArray[sortedArrayIndex] = right[rightIndex];
            rightIndex++;
        }
        sortedArrayIndex++;
    }

    while (leftIndex < left.length) {
        sortedArray[sortedArrayIndex] = left[leftIndex];
        leftIndex++;
        sortedArrayIndex++;
    }

    while (rightIndex < right.length) {
        sortedArray[sortedArrayIndex] = right[rightIndex];
        rightIndex++;
        sortedArrayIndex++;
    }
    return sortedArray;
}

module.exports = mergeSort