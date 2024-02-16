/* 39. Write a program to rotate an array by N positions.
Expected Output:
The given array is: 0 3 6 9 12 14 18 20 22 25 27
From 4th position the values of the array are: 12 14 18 20 22 25 27
Before 4th position the values of the array are: 0 3 6 9
After rotating from 4th position the array is:
12 14 18 20 22 25 27 0 3 6 9 */

function rotateArrayByNposition(array, position) {
    let arrayRotated = []
    let length = array.length

    for (let i = 0; i < array.length; i++) {

        let newIndex = (i - position + length) % length

        arrayRotated[newIndex] = array[i]
    }
    return arrayRotated
}

module.exports = rotateArrayByNposition