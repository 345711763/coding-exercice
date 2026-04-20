/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const hash = {
        0: 1
    }
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (hash[sum - k]) {
            count += hash[sum - k]
        }
        hash[sum] = (hash[sum] || 0) + 1
    }
    return count;
};

subarraySum([1, -1, 0], 0)