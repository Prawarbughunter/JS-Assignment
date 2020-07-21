// let a = prompt("enter a number with space");
// console.log(a);

// // let arr = a.split(" ");
// // console.log(arr);

// let arr = Array.from(a.split(" "));
// console.log(arr);

// let odd = arr.filter(e1=>e1%2!==0);
// console.log(`Odd numbers :  ${odd}`);

// let cube = odd.map(e2=>e2**3);
// console.log(`Cube of odd numbers : ${cube}`);

n = parseInt(prompt("Please enter a positive number"));
let arr = [];
   for (let i = 1; i <= n; i++) {
         arr.push(i);
    }
    console.log(arr);
   let arr1 = arr.filter((n)=>n%2!==0).map((n)=>n**3)
   console.log(arr1);