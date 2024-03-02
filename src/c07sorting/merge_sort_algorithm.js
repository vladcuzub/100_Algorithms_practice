/* 4. Write a program to sort a list of elements using the merge sort algorithm. >
Merge sort is an O(n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.*/

function mergeSort(array) {

    const middle = (array.length / 2) | 0;
   const left = new Array(middle)

    const right = new Array(array.length - middle)

    for (let i = 0; i < middle; i++) {

        left[i] = array[i]
        console.log(left[i])
    }
    for (let i = middle; i < array.length; i++) {
        right[i - middle] = array[i]

    }

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let result = new Array(left.length + right.length);
    let leftIndex = 0;
    let rightIndex = 0;
    let resultIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result[resultIndex] = left[leftIndex];
            leftIndex++;
        } else {
            result[resultIndex] = right[rightIndex];
            rightIndex++;
        }
        resultIndex++;
    }

    while (leftIndex < left.length) {
        result[resultIndex] = left[leftIndex];
        leftIndex++;
        resultIndex++;
    }

    while (rightIndex < right.length) {
        result[resultIndex] = right[rightIndex];
        rightIndex++;
        resultIndex++;
    }

    return result;
}


module.exports = mergeSort