// 11. Clean Special Characters from Text
// Problem
// System returns text with unwanted symbols.
 let text4 = "Order###Placed###Successfully";
 let cleanedtext = text4.replaceAll("###", " ")

console.log(cleanedtext)
// 12. Generate Employee ID
// Problem
// Employee ID should always be 5 digits.
let empId = "44";
console.log(empId.padStart(5, '0'))
// 13. Format Report Text
// Problem
// Align product name in console report.
let product = "Laptop";
console.log(product.padEnd(20, "*"));
// 14. Extract First Character from Name
// Problem
// Show first letter in user profile icon.
let username = "Priyanka";
console.log(username.charAt(0))
// 5. Create Full Name
// Problem
// Combine first name and last name.
let firstName = "QA";
let lastName = "Masters";
console.log(firstName+" "+lastName)
console.log(firstName.concat(" ", lastName));

// 16. Extract Error Code from Log
// Problem
// Get error number from log message.
let log = "Payment failed with 200 error code 500";
console.log(log.slice(-3))
let errCode= log.match(/\d+/g)
console.log(errCode[0]);

// 17. Validate Email Has @ Symbol
// Problem
// Check if email format contains @.
let email = "test@gmail.com";
if(email.includes("@"))
    console.log("email has @")
else console.log("invalid email")

// 18. Extract File Name from Path
// Problem
// Get file name from full file path.
let filePath = "C:/Users/Admin/Documents/report.pdf"
let fileName = filePath.split("/")
console.log(fileName[fileName.length-1])
// 19. Count Words in Sentence
// Problem
// Count number of words in user input.
let sentence = "JavaScript is very easy";
console.log(sentence.split(" ").length)
// 20. Reverse Each Word
// Problem
// Reverse every word in a sentence.
sentence = "JavaScript is powerful";

sentArray = sentence.split(" ").reverse().join(" ") //reverse words of string
chararr =sentence.split("").reverse().join("") //reverse letters of string
console.log(sentArray)
console.log(chararr)
// let rev =""
// for(let a of sentArray)
// {
//     rev = a+" " +rev
// }
// console.log(rev)


let name = "  priyanka  ";
let gmail = "  PRIYANKA@GMAIL.COM ";
let mobile = "9876543210";
let password = "Test@123";

console.log(name.trim()) 
if(name.trim()>=3) console.log("valid name ")

console.log(gmail.trim().toLowerCase())
if(gmail.trim().toLowerCase().endsWith('@gmail.com')) console.log("valid gmail")
if(mobile.length===10) console.log("valid mob num")
if(password.length>=8) console.log("valid PASSWORD ")

//Validate URL Contains Product ID
    let url = "https://amazon.com/product/12345";

    if (url.includes(12345)) console.log("pid present")
