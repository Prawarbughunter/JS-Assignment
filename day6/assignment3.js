const name = prompt("Enter your name");

title.innerText += `Welcome ${name}`;

//clock
const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);


// darkmode
const darkmode = document.getElementById('dark');

darkmode.onclick = function changeColor(){
    
   document.body.classList.toggle('black');
   document.body.classList.toggle('white');
   
}



