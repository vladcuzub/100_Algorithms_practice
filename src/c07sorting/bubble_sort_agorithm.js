/* 2. Write a C program to sort a list of elements using the bubble sort algorithm. >
Bubble Sort works by swapping adjacent elements if they are in the wrong order.*/

function bubbleSort(array) {

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length ; j++) {

            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

    }

    return array
}

module.exports = bubbleSort