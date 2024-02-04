// Write a program to separate odd and even integers into separate arrays.
// Test Data:
// Input the number of elements to be stored in the array: 5
// Input 5 elements in the array:
// element - 0 : 25
// element - 1 : 47
// element - 2 : 42
// element - 3 : 56
// element - 4 : 32
// Expected Output:
// The Even elements are:
// 42 56 32
// The Odd elements are:
// 25 47


function filterOddElements(array) {
    const oddsElements = []
    let oddIndex = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddsElements[oddIndex] = array[i]
            oddIndex++
        }
    }
    return oddsElements
}

function filterEvenElements(array) {
    const evenElements = []
    let evenIndex = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenElements[evenIndex] = array[i]
            evenIndex++
        }
    }
    return evenElements
}



module.exports.filterOddElements = filterOddElements
module.exports.filterEvenElements = filterEvenElements 