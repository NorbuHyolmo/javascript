//------PROMISE-----------
// PROMISE IS AN OBJECT
// PROMISE TAKES A CALLBACK AND PASSES TWO FUNCTION RESOLVE AND REJECT
// IT EITHER RESOLVES OR REJECT 
// 1. PENDING STATE 
// 2. FULFILLED STATE
// 3. REJECTED STATE 
//------------------------------------------------------------------------------
const getPromise = () => {
// USING "PROMISE" KEYWORD 
// PROMISE USES TWO ARGUMENTS (1. RESOLVE AND 2. REJECT)
    // return new Promise((resolve, reject) => {
    //     resolve("Hello World");
    // })

// DIRECT PROMISE RESOLVE AND REJECT
    return Promise.resolve("Direct Resolve");
    // return Promise.reject("Direct Reject");
}
// returning pending promise
console.log(getPromise());

// to resolve 
// passing a callback in then 
// result can be changed to anything 
getPromise().then((result)=>{
    console.log(result);
})


//--------------------------------------------------------------------------------
//--------PRACTICING EXAMPLE--------------------
const practieTomorrow = () => {
    return new Promise((resolve,reject) =>{
        let prom = false;
        if(prom == true){
            resolve("promise kept");
            
        }else{
            reject('promise not kept');
        }
    })
}
practieTomorrow().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
})
//--------------------------------------------------------------------------------
// ANOTHER EXAMPLE
const newMethod =()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("|")
        },1000)
        setTimeout(()=>{
             resolve("hello");
            // reject("--------(^_^)--------");
        }
        ,2000)
    })
}
// THEN IS USED TO RESOLVE THE PROMISE 
// CAN USE MULTIPLE THEN'S
newMethod().then(result=>{
    console.log(result);
    return "what's up";
})
    .then((r)=>{
        console.log("hello : " + r);
    })
    // CATCH IS USED FOR ERROR HANDLING/ REJECT HANDLING
.catch(error=>{
    console.log(error)
    // AFTER ALL THE WORK IS DONE, WE USE FINALLY TO CHECK 
    // IT DOESN'T DO ANY WORK 
    // FINALLY DOESN'T RETURN OR PASS ANY ARGUMENTS
}).finally(() =>{
    console.log("--REQUEST COMPLETED YOUR HONOR--")
    console.log("|")
})
//----------------------------------------------------------------------------------


// null/ undefined = false
// !null/ undefined = true