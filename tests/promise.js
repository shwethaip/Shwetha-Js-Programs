let promise = new Promise((resolve,reject)=>{

    console.log("this is executer function")
    let success=true;
    if(success) resolve("operation suceeded")
        else reject("operation failed")
});

promise.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("cleanup completed")
});
