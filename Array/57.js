/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function mergeInterval(a,b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
}
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
    const ans = []
    let hasMerged = false;
    for (let i = 0; i < intervals.length; i++) {
        if (hasMerged) {
            ans.push(intervals[i])
            continue;
        }
        if (newInterval[1] < intervals[i][0]) {
            ans.push(newInterval)
            ans.push(intervals[i])
            hasMerged = true
            continue;
        }
        if (newInterval[0] > intervals[i][1]) {
            ans.push(intervals[i])
            continue;
        }
        newInterval = mergeInterval(newInterval, intervals[i])
    }
    if (!hasMerged) {
        ans.push(newInterval)
    }
    return ans;
};

console.log(insert([[1,5]], [2,3]))