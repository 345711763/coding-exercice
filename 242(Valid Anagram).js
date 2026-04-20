/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        arr[index]++
    }
    for (let i = 0; i < t.length; i++) {
        const index = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
        arr[index]--
    }
    console.log(arr)
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] !== 0) {
            return false;
        }
    }
    return true
};

isAnagram('anagram', 'nagaram')