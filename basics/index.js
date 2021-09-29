        // this is my first java script code!
        //html is the content and javascript is the behavious
        console.log('Hello World');


        //VARIABLES

        //let keyword to declare a variable
        //rules
        //keyword cannot be a reserved keyword e.g: if int etc
        //should be meaningful
        //cannot start with numbers (1name/2name)
        //cannot contain a space or hyphen (-)
        //are case sensitive

        let name = 'Norbu';
        console.log(name);
        //or 
        let firstName = 'Norbu' , lastName  ='Lama';
        console.log(firstName,lastName);


        //CONSTANTS
        //sometime we don't want the value of a variable to change
        //we cannot re-assign constant
        const interestRate = 0.3;
        console.log(interestRate);

        //if we want the value to change value, we use let
        let intRate = 0.3;
        intRate = 1;
        console.log(intRate);


        //PRIMITIVE TYPES
        let Name = "Norbu";         //String Literal
        let age = 30;               //Number Literal
        let isApproved = true;      //Boolean Literal
        let FirstName = undefined; 
        let selectedColor = null;   //to clear the value

        //all type of numbers are numbers either float, int

        //REFERENCE TYPES 
        //1. OBJECTS
        //person is the object 
        // the value inside are the properties
        // '.' shows the properties of an object
        let person = {
            name: 'saeroyi',
            age: 32
            };
        //Dot notation
        //to access the particular property
        //it is simple one
        person.name = "Not Norbu";
        console.log(person.name);

        //Bracket notation
        person['name'] = "Yes Norbu";

        //sometime we don't know the name of the target property
        //sometime the user might choose a different property 
        //for e.g
        let selection = 'name';
        person['selection'] = 'Yes selected Norbu';
        console.log(person.name);



