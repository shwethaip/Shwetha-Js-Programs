const { freemem } = require("node:os")

// Create a Map containing three students and their marks.
const studentData = new Map() 
studentData.set('asha',10).set('usha',20).set('trisha',33)
console.log(studentData)
console.log([...studentData])

// Update one student’s marks and remove another student.
studentData.set('asha',100).delete('trisha')
console.log([...studentData])

// Count character occurrences in "javascript" using a Map.
let str = "javascript";
let count = new Map()
for(let c of str)
{
    count.set(c,(count.get(c)||0 )+1)
}
//count.forEach((value,key)=>{if(value>1) console.log(key +": "+ value)})
for(let [key,value] of count)
{
    if(value>1) console.log(key+" : "+ value)
}

// Find the first non-repeating character in "swiss" using a Map.
let swiss ="swiss"
let frequency = new Map()
for(let s of swiss)
{
    frequency.set(s, (frequency.get(s)||0) +1) 
}
console.log(frequency)
for(let [key,value] of frequency)
{
if(value===1) 
{
    console.log(key +": "+ value);
    break;
}
}

// Remove duplicates from [5, 10, 5, 20, 10] using a Set.

console.log([...new Set([5, 10, 5, 20, 10])])

// Count unique browsers in ["Chrome", "Firefox", "Chrome", "Safari"].
let browserset = new Set(["Chrome", "Firefox", "Chrome", "Safari"])
console.log(browserset.size)

// Find common numbers between [1, 2, 3] and [3, 4, 5] using a Set.
let arr1=  [1, 2, 3]
let set1= new Set([1, 2, 3]);
let arr2= [3, 4, 5]
let set2= new Set([3, 4, 5]);
let common = arr2.filter(a=>set1.has(a))
console.log(common)

// Find values in [1, 2, 3] that are absent from [3, 4, 5]
let diff = arr1.filter(a=>!set2.has(a))
console.log(diff)