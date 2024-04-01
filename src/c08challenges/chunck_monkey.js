/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/


function chunkyArrayInGroups(arr, size) {

    let newArray = []
    let index = 0;

    for (let i = 0; i < arr.length; i += size) {
        let chunk = []

        for (let j = 0; j < size && i + j < arr.length; j++) {
            chunk[j] = arr[i + j];
        }
        newArray[index++] = chunk;
    }

    return newArray
}

module.exports = chunkyArrayInGroups