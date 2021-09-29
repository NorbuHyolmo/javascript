
//console.log is a method used to log a message to js console

//ARRAYS
//simple array
//in javascript, we can store different datatypes unlike java
//. shows the available properties of an object
//e.g selectedColor.length where length one of the properties

let selectedColors =['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 3;
selectedColors[5] = 'john';
console.log(selectedColors.length);

//or select the data of particular array
console.log(selectedColors[2]);

//FUNCTIONS 

//--function is a set of statement that either performs a task
// or calculates a value---

// this is how you create a function in js
//a function can have multiple parameters
// name is the parameter to pass an argument
function greet(name, lastName){
    console.log('Welcome to '+name + lastName + ' console');
}

//calling the function
//javascript is the argument 
//argument is the value that we pass 
//and parameter is the declaration of 
greet('best ', 'Javascript');
greet('John ', 'Heckins');

//TYPE OF FUNCIONS 
//calculating a value function 

function square(number){
    return number + number;
}
console.log(square(2));






