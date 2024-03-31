/* Find the missing letter in the passed letter range and return it
If all letters are present in the range,return undefined 

Exemple: - missingLetters('abce') should return 'd';
        - missingLetters('abcdefghjklmno') should return 'i';
        - missingLetters('abcdefghijklmnopqrstuvwxyz') should return undefined*/

function missingLetters(letters) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < alphabet.length; i++) {
        let found = false;
        for (let j = 0; j < letters.length; j++) {
            if (alphabet[i] === letters[j]) {
                found = true;
            }
        }
        if (!found) {
            return alphabet[i];
        }
    }
    return undefined;
}

module.exports = missingLetters