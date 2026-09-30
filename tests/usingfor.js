// Assignment for 23rd sep:  By using for:
console.log("1. Print numbers from 20 to 30" )
for(let num=20;num<=30;num++)
{
    console.log(num)
}

console.log("2. Print numbers from 1 to 10 in reverse (example - 10 9 8..)" )
for(let num=10;num>=1;num--)
{
    console.log(num)
}

console.log("3. Find sum of first 5 numbers" )
let sum=0
for(let num=1;num<=5;num++)
{
    sum=sum+num    
}
console.log(sum)

console.log("4. print odd numbers from 1 to 20" )
for(let num=1;num<=20;num+=2){
    console.log(num)
} 

console.log("4. find sum of even numbers from 1 to 10" )
let sumofeven=0
for(let num=2;num<=10;num+=2)
{
sumofeven=sumofeven+num;
}
console.log(sumofeven)

console.log("5. print 1 to 50 by skipping 10 multiples (it should not print 10,20,30,40 and 50)")
for(let num=1;num<=50;num++)
{
    if(num%10===0) continue;
    console.log(num)
}