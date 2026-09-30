// Assignment for 23rd sep:  By using while:
console.log("1. Print numbers from 20 to 30" )
let num=20;
while(num<=30)
{
 console.log(num)
 num++
}

console.log("2. Print numbers from 1 to 10 in reverse (example - 10 9 8..)" )
let num1=10
while(num1>=1)
    
{
 console.log(num1)
 num1--
}

console.log("3. Find sum of first 5 numbers" )
let sum=0;
let num3=1
while(num3<=5)
{
    sum=sum+num3
    num3++
}
console.log(sum)

console.log("4. print odd numbers from 1 to 20" )
let odd=1;
while(odd<=20)
{
console.log(odd)
odd+=2
}

console.log("4. find sum of even numbers from 1 to 10" )
let sumofeven=0;
let even=2
while(even<=10)
{
   
    sumofeven=sumofeven+even
    even=even+2
}
console.log(sumofeven)

console.log("5. print 1 to 50 by skipping 10 multiples (it should not print 10,20,30,40 and 50)")
let num5=1;
while(num5<=50)
{
    if(num5%10 == 0) {
        num5++;
        continue;
    }
    console.log(num5)
    num5++
}
