console.log("1. Write a program to print all keys of an object using for..in.");
   
//    Sample Input:
//    { name: "Rahul", age: 25, city: "Bangalore" }
   
//    Expected Output:
//    name
//    age
//    city

 let empDetail =
   { name: "Rahul", 
    age: 25, 
    city: "Bangalore" }
  
for(let key in empDetail)
{
    console.log(key)
}
console.log("2. Write a program to print all values of an object using for...in.")
//      Sample Input:
//    { name: "Rahul", age: 25, city: "Bangalore" }
   
//    Expected Output:
//    Rahul
//    25
//    Bangalore

for(let key in empDetail)
{
    console.log(empDetail[key])
}


console.log(`3. Write a program to print both keys and values of an object using "for...in".`)
   
//    Sample Input:
//     { name: "Rahul", age: 25, city: "Bangalore" }
   
//    Expected Output:
//    name : Rahul
//    age : 25
//    city : Bangalore
for(let key in empDetail)
{
      console.log(key+ " : "+empDetail[key])
}

console.log(`4. Write a program to calculate the sum of all numeric values in an object using "for...in".`)
    
//    Sample Input:
//    { math: 80, science: 75, english: 90 }
   
//    Expected Output:
//    Sum = 245

let obj=  { math: 80, science: 75, english: 90 }
let sumOfNum=0;
for(let key in obj)
{
    if(typeof obj[key]==='number')
        sumOfNum+=obj[key];
}
console.log("Sum = "+ sumOfNum)
   
// 
console.log(`5. Write a program to count the number of properties in an object using "for...in".`)
    //  Sample Input:
//    { name: "Rahul", age: 25, city: "Bangalore", role: "Tester" }
   
//    Expected Output:
//    Number of properties = 4
let danvit  =   { name: "Rahul", age: 25, city: "Bangalore", role: "Tester" }
let propertiesCount = 0;
for(let key in danvit)
{
    propertiesCount++;
}
console.log("Number of properties = "+ propertiesCount) 


console.log(`6. Write a program to find the highest value in an object using "for...in".`)
  
//    Sample Input:
//    { math: 80, science: 95, english: 75, computer: 90 }
   
//    Expected Output:
//    Highest value = 95
let marks = { math: 80, science: 95, english: 75, computer: 90 }
    let highestVal =marks.math;
    for(let key in marks)
    {
if(marks[key]>highestVal)
    highestVal=marks[key] ;
    }
    console.log("Highest value = "+ highestVal)

console.log(`7. Write a program to find all properties whose values are greater than 50 using "for...in".`) 
//       Sample Input:
//    { math: 80, science: 45, english: 65, history: 30 }
   
//    Expected Output:
//    math : 80
//    english : 65

let score = { math: 80, science: 45, english: 65, history: 30 }
for(let key in score)  
{
if(score[key]>50) console.log(key+ " : "+score[key])
}
   

console.log(`8. Write a program to check whether a particular property exists in an object using "for...in".`)
   
//    Sample Input:
//    Object: { name: "Rahul", age: 25, city: "Bangalore" }
//    Property to search: age
   
//    Expected Output:
//    Property exists
 let bio = { name: "Rahul", age: 25, city: "Bangalore" }
 let propertyFound = false;
 for(let key in bio)
 {
    if(key==="age") 
        {
        propertyFound= true; 
        break;
    }
}
if(propertyFound)   console.log("Property exists") 
else console.log("Property doesnot exists")     
 
   
