// JavaScript Assignment: Classes and Objects

// 1. Create a Student class and an Employee class using constructors, fields/properties/variables, and methods.
class student{
    id;
    name;
    dept;
    constructor(id,name,dept)
    {
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
    display()
    {
        console.log(
            "Name: " + this.name+ "\n" +
            "id: " +this.id+ "\n" +
            "dept: "+this.dept+ "\n"
        )
    }

}

class Employee{
    id;
    name;
    dept;
    constructor(id,name,dept)
    {
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
    display()
    {
        console.log(
            "Name: " + this.name+ "\n" +
            "id: " +this.id+ "\n" +
            "dept: "+this.dept+ "\n"
        )
    }

}

// 2. Create 3 student objects and 3 employee objects using the respective classes.
let st1 = new student(10,"asha", "a");
let st2 = new student(20,"usha", "b");
let st3 = new student(30,"thrsha", "c");

let emp1 = new Employee(10,"asha", "a");
let emp2 = new Employee(20,"usha", "b");
let emp3 = new Employee(30,"thrsha", "c");


// 3. Access and display the variables/properties and methods of all six objects.
console.log(st1.id)
console.log(st1.name)
console.log(st1.dept)

console.log(st2.id)
console.log(st2.name)
console.log(st2.dept)

console.log(st3.id)
console.log(st3.name)
console.log(st3.dept)

st1.display();
st2.display();
st3.display();

console.log(emp1.id)
console.log(emp2.name)
console.log(emp3.dept)

emp1.display();
emp2.display();
emp3.display();
