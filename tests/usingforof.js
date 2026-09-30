// 1.Write a program to print all elements of an array using 
console.log(" 1.Write a program to print all elements of an array using for...of.")

let fruits = ["apple", "banana", "grapes", "kiwi", "muskmeilon"]
for (let a of fruits)
{
    console.log(a)
} 

console.log(" 2.Write a program to print all numbers from an array using for...of.")
let arr = [10, 20, 24, 35, 86, 91]
for (let a of arr)
{
    console.log(a)
}

console.log("3.Write a program to find the sum of all numbers in an array using for...of.")
let sumOfArrNum =0
for (let a of arr)
{
    sumOfArrNum= sumOfArrNum + a
   
}
console.log("sum of all numbers in the array is: "+sumOfArrNum)

console.log("4.Write a program to find all even numbers in an array using for...of.")
for( let a of arr)
{
    if(a%2==0) console.log(a)
}
console.log("5.Write a program to find all odd numbers in an array using for...of.")
for(let a of arr)
{
    if(a%2!==0) console.log(a)
}

console.log("6.Write a program to find the largest number in an array using for...of.")
let largestNumOfArr = arr[0];
for(let a of arr)
{
    if( a > largestNumOfArr)
        largestNumOfArr =a
  
}
console.log(`largest number in an array is : ${largestNumOfArr}`)

console.log("7.Write a program to count the number of vowels in a string using for...of.")
let str = "shwetha"
let VowelsCount=0
for(let c of str)
{
    if(c=='A' ||c=='a' ||c=='E' ||c=='e' ||c=='I' ||c=='i' ||c=='O' ||c=='o' ||c=='U' ||c=='u')
        VowelsCount++
}
console.log("count of vowels in the string is : "+ VowelsCount)

console.log("8.Write a program to reverse a string using for...of.")

let rev ="";
for(let c of str)
{

   rev = c + rev
}
console.log("reversed string is: " +rev)