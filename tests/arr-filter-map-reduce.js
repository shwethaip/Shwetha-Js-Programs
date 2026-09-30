let arr = [100, 2, 44, 5, 67]

//even num arr -->multiply each value by 3 and sum the arr

let arr1 =arr.filter(a=>a%2===0).map(a=>a*3).reduce((sum,a) => sum+a ,0 )
console.log(arr1);
//////////////////////////////
console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))
