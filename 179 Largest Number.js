/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const path = [];
    let result = '';
    const used = new Array(nums.length).fill(false);
    function backtrack() {
        // if (path[0] === 0) {
        //     return;
        // }
        if (path.length === nums.length) {
            const value = path.join("")
            if (result === '') {
                result = value
            } else {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] > result[i]) {
                        result = value
                        break;
                    } else if (value[i] < result[i]) {
                        break;
                    }
                }
            }
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            path.push(nums[i]);
            used[i] = true
            backtrack()
            used[i] = false;
            path.pop()
        }
    }
    backtrack();
    return result;
};

console.log(largestNumber([9,6,3,0,7,4,1,8,5,2]))