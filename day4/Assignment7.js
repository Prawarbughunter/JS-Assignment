var n = prompt("Enter a number to print the prime number between 0 to number you have entered");

console.log(`Prime Number between 0 - ${n} Are:\n`)
for (var i = 2; i <= n; i++) {
    var prime = true;
    for (var j = 2; j <= i; j++) {
       if (i%j===0 && j!==i) {
          prime = false;
       }
    }
    if (prime === true) {
       console.log("\n"+i);
    }
 }