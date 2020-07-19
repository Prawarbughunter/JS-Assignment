for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
    {
        console.log(`${i}: FizzBuzz`);
    }
    else if(i%3==0)
    {
        console.log(`${i}: FIzz`);
    }
    else if(i%5==0)
    {
        console.log(`${i}: Buzz`);
    }
   
    // else
    // {
    //     console.log(`${i}: your number is not mulitple of 3 0r 5`);
    // }
}