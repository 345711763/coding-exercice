/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let sum = nums[0]
    if (sum >= target) {
        return 1;
    }
    let result = Infinity;
    while(right < nums.length) {
        if (sum < target) {
            right++;
            sum += nums[right]
        } else {
            result = Math.min(result, right - left + 1)
            sum -= nums[left]
            left++;
        }
    }
    return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen(4, [1,4,4]))