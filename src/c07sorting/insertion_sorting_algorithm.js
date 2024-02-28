/* Write a C program to sort a list of elements using the insertion sort algorithm. >
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than other algorithms such as quicksort, heapsort, or merge sort. */

function insertionSorting(array) {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = current;
    }

    return array;
}

module.exports = insertionSorting