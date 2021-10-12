const { Console } = require('console');
const { get } = require('request');

const getApi1 = () => {
    return new Promise((resolve, reject)=>{
        var request = require('request');
        request(
            "https://reqres.in/api/users",
            (error, response, body)=> {
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "data": 
                          {
                            "id": 1,
                            "email": "george.bluth@reqres.in",
                            "first_name": "George",
                            "last_name": "Bluth",
                            "avatar": "https://reqres.in/img/faces/1-image.jpg"
                          }
                    })
                }
            })
    })
}
const getApi2 = () => {
    return new Promise((resolve, reject)=>{
        var request = require('request');
        request(
            "https://reqres.in/api/users",
            (error, response, body)=> {
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "data": 
                          {
                            "id": 2,
                            "email": "janet.weaver@reqres.in",
                            "first_name": "Janet",
                            "last_name": "Weaver",
                            "avatar": "https://reqres.in/img/faces/2-image.jpg"
                          }
                    })
                }
            })
    })
}
const getApi3 = () => {
    return new Promise((resolve, reject)=>{
        var request = require('request');
        request(
            "https://reqres.in/api/users",
            (error, response, body)=> {
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "data": 
                          {
                            "id": 3,
                            "email": "emma.wong@reqres.in",
                            "first_name": "Emma",
                            "last_name": "Wong",
                            "avatar": "https://reqres.in/img/faces/3-image.jpg"
                          }
                    })
                }
            })
    })
}
//------PROMISE.ALL--------------------
Promise.all([getApi1(),getApi2(),getApi3()])
.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
});

//-------PROMISE.RACE-----------
console.log("---------------------------");
console.log("THIS IS PROMISE.RACE RESULT");
console.log("----------------------------");
Promise.race([getApi1(),getApi2(),getApi3()])
.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
});

//-------------PROMISE WITH THEN-----------------
getApi1().then((result)=>{
    console.log(result);
    return getApi2();
})
.then((result)=>{
    console.log(result);
    return getApi3();
})
.then((result)=>{
    console.log(result);
})
.catch(error=>console.log(error));


