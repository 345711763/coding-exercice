/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const stack = [];
    const arr = preorder.split(",");
    for (const char of arr) {
        stack.push(char);
        if (char === '#') {
            while(stack.length >=3 && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push('#')
            }
        }
    }
    return stack[0] === '#';
};