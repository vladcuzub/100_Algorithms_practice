/* 44. Write a program to find the two repeating elements in a given array.
Expected Output:
The given array is: 2 7 4 7 8 3 4
The repeating elements are: 7 4 */


function find2RepetElement(array) {
    let repeatedElements = []
    let index = 0

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                repeatedElements[index] = array[i]
                index++
                break
            }
        }
    }
    return repeatedElements
}


module.exports = find2RepetElement