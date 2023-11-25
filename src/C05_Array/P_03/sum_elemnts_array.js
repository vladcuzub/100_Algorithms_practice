// Write a program in C to find the sum of all elements of the array.
// Test Data :
// Input the number of elements to be stored in the array :3
// Input 3 elements in the array :
// element - 0 : 2
// element - 1 : 5
// element - 2 : 8
// Expected Output :
// Sum of all elements stored in the array is : 15



const inputElements = () => {
    const array = []
    for (let i = 0; i < 3; i++) {
        const elements = parseInt(prompt('Add a element: '))
        array.push(elements)
    }
    return array
}

const calculateElements = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

const main = () => {
    const ArrayElements = inputElements();
    const sumElements = calculateElements(ArrayElements)
    console.log(`Sum of all elements stored in the array is : ${sumElements}`);
}

main()
