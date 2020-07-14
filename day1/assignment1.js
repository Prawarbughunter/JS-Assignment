//timer start
console.time()
var a= "Prathamesh"
//shows the output to the console
console.log(a);
//shows the error message in console
console.error("error");
//shows the warning in console
console.warn("warning");
//stop time that started with console.time()
console.timeEnd();
//display tabular data
var a =[name="prathamesh",age="23",city="mumbai"];
var b =[name="pooja",age="23",city="mumbai"];
console.table({a,b});
//show sourcecode of page
console.log(document);
//write message to console
console.info("information");
//count
for(var i=1;i<10;i++)
{
    console.count("count");
}
//inline stylesheet using console
console.log('%c style sheet','color:blue');
