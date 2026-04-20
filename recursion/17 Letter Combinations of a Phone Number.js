/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.




Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = "2"
Output: ["a","b","c"]

 */
var letterCombinations = function(digits) {
    const letterMap = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w','x','y', 'z']]
    ]);
    const results = [];
    const path = [];
    const digitArr = digits.split('');
    function backtrack(index) {
        if (path.length === digitArr.length) {
            results.push([...path].join(''));
            return;
        }
        const current = digitArr[index];
        const possibilities = letterMap.get(current);
        for (let j = 0; j < possibilities.length; j++) {
            path.push(possibilities[j]);
            backtrack(index+1);
            path.pop();
        }
    }
    backtrack(0);
    return results;
};

console.log(letterCombinations('23'))