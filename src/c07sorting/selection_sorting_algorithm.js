/* . Write a C program to sort a list of elements using the selection sort algorithm. >
According to Wikipedia "In computer science, selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort".
    Note :
a) To find maximum of elements
b) To swap two elements */


function sortElements(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }

    return array
}


module.exports = sortElements