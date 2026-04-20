/*
Given an array nums of distinct integers, return all the possible
permutations
. You can return the answer in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]


Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
 */
// function dfs(nums, now, picked, ans) {
//     if (picked.length === nums.length) {
//         ans.push([...now]);
//         return;
//     }
//     for(let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (picked[i]) continue;
//         now.push(num);
//         picked[i] = true;
//         dfs(nums, now, picked, ans);
//         now.pop();
//         picked[i] = false;
//     }
// }
// const permute = function(nums) {
//     const ans = [];
//     dfs(nums, [], Array(nums.length).fill(false), ans);
//     return ans;
// };


function dfs(p, results, nums, current) {
    if (current.length === nums.length) {
        results.push([...current])
        return
    }
    for(let i = 0; i <nums.length; i++) {
        if (p.has(nums[i])) {
            continue
        }
        current.push(nums[i])
        p.add(nums[i])
        dfs(p, results, nums, current)
        p.delete(nums[i])
        current.pop()
    }
}

function permute(nums) {
    const results = []
    dfs(new Set([]), results, nums, [])
    return results;
}
console.log(permute([1,2,3]));