/* 6. Write a program to sort a list of elements using the quick sort algorithm. >
Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.
Note: Read n values into array and Sort using Quick Sort*/

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1]
    let leftArray = []
    let rightArray = []

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < pivot) {
            leftArray[leftArray.length] = array[i]

        } else {
            rightArray[rightArray.length] = array[i]
        }
    }

    const sortedLeft = quickSort(leftArray);
    const sortedRight = quickSort(rightArray);
    let index = 0;
    const sortedArray = [];

    sortedArray.length = sortedLeft.length + 1 + sortedRight.length;

    for (let i = 0; i < sortedLeft.length; i++, index++) {
        sortedArray[index] = sortedLeft[i];
    }
    sortedArray[index++] = pivot;
    for (let i = 0; i < sortedRight.length; i++, index++) {
        sortedArray[index] = sortedRight[i];
    }

    return sortedArray;
}

module.exports = quickSort