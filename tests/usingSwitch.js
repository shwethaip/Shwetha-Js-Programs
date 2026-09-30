let marks = 200;
switch(true)
{
    case  (marks<35) : console.log("fail"); break;
    case  (35<=marks && marks<50) : console.log("just pass"); break;
    case  (50<=marks&& marks<75) : console.log("pass"); break;
    case  (marks>=75 && marks<=100) : console.log("distinction"); break;
    default : console.log("invalid input"); 
  
}

let day = 30
switch(day)
{
    case 1 : console.log("MONDAY"); break;
    case 2 : console.log("TUESDAY"); break;
    case 3 : console.log("WEDNESDAY"); break;
    case 4 : console.log("THURSDAY"); break;
    case 5 : console.log("FRIDAY"); break;
    case 6 : console.log("SATURDAY"); break;
    case 7 : console.log("SUNDAY"); break;
    default : console.log("invaid day")
}

let month = 7;


switch (month) {
    case 12:
    case 1:
    case 2:  console.log('Winter'); break;
    case 3:
    case 4:
    case 5:  console.log('Spring'); break;
    case 6:
    case 7:
    case 8:  console.log('Summer'); break;
    case 9:
    case 10:
    case 11: console.log('Autumn'); break;
    default: console.log('Invalid month');
}

//////////////////////////
let a= 10 ; let b =20 ; let op = "**"
switch(op)
{
    case '+' : console.log(a+b); break; 
    case '-' : console.log(a-b); break;
    case '*' : console.log(a*b); break;
    case '/' : console.log(a/b); break;
    case '%' : console.log(a%b); break;
    default : console.log("invalid operator")
}

let x = 2;
switch (x) {
    case 1: console.log('One');
    case 2: console.log('Two');
    case 3: console.log('Three');
    default: console.log('Other');
}  //Two  Three  Other   (No break! Fall-through runs all remaining cases.)

let num =25
console.log((num%2===0) ? 'even' : 'odd')


let score =25
console.log(score>=35 ? 'pass' : 'fail')

let name = 0;
console.log(name ?? "anonymus")
console.log(name || "anonymus")

