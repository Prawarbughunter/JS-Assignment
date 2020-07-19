let number = prompt("Enter two numbers with space")
let n = number.split(" ")
let num1 = +n[0];
let num2 = +n[1];

let op = +prompt("Select The Operation you want to do:\n 1.addition\n 2.Subtraction\n 3.Multiplication\n 4.Division\n 5.Square root\n 6.Percentage");
console.log("Number 1:",num1)
console.log("Number 2:",num2)
switch(op){

    case 1:
        var result= num1 + num2;
        console.log("Addition:",result);
        break;

    case 2:
        result= num1 - num2;
        console.log("Subtraction:",result);
        break;

    case 3:
        result= num1 * num2;
        console.log("Multiplication:",result);
        break;

    case 4:
        result= num1 / num2;
        console.log("Division:",result);
        break;
    case 5:
        result= Math.sqrt(num1);
        console.log("Square root:",result);
        break;
    case 6:
        result= (num1/num2)*100;
        console.log("Percentage:",result);
        break;
    default:
        console.log(`you have select wrong choice\n Please Select between 1-6`);

}