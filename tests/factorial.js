
function factorial(n)
{
    if(n<0) return undefined;
    if(n===0 ||n===1) return 1;
    if(n>1) return n*factorial (n-1);
}

// function factorial(n)
// {
//     if(n<0) return undefined;
//     else if(n===0 || n===1) return 1;
//     else { let result =1;
//         for(let i=2 ; i<=n ; i++)
//         {
//            result*=i;
//         }
//         return result
//     }
    
// }

console.log(factorial(-1))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
