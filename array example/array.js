let exampleArray = [1,2,3,4,5];

    //CHANGING THE VALUE OF THE ARRAY USING INDEX
    exampleArray[2] = "hi";
    console.log(exampleArray);

    // SAME AS "exampleArray[index];"
    console.log(exampleArray[exampleArray.length-2]);

// TO CONNECT TWO ARRAYS OR ANYTHING 
// WE USE SPREAD OPERATOR "..."
let array1 = ['orange', 'mango'];
let array2 = ['banana', 'pineapple'];
    // console.log([array1, array2]);

    // USED TO CONNECT MULTIPLE ARRAYS
    console.log([...array1, ...array2]);


let object1 = {
    name : "norbu",
    age : 20
};

let object2 = {
    address : "boudha",
    college : "IIMS"
};
// PRINTS THE ENTIRE OBJECT
let object3 = {...object1, ...object2};
    console.log(object3);

// ONLY PRINTS THE VALUE OF OBJECT
let{name , age , address, college} = object3;
    console.log(name, age, address, college);

 for(let i = 0; i< 3; i++){
        console.log("|");
    }
//------------------------------------------------------------------------------- 

//------METHODS OF ARRAY-------
// 1.PUSH
// PUSH ADDS THE ELEMENT AT THE LAST
let pushExample = ['apple', 'banana', 'pineapple'];
    console.log("|");
    console.log('ORIGINAL ARRAY');
    console.log(pushExample);
    pushExample.push("orange");
    console.log("|");
    console.log('EXAMPLE OF PUSH - pushed orange at end');
    console.log(pushExample);

// 2. POP
// POP REMOVES THE LAST ELEMENT
    pushExample.pop();
    console.log("|");
    console.log("EXAMPLE OF POP - removed element at end");
    console.log(pushExample);

// 3. SHIFT
// SHIFT REMOVES THE FIRST ELEMENT
    pushExample.shift();
    console.log("|");
    console.log("EXMAPLE OF SHIFT -removed element in the front ");
    console.log(pushExample);

// 4. UNSHIFT
// ADDS THE ELEMENT AT FIRST
    pushExample.unshift('papaya');
    console.log("|");
    console.log('EXAMPLE OF UNSHIFT- added element in the front');
    console.log(pushExample);

// 5.SPLICE 
// ADDS THE ELEMENT IN THE SPECIFIED POSITION 
// FOR E.G THE FIRST '1' ADDS AVA, PEACH IN INDEX 1 
// IF WE DON'T ASSIGN ANY VALUE LIKE AVA, PEACH, IT DOESN'T ADD
// AND THE SECOND '1' IS THE NUMBER OF ELEMENTS TO REMOVE
    console.log("|");
    console.log('EXAMPLE OF SPLICE - adds and removes elements');
    pushExample.splice(1,1, 'avacado', 'peach');
    console.log(pushExample);

// 6. SLICE
// IT TAKES THE INDEX FROM USER AND 
// CREATE A NEW ARRAY OF THAT RANGE OF INDEX
let sliceExample = ['orange', 'mango', 'banana','papaya '];
let newsliceArray = sliceExample.slice(1,3);
console.log("|");
console.log("EXAMPLE OF SLICE - MAKES A NEW ARRAY FROM SLICED PART")
console.log(sliceExample);
console.log(newsliceArray);

//----------------------------------------------------------------------------------

//-------FOREACH LOOP--------
// FOREACH TAKES A CALLBACK
// IT ACCESSES ALL THE ITEMS ONE BY ONE 
// FUNCTION INCLUDES 'FIRST - VALUE ' 'SECOND - INDEX'
sliceExample.forEach((value,index) => {
    console.log('KEY : ' + index);
    console.log('VALUE : ' + value);
});
