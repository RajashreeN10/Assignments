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
