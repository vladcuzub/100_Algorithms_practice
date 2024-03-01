/* 4. Write a program to sort a list of elements using the merge sort algorithm. >
Merge sort is an O(n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.*/


function mergeSort(array) {

    const middle = array.length / 2
    const left = []
    const right = []

    console.log(middle)

    for (let i = 0; i < middle; i++) {

        left[i] = array[i]
        console.log(left[i])
    }
    for (let i = middle; i < array.length; i++) {
        right[i - middle] = array[i]
    }

    return array
}



module.exports = mergeSort