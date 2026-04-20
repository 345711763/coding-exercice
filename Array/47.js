/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10
 */
function dfs(nums, map, now, ans) {
    if (nums.length === now.length) {
        ans.push([...now]);
        return
    }
    for (const num of map.keys()) {
        if (map.get(num) === 0) {
            continue;
        }
        map.set(num, map.get(num) - 1);
        now.push(num);
        dfs(nums, map, now, ans);
        now.pop();
        map.set(num, map.get(num) + 1);
    }

}
var permuteUnique = function(nums) {
    const map = new Map();
    nums.forEach((num) => {
        if (map.get(num) === undefined) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }) 
    const ans = [];
    dfs(nums, map, [], ans);
    return ans;
};

console.log(permuteUnique([1,1,2])); // [[1,1,2],[1,2,1],[2,1,1]]