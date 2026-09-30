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
console.log(typeof undefined);

function fib(n)
{
    let a=0; let b=1;
    console.log(a);
    console.log(b)
    
    for(let i=2;i<n;i++)
    {
        let temp = a+b;
        console.log(temp)
      
        a=b;
        b=temp;
    }
}

fib(8); 
//fib(10); 

console.log(0+"asha");
console.log("5" - 2);
console.log(10 == "10");
console.log(10 === "10");
console.log(undefined ?? "sh")
console.log(''|| "sh")
value=0
console.log(value ?? 1)
console.log("Hi" && "Bye");
console.log(0 || "Default");

let count = 0;

console.log(count && 10);
console.log(6 / 3 * 4);
console.log(1 + "2" + 3);

let x = 10;

 

if (x > 5) {

    console.log("A");

} else if (x > 8) {

    console.log("B");

} else {

    console.log("C");

}

let day = 3;

switch(day) {

    case 1: console.log("Monday"); break;

    case 2: console.log("Tuesday"); break;

    case 3: console.log("Wednesday"); break;

    default: console.log("Invalid");

}
