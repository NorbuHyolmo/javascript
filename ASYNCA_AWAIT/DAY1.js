//ASYNC 
// ASYNC FUNCTION ALWAYS RETURNS A VALUE
// IT MAKES SURE THAT A PROMISE IS RETURNED
const users = [
{
    id : 1,
    name : 'John'
},
{
    id : 2,
    name : 'Sara'
},
]


const getUserById = (id) =>{
//finding user using 'filter'
//this returns the array 
    // const newUserArray = userDetail.filter((user,index) => {
    //     return user.id === id});

//finding user using 'find'
//'find' displays the first data it matches the search
    const result = users.find((user,index) =>{
        return user.id === id;
    });
    return result;
}

    const updateName = (id, name) =>{
        const user = getUserById(id);
        console.log('before change :', user);
        if (user) {
            user.name = name;
            console.log('after change: ', user);
        }
    }
//finding user by 'for of'
//this returns the data 

    // let foundUser = null;
    // for(const user of userDetail) {
    //     if(user.id === id){
    //         foundUser = user
    //     }
    // }
    // console.log(foundUser);
    // console.log(newUserArray);

    updateName(1, "Shyam");


// ANONYMOUS FUNCTION 
// CALL THE FUNCTION WITHOUT ANY NAME 
(function(){
    console.log("hello world");
  }) ();
  
  // ((PARAMETER OF THE FUNCTION)=>{
  //   console.log("hello");
  // }) (CALLING THE FUNCTION);


