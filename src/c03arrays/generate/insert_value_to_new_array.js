//  Write a program to insert the values in the array(sorted list).
// Test Data:
// Insert New value in the sorted array:
// -----------------------------------------
//     Input the size of array: 5
// Input 5 elements in the array in ascending order:
// element - 0 : 2
// element - 1 : 5
// element - 2 : 7
// element - 3 : 9
// element - 4 : 11
// Input the value to be inserted: 8
// The exist array list is:
// 2 5 7 9 11
// After Insert the list is:
// 2 5 7 8 9 11


function addNewElementToArray(array, newValue) {

    array[array.length] = newValue

    for (let i = 0; i < array.length - 1; i++) {
        let min_index = i;

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[min_index]) {
                min_index = j;
                console.log(array[j])
            }
        }
        if (min_index !== i) {
            const temp = array[i];
            array[i] = array[min_index];
            array[min_index] = temp;
        }
    }

    return array;
}

module.exports = addNewElementToArray
