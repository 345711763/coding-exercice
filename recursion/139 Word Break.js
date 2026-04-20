/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//     // backtracking + cache
//     const cache = new Set();
//     function backtrack(str) {
//         if(str === '') return true;
//         if (cache.has(str)) return false;
//         let result = false;
//         for (const word of wordDict) {
//             if (!str.startsWith(word)) continue;
//             result = backtrack(str.slice(word.length))
//             if (result) {
//                 return true;
//             }
//         }
//         cache.add(str)
//         return false;
//     }
//     return backtrack(s);
// };

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    // one dimension DP
    const dp = new Array(s.length).fill(false);
    dp[0] = wordSet.has(s[0]);
    for (let i = 1; i < s.length; i++) {
        if (wordSet.has(s.slice(0, i + 1))) {
            dp[i] = true;
        } else {
            for (let j = 0; j < i; j++) {
                if (dp[j] && wordSet.has(s.slice(j + 1, i + 1))) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[s.length - 1]
}

console.log(wordBreak("leetcode", ['leet', 'code']))