let hours = document.getElementById("hours");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("seconds");

var hour = 0;
var min = 0;
var sec = 0;

var intervalS, intervalM, intervalH;

function startTimer() {
    clearInterval(intervalS);
    clearInterval(intervalM);
    clearInterval(intervalH);

    intervalS = setInterval(() => {
        seconds.innerHTML = formatNumber(sec);

        if (sec < 59) {
            sec += 1;
        } else {
            sec = 0;
            startMinutes();
        }
    }, 1000);
}

function startMinutes() {
    intervalM = setInterval(() => {
        minutes.innerHTML = formatNumber(min);

        if (sec < 59) {
            // Only increase minutes if seconds haven't reached 60
            min += 1;
        } else {
            min = 0;
            startHours();
        }
    }, 60000); // 60 seconds * 1000 milliseconds
}

function startHours() {
    intervalH = setInterval(() => {
        hours.innerHTML = formatNumber(hour);

        if (hour < 24) {
            hour += 1;
        } else {
            hour = 0;
        }
    }, 3600000); // 60 minutes * 60 seconds * 1000 milliseconds
}

function stoptimer() {
    clearInterval(intervalS);
    clearInterval(intervalM);
    clearInterval(intervalH);
}

function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}
