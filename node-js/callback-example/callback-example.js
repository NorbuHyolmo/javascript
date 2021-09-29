//-----CALLBACK --------
// when we pass function into function, then it is callback
// below we passed input value to result 
// then into callback, which stored all the info
// then called the function to make it to desired case

const makeStringUpperCase = (string) => {
    return string.toUpperCase();
}

const makeStringLowerCase = (string) => {
    return string.toLowerCase();
}

const userInput = (input, callback) => {
    let result = "Hello " + input;
    return callback(result);
}

console.log(userInput("IIMS", makeStringLowerCase));
console.log(userInput("IIMS", makeStringUpperCase));

//----------------------------------------------------------------------

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const callbackExample = (a, b ,mathCallback) => {
       console.log(mathCallback(a,b));

}
callbackExample(2 , 2 , add);
callbackExample(2 , 2 , subtract);
callbackExample(2 , 2 , multiply);

//-----------------------------------------------------------------------
//  ------OPERATORS---------
let a = "1"; 
let b = 2;
//parse int is use to convert String to int.
//just like .toString in java
console.log(parseInt(a) + b);

//b+=b and b= b + b is the same
console.log(b+=b);

// "===" 3 equls sign checks both value and datatype

if(parseInt(a) != b){
    console.log("true");
}else{
    console.log("false");
}

//ternary operator : ?
//kinda works like if statement/ short form of if statement
//used on conditional statement
console.log(1==="1" ? "this statment is true" : "this statement is false");

//-----------------------------------------------------------------------------

