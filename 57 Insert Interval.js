/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Note that you don't need to modify intervals in-place. You can make a new array and return it.
 *
 *
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * Example 2:
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// var insert = function(intervals, newInterval) {
//     const result = []
//     for (let i = 0; i < intervals.length; i++) {
//         if (newInterval[0] > intervals[i][1]) {
//             // 起点比终点大，no overlap， 加入结果数组
//             result.push(intervals[i]);
//         } else if (newInterval[1] < intervals[i][0]) {
//             // 终点比起点小，no overlap
//             result.push(newInterval);
//             return [...result, ...intervals.slice(i)]
//         } else {
//             newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
//         }
//     }
//     result.push(newInterval);
//     return result;
//
// };
var insert = function(intervals, newInterval) {
    const res = [];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            res.push(intervals[i])
        } else if (intervals[i][0] > newInterval[1]) {
            res.push(newInterval);
            return [...res, ...intervals.slice(i)]
        } else {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        }
    }
    return res;
};

console.log(insert([[1,3],[6,9]], [2,5]))