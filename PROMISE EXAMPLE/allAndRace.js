//---------PROMISE.ALL-------------------
// IF WE USE BRACES IN THE FUNCTION, 
// WE HAVE TO USE RETURN NEW PROMISE 
const promise1 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Promise 1");
        },5000);
    });
}

// IF WE DON'T USE THE BRACES IN THE FUNCTION 
// WE DON'T HAVE TO USE RETURN IN FROM OF NEW PROMISE
const promise2 = () => 
    new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                KATHMANDU: 2,
                AGE: 3
            });
        },2000);
    });

// PROMISE ALL SHOWS THE VALUE IN AN ARRAY 
// IT WAITS TILL THE MAX SET TIMEOUT AND DISPLAYS AT THE SAME TIME 
// IN PROMISE.ALL IF ANY ONE OF THE PROMISE IS REJECTED
// ALL OF THE PROMISE SHOWS AS ERROR AND EXECUTES CATCH
Promise.all([promise1(), promise2()])
.then((result)=> {
    console.log("Promise all : ",result);
})
.catch(error=>{
    console.log("Error : ",error)
});

//--------PROMISE.RACE-------------------
// PROMISE RACE ONLY SHOWS THE PROMISE THAT EXECUTES AT FIRST
// FOR.EXAMPLE : GOOGLE SEARCH
Promise.race([promise1(), promise2()])
.then((result)=> {
    console.log("Promise all : ",result);
})
.catch(error=>{
    console.log("Error : ",error)
});

//--------------------------------------------------------------------------------
