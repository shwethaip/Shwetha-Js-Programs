
//named import
// import { sum,sub }  from "./export.js"
// console.log(cal.sum(2,3));
// console.log(cal.sub(2,3));

//named import with alias
import { sum as add,sub as diff} from "./export.js"
console.log(add(2,3));
console.log(diff(2,3));

// import all with alias
// import *  as cal from "./export.js"
// console.log(cal.sum(2,3));
// console.log(cal.sub(2,3));