const users = [
  {
      id : 1,
      name : 'John'
  },
  {
      id : 2,
      name : 'Sara'
  },
  {
    id: 3,
    name: 'Bob'
  },
];


const getUserById = (id) =>{
  return new Promise((resolve, reject) => {
  const result = users.find((user, index)=>{
    return user.id === id;
  });
  resolve(result);
  });
}

const updateName = (user, name) =>{
  return new Promise((resolve,reject)=>{
    if (!user) {
      reject('user cannot be empty');
    }else{
      user.name = name;
      resolve(user);
    };
  });
};

getUserById(1)
.then((user)=>{
  console.log("before change: " ,user)
return updateName(user,"Ram");
})
.then((user)=>{
  console.log("after change :" ,user);

})
.catch((error)=>{
  console.log("Error : ", error);
});

  //ASYNC AND AWAIT FUNCTION 
  // A FUNCTION SHOULD BE AN ASYNC TO FUNCTION 
  // TO BE CALLED WITH AWAIT 
  // FOR E.G 
  const updateUser = async(id, name) =>{
    const user = await getUserById(id);
    console.log(user);
} 
updateUser(1, "hari");
