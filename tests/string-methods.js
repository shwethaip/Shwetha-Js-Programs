// //indexing string like arr
// let str="shwetha"
// console.log(str[0])

// //length of string
// let tool ="playwright"
// console.log(tool.length)
// console.log(tool[tool.length-1])   //print last chr of string using indexing
// //charAt string funtion

// console.log(tool.charAt(0))
// console.log(tool.charAt(tool.length-1))


//uppercase,lowercase , trim
// let text = "    Learn Playwright ";

// let uptext = text.toUpperCase()
// let lowtext = text.toLowerCase()
// let trimmed = text.trim()
// console.log(uptext,lowtext)
// console.log(trimmed)

// //includes //startswith //endswith ->returns boolean
// console.log(text.includes("play"))
// console.log("aeiou".includes("a"))

// console.log(text.startsWith(" "))
// console.log(trimmed.startsWith(" "))
// console.log(text.endsWith("t"))
// console.log(trimmed.endsWith("t"))

//substring( extracts substr form a str take 2 param - startindex(inclusive) and end index(exlusive and optional))
//if endindex is not given- returns till end of string
//if endidex is negative- changes it to 0,
//ifendidex > startindex, swaps them
//eg (2,-1)  -->endindex->-1->0 swapped (0,2) prints 0-1
//eg(2)  -- no endindex--> returns substring from strat index til End of string "learn playwright"->arn playwright

// console.log("learn playwright".substring(2))
console.log("learn playwright".slice(2))
let text ="shwetha   "
text = text.trim()
console.log(text)
console.log(text.repeat(5))

arr =[10,20]
console.log(arr.slice(1))
console.log(text+100)

let str = "JavaScript";

//let reversed = str.split("").reverse().join("");
let reversed = str.split("").reverse().join("")

console.log(reversed);

function isPalindrome(str)
{
    let rev =str.split("").reverse().join("");
    if(rev===str) return true;
    else return false
}

console.log(isPalindrome("madam"))
let st="shwetha"
let freq= {}
for(let c of st)
{
    if(freq[c])  { console.log(c)  }


}
console.log(freq)

console.log("*************************");

let good ="Little Kids"
console.log(good[0])
console.log(good.charAt(good.length-1))
console.log(good.includes("QA"));
console.log("playwright".toUpperCase())
console.log("  playwright".trim())

