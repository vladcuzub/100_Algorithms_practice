// Write a program to find a pair with given sum in the array.
// Expected Output:
// The given array: 6 8 4 - 5 7 9
// The given sum: 15
// Pair of elements can make the given sum by the value of index 0 and 5

function findPair(array, sum) {
    let resultIndex = []

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == sum) {
                resultIndex = [i, j]
                return resultIndex
            }
        }
    }
    return resultIndex
}

module.exports = findPair