//------ITERATOR--------
// "FOR OF"
// DIFFERENCE BETWEEN FOR EACH AND THIS IS 
// IT DOESN'T REQUIRE CALLBACK

//----------------------------------------------------------------------
 let countryArray = ['Nepal', 'China', 'USA'];
 // 'of' IS ONLY USED IN THE CASE OF ARRAY 
 for (let country of countryArray){
     console.log("country : " +country);
 }
 //---------------------------------------------------------------------
 let object = {
     name: 'pencil',
     price: 10,
     amount: 3
 }
 // "in" IS USED FOR OBJECTS 
 for (let obj in object){
     console.log(+object[obj]);
 }
 //-------OBJECT---------
 // OBJECT IS AN GLOBALLY AVAILABLE CLASS WHICH CAN BE USED
 // "Object" MAKES AN ARRAY OF THE VALUES AND KEYS IN AN OBJECT
 // 1. KEYS 
 // 2/ VALUES
 console.log(Object.keys(object));
 console.log(Object.values(object));
 //----------------------------------------------------------------------
 