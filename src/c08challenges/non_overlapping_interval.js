/* Given a set of non-overlapping intervals and a new interval, insert the interval at correct position. If the insertion results in overlapping intervals, then merge the overlapping intervals. Assume that the set of non-overlapping intervals is sorted on the basis of start time, to find the correct position of insertion.

Input: Set : [1, 3], [6, 9]
New Interval : [2, 5]
Output: [1, 5], [6, 9]
*/
function insertInterval(intervals, newInterval) {
    let intervalResult = []
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        intervalResult[intervalResult.length] = intervals[i];
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        if (intervals[i][0] < newInterval[0]) {
            newInterval[0] = intervals[i][0];
        }
        if (intervals[i][1] > newInterval[1]) {
            newInterval[1] = intervals[i][1];
        }
        i++;
    }

    intervalResult[intervalResult.length] = newInterval;

    while (i < intervals.length) {
        intervalResult[intervalResult.length] = intervals[i];
        i++;
    }

    return intervalResult;
}


module.exports = insertInterval