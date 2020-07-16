var m = +prompt("Enter Yor marks");

//using Conditional Statement
console.log("Using If-Else statement")
if(m>=70)
{
console.log(`Marks are ${m} and Grade is A`);
}
else if(m>=50 && m<70)
{
    console.log(`Marks are ${m} and Grade is B`)

}
else if(m>=35&&m<45)
{
    console.log(`Marks are ${m} and Grade is C`);

}
else
{
    console.log(`Marks are ${m} and You are Fail`)

}

//using switch
console.log("Using switch statement")
switch(m){
    case 100:
        console.log(`Marks are ${m} and Grade is A`);
        break;
    case 50:
        console.log(`Marks are ${m} and Grade is B`);
        break;
    default:
        console.log(`Enter wrong`);    
}

//using ternary
console.log("Using  Ternary")
var num = (m>=70)?`Marks are ${m} and Grade is A`:
            (m>=50&&m<70)?`Marks are ${m} and Grade is B`:
            (m>=35&&m<50)?`Marks are ${m} and Grade is C`:'yor are fail';
console.log(num);