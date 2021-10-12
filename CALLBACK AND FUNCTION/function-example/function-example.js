// //normal function
// function exampleFunction(firstName, lastName){
//     return firstName + "," + lastName;

// }

// //const is used to declare variable that cannot be changed
// //below is the arrow function
// //simply declare a constant with parameters
// //arrow function doesn't need a body

// // const getFullName = (firstname, lastname) => {
// //     return firstname +", " + lastname;
// // }

// //or 
// const getFullName = (firstname, lastname) => firstname.toUpperCase() + " " +lastname;

// //let is used for variable delaration like int, var
// let f = exampleFunction("norbu", "lama");
// console.log(f);
// console.log(getFullName("hello", "world"));
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------


//---OBJECT---
let person = {
    firstName: "norbu",
    lastName: "lama",
    age: 20,
    carprice: 3000,
    getFullName: function(){
            return this.firstName+ " " + this.lastName;      
    },
    getAge: function (){
        return this.age;
    },
    getPriceWithVat: function(){
        return ((13/100 * this.carprice) + this.carprice);
    }
}

console.log(person.getFullName());
console.log(person.getAge());
console.log(person.getPriceWithVat());




