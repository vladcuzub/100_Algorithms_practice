// Write a C program to read a password until it is valid. For wrong password print "Incorrect password" and for correct password print, "Correct password" and quit the program. The correct password is 1234.
// Test Data :
// Input the password: 1234
// Expected Output:
// Correct password


const password = 1234;

const checkpassword = (userInput) =>{
    if(userInput === password){
        return console.log('Correct password')
    } else {
        console.log('Incorrect password')
    }
}

checkpassword(1234)