// Count occurances of each character in a string using map 
let str ="javapava";
let count =new Map();
for(let char of str)
{
count.set(char,(count.get(char)||0) +1)
}
for(let [key,value] of count)
{
    console.log(key+" : "+value)
}
// Count word occuracnes in a sentence using map 
let sent = "hello world hello java hellow javascript"
let sentarr= sent.split(" ")
let map2= new Map();
for(let a of sentarr)
{
map2.set(a, (map2.get(a)||0)+1)
}
map2.forEach((value,key)=> console.log(key+" : "+value) )
// Find first non-repeated character using map 
for(let [key,value] of count)
{
    if(value===1)
    {
 console.log(key+" : "+value);
 break;
    }
   
}


// Find first duplcate character using map
for(let [key,value] of count)
{
    if(value>1)
    {
        console.log(key+" : "+value)
        break;
    }
}
// Find unique characters in a string using map 
{
let str ="jaaaava" 
let map1 = new Map();
let unique= [];
for(let a of str)
{
map1.set(a,(map1.get(a)||0)+1)
}
for(let [key,value] of map1)
{   if(value===1)  unique.push(key)

}
console.log(unique.join(""))
}
// let str = "aadfdf"
// let unique =[...new Set(str)].join()
// console.log(unique)


// Remove all duplicates from an array using set 
let arr = [10, 10, 20, 10, 30]
let dupremoved =[...new Set(arr)]
console.log(dupremoved)


// Print only duplicates from an array using set
{
let arr = [10, 10, 20, 10, 20,30]
let duplicate =[]
let count =new Map()
for(let a of arr)
{
    count.set(a,(count.get(a)||0) +1);
}
for(let [key,value] of count)
{
    if(value>1)
    duplicate.push(key)
}
console.log(duplicate)
}