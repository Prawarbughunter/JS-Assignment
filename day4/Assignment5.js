var sales = prompt("Enter the total sale");

if(sales>=0 && sales<=5000){
    var comm=sales*0.02;
    console.log("Total commision earned by employee:",comm);
}
else if(sales>5000 && sales<=10000){
    var comm=(sales*0.02)+((sales-5000)*0.05);
    console.log("Total commision earned by employee:",comm);

}
else if(sales>10000 && sales<=20000){
    var comm=(sales*0.02)+(sales*0.05)+((sales-10000)*0.07);
    console.log("Total commision earned by employee:",comm);

}
else{
    var comm=(sales*0.02)+(sales*0.05)+(sales*0.07)+((sales-20000)*0.07);
    console.log("Total commision earned by employee:",comm);

}


