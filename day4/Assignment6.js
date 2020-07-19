var num=prompt("Enter the number greater than 100");

// for(i=1;i<100;i++){
//     if(num>100 || num==' ' || num==null){
//         console.log(`you have enter ${num} number`)
//     }
//     else if(num<100)
//     {
//         num=prompt("Enter number again");
//     }
//     else{
//          console.log("enter the valid input");
//     }
// }

function checknum(){
    for(var i=1;i<100;i++){
        (num>100 || num==' ' || num==null) ? console.log(`you have enter ${num} number`):
        (num<100) ? num=prompt("Enter number again"):
        console.log("enter the valid input");
        }
        
    
    
}


checknum();