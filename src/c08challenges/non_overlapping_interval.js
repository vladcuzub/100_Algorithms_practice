/* Given a set of non-overlapping intervals and a new interval, insert the interval at correct position. If the insertion results in overlapping intervals, then merge the overlapping intervals. Assume that the set of non-overlapping intervals is sorted on the basis of start time, to find the correct position of insertion.

Input: Set : [1, 3], [6, 9]
New Interval : [2, 5]
Output: [1, 5], [6, 9]
*/
function insertInterval(array, newInterval) {
    let intervalResult = []
    let i = 0;

    while (i < array.length && array[i][1] < newInterval[0]) {
        intervalResult[intervalResult.length] = array[i];
        i++;
    }

    while (i < array.length && array[i][0] <= newInterval[1]) {
        if (array[i][0] < newInterval[0]) {
            newInterval[0] = array[i][0];
        }
        if (array[i][1] > newInterval[1]) {
            newInterval[1] = array[i][1];
        }
        i++;
    }

    intervalResult[intervalResult.length] = newInterval;

    while (i < array.length) {
        intervalResult[intervalResult.length] = array[i];
        i++;
    }

    return intervalResult;
}


module.exports = insertInterval