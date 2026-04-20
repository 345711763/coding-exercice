function canPartition(nums) {
    const result = []
    const path = [];
    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    function backtrack(index, current) {
        if (index >= nums.length) {
            if (current === sum / 2) {
                result.push([...path]);
            }
            return;
        }
        // 不放的情况
        backtrack(index+1, current);
        // 放的情况
        current += nums[index];
        if (current > sum / 2) return;
        path.push(nums[index]);
        backtrack(index+1, current);
        path.pop();

    }
    backtrack(0, 0);
    return result;
}

console.log(canPartition([1,5,11,5]))