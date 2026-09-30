// let arr =[ 10, 20, 10, 20, 30]
// let unique=[]
// console.log(unique)
// for(let a of arr)
// {
//     if(!unique.includes(a)) unique.push(a)
// }
// console.log(unique)


let str = "gagana"
for(let i=0 ; i<=str.length-1 ; i++)
{
    let visited = false;
    for(let j=i+1; j<=str.length-1 ; j++ )
    {
    if(str[i]===str[j]) visited = true;
    }
    if(visited) continue;
     let count =0;  
    for(k=0;k<=str.length-1; k++)
    {
           if(str[i]===str[k])  count++
   
    }
     console.log(str[i]+" : "+ count)
}

