//  Write a program in C to insert the values in the array(sorted list).
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


const addElementsInArray = () => {
    let array = [];
    let numberElements = prompt('Input the size of array:');

    if (!numberElements || isNaN(numberElements)) {
        alert("You must enter a valid number of elements");
        return array;
    }

    for (let i = 0; i < numberElements; i++) {
        let inputValue = parseInt(prompt(`Input ${i + 1} elements in the array in ascending order:`));


        if (!isNaN(inputValue)) {
            array.push(inputValue);
        } else {
            alert("Invalid input. Please enter a valid number.");
            return array;
        }
    }

    console.log(`The existing array list is: ${array}`);
    return array;
}

const addNewElementToArray = (array) => {
    let newValue = parseInt(prompt(`Input the value to be inserted: `));


    if (!isNaN(newValue)) {
    let index = 0;

        while (index < array.length && array[index] < newValue) {
        index++;
        }
        array.splice(index, 0, newValue);

        console.log(`After Insert the list is: ${array}`);
        return array;
    } else {
        alert("Invalid input. Please enter a valid number.");
        return array;
    }
}

const sortArray = (array) => {
    return array.sort((a, b) => {
        return a - b;
    });
}

const sortedArray = () => {
    const array = addElementsInArray();
    const sorted = sortArray(array);
    const newArray = addNewElementToArray(sorted);
}

sortedArray();
