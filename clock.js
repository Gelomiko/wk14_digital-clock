const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setClockFace(){
    //now constant var is not global only local to the variable
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes /60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours /60) * 360) + 90;
    hourhand.style.transform = `rotate(${hoursDegrees}deg)`;

    var time = padTwo(hours) + ":" + padTwo(minutes) + ":" + padTwo(seconds);
    const digitalClockFace = document.querySelector('.time');
    digitalClockFace.innerHTML = time;
}

function padTwo(number){
    return (number < 10 ? '0' : '') + number;
}
//1000 millisec is equal to 1 second
setInterval(setClockFace,1000)