//Primitive datatypes in javascript
//1.String
var firstName="Robin";
var lastName="Disuja";
console.log("Name",lastName);

//2.Number
var age=30;
age=40;//reassigning the variable
console.log("Age",age);
console.log("Type of Age",typeof age);
var height=1.2;
height=3.4;
console.log("Height",height)
console.log("Type of Height",typeof height)

//boolean
var isStudent=true;
isStudent=false;
console.log("is Student",isStudent);
console.log("type of Student",typeof isStudent)

//undefined
var address;
console.log("Address",address)
console.log("Type of Address",typeof address)

//Null
var PhoneNumber=null;
console.log("Phone Number",PhoneNumber)
console.log("Phone Number",typeof PhoneNumber)

//Unique Id
var uniqueid=Symbol("id");
console.log("unique id",uniqueid);
console.log("type of unique id",typeof uniqueid)

//BigInt
var BigNumber=BigInt(1234567889);
console.log("Big Number",BigNumber)
console.log("Type of number", typeof BigNumber)

//Non PRimitive Data Types
//array,object,function,date,regex,map,set

//1.Object
var person={
    //key:value pairs
    firstName:"Ray",
    lastName:"Mathew",
    age:"22",
    isStudent:true,
}
console.log("Person Object",person)

//Array
const numbers=[1,2,3,4];
console.log(typeof numbers)

//Date
const date=new Date();
console.log("date",date);

//Map
const myMap=new Map();
myMap.set("name","ria");
myMap.set("age",22);
myMap.set(100,"one hundred");
myMap.set(true,"boolean key");
console.log(myMap.get(100) );
console.log(myMap.get(true));
console.log(myMap.get("age"));
console.log(myMap.get("name"));

//delete from the map
myMap.delete("name");
console.log(myMap.set("name","Kay"))
console.log(myMap.get("name"));

//functions
function nameofFunction(name){
    return"hello"+name;
}
console.log(nameofFunction(" Ray"));

//Operators
//Operators in javascript are the special symbols that can be used toperform operations and values and variables.
//types of Operators
//1.Arithmatic Operators
//2.Assignment Operators
//3.Comparison Operators
//4.Logical Operators
//5.Bitwise Operators
//6.Ternary Operators
//7.Type Operators

//1.Arithmatic Operators
//operation=operand1 operator operand2

//addition
let a=10;
let b=20;
let sum=a+b;
console.log("Sum=",sum);

let c="10";
let d="20";
let sum2=c+d;
console.log("Sum(string concatination)",sum2)

//substraction
let sub=a-b;
console.log("Substraction",sub)

//multiplication
let mul=a*b
console.log("Multiplication will be",mul)

//division
let div=a/b
console.log("Division ",div)

//modulus
let mod=a%b
console.log("Modulud is",mod)

//exponential
let expo=a**3
console.log("Cube of 10 is", expo)

//increment
let inc= a++
console.log("value after postincrement",inc)
console.log("inc",a)
let inc2=++a
console.log("value after preincrement",inc2)
console.log("value of a",a)

//decrement
let dec=b--;
console.log("value after postdecrement",dec)
console.log("dec", b)
let dec2=--b
console.log("value after predecrement",dec2)
console.log("dec2",b)