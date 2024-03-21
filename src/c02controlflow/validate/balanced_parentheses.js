/* Balanced Parentheses

Write a program to determine if the parentheses (), the brackets [], and the braces {}, in a string are balanced.

For example:

{{)(}} is not balanced because ) comes before (

({)} is not balanced because ) is not balanced between {} and similarly the { is not balanced between ()

[({})] is balanced

{}([]) is balanced

{()}[[{}]] is balanced */
function balancedParentheses(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const len = str.length;
    for (let i = 0; i < len; i++) {
        const char = str[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);

        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) return false;
            const lastOpeningBracket = stack.pop();
            if (pairs[lastOpeningBracket] !== char) return false;
        }
    }

    return stack.length === 0;
}

module.exports = balancedParentheses