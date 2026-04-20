function helper(nums, res, target, temp, start) {
    if(target < 0) return;
    if(target === 0) {
        res.push([...temp])
        return
    }
    for (let i = start; i < nums.length; i++) {
        temp.push(nums[i])
        helper(nums, res, target - nums[i], temp, i);
        temp.pop()
    }
}

var combinationSum = function(candidates, target) {
    const ans = []
    helper(candidates, ans, target, [], 0)
    return ans
};

console.log(combinationSum([2,3,5], 8))