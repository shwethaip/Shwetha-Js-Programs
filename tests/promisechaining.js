function num(m) {
    return new Promise((resolve, reject) => {
        resolve(m);

    })
}
function double(n) {
    return new Promise((resolve, reject) => {
        resolve(n*2)
    })
}
num(2).then(double).then((res)=>{console.log(res)})
num(2).then((res)=>{return double(res)}).then((fin)=>console.log(fin))

