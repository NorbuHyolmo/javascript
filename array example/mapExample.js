    //--------MAP-METHOD---------
    // USED TO MANIPULATE AN EXISTING ARRAY TO CREATE A NEW ARRAY
    // MAP MAPS ALL THE EXISTING VALUES IN THE ARRAY
    // 1. DIFFERENCE BETWEEN FOREACH AND MAP IS MAP CREATES A NEW ARRAY
    // 2. MAP REQUIRES A RETURN 

//---------------------------------------------------------------------------------
let numbers  = [1,2,3,4,5];
let newNum = numbers.map((value,index)=>{
    return "key : " +index;
})
console.log(numbers);
console.log(newNum);

//----------------------------------------------------------------------------------
//-------ANOTHER EXAMPLE-----------
let name = ['norbu', 'paupaya'];
let upperCase = name.map((value,index)=>{
    return value.toUpperCase();
})
console.log(upperCase);

//-----------------------------------------------------------------------------------
//-----------FILTER-METHOD----------------
let ageArray = [15,20,45,25];
let aboveTwenty = ageArray.filter((age)=> {
    //it returns boolean
    return age > 20;
});
console.log(aboveTwenty);

//----------------------------------------------------------------------------------
//DELETING IN AN OBJECT
let person = {
    name : "sam",
    address : 'boudha',
    age: 24
}
delete person.age;
console.log(person);
//-----------------------------------------------------------------------------------