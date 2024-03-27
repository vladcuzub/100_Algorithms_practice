/* Given a set of non-overlapping intervals and a new interval, insert the interval at correct position. If the insertion results in overlapping intervals, then merge the overlapping intervals. Assume that the set of non-overlapping intervals is sorted on the basis of start time, to find the correct position of insertion.

Input: Set : [1, 3], [6, 9]
New Interval : [2, 5]
Output: [1, 5], [6, 9]
*/

function insertInterval(array, newInterval) {
    let intervalResult = []

    for (let i = 0; i < array.length && array[i][1] < newInterval[0]; i++) {

        intervalResult[intervalResult.length] = newInterval[i]


    }

    return intervalResult
}
console.log(insertInterval([[1, 3], [6, 9]], [2, 5]))

module.exports = insertInterval