var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    const set = new Set(nums);
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i-1])) {
            let up = 1;
            while(set.has(nums[i] + up)) {
                up++
            }
            result = Math.max(up, result)
        }
    }
    return result;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))