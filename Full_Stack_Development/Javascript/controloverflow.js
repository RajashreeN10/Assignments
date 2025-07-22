//Categorize the grades based on the marks
//90-100 => A+
//80-89 => A
//70-79 => B+   
//60-69 => B
//50-59 => C+
//40-49 => C
//0-39 => F

let x=80
if(x>=90)
{
    console.log("A+")
}
else if(x>=80 && x<=89)
    {
    console.log("A")
}
else if(x>=70 && x<=79)
{
    console.log("B+")
}
else if(x>=60 && x<=69)
{
    console.log("B")
}
else if(x>=50 && x<=59)
{
    console.log("c+")
}
else if(x>=40 && x<=49)
{
    console.log("C")
}
else{
    console.log("F")
}

//Homework for switch case
//Write a program to check the day of the week using switch case
let day="Saturday"
switch (day) {
    case "Monday":
        console.log("This is Monday");
        break;
    case "Tuesday":
        console.log("This is Tuesday")
        break
    case "Wednesday":
        console.log("This is Wednesday")
        break
    case "Thursday":
        console.log("This is Thursday")
        break
    case "Friday":
        console.log("This is Friday")
        break
    case "Saturday":
        console.log("This is Saturday")
        break
    case "Sunday":
        console.log("This is Sunday")
        break
    default:
        console.log("Please enter the correct spelling")
        break
}

let month= "February"

switch (month){
    case "January":
        console.log("Month is January")
        break
    case "February":
        console.log("Month is February")
        break
    case "March":
        console.log("Month is March")
        break
    case "April":
        console.log("Month is April")
        break
    case "May":
        console.log("Month is May")
        break
    case "June":
        console.log("Month is June")
        break
    case "July":
        console.log("Month is July")
        break
    case "August":
        console.log("Month is August")
        break
    case "September":
        console.log("Month is September")
        break
    case "October":
        console.log("Month is October")
        break
    case "November":
        console.log("Month is November")
        break
    case "December":
        console.log("Month is December")
        break
}

//homework for ternary operator
//Write a program to check if a number is positive or negative using ternary operator
//Ternary Operator ? :
//syntax
//condition ?expressionIf True : expressionIf False
let num=-2
let positivenumber=(num>0)? "Number is positive number":"Number is negative number";
console.log(positivenumber)

let b=20
let number=(b%2==0)?"Number is Even Number":"Number is odd number";
console.log(number)
