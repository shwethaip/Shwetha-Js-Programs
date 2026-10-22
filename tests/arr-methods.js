
//mutate array functions- push, pop, unshift, shift, splice, sort and reverse
//non mutate/safe functions- map,filter,reduce,slice,concat

// 1. Add element to array
let arr =[1, 2, 30, 5]
arr.push(20)
console.log(arr)

// 2. Remove element from array
console.log(arr.pop())

// 3. Reverse array
console.log(arr.reverse())
console.log([1,5,2].toString())
console.log([1,5,2].join())
// 4. Find largest number
arr =[1, 2, 30, 5]
let max= Math.max(...arr)
//let max= Math.max(1, 2, 30, 5)
console.log(max)

// 5. Filter even numbers
let evenArr = arr.filter(a=>a%2===0)
console.log(evenArr)

// 6. Count duplicates
arr= [1,2,2,2,3,3, 4]
let count={}
arr.forEach(a=>{ count[a]=(count[a]||0) +1 })
console.log(count)
let duplicate=[]
for(a in count)
{
    if(count[a]>1) duplicate.push(a)
}
console.log(duplicate)

// 7. Sum array using reduce
arr= [1,2,3]
let sum = arr.reduce((a,b)=>a+b,0)
console.log(sum)

// 8. Sort numbers correctly
arr= [1,5,2,2,5,3, 4]
arr.sort((a,b)=>a-b)
console.log(arr)

// 9. Remove duplicates
let un =[...new Set(arr)]
console.log(un)

// 10. Flatten nested arrays
arr = [10,20,[30,40], 50]
console.log(arr.flat())

console.log(Array.of(1, 2, 3));  // → [1, 2, 3]
console.log(Array.of(7));        // → [7]  (not [empty x 7])
console.log(Array(7)); 


const numbers = [10, 25, 30, 45];

//let result =numbers.filter(a=>a%2===0)
let result =numbers.map(a=>a*2)
console.log(result)
console.log(numbers.findIndex(n => n > 20));