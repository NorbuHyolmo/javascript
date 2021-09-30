//------SET-TIMEOUT-------
// USED TO SET TIME TO THE EXECUTE THE FUNCTION IN SPECIFIED AMOUNT OF TIME 
// IT TAKES THE TIME IN MILLISECONDS ONLY 
// YOU CAN MAKE AN CALLBACK OR USE CALLBACK FUNCTION INSIDE SET TIMEOUT 

const print= ()=> {
    console.log("Hiiii");

};
setTimeout(print,2000);

//-----OR--------

setTimeout(() => {
    console.log("what\'s up bitch");   
}, 5000);
//--------------------------------------------------------------------------------
//------SET-INTERVAL--------
// SET INTERVAL IS KINDA LIKE A LOOP
// IT KEEPS ON CONTINUING UNTIL IT IS STOPPED WITHIN THAT TIME INTERVAL

let counter = 0;
setInterval(() => {
    console.log("counter : " +counter);
    counter++;
}, 2000);
//---------------------------------------------------------------------------------