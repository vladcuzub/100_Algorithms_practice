/* Write a  program to find the position of a target value within a sorted array using binary search.*/

function findPositionTarget(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === array[middleIndex]) {
            return middleIndex
        }

        if (target < array[middleIndex]) {
            rightIndex = middleIndex - 1

        } else {
            leftIndex = middleIndex + 1
        }
    }

    return - 1
}

module.exports = findPositionTarget