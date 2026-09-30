// function checkEvenOdd(n)
// {
//     let res = (n%2===0)? "Even" : "odd"
// console.log(res+" : "+n)
// }

// checkEvenOdd(2)
// checkEvenOdd(500)


// let rev = '';
// function reverseString(str)
// {
//     for(let c of str)
//     {
//         rev = c+rev;
//     }
//     console.log(rev)
// }
// reverseString("manasa")

// function findLargest(arr)
// {
//     let largest = arr[0];
//     for(let a of arr)
//     {
//         if(a>largest) largest = a;
//     }
//     return largest;
// }

// console.log(findLargest([10,20,50,30]))
// console.log(findLargest([10, -10, -50]))

// //console.log(countVowels("shwetha")); arrow function not hoisted

// const countVowels = (str) => {
//      let vowels="AEIOUaeiou"; let count =0;
//     for(let c of str)
//     {
//         if(vowels.includes(c)) count++ ;
//     }
// return count;

// }

// console.log(countVowels("monika"));
// console.log(countVowels("aaaaaaaaaaaaaaaaaaaaaaaaaaaa"));


function add(a,b)
{
    return a*b;
}
console.log(add(1,3))

const sum= (a,b) => a+b

console.log(sum(5,10))



function login(username, password) {
  console.log("Enter username: " + username);
  console.log("Enter password: " + password);
  console.log("Click login");
}

login("standard_user", "secret_sauce");
