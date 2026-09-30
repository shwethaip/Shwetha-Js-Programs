// //multiplication tables
// let n= 5;
// for(let i=1; i<=10; i++)
// {
//  console.log(n + "x" +i+ "=" + n*i)  
// }

// //digits of a num
// let num=12345;

// while(num>0)
// {
//     console.log(num%10);
//     num=Math.floor(num/10)
// }

// //Input:   output: 1, 2, 4, 8 --   /2**i
// power =5
// for(let i=0;i<power;i++)
// {
//     console.log(2**i)
// }


// let val; let index=0;
// do{
// val= inputs[index] ;index++;
// sum= sum+val;
// }while (val!=0)


// let inputs = [10, 20,0, 30, 0] 
// let sum =0; 
//     for(let a of inputs)
//     {
//         if(a==0) break;
//        sum= sum+a
//     }
//         console.log(sum)




       let str= "aaasha" ; let vowels ="aeiouAEIOU"; let count =0;
       for(c of str)
       {
        if(vowels.includes(c)) {count++; console.log(c)}
       }
console.log("count of vowels in "+str + " is : "+count)

let word ="hello" ; let rev = '';
for(let ch of word)
{
    rev = ch + rev ;
}
console.log(rev)

for(let i=1;i<=30; i++)
{
    if(i%3===0 && i%5===0) console.log(i+" fizzbuzz");
    else if(i%3===0) console.log(i+" fizz");
    else if(i%5===0) console.log(i+" buzz");
    else console.log(i);
}

function isPrime(n)
{
if(n<2) return false;
if(n===2) return true;
if(n%2===0) return false
if(n>2)
{
    for(let i=3; i<= Math.sqrt(n);i+=2)
    {
        if(n%i===0) return false;
        
    }
    return true;
}
}
console.log(isPrime(0));
console.log(isPrime(-1));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));

