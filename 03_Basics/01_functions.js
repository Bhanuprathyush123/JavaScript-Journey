// Functions
/* Syntax
     function name(parameters) {
       code goes here
     }
 */

function myName(yourName) {
  console.log(`Your Name is : ${yourName}`);
}

// function call => we need to pass arguments when we decalre a parameter
// myName("Prathyush");

// Silly mistake while calling the function is that not using () which makes it calling a Reference
/* Difference b/w function call and reference call */

function addingNumbers(number1,number2) {
     console.log(number1 + number2);
}

addingNumbers(3, "4") // 34
addingNumbers(3, "a") // 3a
// function call example : addingNumbers(arguments)

// lets write the function In a different way

function addTwoNums(num1,num2) {
     return num1 + num2;
}

let result = addTwoNums(3, 2) // 5
console.log(result);

function isUserLoggedIn(userName = "Anji") {
     // if else
     if (!userName) { console.log(`Please Mention Your Name`); }
     else return `${userName} Just Logged In`;
}
console.log(isUserLoggedIn()); // Ram Just Logged In : Anji Just Logged In

console.log(isUserLoggedIn("Shiva")); // Shiva Just Logged In
/* What If user Not mentioned the name than you can run if else and Error manipulation
 Or you can Define a name like shown above so that there will be no error occurance
*/ 