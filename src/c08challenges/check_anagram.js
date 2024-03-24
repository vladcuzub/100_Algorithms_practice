/* Write a program to check whether two given strings are an anagram */

function convertStringToArray(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array[i] = string[i];
    }
    return array;
}

function bubbleSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {

                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function checkAnagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    }

    let firstWordArray = convertStringToArray(firstWord);
    let secondWordArray = convertStringToArray(secondWord);

    firstWordArray = bubbleSort(firstWordArray);
    secondWordArray = bubbleSort(secondWordArray);

    for (let i = 0; i < firstWordArray.length; i++) {
        if (firstWordArray[i] !== secondWordArray[i]) {
            return false;
        }
    }
    return true;
}

module.exports = checkAnagram