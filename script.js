// Variables for buttons

const startStopBtn = document.querySelector('#startbutton');
const resetBtn = document.querySelector('#RestButton');

//variables for time vaues

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variable for set Interval and timerstatus
let timeInterval = null;
let timerStatus = "stopped"

//stopWatch Function

function stopWatch() {
    seconds++;
    if(seconds/60==1){
        seconds =0;
        minutes++;
   
    if(minutes/60==1){
        hours++;
        minutes=0;
    }
 }
 if(seconds<10){
    leadingSeconds = "0"+ seconds.toString()
 } else leadingSeconds = seconds
 if(minutes<10){
    leadingMinutes ="0" + minutes.toString()
 } else leadingMinutes = minutes
 if(hours<10){
 leadingHours ="0" + hours.toString()
} else leadingHours = hours;

document.getElementById("timer").innerHTML = leadingHours + ":" +leadingMinutes + ":" + leadingSeconds;
}

//Adding event listeners to the buttons
startStopBtn.addEventListener('click', function(){
  if(timerStatus ==='stopped'){
    timeInterval = window.setInterval(stopWatch,1000);
    document.getElementById('startbutton').innerHTML = `<i class = "fa-solid fa-pause" id ="pause"></i>`;
    timerStatus = "started";
  }
  else {
    window.clearInterval(timeInterval);
    document.getElementById('startbutton').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
  }
});
0
resetBtn.addEventListener('click',function(){
    // window.location.reload();
    window.clearInterval(timeInterval)
    seconds =0;
    minutes=0;
    hours= 0;
    document.getElementById('timer').innerText = "00:00:00"
});
