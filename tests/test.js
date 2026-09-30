//regular function
function mirror(a,b)
{
    console.log("regular function "+a,b)
}
mirror(2,3)

//function with parameter and return function
print()
function print()
{
    console.log("function without param")
}

//function expression
const greet = function greetfunction() 
{
    console.log("welcome from function exp")
}
greet();


//arrow function

    // const greet2 = () => console.log("welcome from arrow function ");
    // greet2()

//iife
(function add(a,b)
{
    a=10;  b=20
    console.log(a+b);
})()


//anonymus function

const prod = function (a,b) {
console.log(a*b);
}
prod(2,3);
//default param
function wel(guest, callback)
{
    console.log("hello "+ guest);
    callback();
}

wel('shwetha',SayBye)

//callback function

function SayBye()
{
    console.log("GoodBye")
}
