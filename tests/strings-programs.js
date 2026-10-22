
console.log("Program 1: Reverse a String")
let str = "shwetha";
let rev ='';
for(let a of str)
{
rev=a+rev;
}
console.log(rev)
console.log("Program 2: Reverse a String Using Built-in Methods");
let rev2 = str.split("").reverse().join("");
console.log(rev2)

console.log("Program 3: Check Palindrome String")
function checkPalindrome(str2)
{let rev='';
    for(let a of str2)
    {
        
        rev=a+rev;
    }
    console.log(rev)
        console.log(str2)
    if(str2===rev) console.log("palindrome")
        else console.log("not a palindrome")
}
checkPalindrome("madam");
checkPalindrome("sharath");

console.log("Program 4: Count Vowels in a String")
let vowels='aeiouAEIOU';
let vowcount=0;
for(c of str)
{
    if(vowels.includes(c)) vowcount++;
}
console.log(vowcount)

console.log("Program 5: Count Each Character Frequency")
function countChar(str3)
{
    let frequency={};
    for(let char of str3)
    {
        frequency[char] =  (frequency[char]||0) + 1;

    }
console.log(frequency)
   for(let key in frequency)
   {
    console.log(`count of ${key} is ${frequency[key]}`)
   }
}
countChar("SHARATH")


console.log("Program 6: Find Duplicate Characters")
function findDuplicate(str4)
{
    let frequency={};
    for(let char of str4)
    {
        frequency[char] =  (frequency[char]||0) + 1;

    }
console.log(frequency)

   for(let key in frequency)
   {
    if(frequency[key]>1) console.log(`${key}`)  
}

}
findDuplicate("SHARATH")

console.log("Program 7: Remove Duplicate Characters")
function removeDuplicate(str5)
{
    let unique= "";
    for(let c of str5)
    {
       if(!unique.includes(c)) 
        unique = unique+c
    }
    console.log(unique)
}
removeDuplicate("sharath")

console.log("Program 8: Find First Non-Repeated Character")
let text ="ababacd";
let obj={};
for(let a of text)
{
obj[a] = (obj[a]||0) +1
}
console.log(obj)
for(let key in obj)
{
    if(obj[key]===1) 
        {
            console.log("first non repeated charector is "+ key);
            break;
        }
}

console.log("Program 9: Capitalize FIRST LETTER of Each Word");
let title = "Capitalize first Letter of Each Word"
let res="";
let words =title.split(" ");
for(let word of words)
{
    res= res + word[0].toUpperCase()+word.substring(1).toLowerCase()+" ";
}
console.log(res.trim())

console.log("Program 10: Count Words in a Sentence")
{
    let sentence = "I LOVE MY FAMILY"
    let WORDS = sentence.split(" ");
    console.log(WORDS)
    console.log("words in given sentence is "+ WORDS.length)
}
