// Write a C program to read a password until it is valid. For wrong password print "Incorrect password" and for correct password print, "Correct password" and quit the program. The correct password is 1234.
// Test Data :
// Input the password: 1234
// Expected Output:
// Correct password

//input data
//varianta 1
let password = "1234";

//varianta 2
//let password = document.getElementById('textbox_id').value

//varianta 3
//let password;//API call



//algoritm - aplica o logica asupra datelor de input si returneaza un output
function isPasswordCorrect(userInput, password) {
    let result;
    if (userInput === password) {
        result = 'Correct password';
    } else {
        result = 'Incorrect password';
    }
    return result;
}


function checkPassword(){
    //input data
    let userInput = document.getElementById('password').value;

    //algorithm
    let passwordCorrect = isPasswordCorrect(userInput, password);

    //do something with output data
    document.getElementById('message').textContent  = passwordCorrect;
}
