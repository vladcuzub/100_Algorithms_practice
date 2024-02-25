/* 3. Write a program to print the Fibonacci Series using recursion. >
Test Data :
Input number of terms for the Series (< 20) : 10
Expected Output:

 Input number of terms for the Series (< 20) : 10                                
 The Series are :                                                                
 1  1  2  3  5  8  13  21  34  55  */


function fibonacci(number) {

    if (number <= 0) {
        return 0
    } else if (number === 1) {
        return 1
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2)
    }
}
function addSeriesToArray(number) {
    let array = []
    for (let i = 0; i < number; i++) {
        array[i] = fibonacci(i + 1)
    }
    return array
}

module.exports = addSeriesToArray