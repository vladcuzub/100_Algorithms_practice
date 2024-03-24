/* Balanced Parentheses

Write a program to determine if the parentheses (), the brackets [], and the braces {}, in a parenthesesing are balanced.

For example:

{{)(}} is not balanced because ) comes before (

({)} is not balanced because ) is not balanced between {} and similarly the { is not balanced between ()

[({})] is balanced

{}([]) is balanced

{()}[[{}]] is balanced */
function balancedParentheses(parentheses) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let stackPointer = -1;

    const len = parentheses.length;
    for (let i = 0; i < len; i++) {
        const char = parentheses[i];
        if (char === '(' || char === '[' || char === '{') {
            stackPointer++;
            stack[stackPointer] = char;

        } else if (char === ')' || char === ']' || char === '}') {
            if (stackPointer === -1) return false;
            const lastOpeningBracket = stack[stackPointer];
            stackPointer--;
            if (pairs[lastOpeningBracket] !== char) return false;
        }
    }

    return stackPointer === -1;
}
module.exports = balancedParentheses;