// setTimeout(()=>{console.log("connect to DB")},1000)
// setTimeout(()=>{console.log("fetch records")},2000)
// setTimeout(()=>{console.log("update records")},3000)
// setTimeout(()=>{console.log("close connection")},4000)

function connectDB() {
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                console.log("connect to db")
                let dbConn =true;
            if(dbConn) resolve("connecton succeded");
            else reject("connection failed");
        },1000)
    })
}


function fetchRecords(){
    return new Promise((resolve)=>{
        setTimeout(()=>{console.log("fetch the records")
            resolve()
        },2000)
    })
}

function updateRecords(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("update the records")
            resolve()
        },3000)
    })
}

function closeConnection(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("close the connection")
            resolve()
        },4000)
    })
}
//connectDB().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)}).finally(()=>{console.log("final cleanup")})
connectDB().then(fetchRecords)
.then(updateRecords)
.then(closeConnection)
.catch((error)=>{console.log(error)})
.finally(()=>console.log("final cleanup"))