/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. 


Exemples: - translatePigLatin("california") should return the string aliforniacay.
          - translatePigLatin("paragraphs") should return the string aragraphspay.
         - translatePigLatin("algorithm") should return the string algorithmway.*/

function isVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {
        if (char === vowels[i]) {
            return true
        }
    }
    return false
}

function translatePigLatin(word) {

    if (isVowel(word[0])) {
        return word + 'way';
    } else {
        let consonantCluster = '';
        let i = 0;
        while (i < word.length && !isVowel(word[i])) {
            consonantCluster += word[i];
            i++;
        }
        let restOfWord = '';
        for (let j = consonantCluster.length; j < word.length; j++) {
            restOfWord += word[j];
        }
        return restOfWord + consonantCluster + 'ay';
    }
}
module.exports = translatePigLatin