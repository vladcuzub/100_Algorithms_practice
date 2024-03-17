/*Write a  program to find the length of the longest substring of a given string without repeating characters.*/

function findLengthSubsting(string) {

    let maxLength = 0;
    let start = 0;
    const charMap = {}

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i]

        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1
        }
        charMap[currentChar] = i;
        const currentLength = i - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;

        }
    }

    return maxLength;
}

module.exports = findLengthSubsting


