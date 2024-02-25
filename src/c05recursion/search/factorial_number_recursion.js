/* 10. Write a program to find the Factorial of a number using recursion. >
    Test Data:
Input a number: 5
Expected Output:

The Factorial of 5 is: 120 */

function findFactorialNumber(number) {

    if (number == 1) {
        return 1
    } else {
        return (number * findFactorialNumber(number - 1))
    }
}

module.exports = findFactorialNumber