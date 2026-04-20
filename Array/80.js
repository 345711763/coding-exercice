/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = new Map() // keep track of how many times the numbers are used
    let k = 0; // the length of the result array
    for (let i = 0; i < nums.length; i++) {
        const count = map.get(nums[i]) || 0
        if (count < 2) {
            map.set(nums[i], count+1)
            nums[k] = nums[i]
            k++
        }
    }
    return k;
};

console.log(removeDuplicates([1,1,1,2,2,3]))