    // var myVar;
    //   var timer = document.getElementById("userInput");
    //   //var timer = 0
    //   var countDownSeconds;
    //   function startTime(){ 
    //     myVar = setInterval(start, 1000);
    //     document.getElementById("timerr").innerHTML = timer.value;
    //     countDownSeconds = timer.value;
    //   } 

    //   function start(){
    //     countDownSeconds--;
    //     document.getElementById("timerr").innerHTML = countDownSeconds;
    //     if (countDownSeconds == -1){
    //       stop();
    //       document.getElementById("timerr").innerHTML = "0";  
    //     }
    //   }

    //   function stop(){
    //     clearInterval(myVar);
    //   }



    var h2 = document.getElementsByTagName('h2')[0],
    starts = document.getElementById('starts'),
    stops = document.getElementById('stops'),
    clears = document.getElementById('clears'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();

/* Start button */
starts.onclick = timer;

/* Stop button */
stops.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clears.onclick = function() {
    h2.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}