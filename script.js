const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const display = document.getElementById("display");
const typeInput = document.getElementById("typeInput");

let countdown;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);  //get minutes
    const secs = seconds % 60 ;   //get remaining seconds
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;  //format minutes and seconds
}

start.addEventListener("click", function () {  //when click start
    const time = parseInt(typeInput.value);   //take input and convert to number

    if(isNaN(time) || time <=0) {  //check the input
        alert("Please enter a valid number of seconds."); //alert when not valid
        return;
    }

    clearInterval(countdown);  //clear any countdown, stop the privious
    let remainingTime = time;  //set starting time
    display.innerText = formatTime(remainingTime); //show starting time

    countdown = setInterval(() => {
        remainingTime--;   //decrease by 1 second
        display.innerText = formatTime(remainingTime); //update the display

        if (remainingTime <= 0) {
            clearInterval(countdown);  //stop when time is up
            display.innerText = "Time's up!";  //show this message
        }
    }, 1000);  //run every 1 second
});

//reset countdown
reset.addEventListener("click", function() {  //when click reset
    clearInterval(countdown);   //stop the countdown
    display.innerText = "00:00"; //reset
    timeInput.valeu = "";  //clear the input
});

pause.addEventListener("click", function () {
    clearInterval(countdown); 

});