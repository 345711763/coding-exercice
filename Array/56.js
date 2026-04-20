/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 1) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0])
    const ans = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        let last = ans[ans.length-1];
        if (current[0] > ans[ans.length-1][1]) {
            ans.push(current)
            continue
        }
        ans[ans.length-1] = ([last[0], Math.max(last[1], current[1])])
    }
    return ans

};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))