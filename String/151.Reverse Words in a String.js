/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 */

// 思路：
// 1.先出去多余的space
// 2. 把整个字符串反转
// 3. 再把每一个word反转
function reverse(strArr, start, end) {
    let left = start;
    let right = end;
    while(left < right) {
        let temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++;
        right--;
    }
    return strArr
}

function removeExtraSpace(strArr) {
    if (strArr.length === 0) {
        return strArr
    }
    let fastIndex = 0;
    let slowIndex = 0;
    while(fastIndex < strArr.length) {
        if (strArr[fastIndex] === " " && (strArr[fastIndex - 1] === " " || fastIndex === 0)) {
            fastIndex++
        } else {
            strArr[slowIndex] = strArr[fastIndex];
            slowIndex++;
            fastIndex++;
        }
    }
    strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex -1 : slowIndex
}


function reversWordsInAString(s) {
    const strArr = s.split("");
    removeExtraSpace(strArr)
    reverse(strArr, 0, strArr.length-1);
    let start = 0;
    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
            reverse(strArr, start, i - 1);
            start = i + 1;
        }
    }
    return strArr.join('')
}

